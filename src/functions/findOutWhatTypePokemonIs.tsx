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
import { StylesOfPokemonsTypes } from "@/types";

const waterColor = "rgb(59 130 246)";
const dragonColor = "rgb(99 102 241)";
const electricColor = "rgb(253 224 71)";
const fairyColor = "rgb(249 168 212)";
const ghostColor = "rgb(88 28 135)";
const fireColor = "rgb(249 115 22)";
const iceColor = "rgb(20 184 166)";
const grassColor = "rgb(22 163 74)";
const bugColor = "rgb(101 163 13)";
const fightingColor = "rgb(236 72 153)";
const normalColor = "rgb(113 113 122)";
const rockColor = "rgb(82 82 91)";
const psychicColor = "rgb(244 114 182)";
const groundColor = "rgb(161 98 7)";
const poisonColor = "rgb(147 51 234)";
const steelColor = "rgb(14 116 144)";
const flyingColor = "rgb(37 99 235)";

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
};
