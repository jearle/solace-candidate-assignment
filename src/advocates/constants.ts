import { Advocate } from './schema';

export const EMPTY_STATE = `EMPTY_STATE`;
export const LOADING_STATE = `LOADING_STATE`;
export const SUCCESS_STATE = `SUCCESS_STATE`;
export const ERROR_STATE = `ERROR_STATE`;

export const STATES = [
  EMPTY_STATE,
  LOADING_STATE,
  SUCCESS_STATE,
  ERROR_STATE,
] as const;

export const EMPTY_ADVOCATE_RESULT = {
  advocates: [] as Advocate[],
  state: EMPTY_STATE as (typeof STATES)[number],
  errors: [] as string[],
  systemErrors: [] as string[],
};
