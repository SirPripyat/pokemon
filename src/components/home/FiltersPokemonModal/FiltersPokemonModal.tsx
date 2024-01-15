"use client";

import Modal from "@/components/lib/Modal/Modal";
import PokemonType from "@/components/lib/PokemonTypeChip/PokemonTypeChip";
import { ButtonFilled } from "@/components/lib/buttons/ButtonFilled";
import { ButtonOutlined } from "@/components/lib/buttons/ButtonOutlined";
import { findOutWhatTypePokemonIs } from "@/functions/findOutWhatTypePokemonIs";
import { usePokemonsTypesFilterStore } from "@/store/pokemonsTypesFilterStore";
import { useToggleFiltersPokemonModalStore } from "@/store/toggleFiltersPokemonModalStore";
import { PokemonsTypes } from "@/types/pokemonsTypes";
import { useRouter } from "next/navigation";

export default function FiltersPokemonModal() {
  const { isFiltersPokemonModalOpen, toggleFiltersPokemonModal } =
    useToggleFiltersPokemonModalStore();

  const pokemonTypes = Object.keys(findOutWhatTypePokemonIs) as PokemonsTypes[];

  const { pokemonsTypesFilter } = usePokemonsTypesFilterStore();

  const { push } = useRouter();

  const shootPokemonsTypesFilter = () => {
    if (!pokemonsTypesFilter) return;

    let filterParam = "";

    pokemonsTypesFilter.forEach((type) => {
      filterParam += `&types=${type}`;
    });

    push(`?${filterParam}`);
    toggleFiltersPokemonModal();
  };

  return (
    isFiltersPokemonModalOpen && (
      <Modal title={"Filters"} onClick={toggleFiltersPokemonModal}>
        Select types do you want to filter:
        <div className="w-full h-80 overflow-hidden overflow-y-auto flex gap-3 flex-wrap sm:h-auto">
          {pokemonTypes.map((type, index) => (
            <PokemonType
              key={index}
              type={type}
              color={findOutWhatTypePokemonIs[type].color}
              icon={findOutWhatTypePokemonIs[type].icon}
              isBehaviorOfFilter
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-end gap-4">
          <ButtonOutlined.Root onClick={toggleFiltersPokemonModal}>
            Cancel
          </ButtonOutlined.Root>
          <ButtonFilled.Root onClick={shootPokemonsTypesFilter}>
            Filter
          </ButtonFilled.Root>
        </div>
      </Modal>
    )
  );
}
