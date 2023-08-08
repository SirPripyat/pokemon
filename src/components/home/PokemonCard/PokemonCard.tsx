import Image from "next/image";
import PokemonType from "../../lib/PokemonTypeChip/PokemonTypeChip";
import { setStylesOfTheType } from "@/functions/setStylesOfTheType";
import usePokemonTypeStyle from "./usePokemonTypeStyle";
import usePokemonHasMoreThanOneType from "./usePokemonHasMoreThanOneType";

interface PokemonCardProps {
  pokedex: string;
  name: string;
  types: Array<string>;
  image: string;
}

export default function PokemonCard({
  pokedex,
  name,
  types,
  image,
}: PokemonCardProps) {
  const { hasMoreThanOneType } = usePokemonHasMoreThanOneType({ types });

  const { firstPokemonTypeStyle, secondPokemonTypeStyle } = usePokemonTypeStyle(
    { types }
  );

  return (
    <>
      <div className="w-full h-auto bg-zinc-900 rounded-2xl overflow-hidden">
        <div
          className={`transition-colors relative w-full py-4 flex justify-center items-center`}
          style={{ backgroundColor: firstPokemonTypeStyle.color }}
        >
          <Image
            src={image}
            alt={name}
            width={150}
            height={150}
            className="w-1/3 h-1/3 rounded-xl"
          />
          <Image
            src={firstPokemonTypeStyle!.icon}
            alt="Pokemon's Type"
            width={50}
            height={50}
            className="absolute left-2 bottom-2 w-1/5 fill-slate-50"
          />
        </div>
        <div className="p-4 h-fit min-h-1/3 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <small className="text-gray-500">#{pokedex}</small>
            <h3 className=" text-lg font-bold first-letter:uppercase">
              {name}
            </h3>
          </div>
          <div className="w-fit flex gap-3 justify-center items-center">
            <PokemonType
              type={types[0]}
              color={firstPokemonTypeStyle.color}
              icon={firstPokemonTypeStyle.icon}
              hoverColor={firstPokemonTypeStyle.hoverColor}
            />
            {hasMoreThanOneType() && (
              <PokemonType
                type={types[1]}
                color={secondPokemonTypeStyle.color}
                icon={secondPokemonTypeStyle.icon}
                hoverColor={secondPokemonTypeStyle.hoverColor}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
