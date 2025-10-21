import Bug from '../../public/name=Bug.svg';
import Dragon from '../../public/name=Dragon.svg';
import Electric from '../../public/name=Electric.svg';
import Fairy from '../../public/name=Fairy.svg';
import Fighting from '../../public/name=Fighting.svg';
import Fire from '../../public/name=Fire.svg';
import Flying from '../../public/name=Flying.svg';
import Ghost from '../../public/name=Ghost.svg';
import Grass from '../../public/name=Grass.svg';
import Ground from '../../public/name=Ground.svg';
import Ice from '../../public/name=Ice.svg';
import Normal from '../../public/name=Normal.svg';
import Poison from '../../public/name=Poison.svg';
import Psychic from '../../public/name=Psychic.svg';
import Rock from '../../public/name=Rock.svg';
import Steel from '../../public/name=Steel.svg';
import Water from '../../public/name=Water.svg';
import Dark from '../../public/name=Dark.svg';
import { PokemonTypeEnum } from '@/types';
import { StaticImageData } from 'next/image';

export const getIcon = (type?: PokemonTypeEnum): StaticImageData => {
  switch (type) {
    case PokemonTypeEnum.NORMAL:
      return Normal;
    case PokemonTypeEnum.FIGHTING:
      return Fighting;
    case PokemonTypeEnum.FLYING:
      return Flying;
    case PokemonTypeEnum.POISON:
      return Poison;
    case PokemonTypeEnum.GROUND:
      return Ground;
    case PokemonTypeEnum.ROCK:
      return Rock;
    case PokemonTypeEnum.GHOST:
      return Ghost;
    case PokemonTypeEnum.STEEL:
      return Steel;
    case PokemonTypeEnum.FIRE:
      return Fire;
    case PokemonTypeEnum.GRASS:
      return Grass;
    case PokemonTypeEnum.ELECTRIC:
      return Electric;
    case PokemonTypeEnum.PSYCHIC:
      return Psychic;
    case PokemonTypeEnum.ICE:
      return Ice;
    case PokemonTypeEnum.DRAGON:
      return Dragon;
    case PokemonTypeEnum.DARK:
      return Dark;
    case PokemonTypeEnum.BUG:
      return Bug;
    case PokemonTypeEnum.WATER:
      return Water;
    case PokemonTypeEnum.FAIRY:
      return Fairy;
    default:
      return Water;
  }
};
