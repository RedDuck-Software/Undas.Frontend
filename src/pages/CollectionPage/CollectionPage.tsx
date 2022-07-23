import { ethers } from "ethers";
import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useQuery } from "urql";

import {
  Banner,
  Info,
  InfoElement,
  Amount,
  InfoBox,
  SelectedFiltersCollection,
  HeadWrapper,
  TextInfo,
  ContainerCollection,
  ContainerNFT,
  MyWrapper,
  CollectionDescript,
  DescriptBtn,
} from "./CollectionPage.styles";
import { PurpleEthIco } from "./imports";
import CollectionCard from "./page-components/CollectionCard/CollectionCard";
import CollectionGridWrap from "./page-components/CollectionGridWrap";
import { GET_COLLECTION_INFO } from "./query";

import ASideFilter from "../../components/ASideFilter/ASideFilter";
import FilterMobileButton from "../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import { Background, ClipLoaderWrapper } from "../../globalStyles";
import { ViewMode } from "../../types/viewMode";
import Context from "../../utils/Context";
import useViewMode from "../../utils/hooks/useViewMode";
import {
  AllNFTContainer,
  Arrow,
  Filter,
  FilterItem,
  FilterMenu,
  FilterTitle,
  MenuWrap,
  SettingsBlock,
  MenuItem,
  MenuSearchWrap,
  ResultsTotal,
} from "../AllNFTs/AllNFTs.styles";
import NFTListItem from "../AllNFTs/page-components/NFTListItem/NFTListItem";

interface CommonProps {
  id: number;
  name: string;
  URI: string;
  description: string;
  tokenAddress: string;
  collectionOwner: string;
  collectionId: string;
  collectionName?: string;
  collectionFeatureUrl?: string;
  priceInNum?: number;
  colloteralWei?: number;
}

