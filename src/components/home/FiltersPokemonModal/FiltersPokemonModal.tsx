"use client";

import Modal from "@/components/lib/Modal/Modal";
import PokemonTypeChip from "@/components/lib/PokemonTypeChip/PokemonTypeChip";
import { ButtonFilled } from "@/components/lib/buttons/ButtonFilled";
import { ButtonOutlined } from "@/components/lib/buttons/ButtonOutlined";
import { findOutWhatTypePokemonIs } from "@/functions/findOutWhatTypePokemonIs";
import useFiltersPokemonModal from "./useFiltersPokemonModal";
import { useToggleFiltersPokemonModalStore } from "@/store/toggleFiltersPokemonModalStore";

export default function FiltersPokemonModal() {
  const { isFiltersPokemonModalOpen, toggleFiltersPokemonModal } =
    useToggleFiltersPokemonModalStore();

  const {
    pokemonTypes,
    shootPokemonsTypesFilter,
    removeAllPokemonsTypesFilterOnRoute,
  } = useFiltersPokemonModal();

  return (
    isFiltersPokemonModalOpen && (
      <Modal title={"Filters"} onClick={toggleFiltersPokemonModal}>
        Select types do you want to filter:
        <div className="w-full h-80 overflow-hidden overflow-y-auto flex gap-3 flex-wrap sm:h-auto">
          {pokemonTypes.map((type, index) => (
            <PokemonTypeChip
              key={index}
              type={type}
              color={findOutWhatTypePokemonIs[type].color}
              icon={findOutWhatTypePokemonIs[type].icon}
              isBehaviorOfFilter
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-end gap-4">
          <ButtonOutlined.Root onClick={removeAllPokemonsTypesFilterOnRoute}>
            Remove all
          </ButtonOutlined.Root>
          <ButtonFilled.Root onClick={shootPokemonsTypesFilter}>
            Filter
          </ButtonFilled.Root>
        </div>
      </Modal>
    )
  );
}
