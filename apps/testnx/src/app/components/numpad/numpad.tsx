// External dependencies
import React, { useEffect, useState } from "react";
import { filter } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

// Module dependencies
import { T9key } from "@testnx/api-interfaces";

// Local dependencies
import { Results, T9Key } from "../../components";
import "./numpad.scss";
import { getKeys,setKeys } from '../../actions/t9keysAction';

export const Numpad = () => {
  const [numbers, setNumbers] = useState<string>("");
  const dispatch = useDispatch();
  const keys = useSelector((state: any) => state.keys.t9Keys);

  // Load mobile keypad mappings
  useEffect(() => {
    dispatch(getKeys());
  }, [dispatch]);

  // Set selected key and trigger to load results
  useEffect(() => {
    dispatch(setKeys(numbers));
  }, [numbers]);

  // Handle mobile key button press
  function handleClick(newValue: string) {
     newValue = newValue === '<' ? numbers.substring(0, numbers.length - 1) : numbers + newValue;
     setNumbers(newValue);
  }

  return (
    <div className="t9App">
        <div>
          <Results />
        </div>
        <div className="keyboard">{keys.map((key:T9key) =>
          <T9Key key={key.keyNum} keyNum={key.keyNum} keyChars={key.keyChars} onClick={handleClick} />
        )}
          <button className="t9key">
            <div className="number">0</div>
            <div className='letters'/>
          </button>
          <button className="t9key empty">
            <div className="number">&nbsp;</div>
            <div className='letters'/>
          </button>
          <button className="t9key" onClick={ () => handleClick('<')}>
            <div className="number">&#9003;</div>
            <div className='letters'/>
          </button>
        </div>
      </div>
  );
};

export default Numpad;
