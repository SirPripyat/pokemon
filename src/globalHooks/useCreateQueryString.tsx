import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useCreateQueryString() {
  const searchParams = useSearchParams();

  const createQueryString: (name: string, value: string) => string =
    useCallback(
      (name: string, value: string): string => {
        const params = new URLSearchParams(searchParams.toString());

        params.set(name, value);

        return params.toString();
      },
      [searchParams]
    );

  const search = searchParams.get("search");
  const page = searchParams.get("page");

  const createQueryStringWithMultipleValues: (
    name: string,
    values: string[]
  ) => string = useCallback(
    (name: string, values: string[]): string => {
      const filterSearch = search ? `?search=${search}` : "";
      const filterPage = page ? `&page=${page}` : "";

      const baseUrl = `${filterSearch}${filterPage}`;

      const params = new URLSearchParams(baseUrl);

      values.forEach((value) => {
        params.append(name, value);
      });

      return params.toString();
    },
    [page, search]
  );

  return {
    createQueryString,
    createQueryStringWithMultipleValues,
  };
}
