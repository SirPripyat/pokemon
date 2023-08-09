import { readAllPokemons } from "@/api/pokemons";
import { PokemonType } from "@/types";
import { useCallback, useEffect, useState } from "react";
export default function useFetchPokemons() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  const fetchPokemons = useCallback(async () => {
    const pokemonResponse = await readAllPokemons("16");
    setPokemons(pokemonResponse);
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return { pokemons };
}
