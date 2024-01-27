import { pokemonIdDataDefaultValue } from "@/defaultValues/pokemonIdDataDefaultValue";
import type { Pokemon } from "@/types/pokemon";
import { create } from "zustand";

interface PokemonIdDataStoreProps {
  pokemonIdData: Pokemon;
  setPokemonIdData: (pokemonIdData: Pokemon) => void;
}

export const usePokemonIdDataStore = create<PokemonIdDataStoreProps>((set) => ({
  pokemonIdData: pokemonIdDataDefaultValue,
  setPokemonIdData: (pokemonIdData) => set({ pokemonIdData }),
}));
