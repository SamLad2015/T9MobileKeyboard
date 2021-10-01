// External dependencies
import { Provider } from 'react-redux';

// Module dependencies
import store from '../app/store/store';
import Numpad from './components/numpad/numpad';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Numpad />
      </Provider>,
    </>
  );
};

export default App;
