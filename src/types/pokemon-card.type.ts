import { BasicInformation } from "./basicInformation";

export type PokemonCard = Omit<
  BasicInformation,
  "weight" | "height" | "abilities" | "description"
>;
