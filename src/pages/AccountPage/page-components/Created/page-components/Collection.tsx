import React, { useContext, useEffect, useState } from "react";

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
} from "../Created.styles";
import { CollectionPic, NFT1, NFT2, NFT3, Verified } from "../imports";
import { createClient } from "urql";
import CollectionGridWrap from "../../../../CollectionPage/page-components/CollectionGridWrap";

import { useWeb3React } from "@web3-react/core";

type CollectionItemProps = {
  id: number;
  collectionUrl: string;
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
    console.log(items);

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
          tokens(where:{owner:"${account}"}){
          uri
          collectionId
        }
      }
       `;
  async function fetchData() {
    const data = await client.query(tokensQuery).toPromise();
    console.log(data);
    return data;
  }

  async function getListingsData() {
    const response = await getListings();

    if (response) {
      setCollectionItems(response);
    }
  }
  console.log(collectionItems);
  return (
    <>
      {itemList.map((i) => {
        return (
          <CollectionCard key={i.id} to="/collection">
            <AuthorWrap>
              <CollectionPicWrap>
                <img src={CollectionPic} alt="collection-pic" />
              </CollectionPicWrap>
              <div>
                <NameNft>
                  <CollectionText>{i.collectionName}</CollectionText>
                  <img src={Verified} alt="verified-ico" />
                  <Platform>UND</Platform>
                </NameNft>
                <CollectionText>created by you</CollectionText>
              </div>
              <CollectionTextDiv>
                <CollectionText>{i.collectionInfo}</CollectionText>
              </CollectionTextDiv>
            </AuthorWrap>
            <CardsWrapper>
              <>
                {collectionItems ? (
                  collectionItems.map((collectionItem, counter) => {
                    console.log(i.id);
                    if (i.id == collectionItem.collectionId && counter <= 3) {
                      counter++;
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
                  <span>There are no NFTs on the marketplace</span>
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
