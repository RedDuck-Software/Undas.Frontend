import React, { useState } from "react";

import {
  Info,
  InfoElement,
  Amount,
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
  FilterPrice,
  HeadWrapper,
  InfoBlock,
  ItemsOwners,
  InfoSmallBorder,
  TextInfo,
  ContainerCollection,
  ResultsSmallSize,
} from "./CollectionPage.styles";
import { CollectionBanner, PurpleEthIco } from "./imports";
import ASideFilterCollection from "./page-components/ASideFilter/ASideFilterCollection";
import CollectionCard from "./page-components/CollectionCard/CollectionCard";
import CollectionGridWrap from "./page-components/CollectionGridWrap";

import FilterMobileButton from "../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import nft0 from "../../images/temp-nft-examples/nft-exp-0.png";
import nft1 from "../../images/temp-nft-examples/nft-exp-1.png";
import nft10 from "../../images/temp-nft-examples/nft-exp-10.png";
import nft11 from "../../images/temp-nft-examples/nft-exp-11.png";
import nft2 from "../../images/temp-nft-examples/nft-exp-2.png";
import nft3 from "../../images/temp-nft-examples/nft-exp-3.png";
import nft4 from "../../images/temp-nft-examples/nft-exp-4.png";
import nft5 from "../../images/temp-nft-examples/nft-exp-5.png";
import nft6 from "../../images/temp-nft-examples/nft-exp-6.png";
import nft7 from "../../images/temp-nft-examples/nft-exp-7.png";
import nft8 from "../../images/temp-nft-examples/nft-exp-8.png";
import nft9 from "../../images/temp-nft-examples/nft-exp-9.png";
import { ViewMode } from "../../types/viewMode";
import useViewMode from "../../utils/hooks/useViewMode";
import { close, filter } from "../Activity/imports";
import {
  FilterImg,
  FilterName,
  FilterClose,
  ClearAll,
} from "../Activity/page-components/MainMenu/Menu.styles";
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
} from "../AllNFTs/AllNFTs.styles";
import NFTListItem from "../AllNFTs/page-components/NFTListItem/NFTListItem";
import { Banner } from "../CategoriesPage/Categories.styles";
import { Wrapper } from "../CategoriesPage/Categories.styles";

const testNFTList = [
  {
    id: 0,
    URI: nft0,
    name: "Returne by ...",
  },
  {
    id: 1,
    URI: nft1,
    name: "Returne by ...",
  },
  {
    id: 2,
    URI: nft2,
    name: "Returne by ...",
  },
  {
    id: 3,
    URI: nft3,
    name: "Returne by ...",
  },
  {
    id: 4,
    URI: nft4,
    name: "Returne by ...",
  },
  {
    id: 5,
    URI: nft5,
    name: "Returne by ...",
  },
  {
    id: 6,
    URI: nft6,
    name: "Returne by ...",
  },
  {
    id: 7,
    URI: nft7,
    name: "Returne by ...",
  },
  {
    id: 8,
    URI: nft8,
    name: "Returne by ...",
  },
  {
    id: 9,
    URI: nft9,
    name: "Returne by ...",
  },
  {
    id: 10,
    URI: nft10,
    name: "Returne by ...",
  },
  {
    id: 11,
    URI: nft11,
    name: "Returne by ...",
  },
];

const CollectionPage: React.FC = () => {
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });

  const { viewMode, viewButtonsRender } = useViewMode();
  return (
    <>
      <ContainerCollection>
        <Banner>
          <img src={CollectionBanner} alt="CollectionBanner" />
        </Banner>
        <AllNFTContainer>
          <ASideFilterCollection marginTop="208px" />
          <Wrapper w="100%">
            <HeadWrapper>
              <CollectionCard />
              <InfoBox>
                <Info>
                  <InfoElement>
                    <TextInfo>Items</TextInfo>
                    <Amount>14000</Amount>
                  </InfoElement>
                  <InfoElement>
                    <TextInfo>Owners</TextInfo>
                    <Amount>6400</Amount>
                  </InfoElement>
                  <InfoElement>
                    <TextInfo>Floor Price</TextInfo>
                    <Wrapper disp="flex" gap="5px">
                      <PurpleEthIco />
                      <Amount>3,2</Amount>
                    </Wrapper>
                  </InfoElement>
                  <InfoElement>
                    <TextInfo>Total Vol</TextInfo>
                    <Wrapper disp="flex" gap="5px">
                      <PurpleEthIco />
                      <Amount>13,402,000</Amount>
                    </Wrapper>
                  </InfoElement>
                </Info>
                <AddToFav>Make a Complaint</AddToFav>
              </InfoBox>
              <InfoBlock>
                <ItemsOwners>
                  <TextInfo>Items</TextInfo>
                  <br></br>
                  <Amount>14000</Amount>
                </ItemsOwners>
                <ItemsOwners>
                  <TextInfo>Owners</TextInfo>
                  <br></br>
                  <Amount>6400</Amount>
                </ItemsOwners>
              </InfoBlock>
              <InfoSmallBorder>
                <ItemsOwners>
                  <TextInfo>Floor Price</TextInfo>
                  <br></br>
                  <PurpleEthIco /> <Amount>3,2</Amount>
                </ItemsOwners>
                <ItemsOwners>
                  <TextInfo>Total Vol</TextInfo>
                  <br></br>
                  <PurpleEthIco /> <Amount>13,402,000</Amount>
                </ItemsOwners>
              </InfoSmallBorder>
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

            <SelectedFiltersCollection>
              <FilterSelected>
                <FilterImg src={filter} alt="filter-image" />
                <FilterName>Borya Fo...</FilterName>
                <FilterClose src={close} alt="close" />
              </FilterSelected>
              <ClearAll>Clear All</ClearAll>
            </SelectedFiltersCollection>
            <ResultsSmallSize>
              <TextResult>8 results</TextResult>
            </ResultsSmallSize>
            {viewMode === ViewMode.grid ? (
              <CollectionGridWrap itemList={testNFTList} />
            ) : (
              <>
                {testNFTList.map((item) => {
                  return (
                    <NFTListItem
                      key={item.id}
                      name={item.name}
                      URI={item.URI}
                    />
                  );
                })}
              </>
            )}
          </Wrapper>
          <FilterMobileButton />
        </AllNFTContainer>
      </ContainerCollection>
    </>
  );
};

export default CollectionPage;
