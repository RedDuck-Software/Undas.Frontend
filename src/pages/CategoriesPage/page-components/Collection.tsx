import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { createClient } from "urql";

/*import collection from "../../AccountPage/page-components/Created/page-components/Collection";*/
import {
  CollectionCard,
  AuthorWrap,
  CollectionPicWrap,
  CollectionText,
  NFTCards,
  Platform,
  NameNft,
  CollectionTextDiv,
  CardsWrapper,
  ImageCollection,
  OwnerName,
  CollectionName,
  NameWrap,
} from "../Categories.styles";
import { Verified } from "../imports";

type CollectionItemProps = {
  id: number;
  collectionUrl: string;
  collectionFeatureImg?: string;
  collectionBannerImg?: string;
  collectionCategory: string;
  collectionInfo?: string;
  collectionName?: string;
  owner?: string;
  tokens?: [
    {
      uri: string;
    },
  ];
};

interface CollectionGridWrapperProps {
  itemList: CollectionItemProps[];
}

interface CollectionWithCards {
  collectionId: number;
  uri: string;
}

const Collection: React.FC<CollectionGridWrapperProps> = ({ itemList }) => {
  const { account } = useWeb3React();
  const [collectionItems, setCollectionItems] =
    useState<CollectionWithCards[]>();
  const items: CollectionWithCards[] = [];
  const getListings = async () => {
    const tokens = await fetchData();

    tokens.data.tokens.map((i: any) => {
      const uri = i.uri;
      const collectionId = i.collectionId;
      items.push({ uri, collectionId });
    });

    return items;
  };
  useEffect(() => {
    getListingsData();
  }, [account]);

  const APIURL =
    "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

  const client = createClient({
    url: APIURL,
  });

  const tokensQuery = `
    {
      tokens(orderDirection:asc){
        uri
        collectionId
      }
    }
  `;
  async function fetchData() {
    const data = await client.query(tokensQuery).toPromise();
    return data;
  }

  async function getListingsData() {
    const response = await getListings();
    if (response) {
      setCollectionItems(response);
    }
  }

  return (
    <>
      {itemList.map((i) => {
        if (!collectionItems) return;

        const result = collectionItems
          .filter((nft) => nft.collectionId == i.id)
          .slice(0, 3);
        return (
          <CollectionCard key={i.id} to={`/collection/${i.id}`} bg={i.collectionFeatureImg}>
            <AuthorWrap>
              <CollectionPicWrap>
                <img src={i.collectionUrl} alt="collection-pic" />
              </CollectionPicWrap>
              {/*CategoriesPage name*/}
              <NameWrap>
                <NameNft>
                  <CollectionName>{i.collectionName}</CollectionName>
                  <img src={Verified} alt="verified-ico" />
                  <Platform>UND</Platform>
                </NameNft>
                <OwnerName>{i.owner}</OwnerName>
              </NameWrap>
              <CollectionTextDiv>
                <CollectionText>{i.collectionInfo}</CollectionText>
              </CollectionTextDiv>
            </AuthorWrap>
            <CardsWrapper>
              <>
                {result ? (
                  result.map((collectionItem) => {
                    if (i.id == collectionItem.collectionId) {
                      return (
                        <NFTCards
                          key={collectionItem.collectionId + collectionItem.uri}
                        >
                          <ImageCollection
                            src={collectionItem.uri}
                            alt="nft-card"
                          />
                        </NFTCards>
                      );
                    }
                  })
                ) : (
                  <span></span>
                )}
              </>
            </CardsWrapper>
          </CollectionCard>
        );
      })}
    </>
  );
};

export default Collection;
