"use client";

import { Filter } from "lucide-react";
import { ComponentsWrapper } from "../../lib/ComponentsWrapper";
import { ButtonOutlined } from "../../lib/buttons/ButtonOutlined";
import { ButtonOutlinedIcon } from "../../lib/buttons/ButtonOutlined/ButtonOutlinedIcon";
import useOpenAndCloseFilterModal from "./useOpenAndCloseFilterModal";
import Pokemons from "../Pokemons/Pokemons";
import Pagination from "../Pagination/Pagination";

export function AllPokemonsSection() {
  const { filterModalIsOpen, openOrCloseFilterModal } =
    useOpenAndCloseFilterModal();

  return (
    <>
      <ComponentsWrapper id={"#pokemons"}>
        <div className="w-full flex flex-col justify-center items-center gap-6 ">
          <h2 className=" text-2xl font-bold">Pokémoxs</h2>
        </div>
        <Pokemons />
        <Pagination />
      </ComponentsWrapper>
    </>
  );
}
