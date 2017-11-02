import venues from './service/venues';
import users from './service/users';
import * as messages from './messages';
import { createReducer } from 'redux-create-reducer'
import recycleState from 'redux-recycle'
import { assoc } from 'ramda';
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
      state.eatProblems.push(payload);
      return state;
    },

    [messages.ON_DRINK_ERROR]: (state, { payload }) => {
      state.drinkProblems.push(payload);
      return state;
    },

    [messages.FOUND_SKIPPED]: (state, { payload }) => {
      state.skipVenues = (payload);
      return state;
    },

    [messages.FOUND_GOOD]: (state, { payload }) => {
      state.goodVenues = (payload);
      return state;
    },
  }),
  [messages.RESET_RESULT],
  {
    eatProblems: [],
    drinkProblems: [],
    goodVenues: [],
    skipVenues: [],
  }
);
