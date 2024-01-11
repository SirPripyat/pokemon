import { Pokemon } from "../types";
import axios from "axios";

const BASE_URL = "https://pokemon-api-d4e8682433d8.herokuapp.com";

export const readAllPokemons = async (): Promise<Pokemon[]> => {
  const response = await axios
    .get<Pokemon[]>(`${BASE_URL}/pokemon`)
    .catch((error) => {
      throw new Error(error);
    });

  const pokemonResponse: Pokemon[] = response.data.sort(
    (a, b) => a.index - b.index
  );

  return pokemonResponse;
};
