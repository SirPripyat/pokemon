import { StatsName } from "@/types/statsName";

type FindOutWhatBaseStatIsType = {
  [key in StatsName]: {
    label: string;
    color: string;
  };
};

export const findOutWhatBaseStatIs: FindOutWhatBaseStatIsType = {
  hp: {
    label: "HP",
    color: "#D90429",
  },
  attack: {
    label: "Attack",
    color: "#FB8500",
  },
  defense: {
    label: "Defense",
    color: "#40916C",
  },
  speed: {
    label: "Speed",
    color: "#FFDD00",
  },
  special_attack: {
    label: "Special Attack",
    color: "#A546E6",
  },
  special_defense: {
    label: "Special Defense",
    color: "#4361EE",
  },
};
