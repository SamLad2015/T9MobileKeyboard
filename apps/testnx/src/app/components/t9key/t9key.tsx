import { T9key } from '@testnx/api-interfaces';
import './t9key.scss';

export const T9Key = (props: T9key) => {
  function handleChange(number: string) {
    // Here, we invoke the callback with the new value
    props.onChange(number);
  }

  return (
    <>
      <a className="t9key" href="#" key={props.keyNum} onClick={() => handleChange(props.keyNum)}>
        <div className="number">{props.keyNum}</div>
        <div className="letters">{props.keyChars}</div>
      </a>
    </>
  );
};
