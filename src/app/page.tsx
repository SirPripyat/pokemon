"use client";

import { AllPokemonsSection } from "@/components/home/AllPokemonsSection/AllPokemonsSection";
import usePushFirstPageOnRoute from "@/hooks/usePushFirstPageOnRoute";
import useRemovePokemonsOnFilter from "@/hooks/useRemovePokemonsOnFilter";

export default function Home() {
  usePushFirstPageOnRoute();
  useRemovePokemonsOnFilter();

  return (
    <main className="min-h-screen">
      <AllPokemonsSection />
    </main>
  );
}
