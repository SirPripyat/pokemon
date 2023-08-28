import { PokemonType } from "../types";
import axios from "axios";

export const readAllPokemons = async (pagination: string) => {
  const pokemonDetailEndpoints: string[] = [];

  const paginationNumber = parseInt(pagination);

  const calculateHowManyPokemons = paginationNumber * 16;

  const paginationValue = 16 + calculateHowManyPokemons;

  const initialValue = 1 + calculateHowManyPokemons;

  for (let i = initialValue; i <= paginationValue; i++) {
    pokemonDetailEndpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
  }

  const response = await axios.all(
    pokemonDetailEndpoints.map((endpoint) => axios.get(endpoint))
  );

  const pokemons = await Promise.all(
    response.map((res) => handlePokemonData(res.data))
  );

  return pokemons;
};

const handlePokemonData = async (pokemon: any) => {
  const pokedex = addZerosInPokedexNumber(pokemon.id);

  const poke: PokemonType = {
    pokedexNumber: pokedex,
    name: pokemon.name,
    types: getPokemonTypes(pokemon),
    image: pokemon.sprites.other["official-artwork"].front_default,
  };

  return poke;
};

const addZerosInPokedexNumber = (pokedexNumber: number) => {
  return pokedexNumber.toString().padStart(3, "0");
};

const getPokemonTypes = (pokemon: any) => {
  const types = pokemon.types.map((type: any) => {
    return type.type.name;
  });

  return types;
};
