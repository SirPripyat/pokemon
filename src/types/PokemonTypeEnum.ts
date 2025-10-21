export enum PokemonTypeEnum {
  NORMAL = 'normal',
  FIGHTING = 'fighting',
  FLYING = 'flying',
  POISON = 'poison',
  GROUND = 'ground',
  ROCK = 'rock',
  BUG = 'bug',
  GHOST = 'ghost',
  STEEL = 'steel',
  FIRE = 'fire',
  WATER = 'water',
  GRASS = 'grass',
  ELECTRIC = 'electric',
  PSYCHIC = 'psychic',
  ICE = 'ice',
  DRAGON = 'dragon',
  DARK = 'dark',
  FAIRY = 'fairy',
  // UNKNOWN = 'unknown',
  // SHADOW = 'shadow',
}

export const allPokemonTypes: PokemonTypeEnum[] =
  Object.values(PokemonTypeEnum);

export const getPokemonTypeLabel = (type?: PokemonTypeEnum) => {
  switch (type) {
    case PokemonTypeEnum.NORMAL:
      return 'Normal';
    case PokemonTypeEnum.FIGHTING:
      return 'Fighting';
    case PokemonTypeEnum.FLYING:
      return 'Flying';
    case PokemonTypeEnum.POISON:
      return 'Poison';
    case PokemonTypeEnum.GROUND:
      return 'Ground';
    case PokemonTypeEnum.ROCK:
      return 'Rock';
    case PokemonTypeEnum.BUG:
      return 'Bug';
    case PokemonTypeEnum.GHOST:
      return 'Ghost';
    case PokemonTypeEnum.STEEL:
      return 'Steel';
    case PokemonTypeEnum.FIRE:
      return 'Fire';
    case PokemonTypeEnum.GRASS:
      return 'Grass';
    case PokemonTypeEnum.WATER:
      return 'Water';
    case PokemonTypeEnum.ELECTRIC:
      return 'Electric';
    case PokemonTypeEnum.PSYCHIC:
      return 'Psychic';
    case PokemonTypeEnum.ICE:
      return 'Ice';
    case PokemonTypeEnum.DRAGON:
      return 'Dragon';
    case PokemonTypeEnum.DARK:
      return 'Dark';
    case PokemonTypeEnum.FAIRY:
      return 'Fairy';
    default:
      return '-';
  }
};
