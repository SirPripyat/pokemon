import { readAllPokemons } from "@/api/pokemons";
import { usePokemonDataStore } from "@/store/pokemonDataStore";
import { ReadAllPokemonsResponse } from "@/types/readAllPokemonsResponse";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useFetchPokemons() {
  const { get } = useSearchParams();

  const verifyPathname = useCallback(() => {
    const currentPage = get("page");
    const searchParam = get("search");

    return {
      searchParam: searchParam || "",
      pageParam: currentPage || "0",
    };
  }, [get]);

  const [isLoading, setIsLoading] = useState(false);

  const { pageParam, searchParam } = verifyPathname();
  const { setPokemonData } = usePokemonDataStore();
  const { push } = useRouter();

  const handleFetchPokemons = useCallback(
    (res: ReadAllPokemonsResponse["data"]): void => {
      const { currentPage, totalPages } = res;

      if (currentPage > totalPages) push(`/?search=${searchParam}`);

      setPokemonData(res);
    },
    [push, searchParam, setPokemonData]
  );

  const fetchPokemons = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    await readAllPokemons(pageParam, searchParam)
      .then((res) => handleFetchPokemons(res))
      .finally(() => setIsLoading(false));
  }, [handleFetchPokemons, pageParam, searchParam]);

  useEffect(() => {
    const controller = new AbortController();

    fetchPokemons();

    return () => controller.abort();
  }, [fetchPokemons]);

  return { isLoading };
}
