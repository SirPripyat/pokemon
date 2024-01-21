import { findOutWhatTypePokemonIs } from "@/functions/findOutWhatTypePokemonIs";
import useCreateQueryString from "@/globalHooks/useCreateQueryString";
import { usePokemonsTypesFilterStore } from "@/store/pokemonsTypesFilterStore";
import { useToggleFiltersPokemonModalStore } from "@/store/toggleFiltersPokemonModalStore";
import type { PokemonsTypes } from "@/types/pokemonsTypes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useFiltersPokemonModal() {
  const pokemonTypes = Object.keys(findOutWhatTypePokemonIs) as PokemonsTypes[];

  const { pokemonsTypesFilter } = usePokemonsTypesFilterStore();
  const { createQueryString } = useCreateQueryString();
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageParams = searchParams.get("page");
  const searchParamsFromRouter = searchParams.get("search");
  const { toggleFiltersPokemonModal } = useToggleFiltersPokemonModalStore();

  const shootPokemonsTypesFilter = (): void => {
    if (!pokemonsTypesFilter) return;

    const query: string[] = pokemonsTypesFilter.map((type) => {
      let queryString = createQueryString("types", `${type}`);
      queryString = queryString.replace(/search=[^&]*/g, "");
      queryString = queryString.replace("page=1", "");
      return queryString;
    });
    const uniqueQueryValues = [...new Set(query)];

    const page = pageParams ? `page=${pageParams}` : "";

    const search = searchParamsFromRouter
      ? `&search=${searchParamsFromRouter}&`
      : "";

    let url = `${pathname}?${page}&${search}${uniqueQueryValues.join("&")}`;
    url = url.replaceAll("&&", "&");

    push(url);
    toggleFiltersPokemonModal();
  };

  return {
    pokemonTypes,
    shootPokemonsTypesFilter,
  };
}
