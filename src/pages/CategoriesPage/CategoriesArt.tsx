
import React, {useContext, useEffect, useState} from "react";


import { Banner, Title, Info, InfoCard, InfoText } from "./Categories.styles";
import { CollectionBanner } from "./imports";
import Collection from "./page-components/Collection";

import { Container, Background } from "../../globalStyles";
import {useWeb3React} from "@web3-react/core";
import Context from "../../utils/Context";
import {Navigate} from "react-router-dom";
import {createClient} from "urql";

type CollectionItemProps = {
  id: number;
  collectionUrl: string;
  collectionCategory: string;
  collectionInfo?:string;
  collectionName?:string;
  owner?:string;
}

const CategoriesArt: React.FC = () => {
  const { account } = useWeb3React();
  const { connector } = useContext(Context);
  const createdItems: CollectionItemProps[] = [];
  const [createdNfts,setCreatedNfts] = useState<CollectionItemProps[]>()
  console.log('dasdasdas',createdNfts)
  const getTokensData = async () => {
    const tokensQuery = await fetchData();
    console.log(tokensQuery)
    tokensQuery.data.collections.map((i:any) => {
      const id = i.id
      const collectionCategory = i.collectionCategory
      const collectionUrl = i.collectionUrl
      const collectionName = i.collectionName
      const owner = i.owner
      const collectionInfo = i.collectionInfo

      createdItems.push({id,collectionUrl,collectionCategory,collectionName,collectionInfo,owner})
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
  console.log(createdNfts)

  const APIURL =
      "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

  const createdTokensQuery = `
    {
          collections(where:{collectionCategory:ARTWORK}){
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
    if(response){
      setCreatedNfts(response)
    }
  }
  return (
    <>
      <Banner>
        <img src={CollectionBanner} alt="CollectionBanner" />
      </Banner>
      <Background>
        <Container>
          <Info>
            <div>
              <Title>Artwork</Title>
            </div>
            <InfoCard>
              <InfoText>
                On this page you can enjoy a selection of interesting
                collections. This section features Artwork collections. The
                Artwork category is dedicated to popular works by artists.
              </InfoText>
            </InfoCard>
          </Info>
          <div>
            {createdNfts ? (
                <Collection itemList={createdNfts}/>
            ) : (
                <span>There are no NFTs on the marketplace</span>
            )}
          </div>
        </Container>
      </Background>
    </>
  );
};

export default CategoriesArt;
