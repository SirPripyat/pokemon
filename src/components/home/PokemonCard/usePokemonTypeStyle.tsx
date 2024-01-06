import { setStylesOfTheType } from "@/functions/setStylesOfTheType";
import { PokemonsTypes } from "@/types";

interface usePokemonTypeStyleProps {
  types: PokemonsTypes[];
}
export default function usePokemonTypeStyle({
  types,
}: usePokemonTypeStyleProps) {
  const [firstPokemonTypeStyle, secondPokemonTypeStyle] = [
    setStylesOfTheType(types[0]),
    setStylesOfTheType(types[1]),
  ];

  return { firstPokemonTypeStyle, secondPokemonTypeStyle };
}
