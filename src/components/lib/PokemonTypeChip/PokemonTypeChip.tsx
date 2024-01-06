import Image, { StaticImageData } from "next/image";
import { RefObject } from "react";

interface PokemonTypeProps {
  type: string;
  color: string;
  icon: StaticImageData;
}
export default function PokemonType({ color, icon, type }: PokemonTypeProps) {
  return (
    <div
      className={`rounded-full border px-3 py-2 flex justify-center items-center gap-2 font-bold text-gray-200 transition-colors}`}
      style={{ borderColor: color }}
    >
      <Image src={icon} alt="Pokemon's Type" width={20} height={20} />
      <span className="first-letter:uppercase text-sm">{type}</span>
    </div>
  );
}
