"use client";

import { ComponentsWrapper } from "../../lib/ComponentsWrapper";
import Pokemons from "../Pokemons/Pokemons";

export function AllPokemonsSection() {
  return (
    <>
      <ComponentsWrapper>
        <Pokemons />
      </ComponentsWrapper>
    </>
  );
}
