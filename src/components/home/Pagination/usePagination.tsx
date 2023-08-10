"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

interface usePaginationProps {}
export default function usePagination() {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPageIsHome = searchParams.get("page") === "";

  const currentePageIsFirstPage = searchParams.get("page") === "1";

  const goToNextPage = useCallback(() => {
    if (currentPageIsHome) return push(`/?page=${1}`);

    const page = Number(searchParams.get("page"));

    return push(`/?page=${page + 1}`);
  }, [currentPageIsHome, push, searchParams]);

  const goToPreviousPage = useCallback(() => {
    if (currentePageIsFirstPage) return push("/");

    const page = Number(searchParams.get("page"));

    return push(`/?page=${page - 1}`);
  }, [currentePageIsFirstPage, push, searchParams]);

  return {
    goToPreviousPage,
    goToNextPage,
  };
}
