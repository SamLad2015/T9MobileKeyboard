// Local dependencies
import { T9keyModel } from '../../../app/models/t9keys';
import './t9key.scss';

export const T9Key = (props: T9keyModel) => {
  function handleClick(number: string) {
    // Here, we invoke the callback with the new value
    if (parseInt(number) < 2) {
      return;
    }
    props.onClick(number);
  }

  return (
    <>
      <a className="t9key" href="#" key={props.keyNum} onClick={() => handleClick(props.keyNum)}>
        <div className="number">{props.keyNum}</div>
        <div className="letters">{props.keyChars}</div>
      </a>
    </>
  );
};
