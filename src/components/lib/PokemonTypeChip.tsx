"use client";

import Image from "next/image";

interface PokemonTypeProps {
  type: string;
  color: string;
  icon: any;
  hoverColor: string;
}
export function PokemonType({
  type,
  color,
  icon,
  hoverColor,
}: PokemonTypeProps) {
  return (
    <>
      <button
        className={`rounded-full border px-3 py-1 flex justify-center items-center gap-2 font-bold border-${color} text-gray-200 hover:bg-${hoverColor}`}
      >
        <Image src={icon} alt="Pokemon's Type" width={20} height={20} />
        <span className="first-letter:uppercase text-sm">{type}</span>
      </button>
    </>
  );
}
