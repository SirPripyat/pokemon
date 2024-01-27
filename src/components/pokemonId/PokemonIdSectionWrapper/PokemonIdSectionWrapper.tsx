interface PokemonIdSectionWrapperProps {
  children: React.ReactNode;
}
export default function PokemonIdSectionWrapper({
  children,
}: PokemonIdSectionWrapperProps) {
  return <section className="flex flex-col gap-4 w-full">{children}</section>;
}
