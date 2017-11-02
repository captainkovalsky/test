import React from 'react'
import { Field } from 'redux-form'

export default (user) => {
return (
  <div>
    <label htmlFor={user.name}>{user.name}
      <Field name={user.name} id={user.name} key={user.name} value={user.name} component="input" type="checkbox"/>
    </label>
  </div>
);
}
