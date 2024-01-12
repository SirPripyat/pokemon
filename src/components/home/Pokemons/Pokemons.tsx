import { Pokemon } from "@/types/pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import useFetchPokemons from "./useFetchPokemons";
import LoaderScreen from "@/components/lib/LoaderScreen/LoaderScreen";

export default function Pokemons() {
  const { pokemons, isLoading } = useFetchPokemons();

  return (
    <>
      {isLoading && <LoaderScreen />}
      {!isLoading && (
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {pokemons.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon.index} {...pokemon} />
          ))}
        </div>
      )}
    </>
  );
}
