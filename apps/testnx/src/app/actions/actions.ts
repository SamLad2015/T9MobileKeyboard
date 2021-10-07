// Local dependencies
import { LOAD_KEYS, LOAD_RESULTS, RESET_RESULTS, ADD_RESULT, SELECT_PREDICTION} from '../constants/constants';

export const LoadKeys = (payload:any) => ({
  type: LOAD_KEYS,
  payload
});

export const LoadResults = (payload:any) => ({
  type: LOAD_RESULTS,
  payload
});

export const ResetResults = () => ({
  type: RESET_RESULTS
});

export const AddResult = (payload: any) => ({
  type: ADD_RESULT,
  payload
});

export const SelectPrediction = (payload: any) => ({
  type: SELECT_PREDICTION,
  payload
});
