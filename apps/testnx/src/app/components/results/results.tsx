import { map } from "lodash";
import { useDispatch, useSelector } from 'react-redux';
import { ResultsData } from "@testnx/api-interfaces";
import { addWord } from '../../actions/resultsAction';
import "./results.scss";

export const Results = () => {
  const dispatch = useDispatch();
  const results = useSelector((state: any) => state.results);

  function handleClick(word: string) {
    dispatch(addWord(word));
  }

  return (
    <>
      <div className="results">
        <div>
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
      </div>
    </>
  );
};
