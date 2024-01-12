import { create } from "zustand";

type Type = {
  lastPage: string;
  setLastPage: (page: number) => void;
};

export const useSetLastPageStore = create<Type>((set) => ({
  lastPage: "1",
  setLastPage: (page: number) => {
    const calculateTheLastPage = page - 1;
    const pageInString = calculateTheLastPage.toString();
    return set({ lastPage: pageInString });
  },
}));