const CollectionPage: React.FC = () => {
  const params = useParams();
  const [result] = useQuery({
    query: GET_COLLECTION_INFO,
    variables: { collectionId: params.id },
  });
  const { data, fetching } = result;

  const { viewMode, viewButtonsRender } = useViewMode();

  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });

  const { connector } = useContext(Context);

  const [list, setList] = useState<CommonProps[]>([]);
  useEffect(() => {
    getListingsData();
  }, [connector, fetching]);

  const [show, setShow] = useState(false);

  const getTokenData = async () => {
    if (fetching) return;
    const collectionItem: CommonProps[] = [];
    data.collection.tokens.map((i: any) => {
      const item = {
        id: i.id,
        name: i.name,
        URI: i.uri,
        description: i.tokenDescription,
        collectionOwner: i.owner,
        collectionId: i.collectionId.toString(),
        tokenAddress: "0x19CF92bC45Bc202DC4d4eE80f50ffE49CB09F91d",
        collectionName: i.collectionName,
        priceInNum: i.price ? +ethers.utils.formatEther(i.price) : undefined,
        colloteralWei: i.colloteral,
      };
      collectionItem.push(item);
    });

    return collectionItem;
  };

  const getListingsData = async () => {
    const response = await getTokenData();
    if (response) {
      setList(response);
    }
  };
  return (
    <>
      {fetching && !data ? (
        <ClipLoaderWrapper>
          <ClipLoader color={"#BD10E0"} loading={fetching} size={250} />
        </ClipLoaderWrapper>
      ) : (
        <ContainerCollection>
          <Banner src={data.collection.collectionFeatureUrl} />
          <Background>
            <AllNFTContainer>
              <ASideFilter marginTop="208px" page="Collection" />
              <ContainerNFT>
                <HeadWrapper>
                  <CollectionCard
                    name={data.collection.collectionName}
                    creator={data.collection.owner}
                    logo={data.collection.collectionUrl}
                  />
                  <InfoBox>
                    <Info>
                      <InfoElement className="large-items">
                        <TextInfo>Items</TextInfo>
                        <Amount>
                          {data.collection.collectionItemsAmount
                            ? data.collection.collectionItemsAmount
                            : "-"}
                        </Amount>
                      </InfoElement>
                      <InfoElement>
                        <TextInfo>Owners</TextInfo>
                        <Amount>
                          {data.collection.totalOwners
                            ? data.collection.totalOwners
                            : "-"}
                        </Amount>
                      </InfoElement>
                      <InfoElement className="small-floor">
                        <TextInfo>Floor Price</TextInfo>
                        <MyWrapper>
                          <PurpleEthIco />
                          <Amount>
                            {data.collection.floorPrice &&
                            data.collection.floorPrice[0]
                              ? ethers.utils.formatEther(
                                  data.collection.floorPrice[0].price,
                                )
                              : "-"}
                          </Amount>
                        </MyWrapper>
                      </InfoElement>
                      <InfoElement className="small-vol">
                        <TextInfo>Total Vol</TextInfo>
                        <MyWrapper>
                          <PurpleEthIco />
                          <Amount>
                            {data.collection.collectionVolume
                              ? ethers.utils.formatEther(
                                  data.collection.collectionVolume,
                                )
                              : "-"}
                          </Amount>
                        </MyWrapper>
                      </InfoElement>
                    </Info>
                    <CollectionDescript opacity={show}>
                      {data.collection.collectionInfo}
                    </CollectionDescript>
                    <DescriptBtn onClick={() => setShow(true)}>
                      Show more
                    </DescriptBtn>
                  </InfoBox>
                </HeadWrapper>
                <MenuWrap marg="40px 0 20px 0" justifyContent="space-between">
                  <SettingsBlock>
                    <>{viewButtonsRender}</>
                    <Filter className={active.price && "price-active"}>
                      <FilterItem
                        onClick={() => {
                          if (!active.price) {
                            setActive({ price: true });
                          } else setActive({ price: false });
                        }}
                      >
                        <FilterTitle>Sort by Price</FilterTitle>
                        <Arrow className={active.price && "price-active"} />
                      </FilterItem>
                      <FilterMenu className={active.price && "price-active"}>
                        <MenuItem hover={true}>
                          <span>Price: Low to High</span>
                        </MenuItem>
                        <MenuItem hover={true}>
                          <span>Price: High to Low</span>
                        </MenuItem>
                      </FilterMenu>
                    </Filter>
                    <Filter className={active.event && "event-active"} disabled>
                      <FilterItem
                        onClick={() => {
                          if (!active.event) {
                            setActive({ event: true });
                          } else setActive({ event: false });
                        }}
                      >
                        <FilterTitle>Sort by Event</FilterTitle>
                        <Arrow className={active.event && "event-active"} />
                      </FilterItem>
                      <FilterMenu className={active.event && "event-active"}>
                        <MenuItem hover={true}>
                          <span>Newly Created</span>
                        </MenuItem>
                        <MenuItem hover={true}>
                          <span>Recently Sold</span>
                        </MenuItem>
                        <MenuItem hover={true}>
                          <span>Recently Posted</span>
                        </MenuItem>
                        <MenuItem hover={true}>
                          <span>Recently Staking</span>
                        </MenuItem>
                      </FilterMenu>
                    </Filter>
                  </SettingsBlock>
                  <MenuSearchWrap
                    mw="530px"
                    marginLeft="0"
                    placeholder="Search"
                  />
                  <ResultsTotal>
                    {data ? data.collection.tokens.length : "0"} results
                  </ResultsTotal>
                </MenuWrap>
                <SelectedFiltersCollection></SelectedFiltersCollection>
                {viewMode === ViewMode.grid ? (
                  <CollectionGridWrap itemList={list} />
                ) : (
                  <>
                    {list ? (
                      <NFTListItem itemList={list} />
                    ) : (
                      <span>There are no NFTs on the marketplace</span>
                    )}
                  </>
                )}
              </ContainerNFT>
              <FilterMobileButton />
            </AllNFTContainer>
          </Background>
        </ContainerCollection>
      )}
    </>
  );
};

export default CollectionPage;
