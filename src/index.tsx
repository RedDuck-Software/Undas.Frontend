import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { Footer, ScrollToTop } from "./components";
import GlobalStyle from "./globalStyles";
import { store } from "./store";

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
          <MoralisProvider
            serverUrl="https://fo9angbkcmfo.usemoralis.com:2053/server"
            appId="1x5Ujn58bCQo8HyIRbkJBpSeZX3lSfWIuh82Axd9"
          >
            <App />
          </MoralisProvider>
        </Web3ReactProvider>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
