import {
  useQueryStates,
  parseAsString,
  parseAsInteger,
  parseAsArrayOf,
} from 'nuqs';
import { PokemonTypeEnum } from '@/types';

export const useQueryParams = () => {
  const [{ search, page, types }, setParams] = useQueryStates({
    search: parseAsString.withDefault(''),
    page: parseAsInteger.withDefault(1),
    types: parseAsArrayOf(parseAsString).withDefault([]),
  });

  const setFilterPokemonType = (type: PokemonTypeEnum) =>
    types.includes(type)
      ? setParams({
          types: types.filter(t => t !== type),
        })
      : setParams({
          types: [...types, type],
        });

  const clearTypes = () =>
    setParams({
      types: [],
    });

  return {
    search,
    page,
    setParams,
    types,
    setFilterPokemonType,
    clearTypes,
  };
};
