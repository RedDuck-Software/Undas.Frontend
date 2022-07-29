import React, { useContext, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { createClient } from "urql";

import {
  Banner,
  Title,
  Info,
  InfoCard,
  InfoText,
  LoaderWrapper,
  PageWrapper,
} from "./Categories.styles";
import { CollectionGameBanner } from "./imports";
import Collection from "./page-components/Collection";

import { Container, Background } from "../../globalStyles";
import Context from "../../utils/Context";

type CollectionItemProps = {
  id: number;
  collectionUrl: string;
  collectionCategory: string;
  collectionInfo?: string;
  collectionName?: string;
  collectionFeatureImg?: string;
  collectionBannerImg?: string;
  owner?: string;
};

const CategoriesMetaverses: React.FC = () => {
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
      const collectionFeatureImg = i.collectionFeatureUrl;
      const collectionBannerImg = i.collectionBannerUrl;

      collectionsList.push({
        id,
        collectionUrl,
        collectionCategory,
        collectionName,
        collectionInfo,
        owner,
        collectionFeatureImg,
        collectionBannerImg,
      });
    });
    return collectionsList;
  };

  useEffect(() => {
    getСollectionData();
  }, [connector]);

  const APIURL =
    "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

  const createdTokensQuery = `
    {
          collections(where:{collectionCategory:METAVERSE}){
          collectionName
          owner
          id
    	    collectionInfo
          collectionUrl
          collectionCategory
          collectionFeatureUrl
          collectionBannerUrl
          
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
    <LoaderWrapper>
      <ClipLoader color={"#BD10E0"} loading={loading} size={150} />
    </LoaderWrapper>
  ) : (
    <>
      <Banner>
        <img src={CollectionGameBanner} alt="CollectionBanner" />
      </Banner>
      <Background>
        <Container>
          <PageWrapper>
            <Info>
              <div>
                <Title>Metaverses</Title>
              </div>
              <InfoCard>
                <InfoText>
                  On this page you can enjoy a selection of interesting
                  collections. This section provides you with collections in the
                  Metaverses category. The Metaverses category is NFT
                  collections for who will tell you about our metaverses.
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
          </PageWrapper>
        </Container>
      </Background>
    </>
  );
};

export default CategoriesMetaverses;
