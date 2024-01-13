import { usePokemonDataStore } from "@/store/pokemonDataStore";
import Searchbar from "../Searchbar/Searchbar";

export default function TopContent() {
  const { pokemonData } = usePokemonDataStore();

  const getTotalPokemon = pokemonData && pokemonData.numberOfPokemons;

  return (
    <div className="w-full flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
      <h1 className="text-2xl">
        <span className="font-bold">{getTotalPokemon} </span>
        Pokémons
      </h1>
      <Searchbar />
    </div>
  );
}
