import { usePokemonsTypesFilterStore } from "@/store/pokemonsTypesFilterStore";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function useRemovePokemonsOnFilter() {
  const searchParams = useSearchParams();
  const hasPokemonsTypesOnRoute = searchParams.getAll("types");

  const { removeAllPokemons } = usePokemonsTypesFilterStore();

  const removePokemoon = useCallback(() => {
    if (!hasPokemonsTypesOnRoute.length) return removeAllPokemons();
  }, [hasPokemonsTypesOnRoute.length, removeAllPokemons]);

  useEffect(() => {
    removePokemoon();
  }, [removePokemoon]);
}
