import { setStylesOfTheType } from "@/functions/setStylesOfTheType";

interface usePokemonTypeStyleProps {
  types: string[];
}
export default function usePokemonTypeStyle({
  types,
}: usePokemonTypeStyleProps) {
  const [firstPokemonTypeStyle, secondPokemonTypeStyle]: any[] = [
    setStylesOfTheType(types[0]),
    setStylesOfTheType(types[1]),
  ];

  return { firstPokemonTypeStyle, secondPokemonTypeStyle };
}
