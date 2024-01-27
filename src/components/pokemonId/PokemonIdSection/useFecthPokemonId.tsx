import { usePokemonIdDataStore } from "@/store/pokemonIdDataStore";
import type { ReadPokemonIdResponse } from "@/types/readPokemonIdResponse";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

interface useFetchPokemonsProps {
  pokemonId: string;
}

export default function useFecthPokemonId({
  pokemonId,
}: useFetchPokemonsProps) {
  const [isLoading, setIsLoading] = useState(false);

  const readPokemon = useCallback(
    async (pokemonId: string): Promise<ReadPokemonIdResponse> =>
      await axios.get(
        `${process.env.NEXT_PUBLIC_POKEDEX_API}/pokemon/${pokemonId}`
      ),
    []
  );

  const { setPokemonIdData } = usePokemonIdDataStore();

  const fetchPokemonId = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    await readPokemon(pokemonId)
      .then(({ data }) => setPokemonIdData(data))
      .finally(() => setIsLoading(false));
  }, [pokemonId, readPokemon, setPokemonIdData]);

  useEffect(() => {
    const controller = new AbortController();
    fetchPokemonId();
    return () => controller.abort();
  }, [fetchPokemonId]);

  return {
    isLoading,
  };
}
