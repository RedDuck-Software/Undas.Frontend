import React from "react";

import {
  OfferMenuWrap,
  OffersWrapTable,
  ItemIcon,
  ItemName,
  OffersTdText,
  ActionText,
  CollectionName,
  UNDText,
  UND,
  USDPrise,
  QuantityText,
  TimeText,
  PriceTextW,
  SelectedFilters,
  Filter,
  FilterImg,
  FilterName,
  FilterClose,
  ClearAll,
  ContainerTable,
  OffersTr,
  OffersTd,
  OffersHeadTr,
  OffersText,
  NameContainer,
} from "./Menu.styles";

import FilterMobileButton from "../../../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import { PriceText } from "../../../NFTPage/NFTPage.styles";
import { EtherIcon } from "../../../NFTPage/page-components/Accordion/Accordion.styles";
import { ItemImg, ItemVerifyIco, close, filter } from "../../imports";

const OffersMenu: React.FC = () => {
  return (
    <OfferMenuWrap>
      <SelectedFilters>
        <Filter>
          <FilterImg src={filter} alt="filter-image" />
          <FilterName>Borya Fo...</FilterName>
          <FilterClose src={close} alt="close" />
        </Filter>
        <ClearAll>Clear All</ClearAll>
      </SelectedFilters>
      <ContainerTable>
        <OffersWrapTable>
          <OffersHeadTr className="offers-menu-head">
            <OffersTd className="first-column"></OffersTd>
            <OffersTd>Item</OffersTd>
            <OffersTd>
              <PriceTextW>Price</PriceTextW>
            </OffersTd>
            <OffersTd>
              <QuantityText>Quantity</QuantityText>
            </OffersTd>
            <OffersTd>From</OffersTd>
            <OffersTd>To</OffersTd>
            <OffersTd>
              <TimeText>Time</TimeText>
            </OffersTd>
          </OffersHeadTr>
          <OffersTr className="offers-menu-row">
            <OffersTdText className="first-column">
              <ActionText>Offer</ActionText>
            </OffersTdText>
            <OffersTdText className="offers-table-item">
              <ItemIcon>
                <img
                  src={ItemImg}
                  alt="item image"
                  className="offers-item-image"
                />
              </ItemIcon>
              <NameContainer>
                <ItemName>Name NFT</ItemName>
                <CollectionName>Name Collection...</CollectionName>
                <UNDText>
                  <ItemVerifyIco />
                  <UND>UND</UND>
              </UNDText>
              </NameContainer>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <EtherIcon />
                <PriceText>13,0</PriceText>
                <USDPrise>44 456,04</USDPrise>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <OffersText>
                <QuantityText>1</QuantityText>
              </OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText color="#5D3F92">65BA4F</OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText color="#5D3F92">65BA4F</OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText>
                <TimeText>24 seconds ago</TimeText>
              </OffersText>
            </OffersTdText>
          </OffersTr>
          <OffersTr className="offers-menu-row">
            <OffersTdText className="first-column">
              <ActionText>List</ActionText>
            </OffersTdText>
            <OffersTdText className="offers-table-item">
              <ItemIcon>
                <img
                  src={ItemImg}
                  alt="item image"
                  className="offers-item-image"
                />
              </ItemIcon>
              <NameContainer>
                <ItemName>Name NFT</ItemName>
                <CollectionName>Name Collection...</CollectionName>
                <UNDText>
                  <ItemVerifyIco />
                  <UND>UND</UND>
                </UNDText>
              </NameContainer>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <EtherIcon />
                <PriceText>13,0</PriceText>
                <USDPrise>44 456,04</USDPrise>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <OffersText>
                <QuantityText>1</QuantityText>
              </OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText color="#5D3F92">65BA4F</OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText color="#5D3F92">65BA4F</OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText>
                <TimeText>24 seconds ago</TimeText>
              </OffersText>
            </OffersTdText>
          </OffersTr>
          <OffersTr className="offers-menu-row">
            <OffersTdText className="first-column">
              <ActionText>Rent</ActionText>
            </OffersTdText>
            <OffersTdText className="offers-table-item">
              <ItemIcon>
                <img
                  src={ItemImg}
                  alt="item image"
                  className="offers-item-image"
                />
              </ItemIcon>
              <NameContainer>
                <ItemName>Name NFT</ItemName>
                <CollectionName>Name Collection...</CollectionName>
                <UNDText>
                  <ItemVerifyIco />
                  <UND>UND</UND>
                </UNDText>
              </NameContainer>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <EtherIcon />
                <PriceText>13,0</PriceText>
                <USDPrise>44 456,04</USDPrise>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <OffersText>
                <QuantityText>1</QuantityText>
              </OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText color="#5D3F92">65BA4F</OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText color="#5D3F92">65BA4F</OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText>
                <TimeText>24 seconds ago</TimeText>
              </OffersText>
            </OffersTdText>
          </OffersTr>
          <OffersTr className="offers-menu-row">
            <OffersTdText className="first-column">
              <ActionText>Sale</ActionText>
            </OffersTdText>
            <OffersTdText className="offers-table-item">
              <ItemIcon>
                <img
                  src={ItemImg}
                  alt="item image"
                  className="offers-item-image"
                />
              </ItemIcon>
              <NameContainer>
                <ItemName>Name NFT</ItemName>
                <CollectionName>Name Collection...</CollectionName>
                <UNDText>
                  <ItemVerifyIco />
                  <UND>UND</UND>
                </UNDText>
              </NameContainer>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <EtherIcon />
                <PriceText>13,0</PriceText>
                <USDPrise>44 456,04</USDPrise>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <OffersText>
                <QuantityText>1</QuantityText>
              </OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText color="#5D3F92">65BA4F</OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText color="#5D3F92">65BA4F</OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText>
                <TimeText>24 seconds ago</TimeText>
              </OffersText>
            </OffersTdText>
          </OffersTr>
          <OffersTr className="offers-menu-row">
            <OffersTdText className="first-column">
              <ActionText>Minted</ActionText>
            </OffersTdText>
            <OffersTdText className="offers-table-item">
              <ItemIcon>
                <img
                  src={ItemImg}
                  alt="item image"
                  className="offers-item-image"
                />
              </ItemIcon>
              <NameContainer>
                <ItemName>Name NFT</ItemName>
                <CollectionName>Name Collection...</CollectionName>
                <UNDText>
                  <ItemVerifyIco />
                  <UND>UND</UND>
                </UNDText>
              </NameContainer>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <EtherIcon />
                <PriceText>13,0</PriceText>
                <USDPrise>44 456,04</USDPrise>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <OffersText>
                <QuantityText>1</QuantityText>
              </OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText color="#5D3F92">65BA4F</OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText color="#5D3F92">65BA4F</OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText>
                <TimeText>24 seconds ago</TimeText>
              </OffersText>
            </OffersTdText>
          </OffersTr>
        </OffersWrapTable>
      </ContainerTable>
      <FilterMobileButton />
    </OfferMenuWrap>
  );
};

export default OffersMenu;
