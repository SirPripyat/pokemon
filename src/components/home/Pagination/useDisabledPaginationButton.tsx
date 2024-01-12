interface useDisabledPaginationButtonProps {}
import { useSetLastPageStore } from "@/store/lastPageStore";
import { useSearchParams } from "next/navigation";

export default function useDisabledPaginationButton() {
  const { get } = useSearchParams();

  const thisCurrentPageIsHome = get("page") === null;

  const { lastPage } = useSetLastPageStore();

  const thisCurrentPageIsLastPage = get("page") === lastPage;

  const disabledPreviousButton = thisCurrentPageIsHome ?? false;

  const disabledNextButton = thisCurrentPageIsLastPage ?? false;

  return {
    disabledPreviousButton,
    disabledNextButton,
  };
}
