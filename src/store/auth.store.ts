import { create } from "zustand";
import { persist } from "zustand/middleware";
import { setTokens, clearTokens } from '@/lib/auth.tokens';

const API = "https://api.drucci.pt/api/v1";

// ============================================================
// TYPES
// ============================================================

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: "admin" | "manager" | "member";
  tenantId: string;
  onboardingComplete: boolean;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<void>;
  register: (data: {
    email: string;
    password: string;
    fullName: string;
  }) => Promise<void>;

  logout: () => void;
  setUser: (user: User) => void;
  completeOnboarding: () => void;
  refreshSession: () => Promise<void>;
}

// ============================================================
// STORE
// ============================================================

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isLoading: false,

      // ======================================================
      // LOGIN
      // ======================================================
      login: async (email, password) => {
        set({ isLoading: true });

        try {
          const res = await fetch(`${API}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(
              err.message || "Credenciais inválidas."
            );
          }

          const data = await res.json();

          const accessToken =
            data.tokens?.accessToken ||
            data.accessToken;

          const refreshToken =
            data.tokens?.refreshToken ||
            data.refreshToken;

          setTokens(accessToken, refreshToken);

          const meRes = await fetch(`${API}/me`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (!meRes.ok) {
            throw new Error(
              "Não foi possível carregar o utilizador."
            );
          }

          const me: User = await meRes.json();

          set({
            user: me,
            accessToken,
            refreshToken,
            isLoading: false,
          });
        } catch (err) {
          set({ isLoading: false });
          throw err;
        }
      },

      // ======================================================
      // REGISTER
      // ======================================================
      register: async (data) => {
        set({ isLoading: true });

        try {
          const res = await fetch(`${API}/auth/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(
              err.message ||
                "Não foi possível criar conta."
            );
          }

          const tokens = await res.json();

          const accessToken =
            tokens.tokens?.accessToken ||
            tokens.accessToken;

          const refreshToken =
            tokens.tokens?.refreshToken ||
            tokens.refreshToken;

          setTokens(accessToken, refreshToken);

          const meRes = await fetch(`${API}/me`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const me: User = await meRes.json();

          set({
            user: {
              ...me,
              onboardingComplete: false,
            },
            accessToken,
            refreshToken,
            isLoading: false,
          });
        } catch (err) {
          set({ isLoading: false });
          throw err;
        }
      },

      // ======================================================
      // LOGOUT
      // ======================================================
      logout: () => {
        const { refreshToken } = get();

        if (refreshToken) {
          fetch(`${API}/auth/logout`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken }),
          }).catch(() => {});
        }

        clearTokens();

        set({
          user: null,
          accessToken: null,
          refreshToken: null,
        });
      },

      // ======================================================
      // USER UPDATE
      // ======================================================
      setUser: (user) => set({ user }),

      completeOnboarding: () => {
        const { user } = get();

        if (!user) return;

        set({
          user: {
            ...user,
            onboardingComplete: true,
          },
        });
      },

      // ======================================================
      // REFRESH SESSION
      // ======================================================
      refreshSession: async () => {
        const { refreshToken } = get();

        if (!refreshToken) return;

        try {
          const res = await fetch(
            `${API}/auth/refresh`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                refreshToken,
              }),
            }
          );

          if (!res.ok) throw new Error();

          const data = await res.json();

          setTokens(
            data.accessToken,
            data.refreshToken
          );

          set({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          });
        } catch {
          get().logout();
        }
      },
    }),
    {
      name: "drucci-auth",

      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),

      onRehydrateStorage: () => (state) => {
        if (state?.accessToken && state?.refreshToken) {
          setTokens(
            state.accessToken,
            state.refreshToken
          );
        }
      },
    }
  )
);