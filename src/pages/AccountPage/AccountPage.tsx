import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Navigate } from "react-router-dom";

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
  AchievementsIco,
} from "./imports";
import AccountCard from "./page-components/AccountCard/AccountCard";
import Achievements from "./page-components/Achievements/Achievements";
import FavouriteMenu from "./page-components/MainMenu/FavouriteMenu";
import MainMenu from "./page-components/MainMenu/MainMenu";
import OffersMenu from "./page-components/MainMenu/OffersMenu";
import Referral from "./page-components/Referral/Referral";
import RewardMenu from "./page-components/Reward/RewardMenu";

import ASideFilter from "../../components/ASideFilter/ASideFilter";
import FilterMobileButton from "../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import Context from "../../utils/Context";
import { Banner } from "../CategoriesPage/Categories.styles";
import { Wrapper } from "../CategoriesPage/Categories.styles";
import { Background } from "../../globalStyles";

const AccountPage: React.FC = () => {
  const [tab, setTab] = useState("offers");
  const { account, deactivate } = useWeb3React();

  const { connector } = useContext(Context);
  const { Moralis } = useMoralis();

  const [, setNFTList] = useState<
    {
      token_address: string;
      token_id: string;
      contract_type: string;
      owner_of: string;
      block_number: string;
      block_number_minted: string;
      token_uri?: string | undefined;
      metadata?: string | undefined;
      synced_at?: string | undefined;
      amount?: string | undefined;
      name: string;
      symbol: string;
    }[]
  >();

  const getNFTList = async () => {
    if (!connector || !account) return;
    const listOfNFTS = await Moralis.Web3API.account.getNFTs({
      chain: "goerli",
      address: account,
    });
    return listOfNFTS;
  };

  const getListData = async () => {
    const response = await getNFTList();
    if (!response?.result) return;

    // deleting duplicates because of moralis bug (see https://forum.moralis.io/t/api-returns-duplicate-when-using-getnftowners/5523)
    response.result = response.result.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.token_id === value.token_id),
    );
    setNFTList(response.result);
  };

  useEffect(() => {
    if (!connector || !account) {
      return console.log("loading");
    }
    getListData();
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
          {tab !== "favourite" &&
            tab !== "reward" &&
            tab !== "referral" &&
            tab !== "achievements" && <ASideFilter marginTop="140px" />}
          <Wrapper w="100%" marg="0 0 40px 0">
            <Wrapper w="100%" marg="15px 0 0 0">
              <TabsMenu>
                <Tab
                  onClick={() => setTab("")}
                  className={tab === "" ? "active" : ""}
                >
                  <CreatedIco />
                  <span>My NFT&apos;s</span>
                  <SmallNumber>12</SmallNumber>
                </Tab>
                <Tab
                  onClick={() => setTab("offers")}
                  className={tab === "offers" ? "active" : ""}
                >
                  <OffersIco />
                  <span>Offers</span>
                  <SmallNumber>6</SmallNumber>
                </Tab>
                <Tab
                  onClick={() => setTab("favourite")}
                  className={tab === "favourite" ? "active" : ""}
                >
                  <FavouriteIco />
                  <span>Favourite</span>
                </Tab>
                <Tab
                  onClick={() => setTab("reward")}
                  className={tab === "reward" ? "active" : ""}
                >
                  <RewardIco />
                  <span>Reward</span>
                </Tab>
                <Tab
                  onClick={() => setTab("referral")}
                  className={tab === "referral" ? "active" : ""}
                >
                  <ReferralIco />
                  <span>Referral</span>
                </Tab>
                <Tab
                  onClick={() => setTab("achievements")}
                  className={tab === "achievements" ? "active" : ""}
                >
                  <AchievementsIco />
                  <span>Achievements</span>
                </Tab>
              </TabsMenu>
            </Wrapper>
            {tab === "" && <MainMenu />}
            {tab === "favourite" && <FavouriteMenu />}
            {tab === "offers" && <OffersMenu />}
            {tab === "reward" && <RewardMenu />}
            {tab === "referral" && <Referral />}
            {tab === "achievements" && <Achievements />}
          </Wrapper>
          {tab == "" || tab == "offers" ? <FilterMobileButton /> : null}
        </AccountContainer>
      </Background>
    </AccountWrapper>
  );
};

export default AccountPage;
