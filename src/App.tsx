import { AbstractConnector } from "@web3-react/abstract-connector";
import { useWeb3React } from "@web3-react/core";
import React, {
  useState,
  useEffect,
  // , useContext
} from "react";
import { MoralisProvider } from "react-moralis";
import { Route, Routes, useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { createClient, Provider } from "urql";

import { Navbar } from "./components";
import Modal from "./components/Modal/Modal";
import {
  injected,
  walletconnect,
  fortmatic,
  walletlink,
} from "./components/Wallets/Connectors";
import { ClipLoaderWrapper } from "./globalStyles";
import {
  HomePage,
  LoginPage,
  ProductCard,
  AccountPage,
  Referral,
  Achievements,
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
  CategoriesMetaverses,
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
  ClaimUND,
  InteractionRent,
  BlogPost1,
  BlogPost2,
  BlogPost3,
  BlogPost4,
  BlogPost5,
} from "./pages";
import NFTPageSell from "./pages/NFTPage/NFTPageSell/NFTPageSell";
import OfferFotNotListedNft from "./pages/OfferFotNotListedNft/OfferFotNotListedNft";
import ProductForSale from "./pages/ProductForSale/ProductForSale";
import ActivityPage from "./pages/Statistics/Statistics";
import { ConnectorState } from "./types/ConnectorState";
import Context from "./utils/Context";

const urqlClient = createClient({
  url: "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace",
});

const App: React.FC = () => {
  const web3Current = useWeb3React();
  const connectorName = localStorage.getItem("connector");

  const { account } = useWeb3React();
  const [userAccount, setAccount] = useState<any>();

  useEffect(() => {
    if (account) {
      setAccount(account);
    }
  }, [account, userAccount]);

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
  const { ethereum }: any = window;

  async function HandleSwapChain() {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x5" }],
    });
  }

  const path = useLocation();

  useEffect(() => {
    HandleSwapChain();
  }, [account]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, [path]);

  return (
    <MoralisProvider
      appId="sI5GMwaWT1UAGdl9IPaWyFfAV0mHm3Hzb2r1NANe"
      serverUrl="https://zem8ktewfkdf.usemoralis.com:2053/server"
    >
      <Context.Provider value={value}>
        <Provider value={urqlClient}>
          <Modal />
          <Navbar />
          {isLoading ? (
            <ClipLoaderWrapper>
              <ClipLoader color={"#BD10E0"} loading={isLoading} size={250} />
            </ClipLoaderWrapper>
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/product/:id" element={<ProductCard />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/referral" element={<Referral />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/all" element={<AllNFTs />} />
              <Route path="/assets/new" element={<NewNFTs />} />
              <Route path="/listing" element={<Listing />} />
              <Route path="/staking" element={<StakingPage />} />
              <Route path="/create-nft" element={<CreateNFT />} />
              <Route path="/create-collection" element={<CreateCollection />} />
              <Route
                path="/explore/art"
                element={<ExplorePage pageType="Art" />}
              />
              <Route path="/productforsale/:id" element={<ProductForSale />} />
              <Route path="/categories-rwa" element={<CategoriesRwa />} />
              <Route path="/categories-art" element={<CategoriesArt />} />
              <Route
                path="/categories-metaverses"
                element={<CategoriesMetaverses />}
              />
              <Route path="/categories-new" element={<CategoriesNew />} />
              <Route path="/categories-sport" element={<CategoriesSport />} />
              <Route path="/categories-photo" element={<CategoriesPhoto />} />
              <Route
                path="/categories-celebrity"
                element={<CategoriesCelebrity />}
              />
              <Route path="/categories-18plus" element={<Categories18 />} />
              <Route path="/collection/:id" element={<CollectionPage />} />
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
              <Route
                path="/offer-for-not-listed-nft/:address:id"
                element={<OfferFotNotListedNft />}
              />
              <Route path="/rent/:address:id" element={<Rent />} />
              <Route path="/buy/:address:id" element={<Buy />} />
              <Route path="/nft/sale/:id" element={<Sale />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/blog-post" element={<BlogPost1 />} />
              <Route path="/blog-post-2" element={<BlogPost2 />} />
              <Route path="/blog-post-3" element={<BlogPost3 />} />
              <Route path="/blog-post-4" element={<BlogPost4 />} />
              <Route path="/blog-post-5" element={<BlogPost5 />} />
              <Route path="/claim-UND-test" element={<ClaimUND />} />
              <Route
                path="/interaction-rent/:address:id"
                element={<InteractionRent />}
              />
            </Routes>
          )}
        </Provider>
      </Context.Provider>
    </MoralisProvider>
  );
};

export default App;
