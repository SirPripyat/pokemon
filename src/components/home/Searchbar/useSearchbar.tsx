import useCreateQueryString from "@/hooks/useCreateQueryString";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function useSearchbar() {
  const [search, setSearch] = useState("");
  const { push } = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useCreateQueryString();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);

    return ifSearchbarIsEmptyPushToHome(value);
  };

  const ifSearchbarIsEmptyPushToHome = (value: string) =>
    !value
      ? push("/")
      : push(`${pathname}?${createQueryString("search", `${value}`)}`);

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
