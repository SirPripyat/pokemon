import { PokemonsTypes } from "./pokemonsTypes";

export type Pokemon = {
  index: number;
  name: string;
  pokedexNumber: string;
  image: string;
  pokemonTypes: PokemonsTypes[];
};
