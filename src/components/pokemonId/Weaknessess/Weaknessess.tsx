import Title from "@/components/lib/Title";
import PokemonIdSectionWrapper from "../PokemonIdSectionWrapper/PokemonIdSectionWrapper";
import useFetchWeaknesses from "./use-fetch-weaknessess.hooke";
import RenderWeaknessesTypeChips from "../RenderWeaknessesTypeChips/RenderWeaknessesTypeChips";

export default function Weaknessess() {
  const { pokemonWeaknessess } = useFetchWeaknesses();

  return (
    <PokemonIdSectionWrapper>
      <Title>Weaknesses</Title>
      <div className="flex gap-2 flex-wrap">
        {pokemonWeaknessess &&
          pokemonWeaknessess.map((weakness) => (
            <RenderWeaknessesTypeChips weakness={weakness} key={weakness} />
          ))}
      </div>
    </PokemonIdSectionWrapper>
  );
}
