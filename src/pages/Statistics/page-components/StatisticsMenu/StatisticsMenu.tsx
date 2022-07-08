import React from "react";

import {
  StatisticsMenuWrap,
  StatisticsWrapTable,
  ItemIcon,
  ItemName,
  StatisticsTdText,
  ActionText,
  CollectionName,
  UNDText,
  UND,
  USDPrise,
  QuantityText,
  TimeText,
  PriceTextW,
  ContainerTable,
  StatisticsTr,
  StatisticsTd,
  StatisticsHeadTr,
  StatisticsText,
  NameContainer,
} from "./StatisticsMenu.styles";

import FilterMobileButton from "../../../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import FilterSelected from "../../../../components/FilterSelected/FilterSelected";
import { PriceText } from "../../../NFTPage/NFTPage.styles";
import { EtherIcon } from "../../../NFTPage/page-components/Accordion/Accordion.styles";
import { ItemImg, ItemVerifyIco, } from "../../imports";

interface StatisticsRowProps {
  action: string;
  name?: string;
  collectionName?: string;
  price?: string | number;
  quantity?: string | number;
  fromAddress?: string;
  toAddress?: string;
  time?: string | number;
}

const StatisticsRow: React.FC<StatisticsRowProps> = ({ action }) => {
  return (
    <StatisticsTr className="Statistics-menu-row">
      <StatisticsTdText className="first-column">
        <ActionText>{action}</ActionText>
      </StatisticsTdText>
      <StatisticsTdText className="Statistics-table-item">
        <ItemIcon>
          <img
            src={ItemImg}
            alt="item image"
            className="Statistics-item-image"
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
      </StatisticsTdText>
      <StatisticsTdText>
        <PriceTextW>
          <EtherIcon />
          <PriceText>13,0</PriceText>
          <USDPrise>44 456,04</USDPrise>
        </PriceTextW>
      </StatisticsTdText>
      <StatisticsTdText>
        <StatisticsText>
          <QuantityText>1</QuantityText>
        </StatisticsText>
      </StatisticsTdText>
      <StatisticsTdText>
        <StatisticsText color="#5D3F92">65BA4F</StatisticsText>
      </StatisticsTdText>
      <StatisticsTdText>
        <StatisticsText color="#5D3F92">65BA4F</StatisticsText>
      </StatisticsTdText>
      <StatisticsTdText>
        <StatisticsText>
          <TimeText>24 seconds ago</TimeText>
        </StatisticsText>
      </StatisticsTdText>
    </StatisticsTr>
  );
};

const StatisticsMenu: React.FC = () => {
  return (
    <StatisticsMenuWrap>
      <FilterSelected />
      <ContainerTable>
        <StatisticsWrapTable>
          <StatisticsHeadTr className="Statistics-menu-head">
            <StatisticsTd className="first-column"></StatisticsTd>
            <StatisticsTd>Item</StatisticsTd>
            <StatisticsTd>
              <PriceTextW>Price</PriceTextW>
            </StatisticsTd>
            <StatisticsTd>
              <QuantityText>Quantity</QuantityText>
            </StatisticsTd>
            <StatisticsTd>From</StatisticsTd>
            <StatisticsTd>To</StatisticsTd>
            <StatisticsTd>
              <TimeText>Time</TimeText>
            </StatisticsTd>
          </StatisticsHeadTr>

          <StatisticsRow action={"Sale"} />
          <StatisticsRow action={"Rented"} />
          <StatisticsRow action={"List"} />
          <StatisticsRow action={"Rent"} />
        </StatisticsWrapTable>
      </ContainerTable>
      <FilterMobileButton />
    </StatisticsMenuWrap>
  );
};

export default StatisticsMenu;
