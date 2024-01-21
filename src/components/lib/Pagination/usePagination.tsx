"use client";

import useCreateQueryString from "@/globalHooks/useCreateQueryString";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function usePagination() {
  const searchParams = useSearchParams();
  const getCurrentPage = Number(searchParams.get("page"));
  const { push } = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useCreateQueryString();

  const isHomePage = getCurrentPage === 0;

  const goToNextPage = (): void => {
    const nextPage = isHomePage ? 2 : getCurrentPage + 1;

    const pageParams = createQueryString("page", `${nextPage}`);

    const url = `${pathname}?${pageParams}`;

    return push(url);
  };

  const isSecondPageOfPagination = getCurrentPage === 2;

  const goToPreviousPage = (): void => {
    const previousPage = getCurrentPage - 1;

    return isSecondPageOfPagination
      ? push("/")
      : push(`${pathname}?${createQueryString("page", `${previousPage}`)}`);
  };

  return {
    goToPreviousPage,
    goToNextPage,
  };
}
