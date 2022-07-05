import { ethers } from "ethers";
import React, { useState } from "react";
import { useQuery } from "urql";

import {
  CollectionMenuWrap,
  CollectionsWrapTable,
  ItemIcon,
  ItemName,
  CollectionsTdText,
  Position,
  UNDText,
  UND,
  PriceTextW,
  PercentTextTop,
  PercentTextBottom,
  CollectionsTr,
  CollectionFilterWrap,
  FilterButton,
  TextButton,
  ContainerTable,
  CollectionsHeadTr,
  CollectionsTd,
  NameContainer,
  FilterRow,
} from "./CollectionsTable.styles";

import FilterMobileButton from "../../../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import FilterSelected from "../../../../components/FilterSelected/FilterSelected";
import { PriceText } from "../../../NFTPage/NFTPage.styles";
import { EtherIcon } from "../../../NFTPage/page-components/Accordion/Accordion.styles";
import { ItemVerifyIco } from "../../imports";
import { getTopCollections } from "../../query";

interface IObjectKeys {
  [key: string]: any;
}

interface CollectionRowProps extends IObjectKeys {
  collectionUrl: string;
  collectionName: string;
  //isVerified: boolean;
  priceFloor?: string | number;
  //totalVol: string | number;
  //dayVol: number;
  //ownersCount: string | number;
  itemsCount: string | number;
}

const CollectionRow: React.FC<CollectionRowProps> = ({
  collectionUrl,
  collectionName,
  isVerified,
  priceFloor,
  totalVol,
  dayVol,
  ownersCount,
  itemsCount,
}) => {
  return (
    <CollectionsTr className="offers-menu-row">
      <CollectionsTdText className="first-column">
        <Position />
      </CollectionsTdText>
      <CollectionsTdText className="offers-table-item">
        <ItemIcon>
          <img
            src={collectionUrl}
            alt="item image"
            className="offers-item-image"
          />
        </ItemIcon>
        <NameContainer>
          <ItemName>{collectionName}</ItemName>
          {isVerified && (
            <UNDText>
              <ItemVerifyIco />
              <UND>UND</UND>
            </UNDText>
          )}
        </NameContainer>
      </CollectionsTdText>
      <CollectionsTdText>
        <PriceTextW>
          <EtherIcon />
          <PriceText>
            {priceFloor && ethers.utils.formatEther(priceFloor)}
          </PriceText>
        </PriceTextW>
      </CollectionsTdText>
      <CollectionsTdText>
        <PriceTextW>
          <EtherIcon />
          <PriceText>{ethers.utils.formatEther(totalVol)}</PriceText>
        </PriceTextW>
      </CollectionsTdText>
      <CollectionsTdText>
        <PriceTextW>
          <EtherIcon />
          <PriceText>{dayVol ? dayVol : "-"}</PriceText>
        </PriceTextW>
      </CollectionsTdText>
      <CollectionsTdText>
        <PriceTextW className="min-width">
          {dayVol ? (
            dayVol > 0 ? (
              <PercentTextTop>{dayVol / 10}%</PercentTextTop>
            ) : (
              <PercentTextBottom>{dayVol / 10}%</PercentTextBottom>
            )
          ) : (
            "-"
          )}
        </PriceTextW>
      </CollectionsTdText>
      <CollectionsTdText>
        <PriceTextW>
          <PriceText>{ownersCount ? ownersCount : "-"}</PriceText>
        </PriceTextW>
      </CollectionsTdText>
      <CollectionsTdText>
        <PriceTextW>
          <PriceText>{itemsCount}</PriceText>
        </PriceTextW>
      </CollectionsTdText>
    </CollectionsTr>
  );
};

const CollectionsMenu: React.FC = () => {
  const [isVerifiedOnly, setIsVerifiedOnly] = useState<boolean>(false);
  const [sortConfig, setSortConfig] = useState<{
    orderBy?: string;
    direction: string;
  }>({ orderBy: "collectionVolume", direction: "desc" });

  const [result] = useQuery({
    query: getTopCollections,
    variables: { ...sortConfig },
  });
  const { data, fetching } = result;

  const handleIsVefiriedOnly = () => {
    setIsVerifiedOnly(!isVerifiedOnly);
  };

  const requestSort = (orderBy?: string) => {
    let direction = "asc";
    if (sortConfig.orderBy === orderBy && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ orderBy, direction });
  };

  return (
    <CollectionMenuWrap>
      <FilterRow>
        <CollectionFilterWrap>
          <FilterButton
            className={!isVerifiedOnly ? "offers-active" : ""}
            onClick={handleIsVefiriedOnly}
          >
            <TextButton>All</TextButton>
          </FilterButton>
          <FilterButton
            className={isVerifiedOnly ? "offers-active" : ""}
            onClick={handleIsVefiriedOnly}
          >
            <TextButton>Verified</TextButton>
          </FilterButton>
        </CollectionFilterWrap>
      </FilterRow>
      <FilterSelected />

      <ContainerTable>
        <CollectionsWrapTable>
          <CollectionsHeadTr className="offers-menu-head">
            <CollectionsTd className="first-column"></CollectionsTd>
            <CollectionsTd>Collection</CollectionsTd>
            <CollectionsTd>
              <PriceTextW>Floor Price</PriceTextW>
            </CollectionsTd>
            <CollectionsTd onClick={() => requestSort("collectionVolume")}>
              <PriceTextW>Total Vol</PriceTextW>
            </CollectionsTd>
            <CollectionsTd>24h Vol</CollectionsTd>
            <CollectionsTd>24h Vol</CollectionsTd>
            <CollectionsTd>Owners</CollectionsTd>
            <CollectionsTd onClick={() => requestSort("collectionItemsAmount")}>
              Items
            </CollectionsTd>
          </CollectionsHeadTr>
          {!fetching &&
            data.collections.map((row: any) => {
              return (
                <CollectionRow
                  key={row.id}
                  collectionName={row.collectionName}
                  collectionUrl={row.collectionUrl}
                  priceFloor={row.tokens[0].price}
                  totalVol={row.collectionVolume}
                  //dayVol={row.dayVol}
                  //ownersCount={row.ownersCount}
                  itemsCount={row.collectionItemsAmount}
                />
              );
            })}
        </CollectionsWrapTable>
      </ContainerTable>
      <FilterMobileButton />
    </CollectionMenuWrap>
  );
};

export default CollectionsMenu;
