import React from 'react'
import ReactDOM from 'react-dom'
import ConnectedApp from './ConnectedApp'
import { Provider } from 'react-redux'
import { reducer as form } from 'redux-form'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { resultReducer, rootReducer } from './reducer'
const store = createStore(combineReducers({
      result: resultReducer,
      root: rootReducer,
      form,
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp/>
  </Provider>
  , document.getElementById('app'));
