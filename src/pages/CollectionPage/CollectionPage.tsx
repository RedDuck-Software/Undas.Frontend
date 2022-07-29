import { ethers } from "ethers";
import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  BodyWrapper,
  ContentWrap,
} from "./CollectionPage.styles";
import { PurpleEthIco } from "./imports";
import CollectionCard from "./page-components/CollectionCard/CollectionCard";
import CollectionGridWrap from "./page-components/CollectionGridWrap";
import { GET_COLLECTION_INFO } from "./query";

import ASideFilter from "../../components/ASideFilter/ASideFilter";
import FilterMobileButton from "../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import { Background, ClipLoaderWrapper } from "../../globalStyles";
import { searchAction } from "../../store/reducers/Filter/filterActions";
import {
  useBuy,
  useRent,
  useHasOffers,
  usePriceFilter,
  useSearch,
} from "../../store/reducers/Filter/helpers";
import { ViewMode } from "../../types/viewMode";
import Context from "../../utils/Context";
import useViewMode from "../../utils/hooks/useViewMode";
import { priceFilterBetween } from "../../utils/priceFilter";
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
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const buyingFilter = useSelector(useBuy);
  const rentingFilter = useSelector(useRent);
  const hasOfferFilter = useSelector(useHasOffers);
  const priceFilter = useSelector(usePriceFilter);
  const searchFilter = useSelector(useSearch);
  const params = useParams();
  const [result] = useQuery({
    query: GET_COLLECTION_INFO(
      params.id ? params.id : 0,
      buyingFilter.buying,
      rentingFilter.stacking,
      hasOfferFilter.hasOffers,
      searchFilter,
    ),
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
    if (priceFilter.min == "" && priceFilter.max == "") {
      getListingsData();
      return;
    }
  }, [
    connector,
    fetching,
    buyingFilter.buying,
    rentingFilter.stacking,
    hasOfferFilter.hasOffers,
    priceFilter,
    searchFilter,
  ]);

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

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);

    if (!priceFilter) return;
    if (!priceFilter.min && !priceFilter.max) return;

    if (!priceFilter.min) {
      const { max } = priceFilter;
      const result = list.filter(priceFilterBetween(0, max));
      setList(result);
      return;
    }

    if (!priceFilter.max) {
      const { min } = priceFilter;
      const result = list.filter(priceFilterBetween(min, 9999999999999));
      setList(result);
      return;
    }

    if (priceFilter.min && priceFilter.max) {
      const { min, max } = priceFilter;
      const result = list.filter(priceFilterBetween(min, max));
      setList(result);
      return;
    }
  }, [priceFilter]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 3 || event.target.value.length == 0) {
      dispatch(searchAction(event.target.value));
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [
    buyingFilter.buying,
    rentingFilter.stacking,
    hasOfferFilter.hasOffers,
    priceFilter,
    searchFilter,
  ]);

  console.log(data);
  console.log(
    GET_COLLECTION_INFO(
      params.id ? params.id : 0,
      buyingFilter.buying,
      rentingFilter.stacking,
      hasOfferFilter.hasOffers,
      searchFilter,
    ),
  );
  
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
                    <DescriptBtn onClick={() => setShow(!show)}>
                      {show ? "Hide" : "Show more"}
                    </DescriptBtn>
                  </InfoBox>
                </HeadWrapper>
                <BodyWrapper>
                  <ASideFilter marginTop={"70px"} page="Collection" />
                  <ContentWrap>
                    <MenuWrap
                      marg="40px 0 20px 0"
                      justifyContent="space-between"
                    >
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
                          <FilterMenu
                            className={active.price && "price-active"}
                          >
                            <MenuItem hover={true}>
                              <span>Price: Low to High</span>
                            </MenuItem>
                            <MenuItem hover={true}>
                              <span>Price: High to Low</span>
                            </MenuItem>
                          </FilterMenu>
                        </Filter>
                        <Filter
                          className={active.event && "event-active"}
                          disabled
                        >
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
                          <FilterMenu
                            className={active.event && "event-active"}
                          >
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
                        onChange={handleSearch}
                      />
                      <ResultsTotal>{list.length} results</ResultsTotal>
                    </MenuWrap>
                    <SelectedFiltersCollection></SelectedFiltersCollection>
                    {loading ? (
                      <ClipLoaderWrapper>
                        <ClipLoader
                          color={"#BD10E0"}
                          loading={fetching || loading}
                          size={125}
                        />
                      </ClipLoaderWrapper>
                    ) : (
                      <>
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
                      </>
                    )}
                  </ContentWrap>
                </BodyWrapper>
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
