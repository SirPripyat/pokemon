import { findOutWhatTypePokemonIs } from "@/functions/findOutWhatTypePokemonIs";
import Image from "next/image";
import { PokemonType } from "../lib/PokemonTypeChip";

interface PokemonCardProps {
  pokedex: string;
  name: string;
  types: Array<string>;
  image: string;
}

const setStylesOfTheType = (type: string) => {
  return findOutWhatTypePokemonIs[
    type as keyof typeof findOutWhatTypePokemonIs
  ];
};

export function PokemonCard({ pokedex, name, types, image }: PokemonCardProps) {
  const hasMoreThanOneType = types.length > 1;

  const [typeStyle1, typeStyle2]: any[] = [
    setStylesOfTheType(types[0]),
    setStylesOfTheType(types[1]),
  ];

  return (
    <>
      <div className="w-full h-auto bg-zinc-900 rounded-2xl overflow-hidden">
        <div
          className={`bg-${typeStyle1.color}	transition-colors relative w-full py-4 flex justify-center items-center`}
        >
          <Image
            src={image}
            alt={name}
            width={150}
            height={150}
            className="w-1/3 h-1/3 rounded-xl"
          />
          <Image
            src={typeStyle1!.icon}
            alt="Pokemon's Type"
            width={50}
            height={50}
            className="absolute left-2 bottom-2 w-1/5 fill-slate-50"
            style={{ fill: "#fff" }}
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
              color={typeStyle1.color}
              icon={typeStyle1.icon}
              hoverColor={typeStyle1.hoverColor}
            />
            {hasMoreThanOneType && (
              <PokemonType
                type={types[1]}
                color={typeStyle2.color}
                icon={typeStyle2.icon}
                hoverColor={typeStyle2.hoverColor}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
