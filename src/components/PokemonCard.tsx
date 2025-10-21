import Image from 'next/image';
import Link from 'next/link';
import { PokemonOnType } from '@/types';
import { PokemonTypeChip } from '@/components';
import { PokemonTypeUtils } from '@/utils';

type Props = {
  pokedexNumber: string;
  name: string;
  image: string;
  types: Array<PokemonOnType>;
  id: string;
};

export const PokemonCard = ({
  pokedexNumber,
  name,
  types,
  image,
  id,
}: Props) => {
  const mainType = types.find(t => t.order === 0)?.type;
  const icon = PokemonTypeUtils.getIcon(mainType?.name);

  return (
    <Link
      href={`/${id}`}
      className="w-full h-auto bg-zinc-900 rounded-2xl overflow-hidden border-2 border-zinc-900 hover:border-zinc-800 hover:shadow-lg transition-all"
    >
      <div
        className={`transition-colors relative w-full py-4 flex justify-center items-center`}
        style={{ backgroundColor: mainType?.color }}
      >
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-1/3 h-1/3 rounded-xl"
          priority={true}
        />
        <Image
          src={icon}
          alt="Pokemon's Type"
          width={50}
          height={50}
          className="absolute left-2 bottom-2 w-1/5 fill-slate-50"
          loading={'lazy'}
        />
      </div>

      <div className="p-4 h-fit min-h-1/3 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <small className="text-gray-500">{pokedexNumber}</small>
          <h3 className=" text-lg font-bold first-letter:uppercase">{name}</h3>
        </div>

        <div className="w-fit flex gap-3 justify-center items-center">
          {types.map(({ typeId, type }) => (
            <PokemonTypeChip
              key={typeId}
              type={type?.name}
              color={type?.color}
              icon={PokemonTypeUtils.getIcon(type?.name)}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};
