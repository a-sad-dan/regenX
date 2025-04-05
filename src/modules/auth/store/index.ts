// src/modules/auth/store/index.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Todo - Make User Type
type User = {
  id: string;
  name: string;
  email: string;
} | null;

// Define the type for our auth store
type AuthStoreType = {
  isAuth: boolean;
  authUser: User;
  loaders: Record<string, boolean>;
  setIsAuth: (isAuth: boolean) => void;
  setAuthUser: (user: User) => void;
  startLoader: (loaderId: string) => void;
  stopLoader: (loaderId: string) => void;
};

export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      isAuth: false,
      authUser: null,
      loaders: { "auth/initial-load": true },

      setIsAuth: (isAuth: boolean) => set({ isAuth }),

      setAuthUser: (user: User) =>
        set({
          authUser: user,
          isAuth: !!user
        }),

      startLoader: (loaderId: string) =>
        set((state) => ({
          loaders: { ...state.loaders, [loaderId]: true }
        })),

      stopLoader: (loaderId: string) =>
        set((state) => ({
          loaders: { ...state.loaders, [loaderId]: false }
        })),
    }),
    {
      name: "auth-store",
      getStorage: () => localStorage,
    }
  )
);

export const AuthStore = useAuthStore;