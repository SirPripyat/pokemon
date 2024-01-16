import { findOutWhatTypePokemonIs } from "@/functions/findOutWhatTypePokemonIs";
import useCreateQueryString from "@/hooks/useCreateQueryString";
import { usePokemonsTypesFilterStore } from "@/store/pokemonsTypesFilterStore";
import { useToggleFiltersPokemonModalStore } from "@/store/toggleFiltersPokemonModalStore";
import { PokemonsTypes } from "@/types/pokemonsTypes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useFiltersPokemonModal() {
  const { toggleFiltersPokemonModal } = useToggleFiltersPokemonModalStore();

  const pokemonTypes = Object.keys(findOutWhatTypePokemonIs) as PokemonsTypes[];

  const { pokemonsTypesFilter } = usePokemonsTypesFilterStore();
  const { createQueryString } = useCreateQueryString();
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const shootPokemonsTypesFilter = () => {
    if (!pokemonsTypesFilter) return;

    const query = pokemonsTypesFilter.map((type) => {
      const queryString = createQueryString("types", `${type}`);

      return queryString.replace("page=1&", "");
    });

    const uniqueQueryValues = [...new Set(query)];

    const page = searchParams.get("page") && `page=${searchParams.get("page")}`;
    const search = searchParams.get("search")
      ? `&search=${searchParams.get("search")}&`
      : "";

    const url = `${pathname}?${page}&${search}${uniqueQueryValues.join("&")}`;

    push(url);
    toggleFiltersPokemonModal();
  };

  return {
    pokemonTypes,
    shootPokemonsTypesFilter,
  };
}
