import React from 'react'
import '../styles/index.scss'
import pureCheckBox from './pureCheckBox'
import Result from './pureResult'

export default ({eatProblems, drinkProblems, goodVenues, skipVenues, users, onSubmit, pristine, reset, submitting,onReset, result}) => {
console.log(eatProblems, drinkProblems, goodVenues, skipVenues);
  return (
    <form onSubmit={onSubmit}>
    <div>
      <h1>Venues found</h1>
      {users.length > 0 && users.map(u => pureCheckBox(u))}
      <div>
      <Result eatProblems={eatProblems}
      drinkProblems={drinkProblems}
      goodVenues={goodVenues}
      skipVenues={skipVenues}
      />
      <button type="submit" disabled={pristine || submitting}>Get results</button>
      <button type="button" disabled={pristine || submitting} onClick={onReset}>Clear Values</button>
    </div>
    </div>
    </form>
  );
};
