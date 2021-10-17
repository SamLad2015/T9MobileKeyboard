// Local dependencies
import { LOAD_KEYS, LOAD_RESULTS, RESET_RESULTS, ADD_RESULT, SELECT_PREDICTION} from '../constants/constants';

export const loadKeys = (payload:any) => ({
  type: LOAD_KEYS,
  payload
});

export const loadResults = (payload:any) => ({
  type: LOAD_RESULTS,
  payload
});

export const resetResults = () => ({
  type: RESET_RESULTS
});

export const addResult = (payload: any) => ({
  type: ADD_RESULT,
  payload
});

export const selectPrediction = (payload: any) => ({
  type: SELECT_PREDICTION,
  payload
});
