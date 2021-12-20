import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar, Footer, ScrollToTop } from './components'
import {
  HomePage,
  LoginPage,
  ProductCard,
  AccountPage,
  AllNFTs,
  NewNFTs,
  ExplorePage,
  RentNFTPage,
} from './pages'

import GlobalStyle from './globalStyles'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductCard />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/assets" element={<AllNFTs />} />
        <Route path="/assets/new" element={<NewNFTs />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/rent-nft" element={<RentNFTPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
