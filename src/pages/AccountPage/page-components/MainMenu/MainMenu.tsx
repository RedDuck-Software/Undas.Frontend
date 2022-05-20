import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Navigate } from "react-router-dom";

import NFTGrid from "../../../../components/NFTCard/Grid/NFTGrid";
import Context from "../../../../utils/Context";
import {
  Arrow,
  Filter,
  FilterItem,
  FilterMenu,
  FilterTitle,
  Input,
  MenuItem,
  MenuSearchWrap,
  MenuWrap,
  SearchIco,
  SettingsBlock,
  SettingsElement,
  ViewButton,
  ViewOption,
  ResultsTotal,
  GridLayout,
} from "../../../AllNFTs/AllNFTs.styles";
import { GridIco, ListIco } from "../../../AllNFTs/imports";

const MainMenu: React.FC = () => {
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });
  const { account } = useWeb3React();
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

  return (
    <div>
      <MenuWrap marg="40px 0 20px 0" justifyContent="space-between">
        <SettingsBlock>
          <SettingsElement>
            <ViewOption>
              <ViewButton className="grid-active">
                <GridIco />
              </ViewButton>
              <ViewButton>
                <ListIco />
              </ViewButton>
            </ViewOption>
          </SettingsElement>
          <Filter className={active.price && "price-active"}>
            <FilterItem
              onClick={() => {
                if (!active.price) {
                  setActive({ price: true });
                } else setActive({ price: false });
              }}
            >
              <FilterTitle>Sort by Price</FilterTitle>
              <Arrow className={active.price && "price-active"} />
            </FilterItem>
            <FilterMenu className={active.price && "price-active"}>
              <MenuItem hover={true}>
                <span>Price: Low to High</span>
              </MenuItem>
              <MenuItem hover={true}>
                <span>Price: High to Low</span>
              </MenuItem>
            </FilterMenu>
          </Filter>
          <Filter className={active.event && "event-active"}>
            <FilterItem
              onClick={() => {
                if (!active.event) {
                  setActive({ event: true });
                } else setActive({ event: false });
              }}
            >
              <FilterTitle>Sort by Event</FilterTitle>
              <Arrow className={active.event && "event-active"} />
            </FilterItem>
            <FilterMenu className={active.event && "event-active"}>
              <MenuItem hover={true}>
                <span>Newly Created</span>
              </MenuItem>
              <MenuItem hover={true}>
                <span>Recently Sold</span>
              </MenuItem>
              <MenuItem hover={true}>
                <span>Recently Posted</span>
              </MenuItem>
              <MenuItem hover={true}>
                <span>Recently Staking</span>
              </MenuItem>
            </FilterMenu>
          </Filter>
        </SettingsBlock>
        <MenuSearchWrap mw="530px" marginLeft="0">
          <SearchIco />
          <Input />
        </MenuSearchWrap>
        <ResultsTotal>2</ResultsTotal>
      </MenuWrap>
      <GridLayout>
        <NFTGrid tokenId={2} URI={"assdf"} name={"item.name"} />
        {/* {NFTList?.map((item) => {
          return (
                        <NFTGrid
                            tokenId={+item.token_id}
                            URI={item.token_uri!}
                            name={item.name}
                        />
                    );
        })} */}
      </GridLayout>
    </div>
  );
};

export default MainMenu;
