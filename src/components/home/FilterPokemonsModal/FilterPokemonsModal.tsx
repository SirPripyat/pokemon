"use client";

import PokemonTypeChip from "@/components/lib/PokemonTypeChip/PokemonTypeChip";
import { setStylesOfTheType } from "@/functions/setStylesOfTheType";
import { X } from "lucide-react";
import { ButtonFilled } from "../../lib/buttons/ButtonFilled";
import { ButtonOutlined } from "../../lib/buttons/ButtonOutlined";
import { useRouter } from "next/navigation";
import useFetchAllPokemonsTypes from "./useFetchAllPokemonTypes";
import { useRef } from "react";
interface FilterPokemonsModalProps {
  isOpen: boolean;
  openOrCloseFilterModal: () => void;
}

export default function FilterPokemonsModal({
  isOpen,
  openOrCloseFilterModal,
}: FilterPokemonsModalProps) {
  const { allPokemonTypes } = useFetchAllPokemonsTypes();

  const router = useRouter();

  const onFilterPokemons = () => {
    openOrCloseFilterModal();
    router.refresh();
  };

  const pokemonTypeRef = useRef<HTMLButtonElement>(null);

  return isOpen ? (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-zinc-950/80 z-50">
        <div className="fixed bottom-0 w-full bg-zinc-900 px-4 pt-6 pb-10 rounded-t-3xl flex flex-col gap-6">
          <div className="flex justify-between items-center w-full">
            <h1 className=" text-2xl font-bold">Filtrar</h1>
            <button
              className="flex justify-center items-center"
              onClick={() => openOrCloseFilterModal()}
            >
              <X />
            </button>
          </div>
          {/* <div>
          <h2>Ordernar por:</h2>
          <div>
            <div>
              <input type="radio" name="order" id="order-asc" />
              <label htmlFor="order-asc">Ascendente</label>
            </div>
            <div>
              <input type="radio" name="order" id="order-desc" />
              <label htmlFor="order-desc">Descendente</label>
            </div>
          </div>
          <hr className="border-none h-[2px] bg-zinc-700" />
        </div> */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Tipos</h2>
            <div className="flex flex-wrap gap-3">
              {allPokemonTypes.map((type: any, index: number) => {
                const getTypeStyles = setStylesOfTheType(type.name);

                return (
                  <PokemonTypeChip
                    key={index}
                    type={type.name}
                    color={getTypeStyles?.color}
                    icon={getTypeStyles?.icon}
                    hoverColor={getTypeStyles?.hoverColor}
                    typeRef={pokemonTypeRef}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full flex gap-4 justify-end">
            <ButtonOutlined.Root onClick={() => openOrCloseFilterModal()}>
              Cancelar
            </ButtonOutlined.Root>
            <ButtonFilled.Root onClick={() => onFilterPokemons()}>
              Filtrar
            </ButtonFilled.Root>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
