"use client";

import { ComponentsWrapper } from "../../lib/ComponentsWrapper";
import Pagination from "../Pagination/Pagination";
import Pokemons from "../Pokemons/Pokemons";
import Searchbar from "../Searchbar/Searchbar";

export function AllPokemonsSection() {
  return (
    <>
      <ComponentsWrapper>
        <Searchbar />
        <Pokemons />
        <Pagination />
      </ComponentsWrapper>
    </>
  );
}
