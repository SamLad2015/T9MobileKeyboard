import { forEach, intersectionWith, differenceWith } from "lodash";
import { ResultsData } from "@testnx/api-interfaces";
import { writeFile } from 'fs';
import { keyMap } from "@testnx/t9keys";
import * as dictionaryData from "../data/dictionary.json";

export function results(number): ResultsData {
  let finalList = dictionaryData;
  var digits = number.toString().split("");
  var wordLength = digits.length;

  // Search loop
  if (digits.indexOf("1") > -1) return {
    numbers: digits.toString(),
    results: [],
    possibles: [],
    onClick: () => {}
  };

  return getWordsFromDigits(digits, finalList);
};

export function addToDictionary(word) {
  dictionaryData.push(word);
  writeFile("libs/results/src/data/dictionary.json", JSON.stringify(dictionaryData), (err) => {
    if (err) throw err;
    return word;
  });
}

function getWordsFromDigits(digits, wordList): ResultsData {
  const matches: string[] = [];
  const twoDArrayOfLetters = [];
  forEach(digits, digit => {
    twoDArrayOfLetters.push(keyMap[digit]);
  });
  const allPossibleWords = combinations(twoDArrayOfLetters);

  return {
    numbers: digits.join(''),
    results: intersectionWith(wordList, allPossibleWords),
    possibles: differenceWith(allPossibleWords, wordList),
    onClick: () => {}
  };
}

function combinations(list: [][], n = 0, result = [], current = []) {
  if (n === list.length) result.push(current.join(""));
  else list[n].forEach(item => combinations(list, n + 1, result, [...current, item]));

  return result;
}
