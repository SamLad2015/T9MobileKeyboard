import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to T9 Tester!</h1>
    </div>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
