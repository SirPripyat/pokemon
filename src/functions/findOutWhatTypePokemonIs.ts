import {
  bugColor,
  darkColor,
  dragonColor,
  electricColor,
  fairyColor,
  fightingColor,
  fireColor,
  flyingColor,
  ghostColor,
  grassColor,
  groundColor,
  iceColor,
  normalColor,
  poisonColor,
  psychicColor,
  rockColor,
  steelColor,
  waterColor,
} from "@/stylesInLine/pokemonTypeColor";
import Bug from "../../public/name=Bug.svg";
import Dragon from "../../public/name=Dragon.svg";
import Electric from "../../public/name=Electric.svg";
import Fairy from "../../public/name=Fairy.svg";
import Fighting from "../../public/name=Fighting.svg";
import Fire from "../../public/name=Fire.svg";
import Flying from "../../public/name=Flying.svg";
import Ghost from "../../public/name=Ghost.svg";
import Grass from "../../public/name=Grass.svg";
import Ground from "../../public/name=Ground.svg";
import Ice from "../../public/name=Ice.svg";
import Normal from "../../public/name=Normal.svg";
import Poison from "../../public/name=Poison.svg";
import Psychic from "../../public/name=Psychic.svg";
import Rock from "../../public/name=Rock.svg";
import Steel from "../../public/name=Steel.svg";
import Water from "../../public/name=Water.svg";
import Dark from "../../public/name=Dark.svg";
import { StylesOfPokemonsTypes } from "@/types/stylesOfPokemonsTypes";

export const findOutWhatTypePokemonIs: StylesOfPokemonsTypes = {
  water: {
    color: waterColor,
    icon: Water,
  },
  dragon: {
    color: dragonColor,
    icon: Dragon,
  },
  electric: {
    color: electricColor,
    icon: Electric,
  },
  fairy: {
    color: fairyColor,
    icon: Fairy,
  },
  ghost: {
    color: ghostColor,
    icon: Ghost,
  },
  fire: {
    color: fireColor,
    icon: Fire,
  },
  ice: {
    color: iceColor,
    icon: Ice,
  },
  grass: {
    color: grassColor,
    icon: Grass,
  },
  bug: {
    color: bugColor,
    icon: Bug,
  },
  fighting: {
    color: fightingColor,
    icon: Fighting,
  },
  normal: {
    color: normalColor,
    icon: Normal,
  },
  rock: {
    color: rockColor,
    icon: Rock,
  },
  psychic: {
    color: psychicColor,
    icon: Psychic,
  },
  ground: {
    color: groundColor,
    icon: Ground,
  },
  poison: {
    color: poisonColor,
    icon: Poison,
  },
  steel: {
    color: steelColor,
    icon: Steel,
  },
  flying: {
    color: flyingColor,
    icon: Flying,
  },
  dark: {
    color: darkColor,
    icon: Dark,
  },
};
