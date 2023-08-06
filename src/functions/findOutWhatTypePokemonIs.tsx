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

/* As cores abaixo só irão funcionar no componente que as forem utilizadas, caso o componente já tenha recebido o mesmo token de cor */

export const findOutWhatTypePokemonIs = {
  water: {
    color: "blue-500",
    hoverColor: "blue-500/20",
    icon: Water,
  },
  dragon: {
    color: "indigo-500",
    hoverColor: "indigo-500/20",
    icon: Dragon,
  },
  electric: {
    color: "yellow-300",
    hoverColor: "yellow-300/20",
    icon: Electric,
  },
  fairy: {
    color: "pink-300",
    hoverColor: "pink-300/20",
    icon: Fairy,
  },
  ghost: {
    color: "purple-900",
    hoverColor: "purple-900/20",
    icon: Ghost,
  },
  fire: {
    color: "orange-500",
    hoverColor: "orange-500/20",
    icon: Fire,
  },
  ice: {
    color: "teal-500",
    hoverColor: "teal-500/20",
    icon: Ice,
  },
  grass: {
    color: "green-600",
    hoverColor: "green-600/20",
    icon: Grass,
  },
  bug: {
    color: "lime-600",
    hoverColor: "lime-600/20",
    icon: Bug,
  },
  fighting: {
    color: "pink-500",
    hoverColor: "pink-500/20",
    icon: Fighting,
  },
  normal: {
    color: "zinc-500",
    hoverColor: "zinc-500/20",
    icon: Normal,
  },
  rock: {
    color: "zinc-600",
    hoverColor: "zinc-600/20",
    icon: Rock,
  },
  psychic: {
    color: "pink-400",
    hoverColor: "pink-400/20",
    icon: Psychic,
  },
  ground: {
    color: "yellow-700",
    hoverColor: "yellow-700/20",
    icon: Ground,
  },
  poison: {
    color: "purple-600",
    hoverColor: "purple-600/20",
    icon: Poison,
  },
  steel: {
    color: "cyan-700",
    hoverColor: "cyan-700/20",
    icon: Steel,
  },
  flying: {
    color: "blue-600",
    hoverColor: "blue-600/20",
    icon: Flying,
  },
};
