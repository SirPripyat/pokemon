import { POKEMON_FETCH_LIMIT } from "@/constants/pokemonFetchLimit";
import { PokemonType } from "../types";
import axios from "axios";

export const readAllPokemons = async () => {
  const pokemonDetailEndpoints: string[] = [];

  for (let i = 1; i <= POKEMON_FETCH_LIMIT; i++) {
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
  const pokedex = pokemon.id.toString().padStart(3, "0");

  const poke: PokemonType = {
    pokedexNumber: pokedex,
    name: pokemon.name,
    types: getPokemonTypes(pokemon),
    image: pokemon.sprites.other["official-artwork"].front_default,
  };

  return poke;
};

const getPokemonTypes = (pokemon: any) => {
  const types = pokemon.types.map((type: any) => {
    return type.type.name;
  });

  return types;
};
