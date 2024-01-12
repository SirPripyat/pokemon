import { Pokemon } from "@/types/pokemon";
import { ReadAllPokemonsResponse } from "@/types/readAllPokemonsResponse";
import axios from "axios";

const BASE_URL = "https://pokemon-api-d4e8682433d8.herokuapp.com";

type ReadAllPokemons = {
  pokemons: Pokemon[];
  totalPages: number;
};

export const readAllPokemons = async (
  page: string
): Promise<ReadAllPokemons> => {
  try {
    return tryPokemonRequest(page);
  } catch (error) {
    throw new Error("Error while fetching pokemons");
  }
};

const tryPokemonRequest = async (page: string) => {
  const calculatePage = parseInt(page) + 1;

  const pageInString = calculatePage.toString();

  const {
    data: { pokemons, totalPages },
  } = (await axios.get(
    `${BASE_URL}/pokemon?page=${pageInString}`
  )) as ReadAllPokemonsResponse;

  return {
    pokemons,
    totalPages,
  };
};
