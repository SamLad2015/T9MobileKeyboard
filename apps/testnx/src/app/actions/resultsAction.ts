// Local dependencies
import { addResult, selectPrediction } from './actions';

export const addWord = (word: string) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    };

  return async (dispatch: any) => {
    await fetch(`/api/words/${word}`, requestOptions);
    dispatch(addResult(word));
  };
};

export const selectPredict = (word: string) => {
  return async (dispatch: any) => {
    const res: any = await fetch(`/api/words/select/${word}`);
    const response = await res.json();
    dispatch(selectPrediction(response));
  };
};
