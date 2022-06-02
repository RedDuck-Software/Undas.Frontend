import React from "react";

import {
  OfferMenuWrap,
  OffersWrapTable,
  ItemIcon,
  ItemName,
  OffersTdText,
  ActionText,
  UNDText,
  UND,
  PriceTextW,
  PercentTextTop,
  PercentTextButtom,
  OffersTr,
  SelectedFilters,
  Filter,
  FilterImg,
  FilterName,
  FilterClose,
  ClearAll,
  OfferFilterWrap,
  FilterButton,
  TextButton,
  ContainerTable,
  OffersHeadTr,
  OffersTd,
  NameContainer,
} from "./Menu.styles";

import FilterMobileButton from "../../../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import { PriceText } from "../../../NFTPage/NFTPage.styles";
import { EtherIcon } from "../../../NFTPage/page-components/Accordion/Accordion.styles";
import { ItemImg, ItemVerifyIco, filter, close } from "../../imports";

const OffersMenu: React.FC = () => {
  return (
    <OfferMenuWrap>
      <OfferFilterWrap>
        <FilterButton className="offers-active">
          <TextButton>All</TextButton>
        </FilterButton>
        <FilterButton>
          <TextButton>Verified</TextButton>
        </FilterButton>
      </OfferFilterWrap>
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
              <PriceTextW>Floor Price</PriceTextW>
            </OffersTd>
            <OffersTd>
              <PriceTextW>Total Vol</PriceTextW>
            </OffersTd>
            <OffersTd>24h Vol</OffersTd>
            <OffersTd>24h Vol</OffersTd>
          </OffersHeadTr>
          <OffersTr className="offers-menu-row">
            <OffersTdText className="first-column">
              <ActionText>1</ActionText>
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
                <ItemName>Name Collection</ItemName>
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
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <EtherIcon />
                <PriceText>133,20</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <EtherIcon />
                <PriceText>133,20</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <PercentTextTop>100,00%</PercentTextTop>
              </PriceTextW>
            </OffersTdText>
          </OffersTr>
          <OffersTr className="offers-menu-row">
            <OffersTdText className="first-column">
              <ActionText>1</ActionText>
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
                <ItemName>Name Collection</ItemName>
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
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <EtherIcon />
                <PriceText>133,20</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <EtherIcon />
                <PriceText>133,20</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <PercentTextButtom>100,00%</PercentTextButtom>
              </PriceTextW>
            </OffersTdText>
          </OffersTr>
          <OffersTr className="offers-menu-row">
            <OffersTdText className="first-column">
              <ActionText>1</ActionText>
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
                <ItemName>Name Collection</ItemName>
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
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <EtherIcon />
                <PriceText>133,20</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <EtherIcon />
                <PriceText>133,20</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <PercentTextTop>100,00%</PercentTextTop>
              </PriceTextW>
            </OffersTdText>
          </OffersTr>
        </OffersWrapTable>
      </ContainerTable>
      <FilterMobileButton />
    </OfferMenuWrap>
  );
};

export default OffersMenu;
