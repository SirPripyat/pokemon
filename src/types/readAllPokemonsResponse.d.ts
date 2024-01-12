import { Pokemon } from "./pokemon";

export type ReadAllPokemonsResponse = {
  data: {
    currentPage: number;
    numberOfPokemons: number;
    pokemons: Pokemon[];
    totalPages: number;
  };
};
