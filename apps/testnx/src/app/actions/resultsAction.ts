// Local dependencies
import { AddResult } from "./actions";

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
