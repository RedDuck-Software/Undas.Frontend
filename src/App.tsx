import { AbstractConnector } from "@web3-react/abstract-connector";
import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import { MoralisProvider } from "react-moralis";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import Modal from "./components/Modal/Modal";
import {
  injected,
  walletconnect,
  fortmatic,
  walletlink,
} from "./components/Wallets/Connectors";
import {
  HomePage,
  LoginPage,
  ProductCard,
  AccountPage,
  AllNFTs,
  NewNFTs,
  Listing,
  StakingPage,
  ExplorePage,
  RentNFTPage,
  CreateNFT,
  CreateCollection,
  CategoriesRwa,
  CategoriesArt,
  CategoriesNew,
  CategoriesSport,
  CategoriesPhoto,
  CategoriesCelebrity,
  Categories18,
  Faq,
  CollectionPage,
  NFTPage,
  AboutUs,
  Settings,
  TopCollectionPage,
  Blog,
  CreatorCardPage,
  OfferSale,
  OfferRent,
  Rent,
  Buy,
  Sale,
  ArticlePage,
  BlogThemeWrap,
} from "./pages";
import ActivityPage from "./pages/Activity/ActivityPage";
import BusinessTips from "./pages/Blog/page-components/BusinessTips/BusinessTips";
import Inspiration from "./pages/Blog/page-components/Inspiration/Inspiration";
import News from "./pages/Blog/page-components/News/News";
import WebsiteTips from "./pages/Blog/page-components/WebsiteTips/WebsiteTips";
import NFTPageSell from "./pages/NFTPage/NFTPageSell/NFTPageSell";
import ProductForSale from "./pages/ProductForSale/ProductForSale";
import { ConnectorState } from "./types/ConnectorState";
import Context from "./utils/Context";

const App: React.FC = () => {
  const web3Current = useWeb3React();
  const connectorName = localStorage.getItem("connector");

  useEffect(() => {
    switch (connectorName) {
      case "injected":
        web3Current.activate(injected);
        break;
      case "walletconnect":
        walletconnect.walletConnectProvider = undefined;
        web3Current.activate(walletconnect);
        break;
      case "fortmatic":
        web3Current.activate(fortmatic);
        break;
      case "walletlink":
        web3Current.activate(walletlink);
        break;
    }
  }, [connectorName]);

  const [connector, setConnector] = useState<AbstractConnector | null>(null);

  const setConnectorFun = (connector: AbstractConnector) =>
    setConnector(connector);

  const value: ConnectorState = {
    connector,
    setConnectorFun,
  };

  return (
    <MoralisProvider
      appId="sI5GMwaWT1UAGdl9IPaWyFfAV0mHm3Hzb2r1NANe"
      serverUrl="https://zem8ktewfkdf.usemoralis.com:2053/server"
    >
      <Context.Provider value={value}>
        <Modal />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/all" element={<AllNFTs />} />
          <Route path="/assets/new" element={<NewNFTs />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/staking" element={<StakingPage />} />
          <Route path="/create-nft" element={<CreateNFT />} />
          <Route path="/create-collection" element={<CreateCollection />} />
          <Route path="/explore/art" element={<ExplorePage pageType="Art" />} />
          <Route path="/productforsale/:id" element={<ProductForSale />} />
          <Route path="/categories-rwa" element={<CategoriesRwa />} />
          <Route path="/categories-art" element={<CategoriesArt />} />
          <Route path="/categories-new" element={<CategoriesNew />} />
          <Route path="/categories-sport" element={<CategoriesSport />} />
          <Route path="/categories-photo" element={<CategoriesPhoto />} />
          <Route path="/categories-celebrity" element={<CategoriesCelebrity />} />
          <Route path="/categories-18plus" element={<Categories18 />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/nft/buy/:address:id" element={<NFTPage />} />
          <Route path="/nft/sell/:address:id" element={<NFTPageSell />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/topcollection" element={<TopCollectionPage />} />
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
          <Route path="/faq" element={<Faq />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/creator-card" element={<CreatorCardPage />} />
          <Route path="/offer-sale/:address:id" element={<OfferSale />} />
          <Route path="/offer-rent/:address:id" element={<OfferRent />} />
          <Route path="/rent/:address:id" element={<Rent />} />
          <Route path="/buy/:address:id" element={<Buy />} />
          <Route path="/nft/sale/:id" element={<Sale />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route
            path="/blog/website-tips"
            element={<BlogThemeWrap blogComponent={<WebsiteTips />} />}
          />
          <Route
            path="/blog/business-tips"
            element={<BlogThemeWrap blogComponent={<BusinessTips />} />}
          />
          <Route
            path="/blog/inspiration"
            element={<BlogThemeWrap blogComponent={<Inspiration />} />}
          />
          <Route
            path="/blog/news"
            element={<BlogThemeWrap blogComponent={<News />} />}
          />
        </Routes>
      </Context.Provider>
    </MoralisProvider>
  );
};

export default App;
