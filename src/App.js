import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar, Footer, ScrollToTop } from './components'
import {
  HomePage,
  LoginPage,
  ProductCard,
  ProductForSale,
  AccountPage,
  AllNFTs,
  NewNFTs,
  ExplorePage,
  RentNFTPage,
} from './pages'

import GlobalStyle from './globalStyles'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import store from './store'
import { Provider } from 'react-redux'

function getLibrary(provider, connector) {
  return new Web3Provider(provider)
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <Web3ReactProvider getLibrary={getLibrary}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product" element={<ProductCard />} />
            <Route path="/product/for-sale" element={<ProductForSale />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/assets" element={<AllNFTs />} />
            <Route path="/assets/new" element={<NewNFTs />} />
            <Route
              path="/explore/art"
              element={<ExplorePage pageType="Art" />}
            />
            <Route
              path="/explore/sport"
              element={<ExplorePage pageType="Sport" />}
            />
            <Route
              path="/explore/girls"
              element={<ExplorePage pageType="Girls" />}
            />
            <Route
              path="/explore/sport"
              element={<ExplorePage pageType="Sport" />}
            />
            <Route
              path="/explore/furniture"
              element={<ExplorePage pageType="Furniture" />}
            />
            <Route path="/rent-nft" element={<RentNFTPage />} />
          </Routes>
        </Web3ReactProvider>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App
