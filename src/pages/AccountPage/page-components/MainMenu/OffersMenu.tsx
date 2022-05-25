import React, { useState } from "react";

import {
  OfferMenuWrap,
  OfferFilterWrap,
  FilterButton,
  OffersWrapTable,
  ItemIcon,
  ItemName,
  OffersTooltip,
  OffersTooltipWrap,
  OffersTdText,
  OffersTdButton,
  OffersTdEmpty,
  AcceptBTN,
  MakeOfferBTN,
  DenyBTN,
  CancelBtn,
  WethText,
  PriceTextETH,
  SelectedFilters,
  Filter,
  FilterImg,
  FilterName,
  FilterClose,
  ClearAll,
} from "./Menu.styles";
import { OfferType } from "./types";

import { CartIco, HandShakeIco } from "../../../NFTPage/imports";
import {
  OffersTr,
  OffersHeadTr,
  OffersText,
} from "../../../NFTPage/page-components/Accordion/Accordion.styles";
import {
  OffResaivedIco,
  OffMadeIco,
  ItemImg,
  ItemVerifyIco,
  filter,
  close,
} from "../../imports";

const OffersMenu: React.FC = () => {
  const [offerType, setOfferType] = useState(OfferType.resaived);
  return (
    <OfferMenuWrap>
      <OfferFilterWrap>
        <FilterButton
          className={offerType === OfferType.resaived ? "offers-active" : ""}
          onClick={() => setOfferType(OfferType.resaived)}
        >
          <OffResaivedIco />
          Offers Resaived
        </FilterButton>
        <FilterButton
          className={offerType === OfferType.made ? "offers-active" : ""}
          onClick={() => setOfferType(OfferType.made)}
        >
          Offers Made
          <OffMadeIco />
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
      <OffersWrapTable>
        {offerType === OfferType.resaived && (
          <>
            <OffersHeadTr className="offers-menu-head">
              <OffersTdText className="first-column"></OffersTdText>
              <OffersTdText>Item</OffersTdText>
              <OffersTdText>Price</OffersTdText>
              <OffersTdText>Expiration</OffersTdText>
              <OffersTdText>From</OffersTdText>
              <OffersTdText></OffersTdText>
              <OffersTdText></OffersTdText>
              <OffersTdText></OffersTdText>
            </OffersHeadTr>
            <OffersTr className="offers-menu-row">
              <OffersTdText className="first-column">
                <HandShakeIco />
                <OffersTooltipWrap className="offers-tooltip">
                  <OffersTooltip>Rent</OffersTooltip>
                </OffersTooltipWrap>
              </OffersTdText>
              <OffersTdText className="offers-table-item">
                <ItemIcon>
                  <img
                    src={ItemImg}
                    alt="item image"
                    className="offers-item-image"
                  />
                </ItemIcon>
                <ItemName>Name</ItemName>
                <ItemVerifyIco />
              </OffersTdText>
              <OffersTdText>
                <PriceTextETH>1,2</PriceTextETH>
                <WethText>WETH</WethText>
              </OffersTdText>
              <OffersTdText>
                <OffersText>In 20 hours</OffersText>
              </OffersTdText>
              <OffersTdText>
                <OffersText color="#5D3F92">65BA4F</OffersText>
              </OffersTdText>
              <OffersTdButton>
                <AcceptBTN>Accept</AcceptBTN>
              </OffersTdButton>
              <OffersTdButton>
                <MakeOfferBTN>Make offer</MakeOfferBTN>
              </OffersTdButton>
              <OffersTdButton>
                <DenyBTN>Deny</DenyBTN>
              </OffersTdButton>
            </OffersTr>
            <OffersTr className="offers-menu-row">
              <OffersTdText className="first-column">
                <CartIco />
                <OffersTooltipWrap className="offers-tooltip">
                  <OffersTooltip>Rent</OffersTooltip>
                </OffersTooltipWrap>
              </OffersTdText>
              <OffersTdText className="offers-table-item">
                <ItemIcon>
                  <img src={ItemImg} alt="item icon" />
                </ItemIcon>
                <ItemName>Name</ItemName>
              </OffersTdText>
              <OffersTdText>
                <PriceTextETH>1,2</PriceTextETH>
                <WethText>WETH</WethText>
              </OffersTdText>
              <OffersTdText>
                <OffersText>In 20 hours</OffersText>
              </OffersTdText>
              <OffersTdText>
                <OffersText color="#5D3F92">65BA4F</OffersText>
              </OffersTdText>
              <OffersTdButton>
                <AcceptBTN>Accept</AcceptBTN>
              </OffersTdButton>
              <OffersTdButton>
                <MakeOfferBTN>Make offer</MakeOfferBTN>
              </OffersTdButton>
              <OffersTdButton>
                <DenyBTN>Deny</DenyBTN>
              </OffersTdButton>
            </OffersTr>
          </>
        )}
        {offerType === OfferType.made && (
          <>
            <CancelBtn>Cancel all Offers</CancelBtn>
            <OffersHeadTr className="offers-menu-head">
              <OffersTdText className="first-column"></OffersTdText>
              <OffersTdText>Item</OffersTdText>
              <OffersTdText>Price</OffersTdText>
              <OffersTdText>Expiration</OffersTdText>
              <OffersTdText>From</OffersTdText>
              <OffersTdText></OffersTdText>
              <OffersTdText></OffersTdText>
              <OffersTdText></OffersTdText>
            </OffersHeadTr>
            <OffersTr className="offers-menu-row">
              <OffersTdText className="first-column">
                <HandShakeIco />
                <OffersTooltipWrap className="offers-tooltip">
                  <OffersTooltip>Rent</OffersTooltip>
                </OffersTooltipWrap>
              </OffersTdText>
              <OffersTdText className="offers-table-item">
                <ItemIcon>
                  <img src={ItemImg} alt="item icon" />
                </ItemIcon>
                <ItemName>Name</ItemName>
              </OffersTdText>
              <OffersTdText>
                <PriceTextETH>1,2</PriceTextETH>
                <WethText>WETH</WethText>
              </OffersTdText>
              <OffersTdText>
                <OffersText>In 20 hours</OffersText>
              </OffersTdText>
              <OffersTdText>
                <OffersText color="#5D3F92">65BA4F</OffersText>
              </OffersTdText>
              <OffersTdEmpty></OffersTdEmpty>
              <OffersTdButton>
                <MakeOfferBTN>Edit Offer</MakeOfferBTN>
              </OffersTdButton>
              <OffersTdButton>
                <DenyBTN>Cancel</DenyBTN>
              </OffersTdButton>
            </OffersTr>
          </>
        )}
      </OffersWrapTable>
    </OfferMenuWrap>
  );
};

export default OffersMenu;
