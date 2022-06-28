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
  ContainerFilter,
} from "./Menu.styles";

import FilterMobileButton from "../../../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import { PriceText } from "../../../NFTPage/NFTPage.styles";
import { EtherIcon } from "../../../NFTPage/page-components/Accordion/Accordion.styles";
import { ItemImg, ItemVerifyIco, filter, close } from "../../imports";
import FilterSelected from "../../../../components/FilterSelected/FilterSelected";
import { Container } from "react-bootstrap";

const OffersMenu: React.FC = () => {
  return (
    <OfferMenuWrap>
      <ContainerFilter>
        <OfferFilterWrap>
          <FilterButton className="offers-active">
            <TextButton>All</TextButton>
          </FilterButton>
          <FilterButton>
            <TextButton>Verified</TextButton>
          </FilterButton>
        </OfferFilterWrap>
      </ContainerFilter>
      <FilterSelected />
      <ContainerTable>
        <OffersWrapTable>
          <OffersHeadTr className="offers-menu-head">
            <OffersTd className="first-column"></OffersTd>
            <OffersTd>Collection</OffersTd>
            <OffersTd>
              <PriceTextW>Floor Price</PriceTextW>
            </OffersTd>
            <OffersTd>
              <PriceTextW>Total Vol</PriceTextW>
            </OffersTd>
            <OffersTd>24h Vol</OffersTd>
            <OffersTd>24h Vol</OffersTd>
            <OffersTd>Owners</OffersTd>
            <OffersTd>Items</OffersTd>
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
              <PriceTextW className="min-width">
                <PercentTextTop>100,00%</PercentTextTop>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <PriceText>2.5K</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <PriceText>6.4K</PriceText>
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
            <OffersTdText>
              <PriceTextW>
                <PriceText>2.5K</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <PriceText>6.4K</PriceText>
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
            <OffersTdText>
              <PriceTextW>
                <PriceText>2.5K</PriceText>
              </PriceTextW>
            </OffersTdText>
            <OffersTdText>
              <PriceTextW>
                <PriceText>6.4K</PriceText>
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
