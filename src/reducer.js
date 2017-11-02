import venues from './service/venues';
import users from './service/users';
import * as messages from './messages';
import { createReducer } from 'redux-create-reducer'
import recycleState from 'redux-recycle'
import r from 'ramda';
const initial = {
  venues,
  users,
};

export const rootReducer = (state, action) => initial;

const result = {
  eatProblems: [],
  drinkProblems: [],
  goodVenues: [],
  skipVenues: [],
}
export const resultReducer = recycleState(
  createReducer(result, {
    [messages.ON_EAT_ERROR]: (state, { payload }) => {
      return r.assoc('eatProblems', [payload, ...state.eatProblems], state);
    },

    [messages.ON_DRINK_ERROR]: (state, { payload }) => {
      return r.assoc('drinkProblems', [payload, ...state.drinkProblems], state);
    },

    [messages.FOUND_SKIPPED]: (state, { payload }) => {
      return r.assoc('skipVenues', [payload, ...state.skipVenues], state);
    },

    [messages.FOUND_GOOD]: (state, { payload }) => {
      return r.assoc('goodVenues', [payload, ...state.goodVenues], state);
    },
  }),
  [messages.RESET_RESULT],
  result
);
