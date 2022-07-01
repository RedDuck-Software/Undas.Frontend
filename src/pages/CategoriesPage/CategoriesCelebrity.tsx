import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { createClient } from "urql";

import { Banner, Title, Info, InfoCard, InfoText } from "./Categories.styles";
import { CollectionBanner } from "./imports";
import Collection from "./page-components/Collection";

import { Container, Background } from "../../globalStyles";
import Context from "../../utils/Context";

type CollectionItemProps = {
  id: number;
  collectionUrl: string;
  collectionCategory: string;
  collectionInfo?: string;
  collectionName?: string;
  owner?: string;
};

const CategoriesGameFI: React.FC = () => {
  const { account } = useWeb3React();
  const { connector } = useContext(Context);
  const collectionsList: CollectionItemProps[] = [];
  const [collections, setCollections] = useState<CollectionItemProps[]>();
  const [loading, setLoading] = useState(true);

  const getСollection = async () => {
    const collectionsFromAPI = await fetchData();
    collectionsFromAPI.data.collections.map((i: any) => {
      const id = i.id;
      const collectionCategory = i.collectionCategory;
      const collectionUrl = i.collectionUrl;
      const collectionName = i.collectionName;
      const owner = i.owner;
      const collectionInfo = i.collectionInfo;

      collectionsList.push({
        id,
        collectionUrl,
        collectionCategory,
        collectionName,
        collectionInfo,
        owner,
      });
    });
    return collectionsList;
  };

  console.log("account", account);
  useEffect(() => {
    if (!connector || !account) {
      return console.log("loading");
    }
    getСollectionData();
  }, [connector]);

  if (!account) {
    return <Navigate to={"/login"} replace={true} />;
  }

  const APIURL =
    "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

  const createdTokensQuery = `
    {
          collections(where:{collectionCategory:CELEBRITY}){
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

  async function getСollectionData() {
    const response = await getСollection();
    if (response) {
      setCollections(response);
      setLoading(false);
    }
  }

  return loading ? (
    <ClipLoader color={"#BD10E0"} loading={loading} size={150} />
  ) : (
    <>
      <Banner>
        <img src={CollectionBanner} alt="CollectionBanner" />
      </Banner>
      <Background>
        <Container>
          <Info>
            <div>
              <Title>Celebrity</Title>
            </div>
            <InfoCard>
              <InfoText>
                On this page you can enjoy a selection of interesting
                collections. In this section the Celebrity collections are
                presented. The Celebrity category is dedicated to celebrities.
              </InfoText>
            </InfoCard>
          </Info>
          <div>
            {collections?.length ? (
              <Collection itemList={collections} />
            ) : (
              <h1 className="text-center">
                No collections have been created at this category
              </h1>
            )}
          </div>
        </Container>
      </Background>
    </>
  );
};

export default CategoriesGameFI;
