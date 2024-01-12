import { readAllPokemons } from "@/api/pokemons";
import { useSetLastPageStore } from "@/store/lastPageStore";
import { Pokemon } from "@/types/pokemon";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useFetchPokemons() {
  const [isLoading, setIsLoading] = useState(false);

  const { get } = useSearchParams();

  const verifyPathname = useCallback((): string => {
    const currentPage = get("page");

    if (!currentPage) return "0";

    return currentPage;
  }, [get]);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { setLastPage } = useSetLastPageStore();

  const fetchPokemons = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    const pathname = verifyPathname();

    if (!pathname) return;

    const { pokemons, totalPages } = await readAllPokemons(pathname);

    setPokemons(pokemons);
    setLastPage(totalPages);

    setIsLoading(false);
  }, [setLastPage, verifyPathname]);

  useEffect(() => {
    const controller = new AbortController();

    fetchPokemons();

    return () => controller.abort();
  }, [fetchPokemons]);

  return { pokemons, isLoading };
}
