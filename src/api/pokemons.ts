import { ReadAllPokemonsResponse } from "@/types/readAllPokemonsResponse";
import axios from "axios";

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
    `${process.env.NEXT_PUBLIC_POKEDEX_API}/pokemon?page=${pageInString}&search=${search}`
  );

  return data;
};
