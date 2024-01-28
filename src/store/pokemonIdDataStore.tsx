import type { Pokemon } from "@/types/pokemon";
import { create } from "zustand";

interface PokemonIdDataStoreProps {
  pokemonIdData: Pokemon | null;
  setPokemonIdData: (pokemonIdData: Pokemon) => void;
}

export const usePokemonIdDataStore = create<PokemonIdDataStoreProps>((set) => ({
  pokemonIdData: null,
  setPokemonIdData: (pokemonIdData) => set({ pokemonIdData }),
}));
