import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useQuery } from "urql";

// eslint-disable-next-line import/order
import {
  AllNFTContainer,
  MenuWrap,
  ResultsTotal,
  SettingsBlock,
  Filter,
  FilterItem,
  MenuItem,
  FilterTitle,
  Arrow,
  FilterMenu,
  MenuSearchWrap,
} from "./AllNFTs.styles";
import NFTListItem from "./page-components/NFTListItem/NFTListItem";
import { getListingsData } from "./query";

import ASideFilter from "../../components/ASideFilter/ASideFilter";
import FilterSelected from "../../components/FilterSelected/FilterSelected";
import AllGridWrap from "../../components/NFTCard/Grid/AllGridWrap";
import { Background } from "../../globalStyles";
import {
  buyAction,
  rentAction,
} from "../../store/reducers/Filter/filterActions";
import { ViewMode } from "../../types/viewMode";
import useViewMode from "../../utils/hooks/useViewMode";
import { Wrapper } from "../CategoriesPage/Categories.styles";

type GridItem = {
  id: number;
  URI: string;
  name: string;
  priceInNum?: number;
  premiumInNum?: number;
  colloteralWei?: number;
  stakingId?: number;
  listingId?: number;
  tokenAddress?: string;
  tokenOwner?: string;
  collectionName?: string;
  collectionId?: string;
  collectionOwner?: string;
};

const AllNFTs: React.FC = () => {
  const dispatch = useDispatch();
  const [results, setResults] = useState<any>();
  const [priceFilter, setPriceFilter] = useState<string>("");
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });
  const items2: GridItem[] = [];
  const [items, setitems] = useState<GridItem[]>();

  const [result] = useQuery({
    query: getListingsData,
  });

  const { data, fetching } = result;



  const getListing = async () => {
    const allNfts = [...data.stakingListings, ...data.listings];

    allNfts.map((i: any) => {
      const item = {
        id: i.tokenId,
        URI: i.tokenURI,
        name: i.tokenName,
        priceInNum: i.price,
        premiumInNum: i.premiumWei,
        colloteralWei: i.colloteralWei,
        stakingId: i.id,
        listingId: i.id,
        tokenAddress: i.token,
        tokenOwner: i.seller,
        collectionName: i.collectionName,
        collectionId: i.collectionId,
        collectionOwner: i.collectionOwner,
      };

      items2.push(item);
    });
    return items2;
  };
  async function getListingsData2() {
    const response = await getListing();
    if (response) {
      setitems(response);
    }
  }

  useEffect(() => {
    if (fetching) return;
    getListingsData2();
  }, [active, priceFilter, fetching]);

  const { viewMode, viewButtonsRender } = useViewMode();

  const { state }: any = useLocation();
  if (state !== null && state !== undefined) {
    if (state.rent) {
      dispatch(rentAction(state.rent));
    }
    if (state.buy) {
      dispatch(buyAction(state.buy));
    }
  }

  return (
    <Background>
      <AllNFTContainer>
        <ASideFilter />
        <Wrapper
          w="100%"
          marg="0 0 120px 0"
          margBottomS="60px"
          margBottomXS="40px"
          margBottomM="80px"
        >
          {/*rm marg after deploy*/}
          <MenuWrap justifyContent="space-between">
            <SettingsBlock>
              {viewButtonsRender}
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
                  <MenuItem
                    hover={true}
                    onClick={() => {
                      setPriceFilter("low-to-high");
                    }}
                  >
                    <span>Price: Low to High</span>
                  </MenuItem>
                  <MenuItem
                    hover={true}
                    onClick={() => {
                      setPriceFilter("high-to-low");
                    }}
                  >
                    <span>Price: High to Low</span>
                  </MenuItem>
                </FilterMenu>
              </Filter>
              <Filter className={active.event && "event-active"}>
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
            <MenuSearchWrap mw="530px" marginLeft="0" placeholder="Search" />
            <ResultsTotal>{results} results</ResultsTotal>
          </MenuWrap>
          <FilterSelected />
          {viewMode === ViewMode.grid ? (
            <AllGridWrap
              getResults={(amount: any) => setResults(amount)}
              priceFilter={priceFilter}
            />
          ) : (
            <>
              {items ? (
                <NFTListItem itemList={items} />
              ) : (
                <span>There are no NFTs on the marketplace</span>
              )}
            </>
          )}
        </Wrapper>
      </AllNFTContainer>
    </Background>
  );
};

export default AllNFTs;
