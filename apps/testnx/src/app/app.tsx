import React, { useEffect, useState } from 'react';
import { T9keys, T9key } from '@testnx/api-interfaces';
import { T9Key } from './components/t9key';

export const App = () => {
  const [k, setKeys] = useState<T9keys>(t9Keys());

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setKeys);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to T9 Tester!</h1>
      </div>
      <div>{k.t9Keys.map(key => <T9Key keyNum={key.keyNum} keyChars={key.keyChars} />)}</div>
    </>
  );
};

const t9Keys = () => {
  const t9Key: T9key = {
    keyNum: '',
    keyChars: []
  };
  const t9Keys: T9keys = {
    t9Keys: [t9Key]
  }
  return t9Keys;
}

export default App;
