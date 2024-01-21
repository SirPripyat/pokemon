import { create } from "zustand";

type ToggleFiltersPokemonModalStore = {
  isFiltersPokemonModalOpen: boolean;
  toggleFiltersPokemonModal: () => void;
};

export const useToggleFiltersPokemonModalStore =
  create<ToggleFiltersPokemonModalStore>((set) => ({
    isFiltersPokemonModalOpen: false,
    toggleFiltersPokemonModal: () =>
      set((state) => ({
        isFiltersPokemonModalOpen: !state.isFiltersPokemonModalOpen,
      })),
  }));
