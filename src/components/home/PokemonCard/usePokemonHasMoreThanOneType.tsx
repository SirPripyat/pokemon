import { PokemonsTypes } from "@/types";

interface usePokemonHasMoreThanOneTypeProps {
  pokemonTypes: PokemonsTypes[];
}
export default function usePokemonHasMoreThanOneType({
  pokemonTypes,
}: usePokemonHasMoreThanOneTypeProps) {
  const thisPokemonHasMoreThanOneType = pokemonTypes.length > 1;

  return { thisPokemonHasMoreThanOneType };
}
