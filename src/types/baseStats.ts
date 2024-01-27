import { StatsName } from "./statsName";

export type BaseStats = {
  [key in StatsName]: number;
};
