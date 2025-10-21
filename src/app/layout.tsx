import { TopAppBar } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokédex',
  description: "Pokemons' Pokedex generated with Next.js 15 (app router)",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50`}>
        <TopAppBar />
        <NuqsAdapter>
          <div className="mt-[73px]">{children}</div>
        </NuqsAdapter>
      </body>
    </html>
  );
}
