"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function usePagination() {
  const { push } = useRouter();
  const { get } = useSearchParams();

  const currentPageIsHome = get("page") === "";

  const currentePageIsFirstPage = get("page") === "1";

  const goToNextPage = () => {
    if (currentPageIsHome) return push(`/?page=${1}`);

    const getCurrentPage = Number(get("page"));

    return push(`/?page=${getCurrentPage + 1}`);
  };

  const goToPreviousPage = () => {
    if (currentePageIsFirstPage) return push("/");

    const getCurrentPage = Number(get("page"));

    return push(`/?page=${getCurrentPage - 1}`);
  };

  return {
    goToPreviousPage,
    goToNextPage,
  };
}
