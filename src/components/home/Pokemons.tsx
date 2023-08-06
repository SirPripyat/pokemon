import { readAllPokemons } from "@/api/pokemons";
import { PokemonCard } from "./PokemonCard";
import { PokemonType } from "@/types";

interface PokemonsProps {}
export async function Pokemons(props: PokemonsProps) {
  const pokemons: PokemonType[] = await readAllPokemons();

  return (
    <>
      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {pokemons.map((poke: PokemonType) => {
          return (
            <PokemonCard
              key={poke.pokedexNumber}
              pokedex={poke.pokedexNumber}
              name={poke.name}
              types={poke.types}
              image={poke.image}
            />
          );
        })}
      </div>
    </>
  );
}
