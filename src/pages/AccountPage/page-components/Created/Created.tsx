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
import FilterSelected from "../../../../components/FilterSelected/FilterSelected";
import {createClient} from "urql";

type CreatedItemProps = {
    id: number;
    URI: string;
    name: string;
    tokenOwner?:string;
    collectionName?:string;
    collectionId?:string;
    tokens?: [
        uri:string
    ]
}

const Created: React.FC = () => {
  const { account } = useWeb3React();
  const { connector } = useContext(Context);
  const createdItems: CreatedItemProps[] = [];
  const { viewMode, viewButtonsRender } = useViewMode();
  const [createdType, setCreatedType] = useState<CreatedType>(CreatedType.nft);
  const [createdNfts,setCreatedNfts] = useState<CreatedItemProps[]>()
    const getTokensData = async () => {
        const tokensQuery = await fetchData();

        tokensQuery.data.tokens.map((i:any) => {
            const id = i.id
            const name = i.name
            const URI = i.uri
            const tokenOwner = i.owner
            const collectionName = i.collectionName
            const collectionId = i.collectionId
            const tokens =
            createdItems.push({id,URI,name,tokenOwner,collectionName,collectionId})
        })
        return createdItems
        }
    console.log('account',account)

  useEffect(() => {
    if (!connector || !account) {
      return console.log("loading");
    }
      getListingsData()
  }, [connector, account]);

  if (!account) {
    return <Navigate to={"/login"} replace={true} />;
  }

    const APIURL =
        "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

    const createdTokensQuery = `
    {
      tokens(where:{owner:"${account}"}){
          collectionName
          owner
          id
          desciption
          uri
          collectionId
          name
        }
    }
 `;

    const client = createClient({
        url: APIURL,
    });

    async function fetchData() {
        const data = await client.query(createdTokensQuery).toPromise();
        return data;
    }

    async function getListingsData() {
        const response = await getTokensData();
        if(response){
            setCreatedNfts(response)
        }
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

      {viewMode === ViewMode.grid && createdType === CreatedType.nft &&  (
          <>
              {createdNfts ? (
                  <CollectionGridWrap itemList={createdNfts} />
              ) : (
                  <span>There are no NFTs on the marketplace</span>
              )}
          </>
      )}

      {viewMode === ViewMode.list && createdType === CreatedType.nft && (
        <>
          {createdNfts?.map((item) => {
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
