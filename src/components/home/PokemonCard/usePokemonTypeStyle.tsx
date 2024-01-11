import { setStylesOfTheType } from "@/functions/setStylesOfTheType";
import { PokemonsTypes } from "@/types";

interface usePokemonTypeStyleProps {
  pokemonTypes: PokemonsTypes[];
}
export default function usePokemonTypeStyle({
  pokemonTypes,
}: usePokemonTypeStyleProps) {
  const [firstPokemonTypeStyle, secondPokemonTypeStyle] = [
    setStylesOfTheType(pokemonTypes[0]),
    setStylesOfTheType(pokemonTypes[1]),
  ];

  return { firstPokemonTypeStyle, secondPokemonTypeStyle };
}
