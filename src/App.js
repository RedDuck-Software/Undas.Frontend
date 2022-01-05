import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar, Footer, ScrollToTop } from './components';
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
} from './pages';

import { useWeb3React } from '@web3-react/core';
import connectOnLoad from './utils/connectOnLoad';

const App = () => {
  let web3Current = useWeb3React();
  useEffect(() => {
    connectOnLoad(web3Current);
  }, []);
  console.log(`here's your address: ${web3Current.account}`);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductCard />} />
        <Route path="/product/for-sale" element={<ProductForSale />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/assets" element={<AllNFTs />} />
        <Route path="/assets/new" element={<NewNFTs />} />
        <Route path="/explore/art" element={<ExplorePage pageType="Art" />} />
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
    </>
  );
};

export default App;
