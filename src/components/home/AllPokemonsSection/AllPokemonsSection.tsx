"use client";

import { ComponentsWrapper } from "../../lib/ComponentsWrapper";
import Pagination from "../Pagination/Pagination";
import Pokemons from "../Pokemons/Pokemons";
import TopContent from "../TopContent/TopContent";

export function AllPokemonsSection() {
  return (
    <>
      <ComponentsWrapper>
        <TopContent />
        <Pokemons />
        <Pagination />
      </ComponentsWrapper>
    </>
  );
}
