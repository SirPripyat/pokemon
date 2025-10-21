'use client';

import { Title } from '@/components/Title';
import PokemonViewWrapper from './PokemonViewWrapper';
import { useFetchData } from '@/hooks';
import { useCallback } from 'react';
import { PokemonService } from '@/services';
import { useParams } from 'next/navigation';
import { PokemonType } from '@/types';
import { PokemonTypeChip } from '@/components';
import { PokemonTypeUtils } from '@/utils';

export default function Weaknesses() {
  const params = useParams<{ pokemonId: string }>();

  const { data: weaknessesData } = useFetchData<PokemonType[]>({
    initialValues: [],
    serviceFn: useCallback(
      signer => PokemonService.findWeaknesses(params?.pokemonId, signer),
      [params?.pokemonId],
    ),
  });

  return (
    <PokemonViewWrapper>
      <Title>Weaknesses</Title>

      <div className="flex gap-2 flex-wrap">
        {weaknessesData.map(type => {
          const icon = PokemonTypeUtils.getIcon(type.name);

          return (
            <PokemonTypeChip
              color={type.color}
              icon={icon}
              type={type.name}
              key={type.name}
            />
          );
        })}
      </div>
    </PokemonViewWrapper>
  );
}
