"use client";

import { ComponentsWrapper } from "../../lib/ComponentsWrapper";
import Pagination from "../Pagination/Pagination";
import Pokemons from "../Pokemons/Pokemons";

export function AllPokemonsSection() {
  return (
    <>
      <ComponentsWrapper>
        <Pokemons />
        <Pagination />
      </ComponentsWrapper>
    </>
  );
}
