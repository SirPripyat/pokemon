import Image from "next/image";
import { useRef } from "react";

interface PokemonTypeProps {
  type: string;
  color: string;
  icon: any;
  hoverColor: string;
}
export default function PokemonType({
  type,
  color,
  icon,
  hoverColor,
}: PokemonTypeProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getValueAndDoConsoleLog = () => {
    if (buttonRef.current !== null) {
      console.log(buttonRef.current.value);
    }
  };

  return (
    <>
      <button
        className={`rounded-full border px-3 py-1 flex justify-center items-center gap-2 font-bold text-gray-200 hover:bg-${hoverColor} transition-colors}`}
        style={{ borderColor: color }}
        value={type}
        ref={buttonRef}
        onClick={() => getValueAndDoConsoleLog()}
      >
        <Image src={icon} alt="Pokemon's Type" width={20} height={20} />
        <span className="first-letter:uppercase text-sm">{type}</span>
      </button>
    </>
  );
}
