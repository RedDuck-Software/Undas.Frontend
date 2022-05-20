import React, { useState } from "react";

import {
  Info,
  InfoElement,
  Amount,
  MakeComplaint,
  AddToFav,
} from "./CollectionPage.styles";
import { CollectionBanner, PurpleEthIco, AddToFavIco } from "./imports";
import CollectionCard from "./page-components/CollectionCard/CollectionCard";
import CollectionGridWrap from "./page-components/CollectionGridWrap";

import ASideFilter from "../../components/ASideFilter/ASideFilter";
import {
  AllNFTContainer,
  Arrow,
  Filter,
  FilterItem,
  FilterMenu,
  FilterTitle,
  MenuItem,
  MenuWrap,
  MenuSearchWrap,
  SearchIco,
  Input,
  SettingsBlock,
  SettingsElement,
  ViewButton,
  ViewOption,
} from "../AllNFTs/AllNFTs.styles";
import { GridIco, ListIco } from "../AllNFTs/imports";
import CardLineNFT from "../AllNFTs/page-components/CardLineNFT/CardLineNFT";
import { Banner } from "../CategoriesPage/Categories.styles";
import { Wrapper } from "../CategoriesPage/Categories.styles";

//Components

//Assets

const CollectionPage: React.FC = () => {
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });
  return (
    <>
      <div>
        <Banner>
          <img src={CollectionBanner} alt="CollectionBanner" />
        </Banner>
        <AllNFTContainer>
          <CollectionCard />
          <ASideFilter marginTop="208px" />
          <Wrapper w="100%">
            <Wrapper w="100%" disp="flex" justifyContent="flex-end">
              <Wrapper
                disp="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                mw="740px"
              >
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
              </Wrapper>
            </Wrapper>
            <MenuWrap marg="40px 0 20px 0">
              <SettingsBlock>
                <SettingsElement>
                  <ViewOption>
                    <ViewButton className="grid-active">
                      <GridIco />
                    </ViewButton>
                    <ViewButton>
                      <ListIco />
                    </ViewButton>
                  </ViewOption>
                </SettingsElement>
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
              <MenuSearchWrap>
                <SearchIco />
                <Input />
              </MenuSearchWrap>
            </MenuWrap>
            <CollectionGridWrap />
            <CardLineNFT />
            <CardLineNFT />
            <CardLineNFT />
          </Wrapper>
        </AllNFTContainer>
      </div>
    </>
  );
};

export default CollectionPage;
