"use client";

import { AllPokemonsSection } from "@/components/home/AllPokemonsSection";
import { MainBanner } from "@/components/home/MainBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainBanner />
      <AllPokemonsSection />
    </main>
  );
}
