// External dependencies
import { filter } from 'lodash';

// Module dependencies
import { ResultsData } from '@testnx/api-interfaces';

// Local dependencies
import { LOAD_RESULTS, RESET_RESULTS, ADD_RESULT, SELECT_PREDICTION }  from '../constants/constants';

const INITIAL_STATE : ResultsData = {
  results: [],
  possibles: [],
  predictions: [],
  numbers: ''
}

export const resultsReducer = (state = INITIAL_STATE, action: any): ResultsData => {
  switch (action.type) {
    case LOAD_RESULTS:
    case SELECT_PREDICTION:
      return {
        ...state,
        results: action.payload.results,
        possibles: action.payload.possibles,
        predictions: action.payload.predictions,
        numbers: action.payload.numbers
      };
    case RESET_RESULTS:
      return INITIAL_STATE;
    case ADD_RESULT:
      return {
        ...state,
        results: [...state.results, action.payload],
        possibles: filter(state.possibles, possible => (possible !== action.payload)),
        predictions: state.predictions,
        numbers: state.numbers
      };
  }
  return state;
}

export default resultsReducer;
