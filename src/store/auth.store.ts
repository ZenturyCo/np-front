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
  twoFactorEnabled?: boolean;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<any>;
  loginWithTwoFactor: (email: string, password: string, code: string) => Promise<any>;
  verifyTwoFactor: (code: string) => Promise<any>;
  register: (data: { email: string; password: string; fullName: string }) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
  completeOnboarding: () => void;
  refreshSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isLoading: false,

      // ==================== LOGIN ====================
      login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          const data = await authApi.login({ email, password });

          // === NOVO: Backend pediu 2FA ===
          if (data.requireTwoFactor || data.twoFactorRequired) {
            set({ isLoading: false });
            return {
              requireTwoFactor: true,
              email,
              tempToken: data.tempToken || data.accessToken // caso o backend envie
            };
          }

          // Login normal (sem 2FA)
          const at = data.tokens?.accessToken || data.accessToken;
          const rt = data.tokens?.refreshToken || data.refreshToken;

          if (!at || !rt) throw new Error('Resposta de autenticação inválida.');

          setTokens(at, rt);
          const me = await authApi.me();

          set({
            user: { ...me, role: me.role || 'admin', onboardingComplete: true } as User,
            accessToken: at,
            refreshToken: rt,
            isLoading: false
          });

          return { success: true };
        } catch (err: any) {
          set({ isLoading: false });
          throw err;
        }
      },

      loginWithTwoFactor: async (email: string, password: string, code: string) => {
        set({ isLoading: true });
        try {
          const data = await authApi.login({ email, password, twoFactorCode: code });

          const at = data.tokens?.accessToken || data.accessToken;
          const rt = data.tokens?.refreshToken || data.refreshToken;

          if (!at || !rt) throw new Error('Falha ao obter tokens após 2FA.');

          setTokens(at, rt);
          const me = await authApi.me();

          set({
            user: { ...me, role: me.role || 'admin', onboardingComplete: true } as User,
            accessToken: at,
            refreshToken: rt,
            isLoading: false
          });

          return { success: true };
        } catch (err) {
          set({ isLoading: false });
          throw err;
        }
      },

      // ==================== VERIFY 2FA ====================
      verifyTwoFactor: async (code: string) => {
        set({ isLoading: true });
        try {
          const response = await authApi.verify2FA(code);
          if (response.twoFactorEnabled) {
            const currentUser = get().user;
            if (currentUser) set({ user: { ...currentUser, twoFactorEnabled: true } });
          }
          set({ isLoading: false });
          return response;
        } catch (err) {
          set({ isLoading: false });
          throw err;
        }
      },

      // ==================== REGISTER ====================
      register: async (data) => {
        set({ isLoading: true });
        try {
          const tokens = await authApi.register(data);
          const at = tokens.tokens?.accessToken || tokens.accessToken;
          const rt = tokens.tokens?.refreshToken || tokens.refreshToken;

          if (!at || !rt) throw new Error('Resposta de registo inválida.');

          setTokens(at, rt);
          const me = await authApi.me();

          set({
            user: { ...me, role: 'admin', onboardingComplete: false } as User,
            accessToken: at,
            refreshToken: rt,
            isLoading: false
          });
        } catch (err) {
          set({ isLoading: false });
          throw err;
        }
      },

      logout: () => {
        const { refreshToken } = get();
        if (refreshToken) authApi.logout(refreshToken).catch(() => {});
        clearTokens();
        set({ user: null, accessToken: null, refreshToken: null });
      },

      setUser: (user) => set({ user }),
      completeOnboarding: () => {
        const { user } = get();
        if (user) set({ user: { ...user, onboardingComplete: true } });
      },

      refreshSession: async () => {
        const { refreshToken } = get();
        if (!refreshToken) return;
        try {
          const data = await authApi.refresh(refreshToken);
          setTokens(data.accessToken, data.refreshToken);
          set({ accessToken: data.accessToken, refreshToken: data.refreshToken });
        } catch {
          get().logout();
        }
      },
    }),

    {
      name: 'ngola-auth',
      partialize: (s) => ({ accessToken: s.accessToken, refreshToken: s.refreshToken, user: s.user }),
      onRehydrateStorage: () => (state) => {
        if (state?.accessToken && state?.refreshToken) {
          setTokens(state.accessToken, state.refreshToken);
        }
      },
    }
  )
);
