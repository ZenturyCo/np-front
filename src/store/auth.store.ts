import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authApi, setTokens, clearTokens } from '@/lib/api';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'admin' | 'manager' | 'member';
  tenantId: string;
  onboardingComplete: boolean;
}

interface RegistrationState {
  fullName: string;
  email: string;
  phone?: string;
  countryCode: string;
  emailOtp?: string;
  phoneOtp?: string;
  currentStep: number;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  registrationState: RegistrationState;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { email: string; password: string; fullName: string }) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
  completeOnboarding: () => void;
  refreshSession: () => Promise<void>;
  // New multi-step registration methods
  initializeRegistration: (fullName: string, email: string, phone?: string) => void;
  setRegistrationStep: (step: number) => void;
  updateRegistrationData: (data: Partial<RegistrationState>) => void;
  requestEmailOtp: (email: string) => Promise<void>;
  verifyEmailOtp: (email: string, otp: string) => Promise<void>;
  requestPhoneOtp: (phone: string) => Promise<void>;
  verifyPhoneOtp: (phone: string, otp: string) => Promise<void>;
  completeRegistration: (password: string) => Promise<void>;
  resetRegistration: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null, 
      accessToken: null, 
      refreshToken: null, 
      isLoading: false,
      registrationState: {
        fullName: '',
        email: '',
        phone: undefined,
        countryCode: '+55',
        currentStep: 1,
      },

      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const data = await authApi.login({ email, password });
          const at = data.tokens?.accessToken || data.accessToken;
          const rt = data.tokens?.refreshToken || data.refreshToken;
          if (!at || !rt) throw new Error('Resposta de autenticação inválida.');
          setTokens(at, rt);
          const me = await authApi.me();
          set({ user: { ...me, role: me.role || 'admin', onboardingComplete: true } as User, accessToken: at, refreshToken: rt, isLoading: false });
        } catch (err) { set({ isLoading: false }); throw err; }
      },

      register: async (data) => {
        set({ isLoading: true });
        try {
          const tokens = await authApi.register(data);
          const at = tokens.tokens?.accessToken || tokens.accessToken;
          const rt = tokens.tokens?.refreshToken || tokens.refreshToken;
          if (!at || !rt) throw new Error('Resposta de registo inválida.');
          setTokens(at, rt);
          const me = await authApi.me();
          set({ user: { ...me, role: 'admin', onboardingComplete: false } as User, accessToken: at, refreshToken: rt, isLoading: false });
        } catch (err) { set({ isLoading: false }); throw err; }
      },

      logout: () => {
        const { refreshToken } = get();
        if (refreshToken) authApi.logout(refreshToken).catch(() => {});
        clearTokens(); set({ user: null, accessToken: null, refreshToken: null });
      },

      setUser: (user) => set({ user }),
      completeOnboarding: () => { const { user } = get(); if (user) set({ user: { ...user, onboardingComplete: true } }); },

      refreshSession: async () => {
        const { refreshToken } = get();
        if (!refreshToken) return;
        try {
          const data = await authApi.refresh(refreshToken);
          setTokens(data.accessToken, data.refreshToken);
          set({ accessToken: data.accessToken, refreshToken: data.refreshToken });
        } catch { get().logout(); }
      },

      // Multi-step registration methods
      initializeRegistration: (fullName, email, phone) => {
        set((state) => ({
          registrationState: {
            ...state.registrationState,
            fullName,
            email,
            phone,
            currentStep: 1,
          },
        }));
      },

      setRegistrationStep: (step) => {
        set((state) => ({
          registrationState: {
            ...state.registrationState,
            currentStep: step,
          },
        }));
      },

      updateRegistrationData: (data) => {
        set((state) => ({
          registrationState: {
            ...state.registrationState,
            ...data,
          },
        }));
      },

      requestEmailOtp: async (email) => {
        set({ isLoading: true });
        try {
          await authApi.requestEmailOtp(email);
        } catch (err) {
          set({ isLoading: false });
          throw err;
        }
        set({ isLoading: false });
      },

      verifyEmailOtp: async (email, otp) => {
        set({ isLoading: true });
        try {
          await authApi.verifyEmailOtp(email, otp);
          set((state) => ({
            registrationState: {
              ...state.registrationState,
              emailOtp: otp,
            },
          }));
        } catch (err) {
          set({ isLoading: false });
          throw err;
        }
        set({ isLoading: false });
      },

      requestPhoneOtp: async (phone) => {
        set({ isLoading: true });
        try {
          await authApi.requestPhoneOtp(phone);
        } catch (err) {
          set({ isLoading: false });
          throw err;
        }
        set({ isLoading: false });
      },

      verifyPhoneOtp: async (phone, otp) => {
        set({ isLoading: true });
        try {
          await authApi.verifyPhoneOtp(phone, otp);
          set((state) => ({
            registrationState: {
              ...state.registrationState,
              phoneOtp: otp,
            },
          }));
        } catch (err) {
          set({ isLoading: false });
          throw err;
        }
        set({ isLoading: false });
      },

      completeRegistration: async (password) => {
        set({ isLoading: true });
        try {
          const { registrationState } = get();
          const data = {
            fullName: registrationState.fullName,
            email: registrationState.email,
            phone: registrationState.phone ? `${registrationState.countryCode}${registrationState.phone}` : undefined,
            password,
            emailOtp: registrationState.emailOtp,
            phoneOtp: registrationState.phoneOtp,
          };

          const tokens = await authApi.registerMultiStep(data);
          const at = tokens.tokens?.accessToken || tokens.accessToken;
          const rt = tokens.tokens?.refreshToken || tokens.refreshToken;
          if (!at || !rt) throw new Error('Resposta de registo inválida.');
          
          setTokens(at, rt);
          const me = await authApi.me();
          set({
            user: { ...me, role: 'admin', onboardingComplete: false } as User,
            accessToken: at,
            refreshToken: rt,
            isLoading: false,
            registrationState: {
              fullName: '',
              email: '',
              phone: undefined,
              countryCode: '+55',
              currentStep: 1,
            },
          });
        } catch (err) {
          set({ isLoading: false });
          throw err;
        }
      },

      resetRegistration: () => {
        set({
          registrationState: {
            fullName: '',
            email: '',
            phone: undefined,
            countryCode: '+55',
            currentStep: 1,
          },
        });
      },
    }),
    {
      name: 'ngola-auth',
      partialize: (s) => ({ accessToken: s.accessToken, refreshToken: s.refreshToken, user: s.user }),
      onRehydrateStorage: () => (state) => {
        if (state?.accessToken && state?.refreshToken) setTokens(state.accessToken, state.refreshToken);
      },
    }
  )
);
