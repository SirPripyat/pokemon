import Title from "@/components/lib/Title";
import PokemonIdSectionWrapper from "../PokemonIdSectionWrapper/PokemonIdSectionWrapper";
import useFetchOtherSimilarPokemons from "./use-fetch-other-similar-pokemons.hook";
import { ButtonGhosted } from "@/components/lib/buttons/ButtonGhosted";
import PokemonCard from "@/components/home/PokemonCard/PokemonCard";

export default function OtherSimilarPokemons() {
  const {
    type,
    otherSimilarPokemons,
    seeMorePokemonsWithSameType,
    hasOtherSimilarPokemons,
  } = useFetchOtherSimilarPokemons();

  return (
    <PokemonIdSectionWrapper>
      <Title>Other {type} pokémons</Title>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {hasOtherSimilarPokemons &&
          otherSimilarPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.index} {...pokemon} />
          ))}
      </div>

      <div className="w-full flex justify-center">
        <ButtonGhosted.Root onClick={seeMorePokemonsWithSameType}>
          See more {type} pokémons
        </ButtonGhosted.Root>
      </div>
    </PokemonIdSectionWrapper>
  );
}
