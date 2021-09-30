import React, { useEffect, useState } from "react";
import { filter } from 'lodash';
import { ResultsData, T9key, T9keys } from "@testnx/api-interfaces";
import { Results, T9Key } from "./components";
import "./app.scss";

export const App = () => {
  const [keys, setKeys] = useState<T9keys>(t9Keys());
  const [numbers, setNumbers] = useState<string>("");
  const [result, setResults] = useState<ResultsData>(results());

  useEffect(() => {
    fetch("/api/keys")
      .then((r) => r.json())
      .then(setKeys);
  }, []);

  useEffect(() => {
    if (numbers.length > 0) {
      fetch(`/api/results/${numbers}`)
        .then((r) => r.json())
        .then(setResults);
    } else {
      setResults(results());
    }
  }, [numbers]);

  function handleChange(newValue: string) {
    newValue = newValue === '<' ? numbers.substring(0, numbers.length - 1) : numbers + newValue;
    setNumbers(newValue);
  }

  function handleClick(word: string) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    };
    fetch(`/api/words/${word}`, requestOptions)
      .then((r) => r)
      .then(() => {
        setResults({
          numbers: result.numbers,
          results: [...result.results, word],
          possibles: filter(result.possibles, possible => (possible !== word)),
          onClick: () => {}
        });
      });
  }

  return (
    <>
      <div className="t9App">
        <div>
          <Results numbers={result.numbers} results={result.results} possibles={result.possibles} onClick={handleClick} />
        </div>
        <div className="keyboard">{keys.t9Keys.map(key =>
          <T9Key key={key.keyNum} keyNum={key.keyNum} keyChars={key.keyChars} onChange={handleChange} />
        )}
          <a className="t9key" href="#">
            <div className="number">9</div>
            <div className="letters"></div>
          </a>
          <a className="t9key empty" href="#"></a>
          <a className="t9key" href="#" onClick={() => handleChange('<')}>
            <div className="number">&#9003;</div>
            <div className="letters"></div>
          </a>
        </div>
      </div>
    </>
  );
};

const t9Keys = () => {
  const t9Key: T9key = {
    keyNum: "",
    keyChars: [],
    onChange: () => {
    }
  };
  const t9Keys: T9keys = {
    t9Keys: [t9Key]
  };
  return t9Keys;
};

const results = () => {
  const results: ResultsData = {
    numbers: "",
    results: [],
    possibles: [],
    onClick: () => {}
  };
  return results;
};

export default App;
