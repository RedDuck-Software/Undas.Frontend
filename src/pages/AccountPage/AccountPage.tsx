import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { Navigate, useLocation } from "react-router-dom";

import {
  AccountContainer,
  TabsMenu,
  Tab,
  SmallNumber,
  AccountWrapper,
} from "./AccountPage.styles";
import {
  AccountBanner,
  CreatedIco,
  OffersIco,
  FavouriteIco,
  RewardIco,
  ReferralIco,
  MyNFTsIco,
} from "./imports";
import AccountCard from "./page-components/AccountCard/AccountCard";
import Created from "./page-components/Created/Created";
import FavouriteMenu from "./page-components/MainMenu/FavouriteMenu";
import MainMenu from "./page-components/MainMenu/MainMenu";
import OffersMenu from "./page-components/MainMenu/OffersMenu";
import Rent from "./page-components/Rent/Rent";
import RewardMenu from "./page-components/Reward/RewardMenu";
import { getNFT } from "./types";

import ASideFilter from "../../components/ASideFilter/ASideFilter";
import { Background } from "../../globalStyles";
import Context from "../../utils/Context";
import { Banner } from "../CategoriesPage/Categories.styles";
import { Wrapper } from "../CategoriesPage/Categories.styles";

const AccountPage: React.FC = () => {
  const [tab, setTab] = useState("");
  const [myNftsCounter, setMyNftsCounter] = useState<number>(0);
  const [myNfts, setMyNfts] = useState([]);
  const { account, deactivate } = useWeb3React();
  const Web3Api = useMoralisWeb3Api();
  const { state }: any = useLocation();
  const { connector } = useContext(Context);

  const userNts = async () => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);
    const signerPublicAddress = await signer.getAddress();

    const nfts: getNFT = await Web3Api.Web3API.account.getNFTs({
      chain: "goerli",
      address: signerPublicAddress,
    });
    return nfts;
  };

  const getMyNfts = async () => {
    const response = await userNts();

    if (response) {
      if (response.total) setMyNftsCounter(response.total);
      if (response.result) {
        const nfts = response.result.map((nft: any) => {
          return {
            name: nft.name,
            URI: nft.token_uri,
            id: nft.token_id,
            tokenAddress: nft.token_address,
            tokenOwner: nft.owner_of,
          };
        });
        setMyNfts(nfts);
      }
    }
  };

  useEffect(() => {
    if (!connector || !account) {
      return console.log("loading");
    }
    getMyNfts();
  }, [connector, account]);

  useEffect(() => {
    if (state !== null && state !== undefined) {
      if (state.tab === "favourite") {
        setTab(state.tab);
      }
    }
    return () => {
      setTab("");
    };
  }, [state]);

  if (!account) {
    return <Navigate to={"/login"} replace={true} />;
  }

  function disconnect() {
    localStorage.removeItem("connector");
    deactivate();
  }

  const { offersMenu, offersCounter } = OffersMenu();
  return (
    <AccountWrapper>
      <Banner>
        <img src={AccountBanner} alt="account-banner" />
      </Banner>
      <Background>
        <AccountContainer>
          <AccountCard profile={account} disconnect={disconnect} />
          <Wrapper w="100%" marg="0 0 40px 0">
            <Wrapper w="100%" marg="15px 0 0 0">
              <TabsMenu>
                <Tab
                  onClick={() => setTab("")}
                  className={tab === "" ? "active" : ""}
                >
                  <MyNFTsIco />
                  <span>My NFTs</span>
                  <SmallNumber>{myNftsCounter}</SmallNumber>
                </Tab>
                <Tab
                  onClick={() => setTab("created")}
                  className={tab === "created" ? "active" : ""}
                >
                  <CreatedIco />
                  <span>Created</span>
                </Tab>
                <Tab
                  onClick={() => setTab("favourite")}
                  className={tab === "favourite" ? "active" : ""}
                >
                  <FavouriteIco />
                  <span>Favourite</span>
                </Tab>
                <Tab
                  onClick={() => setTab("rent")}
                  className={tab === "rent" ? "active" : ""}
                >
                  <ReferralIco />
                  <span>Rent</span>
                </Tab>
                <Tab
                  onClick={() => setTab("offers")}
                  className={tab === "offers" ? "active" : ""}
                >
                  <OffersIco />
                  <span>Offers</span>
                  <SmallNumber>{offersCounter}</SmallNumber>
                </Tab>
                <Tab
                  onClick={() => setTab("reward")}
                  className={tab === "reward" ? "active" : ""}
                >
                  <RewardIco />
                  <span>Reward</span>
                </Tab>
              </TabsMenu>
            </Wrapper>
            <Wrapper disp="flex">
              {tab !== "reward" && <ASideFilter marginTop="70px" accountPage />}
              {tab === "" && <MainMenu nftList={myNfts ? myNfts : []} />}
              {tab === "favourite" && <FavouriteMenu />}
              {tab === "offers" && offersMenu}
              {tab === "reward" && <RewardMenu />}
              {tab === "rent" && <Rent />}
              {tab === "created" && <Created />}
            </Wrapper>
          </Wrapper>
        </AccountContainer>
      </Background>
    </AccountWrapper>
  );
};

export default AccountPage;
