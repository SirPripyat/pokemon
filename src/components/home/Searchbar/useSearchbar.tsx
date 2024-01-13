import useValidateFiltersOnRoute from "@/hooks/useValidateFiltersOnRoute";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function useSearchbar() {
  const [search, setSearch] = useState("");

  const { pageParam } = useValidateFiltersOnRoute();

  const { replace, push } = useRouter();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);

    return ifSearchbarIsEmptyPushToHome(value);
  };

  const ifSearchbarIsEmptyPushToHome = (value: string) =>
    !value ? push("/") : replace(`?${pageParam}search=${value}`);

  const { get } = useSearchParams();
  const searchParam = get("search");

  useEffect(() => {
    const searchValue = searchParam || "";
    setSearch(searchValue);
  }, [searchParam]);

  return {
    search,
    handleSearchChange,
  };
}
