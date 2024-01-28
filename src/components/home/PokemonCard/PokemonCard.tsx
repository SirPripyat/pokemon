import PokemonTypeChip from "../../lib/PokemonTypeChip/PokemonTypeChip";
import usePokemonTypeStyle from "../../../globalHooks/usePokemonTypeStyle";
import usePokemonHasMoreThanOneType from "../../../globalHooks/usePokemonHasMoreThanOneType";
import Image from "next/image";
import Link from "next/link";
import type { PokemonCard as PokemonCardsProps } from "@/types/pokemon-card.type";

export default function PokemonCard({
  pokedexNumber,
  name,
  pokemonTypes,
  image,
}: PokemonCardsProps) {
  const { thisPokemonHasMoreThanOneType } = usePokemonHasMoreThanOneType({
    pokemonTypes,
  });

  const { firstPokemonTypeStyle, secondPokemonTypeStyle } = usePokemonTypeStyle(
    { pokemonTypes }
  );

  const { color, icon } = firstPokemonTypeStyle;

  return (
    <Link
      href={`/${name}`}
      className="w-full h-auto bg-zinc-900 rounded-2xl overflow-hidden border-2 border-zinc-900 hover:border-zinc-800 hover:shadow-lg transition-all"
    >
      <div
        className={`transition-colors relative w-full py-4 flex justify-center items-center`}
        style={{ backgroundColor: color }}
      >
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="w-1/3 h-1/3 rounded-xl"
        />
        <Image
          src={icon}
          alt="Pokemon's Type"
          width={50}
          height={50}
          className="absolute left-2 bottom-2 w-1/5 fill-slate-50"
        />
      </div>
      <div className="p-4 h-fit min-h-1/3 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <small className="text-gray-500">{pokedexNumber}</small>
          <h3 className=" text-lg font-bold first-letter:uppercase">{name}</h3>
        </div>
        <div className="w-fit flex gap-3 justify-center items-center">
          <PokemonTypeChip type={pokemonTypes[0]} color={color} icon={icon} />
          {thisPokemonHasMoreThanOneType && (
            <PokemonTypeChip
              type={pokemonTypes[1]}
              color={secondPokemonTypeStyle.color}
              icon={secondPokemonTypeStyle.icon}
            />
          )}
        </div>
      </div>
    </Link>
  );
}
