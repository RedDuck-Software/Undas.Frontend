import { useWeb3React } from "@web3-react/core";
import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useQuery } from "urql";

import {
  CreatedWrap,
  CreatedSettingsBlock,
  CreatedButton,
  CreatedSelect,
  CreatedResultsTotal,
  ClipLoaderWrapper,
} from "./Created.styles";
import CreatedCollections from "./CreatedCollections";
import { CreatedType } from "./types";

import FilterSelected from "../../../../components/FilterSelected/FilterSelected";
import { ViewMode } from "../../../../types/viewMode";
import Context from "../../../../utils/Context";
import useViewMode from "../../../../utils/hooks/useViewMode";
import { MenuSearchWrap, MenuWrap } from "../../../AllNFTs/AllNFTs.styles";
import NFTListItem from "../../../AllNFTs/page-components/NFTListItem/NFTListItem";
import CollectionGridWrap from "../../../CollectionPage/page-components/CollectionGridWrap";
import { SmallNumber } from "../../AccountPage.styles";
import { GET_CREATED_COLLECTIONS, GET_CREATED_NFTS } from "../../query";
import { CreatedCollectionItemProps, CreatedItemProps } from "../../types";
import NoData from "../NoData/NoData";

const Created: React.FC = () => {
  const { account } = useWeb3React();
  const { connector } = useContext(Context);
  const { viewMode, viewButtonsRender } = useViewMode();
  const [createdType, setCreatedType] = useState<CreatedType>(CreatedType.nft);
  const [createdNfts, setCreatedNfts] = useState<CreatedItemProps[]>([]);
  const [createdCollections, setCreatedCollections] = useState<
    CreatedCollectionItemProps[]
  >([]);

  const createdMultipleQuery = () => {
    const nfts = useQuery({
      query: GET_CREATED_NFTS,
      variables: { creator: account },
    });
    const collections = useQuery({
      query: GET_CREATED_COLLECTIONS,
      variables: { owner: account },
    });

    return [nfts, collections];
  };
  const [[nftsResult], [collectionsResult]] = createdMultipleQuery();

  const getUserCreatedNft = async () => {
    const { data, fetching } = nftsResult;

    if (fetching) return;

    if (createdType === CreatedType.nft) {
      const createdItems: CreatedItemProps[] = [];
      data.tokens.map((i: any) => {
        createdItems.push({
          id: i.id,
          name: i.name,
          URI: i.uri,
          tokenOwner: i.owner,
          collectionName: i.collectionName,
          collectionId: i.collectionId,
          tokenAddress: "0x19CF92bC45Bc202DC4d4eE80f50ffE49CB09F91d",
        });
      });
      return createdItems;
    }
  };

  const getCreatedNfts = async () => {
    const response = await getUserCreatedNft();
    if (response) {
      setCreatedNfts(response as CreatedItemProps[]);
    }
  };

  const getUserCreatedCollections = async () => {
    const { data, fetching } = collectionsResult;

    if (fetching) return;

    const createdItems: CreatedCollectionItemProps[] = [];
    data.collections.map((i: any) => {
      createdItems.push({
        id: i.id,
        collectionName: i.collectionName,
        collectionUrl: i.collectionUrl,
        collectionFeatureUrl: i.collectionFeatureUrl,
        owner: i.owner,
        collectionInfo: i.collectionInfo,
        collectionCategory: i.collectonCategory,
      });
    });
    return createdItems;
  };

  const getCreatedCollections = async () => {
    const response = await getUserCreatedCollections();
    if (response) {
      setCreatedCollections(response as CreatedCollectionItemProps[]);
    }
  };

  useEffect(() => {
    if (!connector || !account) {
      return console.log("loading");
    }
    getCreatedNfts();
    getCreatedCollections();
  }, [connector, account, nftsResult.fetching, collectionsResult.fetching]);

  if (!account) {
    return <Navigate to={"/login"} replace={true} />;
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
              NFTs
              <SmallNumber>{createdNfts.length}</SmallNumber>
            </CreatedButton>
            <CreatedButton
              className={
                createdType === CreatedType.collection ? "created-active" : ""
              }
              onClick={() => setCreatedType(CreatedType.collection)}
            >
              Collections
              <SmallNumber>{createdCollections.length}</SmallNumber>
            </CreatedButton>
          </CreatedSelect>
          {createdType === CreatedType.nft && viewButtonsRender}
        </CreatedSettingsBlock>
        <MenuSearchWrap mw="530px" marginLeft="0" placeholder="Search" />
        <CreatedResultsTotal>
          {createdType === CreatedType.nft
            ? createdNfts.length
            : createdCollections.length}{" "}
          results
        </CreatedResultsTotal>
      </MenuWrap>

      <FilterSelected />

      {nftsResult.fetching || collectionsResult.fetching ? (
        <ClipLoaderWrapper>
          <ClipLoader
            color={"#BD10E0"}
            loading={collectionsResult.fetching || nftsResult.fetching}
            size={250}
          />
        </ClipLoaderWrapper>
      ) : (
        <>
          {createdNfts.length > 0 || createdCollections.length > 0 ? (
            <>
              {createdType === CreatedType.nft && (
                <>
                  {nftsResult.fetching ? (
                    <ClipLoader
                      color={"#BD10E0"}
                      loading={collectionsResult.fetching}
                      size={250}
                    />
                  ) : (
                    <>
                      {viewMode === ViewMode.grid ? (
                        <CollectionGridWrap itemList={createdNfts} />
                      ) : (
                        <NFTListItem itemList={createdNfts} />
                      )}
                    </>
                  )}
                </>
              )}

              {createdType === CreatedType.collection && (
                <>
                  {collectionsResult.fetching ? (
                    <ClipLoader
                      color={"#BD10E0"}
                      loading={collectionsResult.fetching}
                      size={250}
                    />
                  ) : (
                    <CreatedCollections
                      createdCollections={createdCollections}
                    />
                  )}
                </>
              )}
            </>
          ) : (
            <NoData />
          )}
        </>
      )}
    </CreatedWrap>
  );
};

export default Created;
