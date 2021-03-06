import React from "react";

import {
  OfferMenuWrap,
  OffersWrapTable,
  ItemIcon,
  ItemName,
  OffersTdText,
  ItemText,
  UNDText,
  UND,
  PriceTextW,
  PercentTextTop,
  PercentTextButtom,
  OffersTr,
} from "./FavouriteTable.styles";

import { PriceText } from "../../../../NFTPage/NFTPage.styles";
import {
  OffersTd,
  OffersHeadTr,
  EtherIcon,
} from "../../../../NFTPage/page-components/Accordion/Accordion.styles";
import { ItemImg, ItemVerifyIco } from "../../../imports";

const FavouriteTable: React.FC = () => {
  return (
    <OfferMenuWrap>
      <OffersWrapTable>
        <OffersHeadTr className="offers-menu-head">
          <OffersTd className="favourite-th">Collection</OffersTd>
          <OffersTd className="favourite-th">Floor price</OffersTd>
          <OffersTd className="favourite-th">7d Volume</OffersTd>
          <OffersTd className="favourite-th">24h %</OffersTd>
          <OffersTd className="favourite-th">7d %</OffersTd>
          <OffersTd className="favourite-th">Owners</OffersTd>
          <OffersTd className="favourite-th">Items</OffersTd>
        </OffersHeadTr>
        <OffersTr className="offers-menu-row">
          <OffersTdText className="offers-table-item">
            <ItemIcon>
              <img
                src={ItemImg}
                alt="item image"
                className="offers-item-image"
              />
            </ItemIcon>
            <ItemText>
              <ItemName>Name</ItemName>
              <UNDText>
                <ItemVerifyIco />
                <UND>UND</UND>
              </UNDText>
            </ItemText>
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
              <PriceText>25777,92</PriceText>
            </PriceTextW>
          </OffersTdText>
          <OffersTdText>
            <PriceTextW>
              <PercentTextTop>94,68%</PercentTextTop>
            </PriceTextW>
          </OffersTdText>
          <OffersTdText>
            <PriceTextW>
              <PercentTextButtom>14,98%</PercentTextButtom>
            </PriceTextW>
          </OffersTdText>
          <OffersTdText>
            <PriceTextW>
              <PriceText>5723</PriceText>
            </PriceTextW>
          </OffersTdText>
          <OffersTdText>
            <PriceTextW>
              <PriceText>23000</PriceText>
            </PriceTextW>
          </OffersTdText>
        </OffersTr>
        <OffersTr className="offers-menu-row">
          <OffersTdText className="offers-table-item">
            <ItemIcon>
              <img
                src={ItemImg}
                alt="item image"
                className="offers-item-image"
              />
            </ItemIcon>
            <ItemText>
              <ItemName>LongerName</ItemName>
              <UNDText>
                <ItemVerifyIco />
                <UND>UND</UND>
              </UNDText>
            </ItemText>
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
              <PriceText>25777,92</PriceText>
            </PriceTextW>
          </OffersTdText>
          <OffersTdText>
            <PriceTextW>
              <PercentTextTop>94,68%</PercentTextTop>
            </PriceTextW>
          </OffersTdText>
          <OffersTdText>
            <PriceTextW>
              <PercentTextButtom>14,98%</PercentTextButtom>
            </PriceTextW>
          </OffersTdText>
          <OffersTdText>
            <PriceTextW>
              <PriceText>5723</PriceText>
            </PriceTextW>
          </OffersTdText>
          <OffersTdText>
            <PriceTextW>
              <PriceText>23000</PriceText>
            </PriceTextW>
          </OffersTdText>
        </OffersTr>
        <OffersTr className="offers-menu-row">
          <OffersTdText className="offers-table-item">
            <ItemIcon>
              <img
                src={ItemImg}
                alt="item image"
                className="offers-item-image"
              />
            </ItemIcon>
            <ItemText>
              <ItemName>More than very long Name</ItemName>
              <UNDText>
                <ItemVerifyIco />
                <UND>UND</UND>
              </UNDText>
            </ItemText>
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
              <PriceText>25777,92</PriceText>
            </PriceTextW>
          </OffersTdText>
          <OffersTdText>
            <PriceTextW>
              <PercentTextTop>94,68%</PercentTextTop>
            </PriceTextW>
          </OffersTdText>
          <OffersTdText>
            <PriceTextW>
              <PercentTextButtom>14,98%</PercentTextButtom>
            </PriceTextW>
          </OffersTdText>
          <OffersTdText>
            <PriceTextW>
              <PriceText>5723</PriceText>
            </PriceTextW>
          </OffersTdText>
          <OffersTdText>
            <PriceTextW>
              <PriceText>23000</PriceText>
            </PriceTextW>
          </OffersTdText>
        </OffersTr>
      </OffersWrapTable>
    </OfferMenuWrap>
  );
};

export default FavouriteTable;
