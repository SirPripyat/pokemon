import { PokemonTypeEnum } from '@/types';
import Image, { StaticImageData } from 'next/image';
import { useQueryParams } from '@/hooks';

type Props = {
  type: PokemonTypeEnum;
  color: string;
  icon: StaticImageData;
  isFilterBehavior?: boolean;
};

export const PokemonTypeChip = ({
  color,
  icon,
  type,
  isFilterBehavior = false,
}: Props) => {
  const { setFilterPokemonType, types } = useQueryParams();

  const isActive = Boolean(isFilterBehavior && types.includes(type));

  const buttonStyles = {
    backgroundColor: isActive ? color : 'transparent',
    borderColor: isActive ? 'transparent' : color,
  };

  return (
    <button
      value={type}
      onClick={() => isFilterBehavior && setFilterPokemonType(type)}
      className={`rounded-full border px-3 py-2 flex justify-center items-center gap-2 font-bold text-gray-200 transition-colors ${
        !isFilterBehavior && 'cursor-default'
      }`}
      style={buttonStyles}
    >
      <Image
        src={icon}
        alt="Pokemon's Type"
        width={20}
        height={20}
        loading={'lazy'}
      />
      <span className="first-letter:uppercase text-sm">{type}</span>
    </button>
  );
};
