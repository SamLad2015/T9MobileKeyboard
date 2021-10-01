import { ResultsData } from '@testnx/api-interfaces';
import { filter } from 'lodash';
import { LOAD_RESULTS, RESET_RESULTS, ADD_RESULT }  from '../constants/constants';

const INITIAL_STATE : ResultsData = {
  results: [],
  possibles: [],
  numbers: ''
}

export const resultsReducer = (state = INITIAL_STATE, action: any): ResultsData => {
  switch (action.type) {
    case LOAD_RESULTS:
      return {
        ...state,
        results: action.payload.results,
        possibles: action.payload.possibles,
        numbers: action.payload.numbers
      };
    case RESET_RESULTS:
      return INITIAL_STATE;
    case ADD_RESULT:
      return {
        ...state,
        results: [...state.results, action.payload],
        possibles: filter(state.possibles, possible => (possible !== action.payload)),
        numbers: state.numbers
      };
  }
  return state;
}

export default resultsReducer;
