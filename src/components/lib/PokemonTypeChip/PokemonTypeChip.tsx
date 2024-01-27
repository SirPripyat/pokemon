import { PokemonsTypes } from "@/types/pokemonsTypes";
import Image, { StaticImageData } from "next/image";
import usePokemonTypeChip from "./usePokemonTypeChip";
import { usePokemonsTypesFilterStore } from "@/store/pokemonsTypesFilterStore";

interface PokemonTypeChipProps {
  type: PokemonsTypes;
  color: string;
  icon: StaticImageData;
  isBehaviorOfFilter?: boolean;
}
export default function PokemonTypeChip({
  color,
  icon,
  type,
  isBehaviorOfFilter,
}: PokemonTypeChipProps) {
  const { setTypeActiveAndGetTypes } = usePokemonTypeChip();
  const { pokemonsTypesFilter } = usePokemonsTypesFilterStore();

  const pokemonChipIsActive =
    pokemonsTypesFilter.includes(type) && isBehaviorOfFilter;

  const buttonStyles = {
    backgroundColor: pokemonChipIsActive ? color : "transparent",
    borderColor: pokemonChipIsActive ? "transparent" : color,
  };

  return (
    <button
      value={type}
      onClick={() => isBehaviorOfFilter && setTypeActiveAndGetTypes(type)}
      className={`rounded-full border px-3 py-2 flex justify-center items-center gap-2 font-bold text-gray-200 transition-colors ${
        !isBehaviorOfFilter && "cursor-default"
      }`}
      style={buttonStyles}
    >
      <Image src={icon} alt="Pokemon's Type" width={20} height={20} />
      <span className="first-letter:uppercase text-sm">{type}</span>
    </button>
  );
}
