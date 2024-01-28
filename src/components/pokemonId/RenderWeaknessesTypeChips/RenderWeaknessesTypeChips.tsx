import PokemonTypeChip from "@/components/lib/PokemonTypeChip/PokemonTypeChip";
import usePokemonTypeStyle from "@/globalHooks/usePokemonTypeStyle";
import { PokemonsTypes } from "@/types/pokemonsTypes";

interface RenderWeaknessesTypeChipsProps {
  weakness: PokemonsTypes;
}
export default function RenderWeaknessesTypeChips({
  weakness,
}: RenderWeaknessesTypeChipsProps) {
  const { firstPokemonTypeStyle } = usePokemonTypeStyle({
    pokemonTypes: [weakness],
  });

  const { color, icon } = firstPokemonTypeStyle;

  return <PokemonTypeChip color={color} icon={icon} type={weakness} />;
}
