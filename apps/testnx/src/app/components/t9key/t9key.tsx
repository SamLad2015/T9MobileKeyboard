// Local dependencies
import { T9keyModel } from '../../models';
import './t9key.scss';

export const T9Key = (props: T9keyModel): any => {
  const handleClick = (number: string) => {
    // Here, we invoke the callback with the new value
    if (parseInt(number) < 2) {
      return;
    }
    props.onClick(number);
  };

  return (
    <button className='t9key' key={props.keyNum} onClick={() => handleClick(props.keyNum)}>
      <div className='number'>{props.keyNum}</div>
      <div className='letters'>{props.keyChars}</div>
    </button>
  );
};

export default T9Key;
