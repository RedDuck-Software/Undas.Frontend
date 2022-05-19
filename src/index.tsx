import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { Footer, ScrollToTop } from './components';
import GlobalStyle from './globalStyles';
import { store } from './store';

function getLibrary(provider: any) {
  return new Web3Provider(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <Web3ReactProvider getLibrary={getLibrary}>
          <App />
        </Web3ReactProvider>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
