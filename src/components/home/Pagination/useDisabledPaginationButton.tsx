interface useDisabledPaginationButtonProps {}
import { LAST_POKEMON_PAGINATION } from "@/constants/lastPokemonPagination";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useDisabledPaginationButton({}: useDisabledPaginationButtonProps) {
  const searchParams = useSearchParams();

  const currentPageIsHome = searchParams.get("page") === null;

  const currentPageIsLastPage = useCallback(
    () => searchParams.get("page") === LAST_POKEMON_PAGINATION.toString(),
    [searchParams]
  );

  const disabledPreviousButton = useCallback(() => {
    if (currentPageIsHome) return true;

    return false;
  }, [currentPageIsHome]);

  const disabledNextButton = useCallback(() => {
    if (currentPageIsLastPage()) return true;

    return false;
  }, [currentPageIsLastPage]);

  return {
    disabledPreviousButton,
    disabledNextButton,
  };
}
