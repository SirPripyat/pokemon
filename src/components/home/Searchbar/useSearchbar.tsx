import useCreateQueryString from "@/globalHooks/useCreateQueryString";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function useSearchbar() {
  const [search, setSearch] = useState("");
  const { push } = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useCreateQueryString();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearch(value);
  };

  const { get } = useSearchParams();
  const searchParam = get("search");

  useEffect(() => {
    const searchValue = searchParam || "";
    setSearch(searchValue);
  }, [searchParam]);

  const pushSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();

    return push(`${pathname}?${createQueryString("search", `${search}`)}`);
  };

  return {
    search,
    handleSearchChange,
    pushSearch,
  };
}
