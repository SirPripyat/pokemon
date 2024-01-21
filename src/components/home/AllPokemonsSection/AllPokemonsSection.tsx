"use client";

import ComponentsWrapper from "@/components/lib/ComponentsWrapper";
import TopContent from "@/components/home/TopContent/TopContent";
import FiltersPokemonModal from "@/components/home/FiltersPokemonModal/FiltersPokemonModal";
import Pokemons from "@/components/home/Pokemons/Pokemons";
import Pagination from "@/components/lib/Pagination/Pagination";

export function AllPokemonsSection() {
  return (
    <>
      <ComponentsWrapper>
        <TopContent />
        <FiltersPokemonModal />
        <Pokemons />
        <Pagination />
      </ComponentsWrapper>
    </>
  );
}
