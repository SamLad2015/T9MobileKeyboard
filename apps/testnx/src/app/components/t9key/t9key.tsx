// Local dependencies
import { T9keyModel } from '../../models';
import './t9key.scss';

export const T9Key = ({keyNum, keyChars, onClick}: T9keyModel): JSX.Element => {
  const handleClick = (number: string) => {
    // Here, we invoke the callback with the new value
    if (parseInt(number) < 2) {
      return;
    }
    onClick(number);
  };

  return (
    <button className='t9key' key={keyNum} onClick={() => handleClick(keyNum)}>
      <div className='number'>{keyNum}</div>
      <div className='letters'>{keyChars}</div>
    </button>
  );
};

export default T9Key;
