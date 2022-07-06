import { useWeb3React } from "@web3-react/core";
import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {createClient} from "urql";

import {
  RentWrap,
  RentSettingsBlock,
  RentButton,
  RentSelect,
  RentResultsTotal,
} from "./Rent.styles";
import { RentType } from "./types";

import FilterSelected from "../../../../components/FilterSelected/FilterSelected";
import { ViewMode } from "../../../../types/viewMode";
import Context from "../../../../utils/Context";
import useViewMode from "../../../../utils/hooks/useViewMode";
import { MenuSearchWrap, MenuWrap } from "../../../AllNFTs/AllNFTs.styles";
import NFTListItem from "../../../AllNFTs/page-components/NFTListItem/NFTListItem";
import CollectionGridWrap from "../../../CollectionPage/page-components/CollectionGridWrap";


type CreatedItemProps = {
  id: number;
  URI: string;
  name: string;
  tokenOwner?: string;
  collectionName?: string;
  collectionId?: string;
  tokenAddress?: string;
};
const RentMenu: React.FC = () => {
  const { account } = useWeb3React();
  const { connector } = useContext(Context);

  const { viewMode, viewButtonsRender } = useViewMode();
  const [rentType, setRentType] = useState<RentType>(RentType.rental);

  const rentalItems: CreatedItemProps[] = [];
  const [rentalNfts, setRentalNfts] = useState<CreatedItemProps[]>();

  const rentedItems: CreatedItemProps[] = [];
  const [rentedNfts, setRentedNfts] = useState<CreatedItemProps[]>();

  const getRental = async () => {
    const rentalTokensQuery = await fetchRentalData();

    rentalTokensQuery.data.stakingListings.map((i: any) => {
      const id = i.id;
      const name = i.tokenName;
      const URI = i.tokenURI;
      const tokenOwner = i.owner;
      const collectionName = i.collectionName;
      const collectionId = i.collectionId;

      const tokenAddress = "0x482995DA0c3f0Fe629DB4dca956F95A81F88C4Ad"; //nft collection address
      rentalItems.push({
        id,
        URI,
        name,
        tokenOwner,
        collectionName,
        collectionId,
        tokenAddress,
      });
    });
    console.log(rentalItems)
    return rentalItems;
  };

  const getRented = async () => {
    const rentalTokensQuery = await fetchRentedData();

    rentalTokensQuery.data.stakingListings.map((i: any) => {
      const id = i.id;
      const name = i.tokenName;
      const URI = i.tokenURI;
      const tokenOwner = i.owner;
      const collectionName = i.collectionName;
      const collectionId = i.collectionId;

      const tokenAddress = "0x482995DA0c3f0Fe629DB4dca956F95A81F88C4Ad"; //nft collection address
      rentedItems.push({
        id,
        URI,
        name,
        tokenOwner,
        collectionName,
        collectionId,
        tokenAddress,
      });
    });
    console.log(rentedItems)
    return rentedItems;
  };

  useEffect(() => {
    if (!connector || !account) {
      return console.log("loading");
    }
    getRentedData()
    getRentalData();
  }, [connector, account]);

  if (!account) {
    return <Navigate to={"/login"} replace={true} />;
  }

  const APIURL =
      "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

  const rentalTokens = `
      {
       stakingListings(where:{stakingStatus:RENTED seller:"${account}"}){
          id
          seller
          tokenName
          tokenURI
          tokenDescription
          tokenId
          deadlineUTC
          colloteralWei
      }
  }
 `;

  const rentedTokens = `
      {
       stakingListings(where:{stakingStatus:ACTIVE seller:"${account}"}){
          id
          seller
          tokenName
          tokenURI
          tokenDescription
          tokenId
          deadlineUTC
          colloteralWei
      }
  }
 `;

  const client = createClient({
    url: APIURL,
  });
  console.log('items',rentalNfts)

  async function fetchRentalData() {
    const data = await client.query(rentalTokens).toPromise();
    console.log(data)
    return data;
  }

  async function getRentalData() {
    const response = await getRental();
    if (response) {
      setRentalNfts(response);
    }
  }

  async function fetchRentedData() {
    const data = await client.query(rentedTokens).toPromise();
    console.log(data)
    return data;
  }

  async function getRentedData() {
    const response = await getRented();
    if (response) {
      setRentedNfts(response);
    }
  }
  return (
    <RentWrap>
      <MenuWrap marg="40px 0 20px 0" justifyContent="space-between">
        <RentSettingsBlock>
          <RentSelect>
            <RentButton
              className={rentType === RentType.rental ? "rent-active" : ""}
              onClick={() => setRentType(RentType.rental)}
            >
              Rental
            </RentButton>
            <RentButton
              className={rentType === RentType.rented ? "rent-active" : ""}
              onClick={() => setRentType(RentType.rented)}
            >
              Rented
            </RentButton>
          </RentSelect>
          {viewButtonsRender}
        </RentSettingsBlock>
        <MenuSearchWrap mw="530px" marginLeft="0" placeholder="Search" />
        <RentResultsTotal>8 results</RentResultsTotal>
      </MenuWrap>

      <FilterSelected />
      
      {viewMode === ViewMode.grid && rentType === RentType.rental && (
          <>
            {rentedNfts ? (
                <CollectionGridWrap itemList={rentedNfts} />
            ) : (
                <span>There are no NFTs on the marketplace</span>
            )}
          </>
      )}

      {viewMode === ViewMode.list && rentType === RentType.rental && (
          <>
            {rentedNfts ? (
                <NFTListItem itemList={rentedNfts}  />
            ) : (
                <span>There are no NFTs on the marketplace</span>
            )}
          </>
      )}

      {viewMode === ViewMode.grid && rentType === RentType.rented && (
          <>
            {rentalNfts ? (
                <CollectionGridWrap itemList={rentalNfts} />
            ) : (
                <span>There are no NFTs on the marketplace</span>
            )}
          </>
      )}

      {viewMode === ViewMode.list && rentType === RentType.rented && (
        <>
      {rentalNfts ? (
        <NFTListItem itemList={rentalNfts}  />
        ) : (
        <span>There are no NFTs on the marketplace</span>
        )}
        </>
      )}
    </RentWrap>
  );
};

export default RentMenu;
