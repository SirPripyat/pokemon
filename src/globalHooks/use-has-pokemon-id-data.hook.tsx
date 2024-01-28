import { usePokemonIdDataStore } from "@/store/pokemonIdDataStore";

export default function useHasPokemonIdData() {
  const { pokemonIdData } = usePokemonIdDataStore();

  const pokemonIdDataIsArray = Array.isArray(pokemonIdData);

  // The array is only for initializate the store
  const hasPokemonIdData = pokemonIdDataIsArray ? false : true;

  return { hasPokemonIdData };
}
