import { usePokemonsTypesFilterStore } from "@/store/pokemonsTypesFilterStore";
import { PokemonsTypes } from "@/types/pokemonsTypes";

interface usePokemonTypeChipProps {
  type: PokemonsTypes;
  isBehaviorOfFilter?: boolean;
  color: string;
}

export default function usePokemonTypeChip({
  type,
  isBehaviorOfFilter,
  color,
}: usePokemonTypeChipProps) {
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

  const pokemonChipIsActive = (): boolean =>
    pokemonsTypesFilter.includes(type) && isBehaviorOfFilter ? true : false;

  const buttonStyles = {
    backgroundColor: pokemonChipIsActive() ? color : "transparent",
    borderColor: pokemonChipIsActive() ? "transparent" : color,
  };

  return {
    setTypeActiveAndGetTypes,
    buttonStyles,
  };
}
