import React, { useState, useContext, useEffect, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import { useParams } from "react-router-dom";
import { createClient } from "urql";

import {
  Info,
  InfoElement,
  Amount,
  AddToFav,
  InfoBox,
  FilterSelected,
  SelectedFiltersCollection,
  HeadWrapper,
  InfoBlock,
  ItemsOwners,
  InfoSmallBorder,
  TextInfo,
  ContainerCollection,
  ContainerNFT,
  ContainerPopUp,
  InputTextArea,
  SendButton,
} from "./CollectionPage.styles";
import { CollectionBanner, PurpleEthIco } from "./imports";
import ASideFilterCollection from "./page-components/ASideFilter/ASideFilterCollection";
import CollectionCard from "./page-components/CollectionCard/CollectionCard";
import CollectionGridWrap from "./page-components/CollectionGridWrap";

import FilterMobileButton from "../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import { Background } from "../../globalStyles";
import { ViewMode } from "../../types/viewMode";
import Context from "../../utils/Context";
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
import { Banner } from "../CategoriesPage/Categories.styles";
import { Wrapper } from "../CategoriesPage/Categories.styles";

interface CommonProps {
  id: number;
  name: string;
  URI: string;
  description: string;
  tokenAddress: string;
}

export interface ItemsProps {
  id: number;
  URI: string;
  name: string;
  tokenAddress: string;
  tokenOwner?: string;
}

const CollectionPage: React.FC = () => {
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });

  const { connector } = useContext(Context);

  const params = useParams();

  const { viewMode, viewButtonsRender } = useViewMode();

  const [show, setShow] = useState(false);
  const target = useRef(null);
  const collectionItem: CommonProps[] = [];
  const [list, setList] = useState<CommonProps[]>([]);
  useEffect(() => {
    getListingsData();
  }, [connector]);

  const getTokenData = async () => {
    const tokensQuery = await fetchData();
    console.log(tokensQuery.data.tokens);
    tokensQuery.data.tokens.map((i: any) => {
      const id = i.id;
      const name = i.name;
      const URI = i.uri;
      const description = i.description;
      const tokenAddress = "0x3e0bf8ACF0bc007754A1af2EE83F2467BdfAd43a";
      collectionItem.push({ id, name, URI, description, tokenAddress });
    });
    return collectionItem;
  };

  async function getListingsData() {
    const response = await getTokenData();
    if (response) {
      setList(response);
    }
  }

  const APIURL =
    "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

  const tokensQuery = `
{
  tokens(where:{collectionId:"${params.id}"}){
    id
    uri
    desciption
    name
  }
}
 `;

  const client = createClient({
    url: APIURL,
  });
  async function fetchData() {
    const data = await client.query(tokensQuery).toPromise();
    return data;
  }
  return (
    <>
      <ContainerCollection>
        <Banner>
          <img src={CollectionBanner} alt="CollectionBanner" />
        </Banner>
        <Background>
          <AllNFTContainer>
            <ASideFilterCollection marginTop="208px" />
            <ContainerNFT>
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
                  <AddToFav ref={target} onClick={() => setShow(!show)}>
                    Make a Complaint
                  </AddToFav>
                  <Overlay
                    target={target.current}
                    show={show}
                    placement="bottom"
                  >
                    {
                      <ContainerPopUp>
                        <InputTextArea placeholder="Comment"></InputTextArea>
                        <SendButton>Send</SendButton>
                      </ContainerPopUp>
                    }
                  </Overlay>
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
              <MenuWrap marg="40px 0 20px 0" justifyContent="space-between">
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
                <MenuSearchWrap
                  mw="530px"
                  marginLeft="0"
                  placeholder="Search"
                />
                <ResultsTotal>12 results</ResultsTotal>
              </MenuWrap>
              <SelectedFiltersCollection>
                <FilterSelected>
                  <FilterImg src={filter} alt="filter-image" />
                  <FilterName>Borya Fo...</FilterName>
                  <FilterClose src={close} alt="close" />
                </FilterSelected>
                <ClearAll>Clear All</ClearAll>
              </SelectedFiltersCollection>
              {viewMode === ViewMode.grid ? (
                <CollectionGridWrap itemList={list} />
              ) : (
                <>
                  {list.map((item) => {
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
            </ContainerNFT>
            <FilterMobileButton />
          </AllNFTContainer>
        </Background>
      </ContainerCollection>
    </>
  );
};

export default CollectionPage;
