"use client";

import { AllPokemonsSection } from "@/components/home/AllPokemonsSection/AllPokemonsSection";
import useRemovePokemonsOnFilter from "@/globalHooks/useRemovePokemonsOnFilter";

export default function Home() {
  useRemovePokemonsOnFilter();

  return (
    <main className="min-h-screen">
      <AllPokemonsSection />
    </main>
  );
}
