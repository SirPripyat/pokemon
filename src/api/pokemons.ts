import { Pokemon } from "@/types/pokemon";
import { ReadAllPokemonsResponse } from "@/types/readAllPokemonsResponse";
import axios from "axios";

const BASE_URL = "https://pokemon-api-d4e8682433d8.herokuapp.com";

export const readAllPokemons = async (
  page: string,
  search: string
): Promise<ReadAllPokemonsResponse["data"]> => {
  try {
    return tryPokemonRequest(page, search);
  } catch (error) {
    throw new Error("Error while fetching pokemons");
  }
};

const tryPokemonRequest = async (
  page: string,
  search: string
): Promise<ReadAllPokemonsResponse["data"]> => {
  const calculatePage = parseInt(page) + 1;

  const pageInString = calculatePage.toString();

  const { data } = await axios.get(
    `${BASE_URL}/pokemon?page=${pageInString}&search=${search}`
  );

  return data;
};
