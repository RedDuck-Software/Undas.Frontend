import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Navigate } from "react-router-dom";

import nft0 from "../../../../images/temp-nft-examples/nft-exp-0.png";
import nft1 from "../../../../images/temp-nft-examples/nft-exp-1.png";
import nft10 from "../../../../images/temp-nft-examples/nft-exp-10.png";
import nft11 from "../../../../images/temp-nft-examples/nft-exp-11.png";
import nft2 from "../../../../images/temp-nft-examples/nft-exp-2.png";
import nft3 from "../../../../images/temp-nft-examples/nft-exp-3.png";
import nft4 from "../../../../images/temp-nft-examples/nft-exp-4.png";
import nft5 from "../../../../images/temp-nft-examples/nft-exp-5.png";
import nft6 from "../../../../images/temp-nft-examples/nft-exp-6.png";
import nft7 from "../../../../images/temp-nft-examples/nft-exp-7.png";
import nft8 from "../../../../images/temp-nft-examples/nft-exp-8.png";
import nft9 from "../../../../images/temp-nft-examples/nft-exp-9.png";
import { ViewMode } from "../../../../types/viewMode";
import Context from "../../../../utils/Context";
import useViewMode from "../../../../utils/hooks/useViewMode";
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
  ResultsTotal,
} from "../../../AllNFTs/AllNFTs.styles";
import NFTListItem from "../../../AllNFTs/page-components/NFTListItem/NFTListItem";
import CollectionGridWrap from "../../../CollectionPage/page-components/CollectionGridWrap";

const testNFTList = [
  {
    id: 0,
    URI: nft0,
    name: "Returne by ...",
    priceInNum:20
  },
  {
    id: 1,
    URI: nft1,
    name: "Returne by ...",
    priceInNum:20

  },
  {
    id: 2,
    URI: nft2,
    name: "Returne by ...",
    priceInNum:20

  },
  {
    id: 3,
    URI: nft3,
    name: "Returne by ...",
    priceInNum:20

  },
  {
    id: 4,
    URI: nft4,
    name: "Returne by ...",
    priceInNum:20

  },
  {
    id: 5,
    URI: nft5,
    name: "Returne by ...",
    priceInNum:20

  },
  {
    id: 6,
    URI: nft6,
    name: "Returne by ...",
    priceInNum:20

  },
  {
    id: 7,
    URI: nft7,
    name: "Returne by ...",
    priceInNum:20

  },
  {
    id: 8,
    URI: nft8,
    name: "Returne by ...",
    priceInNum:20

  },
  {
    id: 9,
    URI: nft9,
    name: "Returne by ...",
    priceInNum:20

  },
  {
    id: 10,
    URI: nft10,
    name: "Returne by ...",
    priceInNum:20

  },
  {
    id: 11,
    URI: nft11,
    name: "Returne by ...",
    priceInNum:20

  },
];

const MainMenu: React.FC = () => {
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });

  const { viewMode, viewButtonsRender } = useViewMode();
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

  return (
    <div>
      <MenuWrap marg="40px 0 20px 0" justifyContent="space-between">
        <SettingsBlock>
          <>{viewButtonsRender}</>
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
      {viewMode === ViewMode.grid ? (
        <CollectionGridWrap itemList={testNFTList} />
      ) : (
        testNFTList?.map((item) => {
          return <NFTListItem key={item.id} name={item.name} URI={item.URI} />;
        })
      )}
    </div>
  );
};

export default MainMenu;
