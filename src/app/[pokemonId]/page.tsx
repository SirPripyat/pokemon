import ViewPokemonDetailPage from '@/pages/view-pokemon-detail/ViewPokemonDetailPage';

interface PokemonIdPageProps {
  params: {
    pokemonId: string;
  };
}
export default function PokemonIdPage({
  params: { pokemonId },
}: PokemonIdPageProps) {
  return <ViewPokemonDetailPage pokemonId={pokemonId} />;
}
