import { map } from "lodash";
import { ResultsData } from "@testnx/api-interfaces";
import "./results.scss";

export const Results = (props: ResultsData) => {
  function handleClick(word: string) {
    // Here, we invoke the callback with the new value
    props.onClick(word);
  }

  return (
    <>
      <div className="results">
        <div>
          {props.numbers.length > 0 && <h2>Words for {props.numbers}</h2>}
          {props.results.length > 0 && <div>
            <span>From dictionary</span>
            <ul>{map(props.results, (result: string, i: number) => <li key={i}> {result} </li>)}</ul>
          </div>}
          {props.possibles.length > 0 && <div>
            <span>Not present in dictionary (click to add to dictionary)</span>
            <ul className="possibles">{map(props.possibles, (possible: string, i: number) =>
              <li key={i}><a href="#" onClick={() => handleClick(possible)}> {possible} </a></li>)}
            </ul>
          </div>}
        </div>
      </div>
    </>
  );
};
