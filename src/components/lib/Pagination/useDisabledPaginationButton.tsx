import { usePokemonDataStore } from "@/store/pokemonDataStore";
import { useSearchParams } from "next/navigation";

export default function useDisabledPaginationButton() {
  const { get } = useSearchParams();

  const thisCurrentPageIsHome = get("page") === null;

  const { pokemonData } = usePokemonDataStore();
  const lastPage = pokemonData && pokemonData.totalPages;

  const pageParam = get("page") || "1";

  const thisCurrentPageIsLastPage = pageParam === lastPage?.toString();

  const disabledPreviousButton = thisCurrentPageIsHome ?? false;

  const disabledNextButton = thisCurrentPageIsLastPage ?? false;

  return {
    disabledPreviousButton,
    disabledNextButton,
  };
}
