import React from 'react'
import ReactDOM from 'react-dom'

import { AbstractConnector } from '@web3-react/abstract-connector'

import { BrowserRouter as Router } from 'react-router-dom'
import { Web3ReactProvider } from '@web3-react/core'
import { store } from './store'
import { Provider } from 'react-redux'
import GlobalStyle from './globalStyles'
import { Footer, ScrollToTop } from './components'
import { Web3Provider } from '@ethersproject/providers'

import App from './App'
import { ethers } from 'ethers'

function getLibrary(provider: any, connector: AbstractConnector | undefined) {
  return new Web3Provider(provider)
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
  document.getElementById('root')
)
