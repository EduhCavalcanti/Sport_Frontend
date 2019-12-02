import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
//Framework de avisos personalizados
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

import './config/ReactotronConfig';

import { store, persistor } from './store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
