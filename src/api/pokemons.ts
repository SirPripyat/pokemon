import { Pokemon, PokemonResponse, PokemonsTypes } from "../types";
import axios from "axios";

export const readAllPokemons = async (
  pagination: string
): Promise<Pokemon[]> => {
  const pokemonDetailEndpoints = [];

  const paginationNumber = parseInt(pagination);

  const calculateHowManyPokemons = paginationNumber * 16;

  const paginationValue = 16 + calculateHowManyPokemons;

  const initialValue = 1 + calculateHowManyPokemons;

  for (let i = initialValue; i <= paginationValue; i++)
    pokemonDetailEndpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);

  const response = await axios.all(
    pokemonDetailEndpoints.map((endpoint) => axios.get(endpoint))
  );

  return await Promise.all(response.map(({ data }) => handlePokemonData(data)));
};

const handlePokemonData = async ({
  id,
  name,
  sprites: { other },
  types,
}: PokemonResponse): Promise<Pokemon> => {
  const pokedex = addZerosInPokedexNumber(id);

  return {
    pokedexNumber: pokedex,
    name: name,
    types: getPokemonTypes(types),
    image: other["official-artwork"].front_default,
  };
};

const addZerosInPokedexNumber = (pokedexNumber: number): string =>
  pokedexNumber.toString().padStart(3, "0");

const getPokemonTypes = (
  pokemonTypes: PokemonResponse["types"]
): PokemonsTypes[] =>
  pokemonTypes.map(({ type }) => type.name) as PokemonsTypes[];
