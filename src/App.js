import React from 'react';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

import './config/ReactotronConfig';

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <ToastContainer />
    </Provider>
  );
}

export default App;
