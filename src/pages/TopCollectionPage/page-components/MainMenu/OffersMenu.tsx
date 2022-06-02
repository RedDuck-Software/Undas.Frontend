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
  USDPrise,
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
                <ItemName>Name</ItemName>
                <UNDText>
                  <ItemVerifyIco />
                  <UND>UND</UND>
                </UNDText>
              </NameContainer>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <USDPrise>Floor</USDPrise>
                <EtherIcon />
                <PriceText>13,0</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <USDPrise>Total Vol</USDPrise>
                <EtherIcon />
                <PriceText>133,20</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <USDPrise>24h Vol</USDPrise>
                <EtherIcon />
                <PriceText>133,20</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <USDPrise>24h Vol</USDPrise>
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
                <ItemName>Name</ItemName>
                <UNDText>
                  <ItemVerifyIco />
                  <UND>UND</UND>
                </UNDText>
              </NameContainer>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <USDPrise>Floor</USDPrise>
                <EtherIcon />
                <PriceText>13,0</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <USDPrise>Total Vol</USDPrise>
                <EtherIcon />
                <PriceText>133,20</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <USDPrise>24h Vol</USDPrise>
                <EtherIcon />
                <PriceText>133,20</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <USDPrise>24h Vol</USDPrise>
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
                <ItemName>Name</ItemName>
                <UNDText>
                  <ItemVerifyIco />
                  <UND>UND</UND>
                </UNDText>
              </NameContainer>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <USDPrise>Floor</USDPrise>
                <EtherIcon />
                <PriceText>13,0</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <USDPrise>Total Vol</USDPrise>
                <EtherIcon />
                <PriceText>133,20</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <USDPrise>24h Vol</USDPrise>
                <EtherIcon />
                <PriceText>133,20</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <USDPrise>24h Vol</USDPrise>
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
