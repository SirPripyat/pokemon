import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export default function useFetchEvolutionChain() {
  const [isLoading, setIsLoading] = useState(false);
  const [evolutionChain, setEvolutionChain] = useState<[]>([]);

  const fetchEvolutionChain = useCallback(async () => {
    setIsLoading(true);

    await axios
      .get(`${process.env.NEXT_PUBLIC_POKEDEX_API}/evolution-chain/pikachu`)
      .then(({ data }) => setEvolutionChain(data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

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
