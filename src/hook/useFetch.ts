import { useCallback, useEffect, useRef, useState } from 'react';
import { ClothesType } from '../types';

interface DataState {
  loading: boolean;
  data: ClothesType[];
  error: string | null;
}

export const useFetch = (API: string, filterQuery?: string) => {
  const [dataState, setDataState] = useState<DataState>({
    data: [],
    loading: false,
    error: null,
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const handleFetch = useCallback(async () => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    setDataState((prev) => ({
      ...prev,
      loading: true,
    }));

    try {
      const response = await fetch(API, {
        mode: 'cors',
        headers: {
          'x-api-key': 'MjE5ODcyYTg0YzNkNTExNzc4YTkzYzE=',
        },
        signal: abortControllerRef.current?.signal,
      });
      const data = await response.json();

      if (filterQuery) {
        const filteredData = data.filter((item: ClothesType) =>
          item.clothes_name.toLowerCase().includes(filterQuery.toLowerCase())
        );
        setDataState((prev) => ({
          ...prev,
          loading: false,
          data: filteredData,
        }));
      } else {
        setDataState((prev) => ({
          ...prev,
          loading: false,
          data: data,
        }));
      }
    } catch (error) {
      if ((error as Error).name === 'AbortError') {
        return;
      }

      setDataState((prev) => ({
        ...prev,
        loading: false,
        error: (error as Error).message,
      }));
    }
  }, [API, filterQuery]);

  useEffect(() => {
    handleFetch();
  }, [API]);

  return {
    ...dataState,
  };
};
