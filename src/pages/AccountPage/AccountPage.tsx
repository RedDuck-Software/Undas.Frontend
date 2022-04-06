import React, { useContext, useEffect, useState } from "react";
import { MdOutlineApps, MdOutlineGridView } from "react-icons/md";
import { RiPaintBrushFill } from "react-icons/ri";
import {
  BsHeart,
  BsEyeSlash,
  BsClockHistory,
  BsFillTagFill,
} from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import { CardItem } from "../../components";

//Page Components
import AccountCard from "./page-components/AccountCard/AccountCard";
import ASideFilter from "../../components/ASideFilter/ASideFilter";

//Media
import {
  card01,
  card02,
  card03,
  card04,
  AccountBanner,
  CreatedIco,
  OffersIco,
  FavouriteIco,
  RewardIco,
  ReferralIco,
} from "./imports";
//Styles
import { Container, Background, Button } from "../../globalStyles";
import { Banner } from "../CategoriesPage/Categories.styles";
import { Wrapper } from "../CategoriesPage/Categories.styles";
import {
  AccountContainer,
  TabsMenu,
  Tab,
  SmallNumber,
} from "./AccountPage.styles";
import {
  Arrow,
  Filter,
  FilterItem,
  FilterMenu,
  FilterTitle,
  GridLayout,
  Input,
  MenuItem,
  MenuSearchWrap,
  MenuWrap,
  SearchIco,
  SettingsBlock,
  SettingsElement,
  ViewButton,
  ViewOption,
} from "../AllNFTs/AllNFTs.styles";

import { useWeb3React } from "@web3-react/core";
import Cookies from "universal-cookie";
import Context from "../../utils/Context";
import { operations } from "moralis/types/generated/web3Api";
import { useMoralis } from "react-moralis";
import { Navigate } from "react-router-dom";
import NFTGrid from "../../components/NFTCard/Grid/NFTGrid";
import { GridIco, ListIco } from "../AllNFTs/imports";
import MainMenu from "./page-components/MainMenu/MainMenu";
import FavouriteMenu from "./page-components/MainMenu/FavouriteMenu";
import OffersMenu from "./page-components/MainMenu/OffersMenu";

const AccountPage = () => {
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });
  const [tab, setTab] = useState("offer");
  console.log(tab);
  const cookies = new Cookies();
  let { account, deactivate } = useWeb3React();

  const { connector } = useContext(Context);
  const { Moralis } = useMoralis();

  const [NFTList, setNFTList] = useState<
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

  const getAccountData = async () => {};
  const getListData = async () => {
    const response = await getNFTList();
    if (!response?.result) return;

    //deleting duplicates because of moralis bug (see https://forum.moralis.io/t/api-returns-duplicate-when-using-getnftowners/5523)
    response.result = response.result.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.token_id === value.token_id)
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
    <>
      <Wrapper>
        <Banner>
          <img src={AccountBanner} alt="account-banner" />
        </Banner>
        <AccountContainer>
          <AccountCard account={account} disconnect={disconnect} />
          {tab !== "favourite" && <ASideFilter marginTop="140px" />}
          <Wrapper w="100%">
            <Wrapper w="100%" marg="15px 0 0 0">
              <TabsMenu>
                <Tab onClick={() => setTab("")}>
                  <CreatedIco />
                  <span>Created</span>
                  <SmallNumber>2</SmallNumber>
                </Tab>
                <Tab onClick={() => setTab("offers")}>
                  <OffersIco />
                  <span>Offers</span>
                  <SmallNumber>6</SmallNumber>
                </Tab>
                <Tab onClick={() => setTab("favourite")}>
                  <FavouriteIco />
                  <span>Favourite</span>
                </Tab>
                <Tab>
                  <RewardIco />
                  <span>Reward</span>
                </Tab>
                <Tab>
                  <ReferralIco />
                  <span>Referral</span>
                </Tab>
              </TabsMenu>
            </Wrapper>
            {tab === "" && <MainMenu />}
            {tab === "favourite" && <FavouriteMenu />}
            {tab === "offers" && <OffersMenu />}
            <GridLayout>
              {NFTList?.map((item) => {
                return (
                  <NFTGrid
                    tokenId={+item.token_id}
                    URI={item.token_uri!}
                    name={item.name}
                  />
                );
              })}
            </GridLayout>
          </Wrapper>
        </AccountContainer>
      </Wrapper>
    </>
  );
};

export default AccountPage;
