import { findOutWhatTypePokemonIs } from "@/functions/findOutWhatTypePokemonIs";

export const readAllPokemonsTypes = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/type").then((res) =>
    res.json()
  );

  const getAllPokemonTypes = response.results;

  const getOnlyFirstGenerationTypes = Object.keys(findOutWhatTypePokemonIs);

  const types = getAllPokemonTypes.filter((type: any, index: number) =>
    getOnlyFirstGenerationTypes.includes(type.name)
  );

  return types;
};
