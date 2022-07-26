import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import AllFilterWrap from "./AllFilterWrap";
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
  TitleWrap,
} from "./AllNFTs.styles";

import ASideFilter from "../../components/ASideFilter/ASideFilter";
import FilterSelected from "../../components/FilterSelected/FilterSelected";
import { Background, PageTitle } from "../../globalStyles";
import {
  rentAction,
  buyAction,
  searchAction,
} from "../../store/reducers/Filter/filterActions";
import useViewMode from "../../utils/hooks/useViewMode";
import { Wrapper } from "../CategoriesPage/Categories.styles";

/* type GridItem = {
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
}; */

const AllNFTs: React.FC = () => {
  const dispatch = useDispatch();
  const [results, setResults] = useState<any>();
  const [priceFilter, setPriceFilter] = useState<string>("");
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 3 || event.target.value.length == 0) {
      dispatch(searchAction(event.target.value));
    }
  };

  return (
    <Background>
      <AllNFTContainer>
        <ASideFilter marginTop="190px" />
        <Wrapper
          w="100%"
          marg="0 0 120px 0"
          margBottomS="60px"
          margBottomXS="40px"
          margBottomM="80px"
        >
          <TitleWrap>
            <PageTitle>All NFTs</PageTitle>
          </TitleWrap>
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
              onChange={handleSearch}
            />
            <ResultsTotal>{results} results</ResultsTotal>
          </MenuWrap>
          <FilterSelected />

          <AllFilterWrap
            getResults={(amount: any) => setResults(amount)}
            priceFilterOrder={priceFilter}
            viewMode={viewMode}
          />
        </Wrapper>
      </AllNFTContainer>
    </Background>
  );
};

export default AllNFTs;
