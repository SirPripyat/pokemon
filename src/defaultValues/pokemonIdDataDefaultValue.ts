import type { Pokemon } from "@/types/pokemon";

export const pokemonIdDataDefaultValue: Pokemon = {
  basicInformation: {
    index: 0,
    name: "",
    pokedexNumber: "",
    image: "",
    pokemonTypes: ["water"],
    height: 0,
    weight: 0,
    abilities: [],
  },
  baseStats: {
    hp: 0,
    attack: 0,
    defense: 0,
    special_attack: 0,
    special_defense: 0,
    speed: 0,
  },
};
