import { findOutWhatTypePokemonIs } from "@/functions/findOutWhatTypePokemonIs";
import useCreateQueryString from "@/globalHooks/useCreateQueryString";
import { usePokemonsTypesFilterStore } from "@/store/pokemonsTypesFilterStore";
import { useToggleFiltersPokemonModalStore } from "@/store/toggleFiltersPokemonModalStore";
import type { PokemonsTypes } from "@/types/pokemonsTypes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useFiltersPokemonModal() {
  const pokemonTypes = Object.keys(findOutWhatTypePokemonIs) as PokemonsTypes[];

  const { pokemonsTypesFilter } = usePokemonsTypesFilterStore();
  const { createQueryStringWithMultipleValues } = useCreateQueryString();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const getAllTypes = searchParams.getAll("types");
  const { toggleFiltersPokemonModal } = useToggleFiltersPokemonModalStore();

  const shootPokemonsTypesFilter = (): void => {
    if (!pokemonsTypesFilter) return;

    const types = [...new Set([...getAllTypes, ...pokemonsTypesFilter])];

    replace(
      pathname + "?" + createQueryStringWithMultipleValues("types", types)
    );
    toggleFiltersPokemonModal();
  };

  return {
    pokemonTypes,
    shootPokemonsTypesFilter,
  };
}
