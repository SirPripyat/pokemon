import { BASE_API } from '@/constants';
import axios, { GenericAbortSignal } from 'axios';
import { PokemonType } from '@/types';

const BASE_URL = `${BASE_API}/pokemon-types`;

export const findAll = (signal: GenericAbortSignal) =>
  axios.get<PokemonType[]>(BASE_URL, {
    signal,
  });
