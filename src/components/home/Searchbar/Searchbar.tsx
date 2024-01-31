import { Search } from "lucide-react";
import useSearchbar from "./useSearchbar";

export default function Searchbar() {
  const { search, handleSearchChange, pushSearch } = useSearchbar();

  return (
    <form className="relative w-full sm:w-fit rounded-full overflow-hidden">
      <input
        className="w-full py-2 px-4 pr-12 rounded-full bg-transparent border border-red-600 focus:outline-none focus:border-red-800 transition duration-300 ease-in-out "
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search for a pokémon"
      />
      <button
        type="submit"
        onClick={(event) => pushSearch(event)}
        className="bg-red-600 right-0 absolute top-1/2 transform -translate-y-1/2 h-full w-14 flex justify-center items-center"
      >
        <Search className=" text-zinc-50 transition duration-300 ease-in-out" />
      </button>
    </form>
  );
}
