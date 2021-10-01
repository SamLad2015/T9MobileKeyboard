// Module dependencies
import { T9keys } from '@testnx/api-interfaces';

// Local dependencies
import { LOAD_KEYS }  from '../constants/constants';

const INITIAL_STATE : T9keys = {
  t9Keys: [],
}

export const keysReducer = (state = INITIAL_STATE, action: any): T9keys => {
  switch (action.type) {
    case LOAD_KEYS:
      return {
        ...state,
        t9Keys: action.payload
      };
  }
  return state;
}

export default keysReducer;
