'use client';

import { useEffect, useState } from 'react';
import { AxiosPromise, GenericAbortSignal } from 'axios';

type Props<T> = {
  initialValues: T;
  serviceFn: (signal: GenericAbortSignal) => AxiosPromise<T>;
  shouldRender?: boolean;
};

export const useFetchData = <T>({
  initialValues,
  serviceFn,
  shouldRender = true,
}: Props<T>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>(initialValues);

  useEffect(() => {
    if (!shouldRender) return;

    const controller = new AbortController();

    setIsLoading(true);

    serviceFn(controller.signal)
      .then(({ data }) => setData(data))
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [serviceFn, shouldRender]);

  return {
    isLoading,
    data,
  };
};
