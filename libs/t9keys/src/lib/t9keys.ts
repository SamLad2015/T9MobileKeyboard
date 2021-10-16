// External dependencies
import { keys, map } from 'lodash';

// Module dependencies
import { T9key, T9keys } from '@testnx/api-interfaces';


export const keyMap = {
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
};


export const t9keys = (): T9keys => {
  return {
    t9Keys: t9KeysByMap()
  };
}

const t9KeysByMap = () => {
  return map(keys(keyMap), key => {
    const t9Key: T9key = {
      keyNum: key,
      keyChars: keyMap[key]
    };
    return t9Key;
  });
}
