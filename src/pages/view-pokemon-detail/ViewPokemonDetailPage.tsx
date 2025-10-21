'use client';

import { ComponentsWrapper, LoaderScreen, Divisor } from '@/components';
import PokemonThumbnail from './PokemonThumbail';
import BasicInformationSection from './BasicInformationSection';
import BaseStatsSection from './BaseStatsSection';
import Weaknesses from './Weaknesses';
import OtherSimilarPokemons from './OtherSimilarPokemons';
import { useFetchData } from '@/hooks';
import { initPokemon, Pokemon } from '@/types';
import { useCallback } from 'react';
import { PokemonService } from '@/services';

type Props = {
  pokemonId: string;
};

export default function ViewPokemonDetailPage({ pokemonId }: Props) {
  const { isLoading, data: pokemonData } = useFetchData<Pokemon>({
    initialValues: initPokemon,
    serviceFn: useCallback(
      signal => PokemonService.findById(pokemonId, signal),
      [pokemonId],
    ),
  });

  const columnsDivStyle =
    'w-full gap-8 grid grid-cols-1 md:gap-10 md:grid-cols-2  lg:gap-16';

  return (
    <ComponentsWrapper>
      {isLoading ? (
        <LoaderScreen />
      ) : (
        <>
          <div
            className={`${columnsDivStyle} md:pb-10 md:border-b-2 md:border-zinc-700`}
          >
            <PokemonThumbnail
              name={pokemonData.name}
              types={pokemonData.types}
              image={pokemonData.image}
            />
            <BasicInformationSection
              pokedexNumber={pokemonData.pokedexNumber}
              name={pokemonData.name}
              description={pokemonData.description}
              height={pokemonData.height}
              weight={pokemonData.weight}
              abilities={pokemonData.abilities}
              types={pokemonData.types}
            />
          </div>

          <div className={columnsDivStyle}>
            <Divisor className=" sm:hidden" />
            <BaseStatsSection stats={pokemonData.stats} />
            <Divisor className=" sm:hidden" />
            <Weaknesses />
          </div>

          <Divisor />
          {/*<EvolutionChain />*/}
          <OtherSimilarPokemons types={pokemonData.types} />
        </>
      )}
    </ComponentsWrapper>
  );
}
