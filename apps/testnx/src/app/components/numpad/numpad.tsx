import React, { useEffect, useState } from "react";
import { filter } from 'lodash';
import { T9key } from "@testnx/api-interfaces";
import { Results, T9Key } from "../../components";
import "./numpad.scss";
import { getKeys,setKeys } from '../../actions/t9keysAction';
import { useDispatch, useSelector } from 'react-redux';

export const Numpad = () => {
  const [numbers, setNumbers] = useState<string>("");
  const dispatch = useDispatch();
  const keys = useSelector((state: any) => state.keys.t9Keys);

  useEffect(() => {
    dispatch(getKeys());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setKeys(numbers));
  }, [numbers]);

  function handleClick(newValue: string) {
     newValue = newValue === '<' ? numbers.substring(0, numbers.length - 1) : numbers + newValue;
     setNumbers(newValue);
  }

  return (
    <>
      <div className="t9App">
        <div>
          <Results />
        </div>
        <div className="keyboard">{keys.map((key:T9key) =>
          <T9Key key={key.keyNum} keyNum={key.keyNum} keyChars={key.keyChars} onClick={handleClick} />
        )}
          <a className="t9key" href="#">
            <div className="number">9</div>
            <div className="letters"></div>
          </a>
          <a className="t9key empty" href="#"></a>
          <a className="t9key" href="#" onClick={ () => handleClick('<')}>
            <div className="number">&#9003;</div>
            <div className="letters"></div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Numpad;
