import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { keysReducer, resultsReducer } from "../reducers";

const reducer = combineReducers({
  keys: keysReducer,
  results: resultsReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));

export default store;
