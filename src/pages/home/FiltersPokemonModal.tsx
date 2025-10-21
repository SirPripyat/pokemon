'use client';

import { PokemonTypeChip, Modal } from '@/components';
import { ButtonFilled } from '@/components/buttons/filled';
import { ButtonOutlined } from '@/components/buttons/outlined';
import { useToggleModal } from '@/store/ToggleModal';
import { PokemonTypeUtils } from '@/utils';
import { useFetchData, useQueryParams } from '@/hooks';
import { PokemonType } from '@/types';
import { useCallback } from 'react';
import { PokemonTypesService } from '@/services';

export default function FiltersPokemonModal() {
  const { isOpen, toggle } = useToggleModal();
  const { clearTypes } = useQueryParams();

  const { data: typesData } = useFetchData<PokemonType[]>({
    initialValues: [],
    serviceFn: useCallback(signal => PokemonTypesService.findAll(signal), []),
  });

  const remove = () => {
    clearTypes();
    toggle();
  };

  return (
    isOpen && (
      <Modal title={'Filters'} onClick={toggle}>
        Select types do you want to filter:
        <div className="w-full h-80 overflow-hidden overflow-y-auto flex gap-3 flex-wrap sm:h-auto">
          {typesData.map((type, index) => (
            <PokemonTypeChip
              key={index}
              type={type.name}
              color={type.color}
              icon={PokemonTypeUtils.getIcon(type.name)}
              isFilterBehavior
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-end gap-4">
          <ButtonOutlined.Root onClick={remove}>Remove all</ButtonOutlined.Root>
          <ButtonFilled.Root onClick={toggle}>Filter</ButtonFilled.Root>
        </div>
      </Modal>
    )
  );
}
