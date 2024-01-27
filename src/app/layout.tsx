import { TopAppBar } from "@/components/lib/TopAppBar/TopAppBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import LoaderScreen from "@/components/lib/LoaderScreen/LoaderScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Pokemons' Pokedex generated with Next.js 13 (app router)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<LoaderScreen />}>
      <html lang="en">
        <body className={`${inter.className} bg-zinc-950 text-zinc-50`}>
          <TopAppBar />
          <div className="mt-[73px]">{children}</div>
        </body>
      </html>
    </Suspense>
  );
}
