"use client";

import { AllPokemonsSection } from "@/components/home/AllPokemonsSection/AllPokemonsSection";
import usePushFirstPageOnRoute from "@/globalHooks/usePushFirstPageOnRoute";
import useRemovePokemonsOnFilter from "@/globalHooks/useRemovePokemonsOnFilter";

export default function Home() {
  usePushFirstPageOnRoute();
  useRemovePokemonsOnFilter();

  return (
    <main className="min-h-screen">
      <AllPokemonsSection />
    </main>
  );
}
