import type { BaseStats } from "./baseStats";
import type { BasicInformation } from "./basicInformation";

export type ReadPokemonIdResponse = {
  data: {
    basicInformation: BasicInformation;
    baseStats: BaseStats;
  };
};
