import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserData = {
  email: string;
  token: string;
};

type UserStoreProps = {
  userData: UserData | null;
  setUser: (userData: UserData | null) => void;
  logout: () => void;
};

export const useAuthStore = create<UserStoreProps>()(
  persist(
    (set) => ({
      userData: null,

      setUser: (userData) =>
        set(() => ({
          userData,
        })),

      logout: () =>
        set(() => ({
          userData: null,
        })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
