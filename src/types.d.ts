import { StaticImageData } from "next/image";
import { findOutWhatTypePokemonIs } from "./functions/findOutWhatTypePokemonIs";

export type Pokemon = {
  index: number;
  name: string;
  pokedexNumber: string;
  image: string;
  pokemonTypes: PokemonsTypes[];
};

export type PokemonsTypes =
  | "water"
  | "dragon"
  | "electric"
  | "fairy"
  | "ghost"
  | "fire"
  | "ice"
  | "grass"
  | "bug"
  | "fighting"
  | "normal"
  | "rock"
  | "psychic"
  | "ground"
  | "poison"
  | "steel"
  | "flying";

export type StylesOfPokemonsTypes = {
  [key in PokemonsTypes]: {
    color: string;
    icon: StaticImageData;
  };
};
