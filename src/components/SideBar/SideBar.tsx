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
} from "./SideBar.styles";

const SideBar = () => {
  const [statusOpen, setStatusOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [chainsOpen, setChainsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

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
    <SideBarContainer>
      <SideBarFilter>
        Filter
        <MdOutlineArrowBackIosNew />
      </SideBarFilter>

      {statusOpen ? (
        <>
          <SideBarStatusTop onClick={toogleStatusView}>
            Status <IoIosArrowUp />
          </SideBarStatusTop>
          <SideBarStatusContent>
            <StatusButton>Buy now</StatusButton>
            <StatusButton>On Auction</StatusButton>
            <StatusButton>New</StatusButton>
          </SideBarStatusContent>
        </>
      ) : (
        <SideBarStatusTop closed onClick={toogleStatusView}>
          Status <IoIosArrowDown />
        </SideBarStatusTop>
      )}

      {priceOpen ? (
        <>
          <SideBarPriceTop opened onClick={tooglePriceView}>
            Price <IoIosArrowUp />
          </SideBarPriceTop>
          <SideBarPriceContent>
            <ButtonsWrapper>
              <PriceButton>
                United States Dollar (USD) <IoIosArrowDown />
              </PriceButton>
            </ButtonsWrapper>
            <ButtonsWrapper>
              <PriceInput type="text" id="min" name="min" placeholder="Min" />
              <span>to</span>
              <PriceInput type="text" id="max" name="max" placeholder="Max" />
            </ButtonsWrapper>
            <ApplyLink>Apply</ApplyLink>
          </SideBarPriceContent>
        </>
      ) : (
        <SideBarPriceTop onClick={tooglePriceView}>
          Price <IoIosArrowDown />
        </SideBarPriceTop>
      )}

      {collectionsOpen ? (
        <>
          <SideBarCollectionsTop opened onClick={toggleCollectionsView}>
            Collections <IoIosArrowUp />
          </SideBarCollectionsTop>
          <SideBarCollectionsContent>
            <CollectionsSearchWrapper>
              <SearchIcon />
              <CollectionsFilter type="text" placeholder="Filter" />
            </CollectionsSearchWrapper>
            <CollectionsList>
              <CollectionsListItem>
                <ItemImage src={CollectionIcon} />
                <ItemText checkbox>Borya Borya</ItemText>
              </CollectionsListItem>
              <CollectionsListItem>
                <ItemImage src={CollectionIcon} />
                <ItemText checkbox>Borya Borya</ItemText>
              </CollectionsListItem>
              <CollectionsListItem>
                <ItemImage src={CollectionIcon} />
                <ItemText checkbox>Borya Borya</ItemText>
              </CollectionsListItem>
              <CollectionsListItem>
                <ItemImage src={CollectionIcon} />
                <ItemText checkbox>Borya Borya</ItemText>
              </CollectionsListItem>
              <CollectionsListItem>
                <ItemImage src={CollectionIcon} />
                <ItemText checkbox>Borya Borya</ItemText>
              </CollectionsListItem>
            </CollectionsList>
          </SideBarCollectionsContent>
        </>
      ) : (
        <SideBarCollectionsTop closed onClick={toggleCollectionsView}>
          Collections <IoIosArrowDown />
        </SideBarCollectionsTop>
      )}

      {chainsOpen ? (
        <>
          <SideBarChainsTop opened onClick={toggleChainsView}>
            Chains <IoIosArrowUp />
          </SideBarChainsTop>
          <SideBarChainsContent>
            <ChainsList>
              <ChainsListItem>
                <ItemImage src={EthereumIcon} />
                <ItemText>Ethereum</ItemText>
              </ChainsListItem>
              <ChainsListItem>
                <ItemImage src={PolygonIcon} />
                <ItemText>Polygon</ItemText>
              </ChainsListItem>
              <ChainsListItem>
                <ItemImage src={KlaytnIcon} />
                <ItemText>Klaytn</ItemText>
              </ChainsListItem>
            </ChainsList>
          </SideBarChainsContent>
        </>
      ) : (
        <SideBarChainsTop closed onClick={toggleChainsView}>
          Chains <IoIosArrowDown />
        </SideBarChainsTop>
      )}

      {categoriesOpen ? (
        <>
          <SideBarCategoriesTop opened onClick={toggleCategoriesView}>
            Categories <IoIosArrowUp />
          </SideBarCategoriesTop>
          <SideBarCategoriesContent>
            <CategoriesList>
              <CategoriesListItem>
                <ItemImage src={AllNFTsIcon} />
                <ItemText>All NFTs</ItemText>
              </CategoriesListItem>
              <CategoriesListItem>
                <ItemImage src={NewIcon} />
                <ItemText>New</ItemText>
              </CategoriesListItem>
              <CategoriesListItem>
                <ItemImage src={ArtIcon} />
                <ItemText>Art</ItemText>
              </CategoriesListItem>
              <CategoriesListItem>
                <ItemImage src={SportIcon} />
                <ItemText>Sport</ItemText>
              </CategoriesListItem>
              <CategoriesListItem>
                <ItemImage src={GirlsIcon} />
                <ItemText>Girls</ItemText>
              </CategoriesListItem>
              <CategoriesListItem>
                <ItemImage src={FurnitureIcon} />
                <ItemText>Furniture</ItemText>
              </CategoriesListItem>
            </CategoriesList>
          </SideBarCategoriesContent>
        </>
      ) : (
        <>
          <SideBarCategoriesTop closed onClick={toggleCategoriesView}>
            Categories <IoIosArrowDown />
          </SideBarCategoriesTop>
        </>
      )}
    </SideBarContainer>
  );
};

export default SideBar;
