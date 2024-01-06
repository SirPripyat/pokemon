import { readAllPokemons } from "@/api/pokemons";
import { Pokemon } from "@/types";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useFetchPokemons() {
  const [isLoading, setIsLoading] = useState(false);

  const { get } = useSearchParams();

  const verifyPathname = useCallback(() => {
    const currentPage = get("page");

    if (currentPage === null) return "0";

    return currentPage;
  }, [get]);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemons = useCallback(async () => {
    setIsLoading(true);

    const pathname = verifyPathname();

    if (pathname === null) return;

    const pokemonResponse = await readAllPokemons(pathname);
    setPokemons(pokemonResponse);

    setIsLoading(false);
  }, [verifyPathname]);

  useEffect(() => {
    const { abort } = new AbortController();

    fetchPokemons();

    return () => abort();
  }, [fetchPokemons]);

  return { pokemons, isLoading };
}
