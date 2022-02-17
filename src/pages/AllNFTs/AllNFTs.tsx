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
                  <span>to</span>
                  <PriceInput
                    type="text"
                    id="max"
                    name="max"
                    placeholder="Max"
                    value={selectedPriceFilterMax}
                    onChange={(e) => setSelectedPriceFilterMax(e.target.value)}
                  />
                </ButtonsWrapper>
                <ApplyLink>Apply</ApplyLink>
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
