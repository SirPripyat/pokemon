import { useCallback } from "react";

interface usePokemonHasMoreThanOneTypeProps {
  types: string[];
}
export default function usePokemonHasMoreThanOneType({
  types,
}: usePokemonHasMoreThanOneTypeProps) {
  const hasMoreThanOneType = useCallback(() => types.length > 1, [types]);

  return { hasMoreThanOneType };
}
