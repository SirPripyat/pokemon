import { PokemonsTypes } from "@/types";
import { findOutWhatTypePokemonIs } from "./findOutWhatTypePokemonIs";

export const setStylesOfTheType = (type: PokemonsTypes) =>
  findOutWhatTypePokemonIs[type];
