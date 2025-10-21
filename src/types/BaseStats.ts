export type StatsName =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'specialAttack'
  | 'specialDefense'
  | 'speed';

export type BaseStats = {
  id: string;
  pokemonId: string;
} & {
  [key in StatsName]: number;
};
