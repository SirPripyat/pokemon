import { BaseStats } from '@/types/BaseStats';
import { PokemonType } from '@/types/PokemonType';

export type PokemonOnType = {
  typeId: string;
  order: number;
  type: PokemonType;
};

export type Pokemon = {
  id: string;
  index: number;
  name: string;
  pokedexNumber: string;
  image: string;
  weight: number;
  height: number;
  abilities: string[];
  description: string;
  stats: BaseStats;
  types: Array<PokemonOnType>;
};

export const initPokemon: Pokemon = {
  abilities: [],
  description: '',
  height: 0,
  id: '',
  image: '',
  index: 0,
  name: '',
  pokedexNumber: '',
  stats: {
    id: '',
    pokemonId: '',
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
  types: [],
  weight: 0,
};
