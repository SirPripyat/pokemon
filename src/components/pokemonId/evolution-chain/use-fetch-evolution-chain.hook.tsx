import { usePokemonIdDataStore } from "@/store/pokemonIdDataStore";
import { Pokemon } from "@/types/pokemon";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useFetchEvolutionChain() {
  const { pokemonIdData } = usePokemonIdDataStore();

  const [isLoading, setIsLoading] = useState(false);
  const [evolutionChain, setEvolutionChain] = useState<Pokemon[]>([]);

  const fetchEvolutionChain = useCallback(async () => {
    if (!pokemonIdData) return;

    setIsLoading(true);

    const pokemonName = pokemonIdData.basicInformation.name;

    await axios
      .get(
        `${process.env.NEXT_PUBLIC_POKEDEX_API}/evolution-chain/${pokemonName}`
      )
      .then(({ data }) => setEvolutionChain(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [pokemonIdData]);

  useEffect(() => {
    fetchEvolutionChain();
  }, [fetchEvolutionChain]);

  const hasEvolution = evolutionChain.length > 0;

  return {
    evolutionChain,
    isLoading,
    hasEvolution,
  };
}
