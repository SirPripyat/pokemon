import { BasicInformation } from "./basicInformation";
import { Pokemon } from "./pokemon";

export type ReadAllPokemonsResponse = {
  data: {
    currentPage: number;
    numberOfPokemons: number;
    pokemons: BasicInformation[];
    totalPages: number;
  };
};
