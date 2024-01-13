import useValidateFiltersOnRoute from "@/hooks/useValidateFiltersOnRoute";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useSearchbar() {
  const [search, setSearch] = useState("");

  const { pageParam, searchParam } = useValidateFiltersOnRoute();

  const { replace, push } = useRouter();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);

    return ifSearchbarIsEmptyPushToHome(value);
  };

  const ifSearchbarIsEmptyPushToHome = (value: string) =>
    !value ? push("/") : replace(`?${pageParam}search=${value}`);

  return {
    search,
    handleSearchChange,
  };
}
