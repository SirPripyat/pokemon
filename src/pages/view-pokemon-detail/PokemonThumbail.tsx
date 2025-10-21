import Image from 'next/image';
import { PokemonOnType } from '@/types';
import { PokemonTypeUtils } from '@/utils';

type Props = {
  types: Array<PokemonOnType>;
  name: string;
  image: string;
};

export default function PokemonThumbnail({ types, name, image }: Props) {
  const mainType = types.find(t => t.order === 0)?.type;
  const icon = PokemonTypeUtils.getIcon(mainType?.name);

  return (
    <div
      className={`transition-colors relative w-full h-auto rounded-2xl py-8 flex justify-center items-center`}
      style={{ backgroundColor: mainType?.color }}
    >
      <Image
        src={image}
        alt={name}
        width={1000}
        height={1000}
        className="w-2/3 h-auto rounded-xl z-10"
      />
      <Image
        src={icon}
        alt="Pokemon's Type"
        width={200}
        height={200}
        className="absolute left-2 bottom-2 w-2/6 fill-slate-50"
      />
    </div>
  );
}
