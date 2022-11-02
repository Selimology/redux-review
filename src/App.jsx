import { Provider } from 'react-redux';
import store from './features/store';
import Data from './Data';
import './app.css';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { productsApi } from './features/apiSlice';

const App = () => {
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <Data />
      </ApiProvider>
    </Provider>
  );
};

export default App;
