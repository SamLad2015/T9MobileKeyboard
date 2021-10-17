// Local dependencies
import { AddResult, SelectPrediction } from './actions';

export const addWord = (word: string) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    };

  return async (dispatch: any) => {
    await fetch(`/api/words/${word}`, requestOptions);
    dispatch(AddResult(word));
  };
};

export const selectPrediction = (word: string) => {
  return async (dispatch: any) => {
    const res: any = await fetch(`/api/words/select/${word}`);
    const response = await res.json();
    dispatch(SelectPrediction(response));
  };
};
