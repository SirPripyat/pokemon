"use client";

import { readAllPokemonsTypes } from "@/api/pokemonsTypes";
import PokemonTypeChip from "@/components/lib/PokemonTypeChip";
import { setStylesOfTheType } from "@/functions/setStylesOfTheType";
import { X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ButtonFilled } from "../lib/buttons/ButtonFilled";
import { ButtonOutlined } from "../lib/buttons/ButtonOutlined";
import { useRouter } from "next/navigation";

interface FilterPokemonsModalProps {
  isOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FilterPokemonsModal({
  isOpen,
  setModalIsOpen,
}: FilterPokemonsModalProps) {
  const [allTypes, setAllTypes] = useState([]);

  useEffect(() => {
    const fetchAllTypes = async () => {
      const allTypes = await readAllPokemonsTypes();
      setAllTypes(allTypes);
    };
    fetchAllTypes();
  }, []);

  const closeModal = () => {
    setModalIsOpen(!isOpen);
  };

  const router = useRouter();

  const onFilterPokemons = () => {
    closeModal();
    router.refresh();
  };

  return isOpen ? (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-zinc-950/80 z-50">
        <div className="fixed bottom-0 w-full bg-zinc-900 px-4 pt-6 pb-10 rounded-t-3xl flex flex-col gap-6">
          <div className="flex justify-between items-center w-full">
            <h1 className=" text-2xl font-bold">Filtrar</h1>
            <button className="flex justify-center items-center">
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
            <div className="flex flex-wrap gap-2">
              {allTypes.map((type: any, index: number) => {
                const getTypeStyles = setStylesOfTheType(type.name);

                return (
                  <PokemonTypeChip
                    key={index}
                    type={type.name}
                    color={getTypeStyles?.color}
                    icon={getTypeStyles?.icon}
                    hoverColor={getTypeStyles?.hoverColor}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full flex gap-4 justify-end">
            <ButtonOutlined.Root onClick={() => closeModal()}>
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
