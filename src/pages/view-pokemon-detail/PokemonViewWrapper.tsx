import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function PokemonViewWrapper({ children }: Props) {
  return (
    <section className="flex flex-col gap-4 w-full h-full">{children}</section>
  );
}
