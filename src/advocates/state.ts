import { atom, useAtom } from 'jotai';
import { loadable } from 'jotai/utils';

import { createFetchAdvocates } from './create-fetch-advocates';
import { EMPTY_ADVOCATE_RESULT, ERROR_STATE, LOADING_STATE } from './constants';

const fetchAdvocatesState = atom(createFetchAdvocates());

const asyncAdvocatesResultState = atom(async (get) => {
  const { fetchAdvocates } = get(fetchAdvocatesState);

  const { errors, systemErrors, state, advocates } = await fetchAdvocates();

  const result = { errors, systemErrors, state, advocates };

  return result;
});

const loadableAdvocatesResultState = loadable(asyncAdvocatesResultState);

export const useAdvocatesResult = () => {
  const [loadableAdvocatesResult] = useAtom(loadableAdvocatesResultState);

  const { state } = loadableAdvocatesResult;

  if (state === `loading`) {
    const result = { ...EMPTY_ADVOCATE_RESULT, state: LOADING_STATE };

    return result;
  }

  if (state === `hasError`) {
    const result = { ...EMPTY_ADVOCATE_RESULT, state: ERROR_STATE };

    return result;
  }

  const { data: result } = loadableAdvocatesResult;

  return result;
};
