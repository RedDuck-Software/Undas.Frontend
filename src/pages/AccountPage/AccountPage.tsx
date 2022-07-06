import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect, useState } from "react";
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

import ASideFilter from "../../components/ASideFilter/ASideFilter";
import { Background } from "../../globalStyles";
import Context from "../../utils/Context";
import { Banner } from "../CategoriesPage/Categories.styles";
import { Wrapper } from "../CategoriesPage/Categories.styles";

const AccountPage: React.FC = () => {
  const [tab, setTab] = useState("");
  const { account, deactivate } = useWeb3React();
  const { state }: any = useLocation();
  const { connector } = useContext(Context);

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

  useEffect(() => {
    if (!connector || !account) {
      return console.log("loading");
    }
  }, [connector, account]);

  if (!account) {
    return <Navigate to={"/login"} replace={true} />;
  }

  function disconnect() {
    localStorage.removeItem("connector");
    deactivate();
  }

  return (
    <AccountWrapper>
      <Banner>
        <img src={AccountBanner} alt="account-banner" />
      </Banner>
      <Background>
        <AccountContainer>
          <AccountCard account={account} disconnect={disconnect} />
          {tab !== "reward" && <ASideFilter marginTop="140px" accountPage />}
          <Wrapper w="100%" marg="0 0 40px 0">
            <Wrapper w="100%" marg="15px 0 0 0">
              <TabsMenu>
                <Tab
                  onClick={() => setTab("")}
                  className={tab === "" ? "active" : ""}
                >
                  <MyNFTsIco />
                  <span>My NFTs</span>
                  <SmallNumber>12</SmallNumber>
                </Tab>
                <Tab
                  onClick={() => setTab("created")}
                  className={tab === "created" ? "active" : ""}
                >
                  <CreatedIco />
                  <span>Created</span>
                  <SmallNumber>8</SmallNumber>
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
                  <SmallNumber>0</SmallNumber>
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
            {tab === "" && <MainMenu />}
            {tab === "favourite" && <FavouriteMenu />}
            {tab === "offers" && <OffersMenu />}
            {tab === "reward" && <RewardMenu />}
            {tab === "rent" && <Rent />}
            {tab === "created" && <Created />}
          </Wrapper>
        </AccountContainer>
      </Background>
    </AccountWrapper>
  );
};

export default AccountPage;
