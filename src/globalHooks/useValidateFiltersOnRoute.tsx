import { useSearchParams } from "next/navigation";

export default function useValidateFiltersOnRoute() {
  const { get } = useSearchParams();

  const pageParam = get("page") ? `page=${get("page")}&` : "";

  const searchParam = get("search") ? `search=${get("search")}&` : "";

  return {
    pageParam,
    searchParam,
  };
}
