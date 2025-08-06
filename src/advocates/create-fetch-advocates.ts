import { EMPTY_ADVOCATE_RESULT, ERROR_STATE, SUCCESS_STATE } from './constants';
import { advocateResponseSchema, AdvocateResult } from './schema';

const ADVOCATES_API_PATH = `/api/advocates`;

export const createFetchAdvocates = () => {
  const fetchAdvocates = async () => {
    const response = await fetch(ADVOCATES_API_PATH);
    const json = await response.json();

    const parsedJSON = advocateResponseSchema.safeParse(json);
    const { success } = parsedJSON;
    if (!success) {
      const { error } = parsedJSON;
      const state = ERROR_STATE;
      const result: AdvocateResult = {
        ...EMPTY_ADVOCATE_RESULT,
        state,
        errors: [error.message],
      };

      return result;
    }

    const { data: advocatesResponse } = parsedJSON;
    const { data, errors, systemErrors } = advocatesResponse;
    const { advocates } = data;
    const state =
      errors.length === 0 && systemErrors.length === 0
        ? SUCCESS_STATE
        : ERROR_STATE;

    const result: AdvocateResult = {
      ...EMPTY_ADVOCATE_RESULT,
      state,
      advocates,
    };

    return result;
  };

  const result = { fetchAdvocates };

  return result;
};
