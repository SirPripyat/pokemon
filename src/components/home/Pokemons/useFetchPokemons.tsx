import { readAllPokemons } from "@/api/pokemons";
import { PokemonType } from "@/types";
import { useCallback, useEffect, useState } from "react";

export default function useFetchPokemons() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  const fetchPokemons = useCallback(async () => {
    const pokemons = await readAllPokemons();
    setPokemons(pokemons);
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return { pokemons };
}
