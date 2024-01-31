import { PokemonsTypes } from "@/types/pokemonsTypes";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type PokemonsTypesFilterStore = {
  pokemonsTypesFilter: PokemonsTypes[];
  pushPokemonsTypesFilter: (types: PokemonsTypes[]) => void;
  removePokemonsTypesFilter: (types: PokemonsTypes[]) => void;
  removeAllPokemons: () => void;
};

export const usePokemonsTypesFilterStore = create<
  PokemonsTypesFilterStore,
  [["zustand/persist", PokemonsTypesFilterStore]]
>(
  persist(
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
    }),
    {
      name: "pokemonsTypesFilter",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
