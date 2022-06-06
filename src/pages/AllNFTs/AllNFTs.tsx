import React, { useEffect, useState } from "react";

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
} from "./AllNFTs.styles";
import NFTListItem from "./page-components/NFTListItem/NFTListItem";

import ASideFilter from "../../components/ASideFilter/ASideFilter";
import AllGridWrap from "../../components/NFTCard/Grid/AllGridWrap";
import { ViewMode } from "../../types/viewMode";
import useViewMode from "../../utils/hooks/useViewMode";
import { Wrapper } from "../CategoriesPage/Categories.styles";
import { Background } from "../../globalStyles";

const AllNFTs: React.FC = () => {
  const [results, setResults] = useState<any>();
  const [priceFilter, setPriceFilter] = useState<string>("");
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });
  useEffect(() => {
    console.log(priceFilter);
  }, [active, priceFilter]);

  const { viewMode, viewButtonsRender } = useViewMode();

  return (
    <Background>
      <AllNFTContainer>
        <ASideFilter />
        <Wrapper w="100%" marg="0 0 200px 0">
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
            <ResultsTotal>{results}</ResultsTotal>
          </MenuWrap>
          {viewMode === ViewMode.grid ? (
            <AllGridWrap
              getResults={(amount: any) => setResults(amount)}
              priceFilter={priceFilter}
            />
          ) : (
            <NFTListItem name="item1" />
          )}
        </Wrapper>
      </AllNFTContainer>
    </Background>
  );
};

export default AllNFTs;

/*
import { CardList } from "../../components";

import { Background } from "../../globalStyles";
import { AllNFTsContainer } from "./AllNFTs.styles";
import React, { useState } from "react";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import {
  CollectionIcon,
  EthereumIcon,
  PolygonIcon,
  KlaytnIcon,
  AllNFTsIcon,
  NewIcon,
  ArtIcon,
  SportIcon,
  GirlsIcon,
  FurnitureIcon,
} from "./imports";

import {
  SideBarContainer,
  SideBarFilter,
  SideBarStatusTop,
  SideBarStatusContent,
  StatusButton,
  SideBarPriceTop,
  SideBarPriceContent,
  ButtonsWrapper,
  PriceButton,
  PriceInput,
  ApplyLink,
  SideBarCollectionsTop,
  SideBarCollectionsContent,
  CollectionsSearchWrapper,
  SearchIcon,
  CollectionsFilter,
  CollectionsList,
  CollectionsListItem,
  ItemImage,
  ItemText,
  SideBarChainsTop,
  SideBarChainsContent,
  ChainsList,
  ChainsListItem,
  SideBarCategoriesTop,
  SideBarCategoriesContent,
  CategoriesList,
  CategoriesListItem,
} from "./AllNFTs.styles";

const AllNFTs = () => {
  const [statusOpen, setStatusOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [chainsOpen, setChainsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [selectedPriceFilterMin, setSelectedPriceFilterMin] = useState("0");
  const [selectedPriceFilterMax, setSelectedPriceFilterMax] =
    useState("1000000");

  const toogleStatusView = () => {
    setStatusOpen(!statusOpen);
  };

  const tooglePriceView = () => {
    setPriceOpen(!priceOpen);
  };

  const toggleCollectionsView = () => {
    setCollectionsOpen(!collectionsOpen);
  };

  const toggleChainsView = () => {
    setChainsOpen(!chainsOpen);
  };

  const toggleCategoriesView = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  return (
    <Background>
      <AllNFTsContainer>
        <SideBarContainer>
          {priceOpen ? (
            <>
              <SideBarPriceTop opened onClick={tooglePriceView}>
                Price <IoIosArrowUp />
              </SideBarPriceTop>
              <SideBarPriceContent>
                <ButtonsWrapper>
                  <PriceInput
                    type="text"
                    id="min"
                    name="min"
                    placeholder="Min"
                    value={selectedPriceFilterMin}
                    onChange={(e) => setSelectedPriceFilterMin(e.target.value)}
                  />
                  <span>-</span>
                  <PriceInput
                    type="text"
                    id="max"
                    name="max"
                    placeholder="Max"
                    value={selectedPriceFilterMax}
                    onChange={(e) => setSelectedPriceFilterMax(e.target.value)}
                  />
                </ButtonsWrapper>
              </SideBarPriceContent>
            </>
          ) : (
            <SideBarPriceTop onClick={tooglePriceView}>
              Price <IoIosArrowDown />
            </SideBarPriceTop>
          )}
        </SideBarContainer>
        <CardList
          priceFilter={{
            min: +selectedPriceFilterMin,
            max: +selectedPriceFilterMax,
          }}
        />
      </AllNFTsContainer>
    </Background>
  );
};

export default AllNFTs;
*/
