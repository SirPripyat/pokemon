import PokemonCard from "../PokemonCard/PokemonCard";
import useFetchPokemons from "./useFetchPokemons";
import LoaderScreen from "@/components/lib/LoaderScreen/LoaderScreen";
import { usePokemonDataStore } from "@/store/pokemonDataStore";
import type { BasicInformation } from "@/types/basicInformation";

export default function Pokemons() {
  const { isLoading } = useFetchPokemons();

  const { pokemonData } = usePokemonDataStore();
  const hasPokemons = pokemonData && pokemonData.pokemons?.length > 0;
  const pokemons = pokemonData && pokemonData.pokemons;

  return (
    <>
      {isLoading && <LoaderScreen />}
      {!isLoading && (
        <>
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {hasPokemons &&
              pokemons?.map((pokemon: BasicInformation) => (
                <PokemonCard key={pokemon.index} {...pokemon} />
              ))}
          </div>
          {!hasPokemons && (
            <div className="w-full flex items-center justify-center">
              <h1 className="text-2xl font-bold">No pokémons found</h1>
            </div>
          )}
        </>
      )}
    </>
  );
}
