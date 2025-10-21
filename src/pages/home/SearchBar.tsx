'use client';

import { Search } from 'lucide-react';
import { useQueryParams } from '@/hooks';

export default function SearchBar() {
  const { search, setParams } = useQueryParams();

  return (
    <div className="relative w-full sm:w-fit">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-600 transition duration-300 ease-in-out" />
      <input
        className="w-full py-2 pl-12 pr-4 rounded-full bg-transparent border border-red-600 focus:outline-none focus:border-red-800 transition duration-300 ease-in-out"
        type="text"
        value={search}
        onChange={e =>
          setParams({
            search: e.target.value,
          })
        }
        placeholder="Search for a pokémon"
      />
    </div>
  );
}
