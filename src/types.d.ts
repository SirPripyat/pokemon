import { StaticImageData } from "next/image";
import { findOutWhatTypePokemonIs } from "./functions/findOutWhatTypePokemonIs";

export type Pokemon = {
  pokedexNumber: string;
  name: string;
  types: PokemonsTypes[];
  image: string;
};

export type PokemonResponse = {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
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
