import Title from "@/components/lib/Title";
import PokemonIdSectionWrapper from "../PokemonIdSectionWrapper/PokemonIdSectionWrapper";
import useFetchEvolutionChain from "./use-fetch-evolution-chain.hook";
import PokemonCard from "@/components/home/PokemonCard/PokemonCard";
import Divisor from "@/components/lib/Divisor/Divisor";
import LoaderScreen from "@/components/lib/LoaderScreen/LoaderScreen";

export default function EvolutionChain() {
  const { evolutionChain, isLoading, hasEvolution } = useFetchEvolutionChain();

  return (
    <>
      {isLoading && (
        <div className="w-full h-fit flex bg-zinc-950 justify-center items-center">
          <LoaderScreen />
        </div>
      )}
      {hasEvolution && !isLoading && (
        <>
          <PokemonIdSectionWrapper>
            <Title>Evolutions</Title>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {evolutionChain.map((poke) => (
                <PokemonCard key={poke.index} {...poke} />
              ))}
            </div>
          </PokemonIdSectionWrapper>
          <Divisor />
        </>
      )}
    </>
  );
}
