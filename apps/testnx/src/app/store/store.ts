// External dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Local dependencies
import { keysReducer, resultsReducer } from '../reducers';

const appReducer = combineReducers({
  keys: keysReducer,
  results: resultsReducer
});

export const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
