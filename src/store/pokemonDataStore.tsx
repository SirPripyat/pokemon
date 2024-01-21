import { ReadAllPokemonsResponse } from "@/types/readAllPokemonsResponse";
import { create } from "zustand";

type PokemonDataStore = {
  pokemonData: ReadAllPokemonsResponse["data"];
  setPokemonData: (pokemonData: ReadAllPokemonsResponse["data"]) => void;
};

export const usePokemonDataStore = create<PokemonDataStore>((set) => ({
  pokemonData: {} as ReadAllPokemonsResponse["data"],
  setPokemonData: (pokemonData) => {
    set({
      pokemonData,
    });
  },
}));
