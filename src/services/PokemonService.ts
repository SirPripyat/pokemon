import { BASE_API } from '@/constants';
import { Pokemon } from '@/types/Pokemon';
import axios, { AxiosPromise, GenericAbortSignal } from 'axios';
import {
  PokemonType,
  PokemonTypeEnum,
  PaginationQueryParamsWithTypes,
  PageableResponse,
} from '@/types';

const BASE_URL = `${BASE_API}/pokemons`;

export const findAll = (
  { page = 1, search = '', types = '' }: PaginationQueryParamsWithTypes,
  signal: GenericAbortSignal,
): AxiosPromise<PageableResponse<Pokemon>> =>
  axios.get<PageableResponse<Pokemon>>(BASE_URL, {
    params: {
      page,
      search,
      types,
    },
    signal,
  });

export const findById = (
  id: string,
  signal: GenericAbortSignal,
): AxiosPromise<Pokemon> =>
  axios.get<Pokemon>(`${BASE_URL}/${id}`, {
    signal,
  });

export const findWeaknesses = (id: string = '', signal: GenericAbortSignal) =>
  axios.get<PokemonType[]>(`${BASE_URL}/${id}/weaknesses`, {
    signal,
  });

export const findByType = (type: PokemonTypeEnum, signal: GenericAbortSignal) =>
  axios.get<Pokemon[]>(`${BASE_URL}/${type}/types`, {
    signal,
  });
