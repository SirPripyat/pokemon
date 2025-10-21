import { PokemonTypeChip, Title } from '@/components';
import Input from './Input';
import { BrainCircuit, Ruler, Weight } from 'lucide-react';
import PokemonViewWrapper from './PokemonViewWrapper';
import { PokemonOnType } from '@/types';
import { PokemonTypeUtils } from '@/utils';

type Props = {
  pokedexNumber: string;
  name: string;
  description: string;
  height: number;
  weight: number;
  abilities: string[];
  types: PokemonOnType[];
};

export default function BasicInformationSection({
  pokedexNumber,
  name,
  description,
  height,
  weight,
  abilities,
  types,
}: Props) {
  return (
    <PokemonViewWrapper>
      <div className="flex items-center justify-center gap-3 w-full">
        <h3 className="text-lg text-gray-500">{pokedexNumber}</h3>
        <Title>{name}</Title>
      </div>

      <div>
        <p>{description}</p>
      </div>

      <div className="flex gap-3">
        {types.map(({ typeId, type }) => {
          const icon = PokemonTypeUtils.getIcon(type?.name);

          return (
            <PokemonTypeChip
              key={typeId}
              type={type?.name}
              color={type?.color}
              icon={icon}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        <Input icon={Weight} label="Weight" value={`${weight} kg`} />
        <Input icon={Ruler} label="Height" value={`${height} m`} />
        <Input
          icon={BrainCircuit}
          label="Abilities"
          value={`${abilities.join(', ')}`}
        />
      </div>
    </PokemonViewWrapper>
  );
}
