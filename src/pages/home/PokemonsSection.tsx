'use client';

import { Title, PokemonCard, LoaderScreen, ButtonOutlined } from '@/components';
import SearchBar from '@/pages/home/SearchBar';
import { usePokemonsSection } from '@/pages/home/hooks/usePokemonsSection';
import { Pagination } from '@/pages/home/Pagination';
import { Filter } from 'lucide-react';
import { useToggleModal } from '@/store';

export default function PokemonsSection() {
  const { isLoading, pokemonData, totalPokemons, hasPokemons, maxPages } =
    usePokemonsSection();

  const { toggle } = useToggleModal();

  return (
    <>
      {isLoading && <LoaderScreen />}

      <div className="w-full flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <Title>
          <span className="font-bold">{totalPokemons}</span> Pokémon
        </Title>

        <div className="w-full flex flex-col items-center gap-4 sm:flex-row sm:w-fit">
          <SearchBar />
          <ButtonOutlined.Root onClick={toggle}>
            <ButtonOutlined.Icon icon={Filter} /> Filters
          </ButtonOutlined.Root>
        </div>
      </div>

      {hasPokemons ? (
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {pokemonData.map(pokemon => (
            <PokemonCard key={pokemon.index} {...pokemon} />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <h1 className="text-2xl font-bold">No pokémons found</h1>
        </div>
      )}

      <Pagination maxPages={maxPages} />
    </>
  );
}
