import React, {FC, useState} from 'react'
import {Container} from "../../globalStyles";

import {
    AllNFTContainer,
    MenuWrap,
    ResultsTotal,
    SettingsBlock,
    SettingsElement,
    ViewOption,
    ViewButton,
    Filter,
    FilterItem,
    FilterTitle,
    Arrow,
    FilterMenu
} from "./AllNFTs.styles";

import {
    GridIco,
    ListIco
} from './imports'

const AllNFTs:FC = () => {


    return (
      <AllNFTContainer>
          <MenuWrap>
              <SettingsBlock>
                  <SettingsElement>
                    <ViewOption>
                        <ViewButton className = 'grid-active'><GridIco /></ViewButton>
                        <ViewButton><ListIco /></ViewButton>
                    </ViewOption>
                  </SettingsElement>
                  <Filter>
                      <FilterItem>
                          <FilterTitle>Sort by Price</FilterTitle>
                          <Arrow />
                      </FilterItem>
                      <FilterMenu>
                          <FilterItem hover={true}>
                                <span>Price: Low to High</span>
                          </FilterItem>
                          <FilterItem hover={true}>
                              <span>Price: High to Low</span>
                          </FilterItem>
                      </FilterMenu>
                  </Filter>
                  <Filter>
                      <FilterItem>
                          <FilterTitle>Sort by Event</FilterTitle>
                          <Arrow/>
                      </FilterItem>
                      <FilterMenu>
                          <FilterItem hover={true}>
                              <span>Newly Created</span>
                          </FilterItem>
                          <FilterItem hover={true}>
                              <span>Recently Sold</span>
                          </FilterItem>
                          <FilterItem hover={true}>
                              <span>Recently Posted</span>
                          </FilterItem>
                          <FilterItem hover={true}>
                              <span>Recently Staking</span>
                          </FilterItem>
                      </FilterMenu>
                  </Filter>
              </SettingsBlock>
              <ResultsTotal>
                  19 364 263 results
              </ResultsTotal>
          </MenuWrap>
      </AllNFTContainer>
    )
}

export default AllNFTs

















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
