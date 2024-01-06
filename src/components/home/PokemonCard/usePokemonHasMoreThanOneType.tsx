interface usePokemonHasMoreThanOneTypeProps {
  types: string[];
}
export default function usePokemonHasMoreThanOneType({
  types,
}: usePokemonHasMoreThanOneTypeProps) {
  const thisPokemonHasMoreThanOneType = types.length > 1;

  return { thisPokemonHasMoreThanOneType };
}
