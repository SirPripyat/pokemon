import { usePokemonsTypesFilterStore } from "@/store/pokemonsTypesFilterStore";
import { PokemonsTypes } from "@/types/pokemonsTypes";

export default function usePokemonTypeChip() {
  const {
    pokemonsTypesFilter,
    pushPokemonsTypesFilter,
    removePokemonsTypesFilter,
  } = usePokemonsTypesFilterStore();

  const setTypeActiveAndGetTypes = (type: PokemonsTypes) => {
    if (pokemonsTypesFilter.includes(type))
      return removePokemonsTypesFilter([type]);

    pushPokemonsTypesFilter([type]);
  };

  return {
    setTypeActiveAndGetTypes,
  };
}
