import { usePokemonIdDataStore } from "@/store/pokemonIdDataStore";
import type { PokemonsTypes } from "@/types/pokemonsTypes";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

type WeaknessessResponse = {
  data: {
    name: string;
    weaknessess: PokemonsTypes[];
  }[];
};

export default function useFetchWeaknesses() {
  const { pokemonIdData } = usePokemonIdDataStore();

  const [pokemonWeaknessess, setPokemonWeaknessess] = useState<
    PokemonsTypes[] | null
  >(null);

  const fetchPokemonWeaknesses = useCallback(async (): Promise<void> => {
    if (!pokemonIdData) return;

    const {
      basicInformation: { pokemonTypes },
    } = pokemonIdData;

    await axios
      .get(`${process.env.NEXT_PUBLIC_POKEDEX_API}/types/${pokemonTypes[0]}`)
      .then(({ data }: WeaknessessResponse) =>
        setPokemonWeaknessess(data[0].weaknessess)
      );
  }, [pokemonIdData]);

  useEffect(() => {
    fetchPokemonWeaknesses();
  }, [fetchPokemonWeaknesses]);

  return {
    pokemonWeaknessess,
  };
}
