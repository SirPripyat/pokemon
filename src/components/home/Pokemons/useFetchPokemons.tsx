import { readAllPokemons } from "@/api/pokemons";
import { Pokemon } from "@/types";
import { useCallback, useEffect, useState } from "react";

export default function useFetchPokemons() {
  const [isLoading, setIsLoading] = useState(false);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemons = useCallback(async () => {
    setIsLoading(true);

    const pokemonResponse = await readAllPokemons();
    setPokemons(pokemonResponse);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetchPokemons();

    return () => controller.abort();
  }, [fetchPokemons]);

  return { pokemons, isLoading };
}
