import { readAllPokemons } from "@/api/pokemons";
import { usePokemonDataStore } from "@/store/pokemonDataStore";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useFetchPokemons() {
  const [isLoading, setIsLoading] = useState(false);

  const { get } = useSearchParams();

  const verifyPathname = useCallback(() => {
    const currentPage = get("page");
    const searchParam = get("search");

    return {
      searchParam: searchParam ? searchParam : "",
      currentPage: currentPage ? currentPage : "0",
    };
  }, [get]);

  const { setPokemonData } = usePokemonDataStore();

  const fetchPokemons = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    const { currentPage, searchParam } = verifyPathname();

    if (!currentPage) return;

    const response = await readAllPokemons(currentPage, searchParam);
    setPokemonData(response);

    setIsLoading(false);
  }, [setPokemonData, verifyPathname]);

  useEffect(() => {
    const controller = new AbortController();

    fetchPokemons();

    return () => controller.abort();
  }, [fetchPokemons]);

  return { isLoading };
}
