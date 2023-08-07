import Bug from "../../public/name=Bug.svg";
import Dark from "../../public/name=Dark.svg";
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

export const findOutWhatTypePokemonIs = {
  water: {
    color: waterColor,
    hoverColor: "blue-500/20",
    icon: Water,
  },
  dragon: {
    color: dragonColor,
    hoverColor: "indigo-500/20",
    icon: Dragon,
  },
  electric: {
    color: electricColor,
    hoverColor: "yellow-300/20",
    icon: Electric,
  },
  fairy: {
    color: fairyColor,
    hoverColor: "pink-300/20",
    icon: Fairy,
  },
  ghost: {
    color: ghostColor,
    hoverColor: "purple-900/20",
    icon: Ghost,
  },
  fire: {
    color: fireColor,
    hoverColor: "orange-500/20",
    icon: Fire,
  },
  ice: {
    color: iceColor,
    hoverColor: "teal-500/20",
    icon: Ice,
  },
  grass: {
    color: grassColor,
    hoverColor: "green-600/20",
    icon: Grass,
  },
  bug: {
    color: bugColor,
    hoverColor: "lime-600/20",
    icon: Bug,
  },
  fighting: {
    color: fightingColor,
    hoverColor: "pink-500/20",
    icon: Fighting,
  },
  normal: {
    color: normalColor,
    hoverColor: "zinc-500/20",
    icon: Normal,
  },
  rock: {
    color: rockColor,
    hoverColor: "zinc-600/20",
    icon: Rock,
  },
  psychic: {
    color: psychicColor,
    hoverColor: "pink-400/20",
    icon: Psychic,
  },
  ground: {
    color: groundColor,
    hoverColor: "yellow-700/20",
    icon: Ground,
  },
  poison: {
    color: poisonColor,
    hoverColor: "purple-600/20",
    icon: Poison,
  },
  steel: {
    color: steelColor,
    hoverColor: "cyan-700/20",
    icon: Steel,
  },
  flying: {
    color: flyingColor,
    hoverColor: "blue-600/20",
    icon: Flying,
  },
};
