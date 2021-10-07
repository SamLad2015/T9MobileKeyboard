// External dependencies
import { differenceWith, filter, forEach, intersectionWith, findKey } from "lodash";
import { writeFile } from "fs";

// Module dependencies
import { ResultsData } from "@testnx/api-interfaces";
import { keyMap } from "@testnx/t9keys";

// Local dependencies
import * as dictionaryData from "../data/dictionary.json";

export const results = (number: string): ResultsData => {
  let finalList = dictionaryData;
  var digits = number.toString().split("");
  var wordLength = digits.length;

  // Search loop
  if (digits.indexOf("1") > -1) return {
    numbers: digits.toString(),
    results: [],
    possibles: [],
    predictions: []
  };
  return getWordsFromDigits(digits, finalList);
};

export const addToDictionary = (word) => {
  dictionaryData.push(word);
  writeFile("libs/results/src/data/dictionary.json", JSON.stringify(dictionaryData), (err) => {
    if (err) throw err;
    return word;
  });
}

export const selectPrediction = (word): ResultsData  => {
  return results(wordToNumber(word));
}

const getWordsFromDigits = (digits: string[], finalList: string[]): ResultsData => {
  const wordList = filter(finalList, item => item.length === digits.length);
  const predictedWordList = filter(finalList, item => item.length === digits.length + 1);
  const matches: string[] = [];
  const twoDArrayOfLetters = [];
  forEach(digits, digit => {
    twoDArrayOfLetters.push(keyMap[digit]);
  });
  const allPossibleWords = combinations(twoDArrayOfLetters);

  return {
    numbers: digits.join(""),
    results: intersectionWith(wordList, allPossibleWords),
    possibles: differenceWith(allPossibleWords, wordList),
    predictions: predictedWords(allPossibleWords, predictedWordList)
  };
};

const combinations = (list: [][], n = 0, result = [], current = []) => {
  if (n === list.length) result.push(current.join(""));
  else list[n].forEach(item => combinations(list, n + 1, result, [...current, item]));

  return result;
};

const predictedWords = (allCurrentPossibleWords, wordList) => {
  return filter(wordList, word => allCurrentPossibleWords.indexOf(word.substring(0, word.length - 1)) > -1);
};

const wordToNumber = (word): string => {
  return word.split('').map(char => numberForChar(char)).join('');
}

const numberForChar = (char) => {
  return findKey(keyMap, (value) => value.indexOf(char) > -1);
}
