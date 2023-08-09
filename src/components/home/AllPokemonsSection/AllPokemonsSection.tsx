"use client";

import { Filter } from "lucide-react";
import { ComponentsWrapper } from "../../lib/ComponentsWrapper";
import { ButtonOutlined } from "../../lib/buttons/ButtonOutlined";
import { ButtonOutlinedIcon } from "../../lib/buttons/ButtonOutlined/ButtonOutlinedIcon";
import FilterPokemonsModal from "../FilterPokemonsModal/FilterPokemonsModal";
import useOpenAndCloseFilterModal from "./useOpenAndCloseFilterModal";
import Pokemons from "../Pokemons/Pokemons";
import Pagination from "../Pagination/Pagination";

export function AllPokemonsSection() {
  const { filterModalIsOpen, openOrCloseFilterModal } =
    useOpenAndCloseFilterModal();

  return (
    <>
      <ComponentsWrapper id={"#pokemons"}>
        <div className="w-full flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-between lg:items-center">
          <h2 className=" text-2xl font-bold">Pokémons</h2>
          <div className="flex flex-col gap-6 sm:flex-row">
            <ButtonOutlined.Root onClick={() => openOrCloseFilterModal()}>
              <ButtonOutlinedIcon icon={Filter} />
              Filtrar
            </ButtonOutlined.Root>
          </div>
        </div>
        <FilterPokemonsModal
          isOpen={filterModalIsOpen}
          openOrCloseFilterModal={openOrCloseFilterModal}
        />
        <Pokemons />
        <Pagination />
      </ComponentsWrapper>
    </>
  );
}
