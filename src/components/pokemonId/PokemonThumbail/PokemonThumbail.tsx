import { usePokemonIdDataStore } from "@/store/pokemonIdDataStore";
import usePokemonTypeStyle from "@/globalHooks/usePokemonTypeStyle";
import Image from "next/image";

export default function PokemonThumbnail() {
  const { pokemonIdData } = usePokemonIdDataStore();

  const { pokemonTypes, name, image } = pokemonIdData.basicInformation;

  const { firstPokemonTypeStyle } = usePokemonTypeStyle({
    pokemonTypes,
  });

  return (
    <div
      className={`transition-colors relative w-full h-auto rounded-2xl py-8 flex justify-center items-center`}
      style={{ backgroundColor: firstPokemonTypeStyle.color }}
    >
      <Image
        src={image}
        alt={name}
        width={1000}
        height={1000}
        className="w-2/3 h-auto rounded-xl z-10"
      />
      <Image
        src={firstPokemonTypeStyle.icon}
        alt="Pokemon's Type"
        width={200}
        height={200}
        className="absolute left-2 bottom-2 w-2/6 fill-slate-50"
      />
    </div>
  );
}
