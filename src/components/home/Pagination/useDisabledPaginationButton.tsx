interface useDisabledPaginationButtonProps {}
import { LAST_POKEMON_PAGINATION } from "@/constants/lastPokemonPagination";
import { useSearchParams } from "next/navigation";

export default function useDisabledPaginationButton() {
  const { get } = useSearchParams();

  const thisCurrentPageIsHome = get("page") === null;

  const thisCurrentPageIsLastPage =
    get("page") === LAST_POKEMON_PAGINATION.toString();

  const disabledPreviousButton = () => thisCurrentPageIsHome ?? false;

  const disabledNextButton = () => thisCurrentPageIsLastPage ?? false;

  return {
    disabledPreviousButton,
    disabledNextButton,
  };
}
