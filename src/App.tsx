import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { ConnectorState } from "./types/ConnectorState";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { MoralisProvider } from "react-moralis";

import Context from "./utils/Context";

import { Navbar, Footer, ScrollToTop } from "./components";
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
  Create,
} from "./pages";

import {
  injected,
  walletconnect,
  fortmatic,
  walletlink,
  resetWalletConnect,
} from "./components/Wallets/Connectors";

import { useWeb3React } from "@web3-react/core";
import ProductForSale from "./pages/ProductForSale/ProductForSale";
import { connect } from "tls";

const App = () => {
  let web3Current = useWeb3React();
  let connectorName = localStorage.getItem("connector");

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
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/assets" element={<AllNFTs />} />
          <Route path="/assets/new" element={<NewNFTs />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/staking" element={<StakingPage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/explore/art" element={<ExplorePage pageType="Art" />} />
          <Route path="/productforsale/:id" element={<ProductForSale />} />
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
    </MoralisProvider>
  );
};

export default App;
