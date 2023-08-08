import { RefObject, useCallback, useMemo, useState } from "react";

interface useSelectedPokemonTypeChipProps {
  typeRef: RefObject<HTMLButtonElement> | undefined;
}

export default function useSelectedPokemonTypeChip({
  typeRef,
}: useSelectedPokemonTypeChipProps) {
  const [typeChipIsSelected, setTypeChipIsSelected] = useState(false);

  const valueTypeChip = useMemo(() => [] as string[], []);

  const getValueAndSelectedTypeChip = useCallback(() => {
    if (typeRef?.current?.value && !typeChipIsSelected) {
      setTypeChipIsSelected(true);
      valueTypeChip.push(typeRef.current.value);
      return;
    }
    setTypeChipIsSelected(false);
  }, [typeRef, typeChipIsSelected, valueTypeChip]);

  return {
    typeChipIsSelected,
    valueTypeChip,
    getValueAndSelectedTypeChip,
  };
}
