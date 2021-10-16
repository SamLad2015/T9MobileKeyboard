// External dependencies
import { map } from "lodash";
import { useDispatch, useSelector } from 'react-redux';

// Local dependencies
import { addWord, selectPrediction } from '../../actions/resultsAction';
import "./results.scss";

export const Results = () => {
  const dispatch = useDispatch();
  const results = useSelector((state: any) => state.results);

  // word click to add word to dictionary
  const handleClick = (word: string) => {
    dispatch(addWord(word));
  }

  const handlePrediction = (word: string) => {
    dispatch(selectPrediction(word));
  }

  return (
    <div className="results">
        <div className="main">
          {results.numbers.length > 0 && <h2>Words for {results.numbers}</h2>}
          {results.results.length > 0 && <div>
            <span>From dictionary</span>
            <ul>{map(results.results, (result: string, i: number) => <li key={i}> {result} </li>)}</ul>
          </div>}
          {results.possibles.length > 0 && <div>
            <span>Not present in dictionary (click to add to dictionary)</span>
            <ul className="possibles">{map(results.possibles, (possible: string, i: number) =>
              <li key={i}><a href="#" onClick={() => handleClick(possible)}> {possible} </a></li>)}
            </ul>
          </div>}
        </div>
        {results.predictions.length > 0 && <div className="predictions">
          <ul>{map(results.predictions, (prediction: string, i: number) =>
            <li key={i}><a href="#" onClick={() => handlePrediction(prediction)}> {prediction} </a></li>)}
          </ul>
        </div>}
      </div>
  );
};
