import { useWeb3React } from "@web3-react/core";
import React, { useState, useContext, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Navigate } from "react-router-dom";

import FavouriteTable from "./FavouriteTable/FavouriteTable";
import { FavouriteButton, FavouriteSelect, FavouriteResultsTotal } from "./Menu.styles";
import { FavouriteType } from "./types";

import NFTGridItem from "../../../../components/NFTCard/Grid/NFTGridItem";
import { ViewMode } from "../../../../types/viewMode";
import Context from "../../../../utils/Context";
import useViewMode from "../../../../utils/hooks/useViewMode";
import {
  Input,
  MenuSearchWrap,
  MenuWrap,
  SearchIco,
  SettingsBlock,
  GridLayout,
} from "../../../AllNFTs/AllNFTs.styles";
import NFTListItem from "../../../AllNFTs/page-components/NFTListItem/NFTListItem";
import { FavouriteWrap } from "../../AccountPage.styles";

const FavouriteMenu: React.FC = () => {
  const { account } = useWeb3React();
  const { connector } = useContext(Context);
  const { Moralis } = useMoralis();

  const { viewMode, viewButtonsRender } = useViewMode();
  const [favouriteType, setFavouriteType] = useState<FavouriteType>(
    FavouriteType.nft,
  );

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
    <FavouriteWrap>
      <MenuWrap marg="40px 0 20px 0" justifyContent="space-between">
        <SettingsBlock>
          <FavouriteSelect>
            <FavouriteButton
              className={
                favouriteType === FavouriteType.nft ? "favourite-active" : ""
              }
              onClick={() => setFavouriteType(FavouriteType.nft)}
            >
              Favourite NFTs
            </FavouriteButton>
            <FavouriteButton
              className={
                favouriteType === FavouriteType.collection
                  ? "favourite-active"
                  : ""
              }
              onClick={() => setFavouriteType(FavouriteType.collection)}
            >
              Favourite Collections
            </FavouriteButton>
          </FavouriteSelect>
          {favouriteType === FavouriteType.nft && viewButtonsRender}
        </SettingsBlock>
        <MenuSearchWrap mw="530px" marginLeft="0">
          <SearchIco />
          <Input placeholder="Search"/>
        </MenuSearchWrap>
        <FavouriteResultsTotal>8 results</FavouriteResultsTotal>
      </MenuWrap>

      {viewMode === ViewMode.grid && favouriteType === FavouriteType.nft && (
        <GridLayout>
          <NFTGridItem tokenId={2} URI={"assdf"} name={"item.name1"} />

          <NFTGridItem tokenId={2} URI={"assdf"} name={"item.name2"} />

          <NFTGridItem tokenId={2} URI={"assdf"} name={"item.name3"} />

          <NFTGridItem tokenId={2} URI={"assdf"} name={"item.name4"} />

          <NFTGridItem tokenId={2} URI={"assdf"} name={"item.name5"} />

          <NFTGridItem tokenId={2} URI={"assdf"} name={"item.name6"} />

          <NFTGridItem tokenId={2} URI={"assdf"} name={"item.name7"} />

          <NFTGridItem tokenId={2} URI={"assdf"} name={"item.name8"} />
        </GridLayout>
      )}

      {viewMode === ViewMode.list && favouriteType === FavouriteType.nft && (
        <>
          <NFTListItem name="item1" />
          <NFTListItem name="item1" />
          <NFTListItem name="item1" />
        </>
      )}

      {favouriteType === FavouriteType.collection && <FavouriteTable />}
    </FavouriteWrap>
  );
};

export default FavouriteMenu;
