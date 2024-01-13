import { Search } from "lucide-react";
import useSearchbar from "./useSearchbar";

export default function Searchbar() {
  const { search, handleSearchChange } = useSearchbar();

  return (
    <div className="w-full">
      <div className="relative">
        <input
          className="w-full py-2 px-4 pl-12 rounded-full bg-transparent border-2 border-red-600 focus:outline-none focus:border-red-800 transition duration-300 ease-in-out "
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search for a pokemon"
        />
        <Search className="left-4 absolute top-1/2 transform -translate-y-1/2 text-red-600  transition duration-300 ease-in-out" />
      </div>
    </div>
  );
}
