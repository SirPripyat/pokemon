import { findOutWhatTypePokemonIs } from "./findOutWhatTypePokemonIs";

export const setStylesOfTheType = (type: string) => {
  return findOutWhatTypePokemonIs[
    type as keyof typeof findOutWhatTypePokemonIs
  ];
};
