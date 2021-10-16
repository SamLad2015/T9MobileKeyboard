// External dependencies
import { StrictMode } from 'react';
import { render } from 'react-dom';

// Local dependencies
import App from './app/app';

render(
  <StrictMode>
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to T9 Tester!</h1>
    </div>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
