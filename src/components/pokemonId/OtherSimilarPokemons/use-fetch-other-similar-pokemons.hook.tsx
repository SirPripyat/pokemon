import { usePokemonIdDataStore } from "@/store/pokemonIdDataStore";
import { PokemonCard } from "@/types/pokemon-card.type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { usePokemonsTypesFilterStore } from "@/store/pokemonsTypesFilterStore";

export default function useFetchOtherSimilarPokemons() {
  const { pokemonIdData } = usePokemonIdDataStore();

  const type = pokemonIdData?.basicInformation.pokemonTypes[0];

  const [otherSimilarPokemons, setOtherSimilarPokemons] = useState<
    PokemonCard[]
  >([]);

  const hasOtherSimilarPokemons = otherSimilarPokemons.length > 0;

  const fetchOtherSimilarPokemons = useCallback(async () => {
    if (!pokemonIdData) return;

    const name = pokemonIdData.basicInformation.name;

    return await axios
      .get(
        `${process.env.NEXT_PUBLIC_POKEDEX_API}/pokemon-type/${name}/${type}`
      )
      .then(({ data }) => setOtherSimilarPokemons(data))
      .catch((error) => console.log(error));
  }, [pokemonIdData, type]);

  useEffect(() => {
    fetchOtherSimilarPokemons();
  }, [fetchOtherSimilarPokemons]);

  const { push } = useRouter();

  const { pushPokemonsTypesFilter, removeAllPokemons } =
    usePokemonsTypesFilterStore();

  const seeMorePokemonsWithSameType = (): void => {
    if (!type) return;

    removeAllPokemons();
    pushPokemonsTypesFilter([type]);
    push(`/?types=${type}`);
  };

  return {
    type,
    otherSimilarPokemons,
    seeMorePokemonsWithSameType,
    hasOtherSimilarPokemons,
  };
}
