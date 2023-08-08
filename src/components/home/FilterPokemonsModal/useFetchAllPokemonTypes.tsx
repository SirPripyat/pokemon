import { readAllPokemonsTypes } from "@/api/pokemonsTypes";
import { useCallback, useEffect, useState } from "react";

export default function useFetchAllPokemonsTypes() {
  const [allPokemonTypes, setAllPokemonTypes] = useState([]);

  const fetchAllPokemonsTypes = useCallback(async () => {
    const allPokemonTypes = await readAllPokemonsTypes();
    setAllPokemonTypes(allPokemonTypes);
  }, []);

  useEffect(() => {
    fetchAllPokemonsTypes();
  }, [fetchAllPokemonsTypes]);

  return { allPokemonTypes };
}
