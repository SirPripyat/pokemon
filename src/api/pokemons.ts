import { POKEMON_FETCH_LIMIT } from "@/constants/pokemonFetchLimit";
import { PokemonType } from "../types";

export const readAllPokemons = async () => {
  const responsePokeApi = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_FETCH_LIMIT}&offset=0`
  ).then((res) => res.json());

  const results = responsePokeApi.results;

  const pokemons = await filterPokemonData(results);

  return pokemons;
};

const filterPokemonData = async (pokeArray: any) => {
  const filteredPokemons = await pokeArray.map(async (pokemon: any) => {
    const url = await pokemon.url;
    const fetchOnePokemon = await fetch(url).then((res) => res.json());

    const pokemons = await handlePokemonData(fetchOnePokemon);

    return pokemons;
  });

  const filteredPokemonsArray = await Promise.all(filteredPokemons);

  return filteredPokemonsArray;
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
