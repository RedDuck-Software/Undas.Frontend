import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect, useState } from "react";
import { createClient } from "urql";

import Collection from "./page-components/Collection";

import Context from "../../../../utils/Context";

type createdCollectionItemProps = {
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

  const createdCollectionItems: createdCollectionItemProps[] = [];
  const [createdCollections, setCreatedCollections] =
    useState<createdCollectionItemProps[]>();

  const getCollection = async () => {
    const collectionsQuery = await fetchData();

    collectionsQuery.data.collections.map((i: any) => {
      const id = i.id;
      const collectionCategory = i.collectionCategory;
      const collectionUrl = i.collectionUrl;
      const collectionName = i.collectionName;
      const owner = i.owner;
      const collectionInfo = i.collectionInfo;

      createdCollectionItems.push({
        id,
        collectionUrl,
        collectionCategory,
        collectionName,
        collectionInfo,
        owner,
      });
    });

    return createdCollectionItems;
  };

  useEffect(() => {
    if (!connector || !account) {
      return console.log("loading");
    }

    getCollectionData();
  }, [connector, account]);

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

  async function getCollectionData() {
    const response = await getCollection();
    if (response) {
      setCreatedCollections(response);
    }
  }
  return (
    <>
      {createdCollections ? (
        <Collection itemList={createdCollections} />
      ) : (
        <span>There are no NFTs on the marketplace</span>
      )}
    </>
  );
};

export default CreatedCollections;
