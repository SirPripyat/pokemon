import { readAllPokemons } from "@/api/pokemons";
import { PokemonType } from "@/types";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
export default function useFetchPokemons() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  const searchParam = useSearchParams();

  const verifyPathname = useCallback(() => {
    const search = searchParam.get("page");

    if (search === null) return "0";

    return search;
  }, [searchParam]);

  const fetchPokemons = useCallback(async () => {
    const pathname = verifyPathname();
    if (pathname !== null) {
      const pokemonResponse = await readAllPokemons(pathname);
      setPokemons(pokemonResponse);
    }
  }, [verifyPathname]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return { pokemons };
}
