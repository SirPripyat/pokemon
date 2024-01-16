"use client";

import useCreateQueryString from "@/hooks/useCreateQueryString";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function usePagination() {
  const searchParams = useSearchParams();
  const getCurrentPage = Number(searchParams.get("page"));
  const { push } = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useCreateQueryString();

  const goToNextPage = () => {
    const nextPage = getCurrentPage + 1;

    return push(`${pathname}?${createQueryString("page", `${nextPage}`)}`);
  };

  const goToPreviousPage = () => {
    const previousPage = getCurrentPage - 1;

    return push(`${pathname}?${createQueryString("page", `${previousPage}`)}`);
  };

  return {
    goToPreviousPage,
    goToNextPage,
  };
}
