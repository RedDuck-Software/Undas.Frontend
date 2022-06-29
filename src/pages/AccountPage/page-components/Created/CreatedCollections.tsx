import React, { useContext, useEffect, useState } from "react";

import Collection from "./page-components/Collection";
import { createClient } from "urql";
import { Navigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import Context from "../../../../utils/Context";

type CollectionItemProps = {
  id: number;
  collectionUrl: string;
  collectionCategory: string;
  collectionInfo?: string;
  collectionName?: string;
  owner?: string;
};

const CreatedCollections: React.FC = () => {
  const { account } = useWeb3React();
  const { connector } = useContext(Context);
  const createdItems: CollectionItemProps[] = [];
  const [createdNfts, setCreatedNfts] = useState<CollectionItemProps[]>();

  const getTokensData = async () => {
    const tokensQuery = await fetchData();
    console.log(tokensQuery);
    tokensQuery.data.collections.map((i: any) => {
      const id = i.id;
      const collectionCategory = i.collectionCategory;
      const collectionUrl = i.collectionUrl;
      const collectionName = i.collectionName;
      const owner = i.owner;
      const collectionInfo = i.collectionInfo;

      createdItems.push({
        id,
        collectionUrl,
        collectionCategory,
        collectionName,
        collectionInfo,
        owner,
      });
    });
    return createdItems;
  };

  useEffect(() => {
    if (!connector || !account) {
      return console.log("loading");
    }
    getListingsData();
  }, [connector, account]);

  if (!account) {
    return <Navigate to={"/login"} replace={true} />;
  }

  const APIURL =
    "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

  const createdTokensQuery = `
    {
          collections(where:{owner:"${account}"}){
          collectionName
          owner
          id
    	  collectionInfo
          collectionUrl
          collectionCategory
          
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
    if (response) {
      setCreatedNfts(response);
    }
  }
  return (
    <>
      {createdNfts ? (
        <Collection itemList={createdNfts} />
      ) : (
        <span>There are no NFTs on the marketplace</span>
      )}
    </>
  );
};

export default CreatedCollections;
