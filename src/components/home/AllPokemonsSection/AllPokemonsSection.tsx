"use client";

import { ComponentsWrapper } from "../../lib/ComponentsWrapper";
import Pokemons from "../Pokemons/Pokemons";
import Pagination from "../Pagination/Pagination";

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
