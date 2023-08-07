"use client";

import { Filter } from "lucide-react";
import { ComponentsWrapper } from "../lib/ComponentsWrapper";
import { ButtonOutlined } from "../lib/buttons/ButtonOutlined";
import { ButtonOutlinedIcon } from "../lib/buttons/ButtonOutlined/ButtonOutlinedIcon";
import Pokemons from "./Pokemons";
import FilterPokemonsModal from "./FilterPokemonsModal";
import { useState } from "react";

export function AllPokemonsSection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const clickOnFilterButton = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <ComponentsWrapper id={"#pokemons"}>
        <div className="w-full flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-between lg:items-center">
          <h2 className=" text-2xl font-bold">Pokémons</h2>
          <div className="flex flex-col gap-6 sm:flex-row">
            <ButtonOutlined.Root onClick={() => clickOnFilterButton()}>
              <ButtonOutlinedIcon icon={Filter} />
              Filtrar
            </ButtonOutlined.Root>
          </div>
        </div>
        <FilterPokemonsModal
          isOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
        <Pokemons />
      </ComponentsWrapper>
    </>
  );
}
