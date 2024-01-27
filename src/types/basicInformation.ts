import type { PokemonsTypes } from "./pokemonsTypes";

export type BasicInformation = {
  index: number;
  name: string;
  pokedexNumber: string;
  image: string;
  pokemonTypes: PokemonsTypes[];
  weight: number;
  height: number;
  abilities: string[];
};
