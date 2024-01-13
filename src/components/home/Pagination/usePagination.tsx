"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function usePagination() {
  const { push } = useRouter();
  const { get } = useSearchParams();

  const currentPageIsHome = get("page") === "";

  const searchParam = get("search");

  const getSearchParam = searchParam ? `search=${searchParam}` : "";

  const goToNextPage = () => {
    if (currentPageIsHome) return push(`/?page=1&${getSearchParam}`);

    const getCurrentPage = Number(get("page"));

    push(`/?page=${getCurrentPage + 1}&${getSearchParam}`);
  };

  const currentePageIsFirstPage = get("page") === "1";

  const goToPreviousPage = () => {
    if (currentePageIsFirstPage) return push(`/?${getSearchParam}`);

    const getCurrentPage = Number(get("page"));

    push(`/?page=${getCurrentPage - 1}&${getSearchParam}`);
  };

  return {
    goToPreviousPage,
    goToNextPage,
  };
}
