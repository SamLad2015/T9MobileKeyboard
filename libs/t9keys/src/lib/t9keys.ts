// External dependencies
import { map, keys } from 'lodash';

// Module dependencies
import { T9keys, T9key } from '@testnx/api-interfaces';


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


export function t9keys(): T9keys {
  const t9Keys: T9keys = {
    t9Keys: t9KeysByMap()
  }
  return t9Keys;
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
