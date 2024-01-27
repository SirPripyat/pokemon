import PokemonIdSection from "@/components/pokemonId/PokemonIdSection/PokemonIdSection";

interface PokemonIdPageProps {
  params: {
    pokemonId: string;
  };
}
export default function PokemonIdPage({
  params: { pokemonId },
}: PokemonIdPageProps) {
  return <PokemonIdSection pokemonId={pokemonId} />;
}
