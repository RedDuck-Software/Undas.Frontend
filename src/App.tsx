import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ConnectorState } from './types/ConnectorState';

import { AbstractConnector } from '@web3-react/abstract-connector';

import Context from './utils/Context';

import { Navbar, Footer, ScrollToTop } from './components';
import {
  HomePage,
  LoginPage,
  ProductCard,
  ProductForSale,
  AccountPage,
  AllNFTs,
  NewNFTs,
  Listing,
  StakingPage,
  ExplorePage,
  RentNFTPage,
} from './pages';

import { useWeb3React } from '@web3-react/core';
import connectOnLoad from './utils/connectOnLoad';

const App = () => {
  const [connector, setConnector] = useState<AbstractConnector | null>(null);

  const setConnectorFun = (connector: AbstractConnector) =>
    setConnector(connector);

  let web3Current = useWeb3React();

  useEffect(() => {
    connectOnLoad(web3Current);
  }, []);

  const value: ConnectorState = {
    connector,
    setConnectorFun,
  };

  return (
    <>
      <Context.Provider value={value}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/product/for-sale/:id" element={<ProductForSale />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/assets" element={<AllNFTs />} />
          <Route path="/assets/new" element={<NewNFTs />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/staking" element={<StakingPage />} />
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
      </Context.Provider>
    </>
  );
};

export default App;
