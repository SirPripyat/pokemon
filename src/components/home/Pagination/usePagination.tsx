"use client";

import useValidateFiltersOnRoute from "@/hooks/useValidateFiltersOnRoute";
import { useSearchParams, useRouter } from "next/navigation";

export default function usePagination() {
  const { push } = useRouter();
  const { get } = useSearchParams();

  const currentPageIsHome = get("page") === null;

  const { searchParam } = useValidateFiltersOnRoute();

  const getCurrentPage = Number(get("page"));

  const goToNextPage = () =>
    currentPageIsHome
      ? push(`/?page=1&${searchParam}`)
      : push(`/?page=${getCurrentPage + 1}&${searchParam}`);

  const currentePageIsFirstPage = get("page") === "1";

  const goToPreviousPage = () =>
    currentePageIsFirstPage
      ? push(`/?${searchParam}`)
      : push(`/?page=${getCurrentPage - 1}&${searchParam}`);

  return {
    goToPreviousPage,
    goToNextPage,
  };
}
