import { usePokemonDataStore } from "@/store/pokemonDataStore";
import Searchbar from "../Searchbar/Searchbar";
import { ButtonOutlined } from "@/components/lib/buttons/ButtonOutlined";
import { Filter } from "lucide-react";
import Modal from "@/components/lib/Modal/Modal";
import { useToggleFiltersPokemonModalStore } from "@/store/toggleFiltersPokemonModalStore";

export default function TopContent() {
  const { pokemonData } = usePokemonDataStore();

  const getTotalPokemon = pokemonData && pokemonData.numberOfPokemons;

  const { toggleFiltersPokemonModal } = useToggleFiltersPokemonModalStore();

  return (
    <div className="w-full flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
      <h1 className="text-2xl">
        <span className="font-bold">{getTotalPokemon} </span>
        Pokémons
      </h1>
      <div className="w-full flex flex-col items-center gap-4 sm:flex-row sm:w-fit">
        <Searchbar />
        <ButtonOutlined.Root onClick={toggleFiltersPokemonModal}>
          <ButtonOutlined.Icon icon={Filter} />
          Filters
        </ButtonOutlined.Root>
      </div>
    </div>
  );
}
