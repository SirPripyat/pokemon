import { StatsName } from '@/types';

export const baseStatsUtils = (stats: StatsName) => {
  switch (stats) {
    case 'hp':
      return {
        label: 'HP',
        color: '#D90429',
      };
    case 'attack':
      return {
        label: 'Attack',
        color: '#FB8500',
      };
    case 'defense':
      return {
        label: 'Defense',
        color: '#40916C',
      };
    case 'speed':
      return {
        label: 'Speed',
        color: '#FFDD00',
      };
    case 'specialAttack':
      return {
        label: 'Special Attack',
        color: '#A546E6',
      };
    case 'specialDefense':
      return {
        label: 'Special Defense',
        color: '#4361EE',
      };
    default:
      return {
        label: '-',
        color: '',
      };
  }
};
