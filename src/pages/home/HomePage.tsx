import { ComponentsWrapper } from '@/components';
import PokemonsSection from '@/pages/home/PokemonsSection';
import FiltersPokemonModal from '@/pages/home/FiltersPokemonModal';

export const HomePage = () => {
  return (
    <ComponentsWrapper className={'min-h-screen'}>
      <PokemonsSection />
      <FiltersPokemonModal />
    </ComponentsWrapper>
  );
};
