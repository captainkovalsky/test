import {
  createAction
} from 'redux-actions';

export const ON_EAT_ERROR = 'ON_EAT_ERROR';
export const ON_DRINK_ERROR = 'ON_DRINK_ERROR';
export const FOUND_SKIPPED = 'FOUND_SKIPPED';
export const FOUND_GOOD = 'FOUND_GOOD';
export const RESET_RESULT = 'RESET_RESULT';


export const onEatError = createAction(ON_EAT_ERROR);
export const onDrinkError = createAction(ON_DRINK_ERROR);
export const onFoundSkipped = createAction(FOUND_SKIPPED);
export const onFoundGood = createAction(FOUND_GOOD);
export const onReset = createAction(RESET_RESULT);
