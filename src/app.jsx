import React from 'react'
import '../styles/index.scss'
import pureCheckBox from './pureCheckBox'
import Result from './pureResult'

export default ({users, onSubmit, pristine, reset, submitting,onReset, result}) => {
  return (
    <form onSubmit={onSubmit}>
    <div>
      <h1>Venues found</h1>
      {users.length > 0 && users.map(u => pureCheckBox(u))}
      <div>
      <div></div>
      <Result result={result}/>
      <button type="submit" disabled={pristine || submitting}>Get results</button>
      <button type="button" disabled={pristine || submitting} onClick={onReset}>Clear Values</button>
    </div>
    </div>
    </form>
  );
};
