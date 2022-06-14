import React, { useState, useContext, useEffect } from "react";

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
  ContainerNFT,
} from "./CollectionPage.styles";
import { CollectionBanner, PurpleEthIco } from "./imports";
import ASideFilterCollection from "./page-components/ASideFilter/ASideFilterCollection";
import CollectionCard from "./page-components/CollectionCard/CollectionCard";
import CollectionGridWrap from "./page-components/CollectionGridWrap";

import FilterMobileButton from "../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
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
import { Background } from "../../globalStyles";
import { useMoralisWeb3Api } from "react-moralis";
import Context from "../../utils/Context";
import { ethers } from "ethers";

export interface ItemsProps {
  id: number;
  URI: string;
  name: string;
  tokenAddress:string;
  tokenOwner?:string;
}

const CollectionPage: React.FC = () => {
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
  });

  const { connector } = useContext(Context);
  const Web3Api = useMoralisWeb3Api();

  async function fetchData() {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);
    const signerPublicAddress = await signer.getAddress();
    


    const data = await Web3Api.Web3API.account.getNFTs({
      chain: "goerli",
      address: signerPublicAddress,
    });
    console.log('data',data)
    return data.result;
  }
  const items: ItemsProps[] = [];

  const [list, setList] = useState<ItemsProps[]>([]);

  async function getNfts() {
 
    const nfts = await fetchData();

    if (!nfts) return;
    nfts.map((nft: any) => {
      const name = nft.name;
      const URI = nft.token_uri;
      const id = nft.token_id;
      const tokenAddress = nft.token_address;
      const tokenOwner = nft.owner_of;
      //query here
      items.push({ id, URI, name,tokenAddress,tokenOwner });
    });
    return items;
  }
  console.log('my collection',list)
  async function getUserNft() {
    const response = await getNfts();

    if (response) {
      setList(response);
    }
  }

  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }

    getUserNft();
  }, [connector]);
  const { viewMode, viewButtonsRender } = useViewMode();
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
