import { PokemonsTypes } from "@/types/pokemonsTypes";
import { create } from "zustand";

type PokemonsTypesFilterStore = {
  pokemonsTypesFilter: PokemonsTypes[];
  pushPokemonsTypesFilter: (types: PokemonsTypes[]) => void;
  removePokemonsTypesFilter: (types: PokemonsTypes[]) => void;
  removeAllPokemons: () => void;
};

export const usePokemonsTypesFilterStore = create<PokemonsTypesFilterStore>(
  (set) => ({
    pokemonsTypesFilter: [],
    pushPokemonsTypesFilter: (types) =>
      set((state) => ({
        pokemonsTypesFilter: [...state.pokemonsTypesFilter, ...types],
      })),
    removePokemonsTypesFilter: (types) =>
      set((state) => ({
        pokemonsTypesFilter: state.pokemonsTypesFilter.filter(
          (type) => !types.includes(type)
        ),
      })),
    removeAllPokemons: () =>
      set((state) => ({
        pokemonsTypesFilter: [],
      })),
  })
);
