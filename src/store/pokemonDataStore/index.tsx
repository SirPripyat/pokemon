import { PokemonsTypes } from "@/types/pokemonsTypes";
import { ReadAllPokemonsResponse } from "@/types/readAllPokemonsResponse";
import { create } from "zustand";

type PokemonDataStore = {
  pokemonData: ReadAllPokemonsResponse["data"];
  setPokemonData: (pokemonData: ReadAllPokemonsResponse["data"]) => void;
};

const pokemonDataDefaultValue = {
  currentPage: 1,
  numberOfPokemons: 1,
  pokemons: [
    {
      index: 1,
      name: "Bulbasaur",
      pokedexNumber: "001",
      image: "",
      pokemonTypes: ["grass", "poison"] as PokemonsTypes[],
    },
  ],
  totalPages: 1,
};

export const usePokemonDataStore = create<PokemonDataStore>((set) => ({
  pokemonData: {} as ReadAllPokemonsResponse["data"],
  setPokemonData: (pokemonData) => {
    const lastPage = pokemonData.totalPages - 1;

    set({
      pokemonData: {
        ...pokemonData,
        totalPages: lastPage,
      },
    });
  },
}));
