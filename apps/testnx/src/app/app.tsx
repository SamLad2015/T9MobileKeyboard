// External dependencies
import { Provider } from 'react-redux';

// Module dependencies
import store from '../app/store/store';
import Numpad from './containers/numpad/numpad';

export const App = () :JSX.Element => {
  return (
    <Provider store={store}>
      <Numpad />
    </Provider>
  );
};

export default App;
