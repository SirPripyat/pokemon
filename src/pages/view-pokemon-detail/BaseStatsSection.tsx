import StatsBar from './StatsBar';
import { BaseStats, StatsName } from '@/types';
import { Title } from '@/components';
import PokemonViewWrapper from './PokemonViewWrapper';

type Props = {
  stats: BaseStats;
};

export default function BaseStatsSection({ stats }: Props) {
  const baseStats = Object.entries(stats).filter(
    ([_, value]) => typeof value !== 'string',
  );

  return (
    <PokemonViewWrapper>
      <Title>Base Stats</Title>
      <div className="flex flex-col gap-2">
        {baseStats.map(([name, value]) => (
          <StatsBar
            key={name}
            name={name as StatsName}
            value={value as number}
          />
        ))}
      </div>
    </PokemonViewWrapper>
  );
}
