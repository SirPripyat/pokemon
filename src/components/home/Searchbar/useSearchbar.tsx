import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function useSearchbar() {
  const [search, setSearch] = useState("");

  const { get } = useSearchParams();

  const { replace, push } = useRouter();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);

    if (!value) return push("/");

    const pageParam = get("page") ? `page=${get("page")}&` : "";

    replace(`?${pageParam}search=${value}`);
  };

  return {
    search,
    handleSearchChange,
  };
}
