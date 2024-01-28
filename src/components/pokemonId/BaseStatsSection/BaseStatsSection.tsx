import { usePokemonIdDataStore } from "@/store/pokemonIdDataStore";
import StatsBar from "../StatsBar/StatsBar";
import { StatsName } from "@/types/statsName";
import Title from "@/components/lib/Title";
import PokemonIdSectionWrapper from "../PokemonIdSectionWrapper/PokemonIdSectionWrapper";

export default function BaseStatsSection() {
  const { pokemonIdData } = usePokemonIdDataStore();

  const baseStatsExists = pokemonIdData?.baseStats;

  const getBaseStats =
    baseStatsExists &&
    Object.entries(pokemonIdData?.baseStats).map(([key, value]) => ({
      name: key as StatsName,
      value,
    }));

  return (
    <PokemonIdSectionWrapper>
      <Title>Base Stats</Title>
      <div className="flex flex-col gap-2">
        {getBaseStats?.map((stat, index) => <StatsBar {...stat} key={index} />)}
      </div>
    </PokemonIdSectionWrapper>
  );
}
