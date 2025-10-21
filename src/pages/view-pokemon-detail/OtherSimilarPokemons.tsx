'use client';

import PokemonViewWrapper from './PokemonViewWrapper';
import { PokemonCard, Title } from '@/components';
import { getPokemonTypeLabel, Pokemon, PokemonOnType } from '@/types';
import { useFetchData } from '@/hooks';
import { useCallback } from 'react';
import { PokemonService } from '@/services';

type Props = {
  types: Array<PokemonOnType>;
};

export default function OtherSimilarPokemons({ types }: Props) {
  const mainType = types.find(t => t.order === 0);

  const { data: pokemonsData } = useFetchData<Pokemon[]>({
    initialValues: [],
    shouldRender: Boolean(mainType?.type?.name),
    serviceFn: useCallback(
      signal => PokemonService.findByType(mainType?.type?.name!, signal),
      [mainType?.type?.name],
    ),
  });

  return (
    <PokemonViewWrapper>
      <Title>Other {getPokemonTypeLabel(mainType?.type?.name)} pokémons</Title>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pokemonsData.map(pokemon => (
          <PokemonCard {...pokemon} key={pokemon.id} />
        ))}
      </div>

      <div className="w-full flex justify-center">
        {/*<ButtonGhosted.Root onClick={seeMorePokemonsWithSameType}>*/}
        {/*  See more {type} pokémons*/}
        {/*</ButtonGhosted.Root>*/}
      </div>
    </PokemonViewWrapper>
  );
}
