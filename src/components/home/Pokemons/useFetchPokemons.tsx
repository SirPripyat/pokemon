import { usePokemonDataStore } from "@/store/pokemonDataStore";
import { ReadAllPokemonsResponse } from "@/types/readAllPokemonsResponse";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useFetchPokemons() {
  const searchParams = useSearchParams();

  const readAllPokemons = useCallback(
    async (): Promise<ReadAllPokemonsResponse> =>
      await axios.get(
        `${process.env.NEXT_PUBLIC_POKEDEX_API}/pokemon?${searchParams}`
      ),
    [searchParams]
  );

  const { setPokemonData } = usePokemonDataStore();
  const { push } = useRouter();

  const handleFetchPokemons = useCallback(
    (res: ReadAllPokemonsResponse["data"]): void => {
      const { currentPage, totalPages } = res;

      if (currentPage > totalPages) push(`/?${searchParams}`);

      setPokemonData(res);
    },
    [push, searchParams, setPokemonData]
  );

  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemons = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    await readAllPokemons()
      .then((res) => handleFetchPokemons(res.data))
      .finally(() => setIsLoading(false));
  }, [handleFetchPokemons, readAllPokemons]);

  useEffect(() => {
    const controller = new AbortController();

    fetchPokemons();

    return () => controller.abort();
  }, [fetchPokemons]);

  return { isLoading };
}
