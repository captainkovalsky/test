import React from 'react'
import '../styles/index.scss'
import pureCheckBox from './pureCheckBox'

export default ({users, onSubmit, pristine, reset, submitting}) => {
  return (
    <form onSubmit={onSubmit}>
    <div>
      <h1>It Works!</h1>
      {users.length > 0 && users.map(u => pureCheckBox(u))}
      <p>Enjoy!</p>

      <div>
      <button type="submit" disabled={pristine || submitting}>Get results</button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
    </div>
    </div>
    </form>
  );
};
