import { LOAD_KEYS, LOAD_RESULTS, RESET_RESULTS, ADD_RESULT} from '../constants/constants';

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
