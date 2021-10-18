// External dependencies
import { map } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

// Local dependencies
import { addWord, selectPredict } from '../../actions';
import './results.scss';

export const Results = () :JSX.Element => {
  const dispatch = useDispatch();
  const { numbers, results, possibles, predictions } = useSelector((state: any) => state.results);

  // word click to add word to dictionary
  const handleClick = (word: string) => {
    dispatch(addWord(word));
  };

  const handlePrediction = (word: string) => {
    dispatch(selectPredict(word));
  };

  return (
    <div className='results'>
      <div className='main'>
        {numbers.length > 0 && <h2>Words for {numbers}</h2>}
        {results.length > 0 && <div>
          <span>From dictionary</span>
          <ul>{map(results, (result: string, i: number) => <li key={i}> {result} </li>)}</ul>
        </div>}
        {possibles.length > 0 && <div>
          <span>Not present in dictionary (click to add to dictionary)</span>
          <ul className='possibles'>{map(possibles, (possible: string, i: number) =>
            <li key={i}><a href='#' onClick={() => handleClick(possible)}> {possible} </a></li>)}
          </ul>
        </div>}
      </div>
      {predictions.length > 0 && <div className='predictions'>
        <ul>{map(predictions, (prediction: string, i: number) =>
          <li key={i}><a href='#' onClick={() => handlePrediction(prediction)}> {prediction} </a></li>)}
        </ul>
      </div>}
    </div>
  );
};

export default Results;
