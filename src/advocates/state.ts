import { atom, useAtom, getDefaultStore } from 'jotai';
import { loadable } from 'jotai/utils';

import { createFetchAdvocates } from './create-fetch-advocates';
import { EMPTY_ADVOCATE_RESULT, ERROR_STATE, LOADING_STATE } from './constants';
import { Advocate } from './schema';
import { useCallback } from 'react';

const defaultStore = getDefaultStore();

const searchState = atom(``);
const pageState = atom(1);

const fetchAdvocatesState = atom(createFetchAdvocates());

const previousAdvocatesState = atom<Advocate[]>([]);
const asyncAdvocatesResultState = atom(async (get) => {
  const page = get(pageState);
  const search = get(searchState);
  const { fetchAdvocates } = get(fetchAdvocatesState);

  const { errors, systemErrors, state, advocates } = await fetchAdvocates({
    page,
    search,
  });

  defaultStore.set(previousAdvocatesState, advocates);

  const result = { errors, systemErrors, state, advocates };

  return result;
});

const loadableAdvocatesResultState = loadable(asyncAdvocatesResultState);

export const usePage = () => {
  const [page, setPage] = useAtom(pageState);

  const result = { page, setPage };

  return result;
};

export const useSearch = () => {
  const [search, setJustSearch] = useAtom(searchState);
  const { setPage } = usePage();

  const setSearch = useCallback(
    (nextSearch: string) => {
      setPage(1);
      setJustSearch(nextSearch);
    },
    [setPage, setJustSearch],
  );

  const result = { search, setSearch };

  return result;
};

export const useAdvocatesResult = () => {
  const [loadableAdvocatesResult] = useAtom(loadableAdvocatesResultState);
  const [previousAdvocates] = useAtom(previousAdvocatesState);

  const { state } = loadableAdvocatesResult;

  if (state === `loading`) {
    const result = {
      ...EMPTY_ADVOCATE_RESULT,
      advocates: previousAdvocates,
      state: LOADING_STATE,
    };

    return result;
  }

  if (state === `hasError`) {
    const result = { ...EMPTY_ADVOCATE_RESULT, state: ERROR_STATE };

    return result;
  }

  const { data: result } = loadableAdvocatesResult;

  return result;
};
