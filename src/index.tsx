import React from 'react';
import ReactDOM from 'react-dom';

import { AbstractConnector } from '@web3-react/abstract-connector';

import { BrowserRouter as Router } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';

import { store } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import GlobalStyle from './globalStyles';
import { Footer, ScrollToTop } from './components';
import { Web3Provider } from '@ethersproject/providers';

import App from './App';

function getLibrary(provider: any, connector: AbstractConnector | undefined) {
  return new Web3Provider(provider);
}

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ScrollToTop />
          <GlobalStyle />
          <Web3ReactProvider getLibrary={getLibrary}>
            <App />
          </Web3ReactProvider>
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
