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
import FilterMobileButton from "../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import Context from "../../utils/Context";
import { Banner } from "../CategoriesPage/Categories.styles";
import { Wrapper } from "../CategoriesPage/Categories.styles";
import { Background } from "../../globalStyles";

const AccountPage: React.FC = () => {
  const [tab, setTab] = useState("");
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
      address: "0x45434191f03528726CAfd4Eebe0Fc5D33Be27720",
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
          {tab !== "reward" && (
            <ASideFilter marginTop="140px" accountPage />
          )}
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
          {/* {tab == "" || tab == "offers" || tab == "favourite" ? (
            <FilterMobileButton />
          ) : null} */}
        </AccountContainer>
      </Background>
    </AccountWrapper>
  );
};

export default AccountPage;
