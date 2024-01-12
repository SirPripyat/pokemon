import { PokemonsTypes } from "@/types/pokemonsTypes";
import { findOutWhatTypePokemonIs } from "./findOutWhatTypePokemonIs";

export const setStylesOfTheType = (type: PokemonsTypes) =>
  findOutWhatTypePokemonIs[type];
