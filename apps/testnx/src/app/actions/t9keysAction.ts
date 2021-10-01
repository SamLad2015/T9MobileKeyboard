import { LoadKeys, LoadResults, ResetResults } from "./actions";

export const getKeys = () => {
  return async (dispatch: any) => {
    const res: any = await fetch("api/keys");
    const response = await res.json();
    dispatch(LoadKeys(response.t9Keys));
  };
};

export const setKeys = (numbers: string) => {
  return async (dispatch: any) => {
    if (numbers.length === 0) {
      dispatch(ResetResults());
      return;
    }
    const res: any = await fetch(`/api/results/${numbers}`);
    const response = await res.json();
    dispatch(LoadResults(response));
  };
};
