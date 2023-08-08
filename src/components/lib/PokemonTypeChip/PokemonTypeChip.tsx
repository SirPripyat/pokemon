import Image from "next/image";
import { RefObject, useRef } from "react";
import useSelectedPokemonTypeChip from "./useSelectedPokemonTypeChip";

interface PokemonTypeProps {
  type: string;
  color: string;
  icon: any;
  hoverColor: string;
  typeRef?: RefObject<HTMLButtonElement>;
}
export default function PokemonType({
  type,
  color,
  icon,
  hoverColor,
  typeRef,
}: PokemonTypeProps) {
  const { typeChipIsSelected, getValueAndSelectedTypeChip, valueTypeChip } =
    useSelectedPokemonTypeChip({ typeRef });

  return (
    <>
      {!typeChipIsSelected && (
        <button
          className={`rounded-full border px-3 py-2 flex justify-center items-center gap-2 font-bold text-gray-200 hover:bg-${hoverColor} transition-colors}`}
          style={{ borderColor: color }}
          value={type}
          ref={typeRef}
          onClick={() => getValueAndSelectedTypeChip()}
        >
          <Image src={icon} alt="Pokemon's Type" width={20} height={20} />
          <span className="first-letter:uppercase text-sm">{type}</span>
        </button>
      )}
      {typeChipIsSelected && (
        <button
          className={`rounded-full border px-3 py-2 flex justify-center items-center gap-2 font-bold text-gray-200 hover:bg-${hoverColor} transition-colors}`}
          style={{ backgroundColor: color }}
          value={type}
          ref={typeRef}
          onClick={() => getValueAndSelectedTypeChip()}
        >
          <Image src={icon} alt="Pokemon's Type" width={20} height={20} />
          <span className="first-letter:uppercase text-sm">{type}</span>
        </button>
      )}
    </>
  );
}
