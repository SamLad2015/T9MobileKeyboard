export interface T9keys {
  t9Keys: T9key[];
}

export interface T9key {
  keyNum: string;
  keyChars: string[];
  onChange: Function;
}

export interface ResultsData {
  numbers: string;
  results: string[];
  possibles: string[];
  onClick: Function;
}
