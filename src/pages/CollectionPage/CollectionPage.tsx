import React, { useState } from "react";

import {
  Info,
  InfoElement,
  Amount,
  MakeComplaint,
  AddToFav,
  InfoBox,
  ViewOptionCollection,
  MenuSearchWrapSmall,
  DisplayNone,
  SettingsBlockCollection,
  FilterNewly,
  Results,
  TextResult,
  MenuWrapCollection,
  FilterSelected,
  SelectedFiltersCollection,
  DispS,
  FilterPrice,
  FilterButton,
  FilterText,
  MakeComplaintL,
  HeadWrapper,
} from "./CollectionPage.styles";
import { CollectionBanner, PurpleEthIco, AddToFavIco } from "./imports";
import CollectionCard from "./page-components/CollectionCard/CollectionCard";
import CollectionGridWrap from "./page-components/CollectionGridWrap";

import ASideFilter from "../../components/ASideFilter/ASideFilter";
import { close, filter } from "../Activity/imports";
import {
  FilterImg,
  FilterName,
  FilterClose,
  ClearAll,
} from "../Activity/page-components/MainMenu/Menu.styles";
import { ViewMode } from "../../types/viewMode";
import useViewMode from "../../utils/hooks/useViewMode";
import {
  AllNFTContainer,
  Arrow,
  FilterItem,
  FilterMenu,
  FilterTitle,
  MenuItem,
  MenuSearchWrap,
  SearchIco,
  Input,
  SettingsElement,
  ViewButton,
  SettingsBlock,
} from "../AllNFTs/AllNFTs.styles";
import NFTListItem from "../AllNFTs/page-components/NFTListItem/NFTListItem";
import { Banner } from "../CategoriesPage/Categories.styles";
import { Wrapper } from "../CategoriesPage/Categories.styles";

const CollectionPage: React.FC = () => {
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });

  const { viewMode, viewButtonsRender } = useViewMode();
  return (
    <>
      <div>
        <Banner>
          <img src={CollectionBanner} alt="CollectionBanner" />
        </Banner>
        <AllNFTContainer>
          <DispS>
            <ASideFilter marginTop="208px" />
          </DispS>
          <Wrapper w="100%">
            <HeadWrapper>
              <CollectionCard />
              <InfoBox>
                <Info>
                  <InfoElement>
                    <span>Items</span>
                    <Amount>14000</Amount>
                  </InfoElement>
                  <InfoElement>
                    <span>Owners</span>
                    <Amount>6400</Amount>
                  </InfoElement>
                  <InfoElement>
                    <span>Floor Price</span>
                    <Wrapper disp="flex" gap="5px">
                      <PurpleEthIco />
                      <Amount>3,2</Amount>
                    </Wrapper>
                  </InfoElement>
                  <InfoElement>
                    <span>Total Vol</span>
                    <Wrapper disp="flex" gap="5px">
                      <PurpleEthIco />
                      <Amount>13,402,000</Amount>
                    </Wrapper>
                  </InfoElement>
                </Info>
                <MakeComplaint>Make a Complaint</MakeComplaint>
                <AddToFav>
                  <AddToFavIco />
                  Add to Favorites
                </AddToFav>
                <MakeComplaintL>Make a Complaint</MakeComplaintL>
              </InfoBox>
            </HeadWrapper>
            <MenuSearchWrapSmall>
              <SearchIco />
              <Input placeholder="Search" />
            </MenuSearchWrapSmall>
            <MenuWrapCollection marg="40px 0 20px 0">
              <SettingsBlockCollection>
                <SettingsElement>
                  <ViewOptionCollection>
                    {viewButtonsRender}
                  </ViewOptionCollection>
                </SettingsElement>
                <FilterPrice className={active.price && "price-active"}>
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
                </FilterPrice>
                <FilterNewly className={active.event && "event-active"}>
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
                </FilterNewly>
                <Results>
                  <TextResult>8 results</TextResult>
                </Results>
              </SettingsBlockCollection>
              <DisplayNone>
                <MenuSearchWrap>
                  <SearchIco />
                  <Input placeholder="Search" />
                </MenuSearchWrap>
              </DisplayNone>
            </MenuWrapCollection>
            <FilterButton>
              <FilterText>Filter</FilterText>
            </FilterButton>
            <SelectedFiltersCollection>
              <FilterSelected>
                <FilterImg src={filter} alt="filter-image" />
                <FilterName>Borya Fo...</FilterName>
                <FilterClose src={close} alt="close" />
              </FilterSelected>
              <ClearAll>Clear All</ClearAll>
            </SelectedFiltersCollection>
            {viewMode === ViewMode.grid ? (
              <CollectionGridWrap />
            ) : (
              <>
                <NFTListItem name="item1" />
                <NFTListItem name="item1" />
                <NFTListItem name="item1" />
              </>
            )}
            <MenuSearchWrap>
              <SearchIco />
              <Input />
            </MenuSearchWrap>
          </Wrapper>
        </AllNFTContainer>
      </div>
    </>
  );
};

export default CollectionPage;
