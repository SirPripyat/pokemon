import { StaticImageData } from "next/image";
import { PokemonsTypes } from "./pokemonsTypes";

export type StylesOfPokemonsTypes = {
  [key in PokemonsTypes]: {
    color: string;
    icon: StaticImageData;
  };
};
