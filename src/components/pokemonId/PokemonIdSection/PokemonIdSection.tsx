"use client";

import ComponentsWrapper from "@/components/lib/ComponentsWrapper";
import useFecthPokemonId from "./useFecthPokemonId";
import LoaderScreen from "@/components/lib/LoaderScreen/LoaderScreen";
import PokemonThumbnail from "../PokemonThumbail/PokemonThumbail";
import BasicInformationSection from "../BasicInformationSection/BasicInformationSection";
import Divisor from "@/components/lib/Divisor/Divisor";
import BaseStatsSection from "../BaseStatsSection/BaseStatsSection";
import Weaknessess from "../Weaknessess/Weaknessess";
import OtherSimilarPokemons from "../OtherSimilarPokemons/OtherSimilarPokemons";
import EvolutionChain from "../evolution-chain/evolution-chain.component";

interface PokemonIdSectionProps {
  pokemonId: string;
}

export default function PokemonIdSection({ pokemonId }: PokemonIdSectionProps) {
  const { isLoading } = useFecthPokemonId({ pokemonId });

  const columsnDivStyle =
    "w-full gap-8 grid grid-cols-1 md:gap-10 md:grid-cols-2  lg:gap-16";

  return (
    <ComponentsWrapper>
      {isLoading && <LoaderScreen />}
      {!isLoading && (
        <>
          <div
            className={`${columsnDivStyle} md:pb-10 md:border-b-2 md:border-zinc-700`}
          >
            <PokemonThumbnail />
            <BasicInformationSection />
          </div>
          <div className={columsnDivStyle}>
            <Divisor className=" sm:hidden" />
            <BaseStatsSection />
            <Divisor className=" sm:hidden" />
            <Weaknessess />
          </div>
          <Divisor />
          <EvolutionChain />
          <OtherSimilarPokemons />
        </>
      )}
    </ComponentsWrapper>
  );
}
