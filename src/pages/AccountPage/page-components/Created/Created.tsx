import { useWeb3React } from "@web3-react/core";
import React, { useState, useContext, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Navigate } from "react-router-dom";

import CreatedCollections from "./CreatedCollections";
import {
  CreatedWrap,
  CreatedSettingsBlock,
  CreatedButton,
  CreatedSelect,
  CreatedResultsTotal,
} from "./Created.styles";
import { CreatedType } from "./types";

import { ViewMode } from "../../../../types/viewMode";
import Context from "../../../../utils/Context";
import useViewMode from "../../../../utils/hooks/useViewMode";
import { MenuSearchWrap, MenuWrap } from "../../../AllNFTs/AllNFTs.styles";
import NFTListItem from "../../../AllNFTs/page-components/NFTListItem/NFTListItem";
import CollectionGridWrap from "../../../CollectionPage/page-components/CollectionGridWrap";
import nft10 from "../../../../images/temp-nft-examples/nft-exp-10.png";
import nft11 from "../../../../images/temp-nft-examples/nft-exp-11.png";
import nft4 from "../../../../images/temp-nft-examples/nft-exp-4.png";
import nft5 from "../../../../images/temp-nft-examples/nft-exp-5.png";
import nft6 from "../../../../images/temp-nft-examples/nft-exp-6.png";
import nft7 from "../../../../images/temp-nft-examples/nft-exp-7.png";
import nft8 from "../../../../images/temp-nft-examples/nft-exp-8.png";
import nft9 from "../../../../images/temp-nft-examples/nft-exp-9.png";
import FilterSelected from "../../../../components/FilterSelected/FilterSelected";

const testNFTList = [
  {
    id: 4,
    URI: nft4,
    name: "Returne by ...",
    priceInNum: 20,
  },
  {
    id: 5,
    URI: nft5,
    name: "Returne by ...",
    priceInNum: 20,
  },
  {
    id: 6,
    URI: nft6,
    name: "Returne by ...",
    priceInNum: 20,
  },
  {
    id: 7,
    URI: nft7,
    name: "Returne by ...",
    priceInNum: 20,
  },
  {
    id: 8,
    URI: nft8,
    name: "Returne by ...",
    priceInNum: 20,
  },
  {
    id: 9,
    URI: nft9,
    name: "Returne by ...",
    priceInNum: 20,
  },
  {
    id: 10,
    URI: nft10,
    name: "Returne by ...",
    priceInNum: 20,
  },
  {
    id: 11,
    URI: nft11,
    name: "Returne by ...",
    priceInNum: 20,
  },
];

const Created: React.FC = () => {
  const { account } = useWeb3React();
  const { connector } = useContext(Context);
  const { Moralis } = useMoralis();

  const { viewMode, viewButtonsRender } = useViewMode();
  const [createdType, setCreatedType] = useState<CreatedType>(CreatedType.nft);

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
    <CreatedWrap>
      <MenuWrap marg="40px 0 20px 0" justifyContent="space-between">
        <CreatedSettingsBlock>
          <CreatedSelect>
            <CreatedButton
              className={
                createdType === CreatedType.nft ? "created-active" : ""
              }
              onClick={() => setCreatedType(CreatedType.nft)}
            >
              Created NFTs
            </CreatedButton>
            <CreatedButton
              className={
                createdType === CreatedType.collection ? "created-active" : ""
              }
              onClick={() => setCreatedType(CreatedType.collection)}
            >
              Created Collections
            </CreatedButton>
          </CreatedSelect>
          {createdType === CreatedType.nft && viewButtonsRender}
        </CreatedSettingsBlock>
        <MenuSearchWrap mw="530px" marginLeft="0" placeholder="Search" />
        <CreatedResultsTotal>8 results</CreatedResultsTotal>
      </MenuWrap>

      <FilterSelected />

      {viewMode === ViewMode.grid && createdType === CreatedType.nft && (
        <CollectionGridWrap itemList={testNFTList} />
      )}

      {viewMode === ViewMode.list && createdType === CreatedType.nft && (
        <>
          {testNFTList?.map((item) => {
            return (
              <NFTListItem key={item.id} name={item.name} URI={item.URI} />
            );
          })}
        </>
      )}

      {createdType === CreatedType.collection && <CreatedCollections />}
    </CreatedWrap>
  );
};

export default Created;
