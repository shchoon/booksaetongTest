import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

export type Containers = {
  root: string[];
  container1: string[];
  container2: string[];
};

export type Action = {
  setItems: (container: keyof Containers, items: string[]) => void;
};

export const useLikedBookStore = create<Containers & Action>()(
  persist<Containers & Action>(
    (set) => ({
      root: [],
      container1: [],
      container2: [],

      setItems: (container, items) => {
        set((state) => ({
          ...state,
          [container]: items,
        }));
      },
    }),
    {
      name: "likedBookStore",

      getStorage: () =>
        typeof window !== "undefined" ? window.localStorage : undefined,
    } as PersistOptions<Containers & Action>,
  ),
);
