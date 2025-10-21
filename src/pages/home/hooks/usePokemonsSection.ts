import { useEffect, useState } from 'react';
import { Pokemon } from '@/types';
import { useQueryParams } from '@/hooks';
import { PokemonService } from '@/services';

export const usePokemonsSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [maxPages, setMaxPages] = useState(0);

  const { search, page, types } = useQueryParams();

  const hasPokemons = pokemonData && pokemonData.length > 0;

  useEffect(() => {
    const abortController = new AbortController();

    setIsLoading(true);

    PokemonService.findAll(
      {
        search,
        page,
        types: types.join(','),
      },
      abortController.signal,
    )
      .then(({ data }) => {
        setPokemonData(data.data);
        setTotalPokemons(data.meta.total);
        setMaxPages(data.meta.totalPages);
      })
      .finally(() => setIsLoading(false));

    return () => abortController.abort();
  }, [page, search, types]);

  return {
    isLoading,
    pokemonData,
    totalPokemons,
    hasPokemons,
    maxPages,
  };
};
