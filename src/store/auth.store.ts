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

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { email: string; password: string; fullName: string }) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
  completeOnboarding: () => void;
  refreshSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null, accessToken: null, refreshToken: null, isLoading: false,

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
