import React, { useState, useEffect, useMemo } from "react";

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
} from "./CollectionsTable.styles";

import FilterMobileButton from "../../../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import { PriceText } from "../../../NFTPage/NFTPage.styles";
import { EtherIcon } from "../../../NFTPage/page-components/Accordion/Accordion.styles";
import { ItemImg, ItemVerifyIco } from "../../imports";
import FilterSelected from "../../../../components/FilterSelected/FilterSelected";

interface IObjectKeys {
  [key: string]: string | number | boolean;
}

interface CollectionRowProps extends IObjectKeys {
  collectionName: string;
  isVerified: boolean;
  priceFloor: string | number;
  totalVol: string | number;
  dayVol: number;
  ownersCount: string | number;
  itemsCount: string | number;
}

const CollectionRow: React.FC<CollectionRowProps> = ({
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
          <img src={ItemImg} alt="item image" className="offers-item-image" />
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
          <PriceText>{priceFloor}</PriceText>
        </PriceTextW>
      </CollectionsTdText>
      <CollectionsTdText>
        <PriceTextW>
          <EtherIcon />
          <PriceText>{totalVol}</PriceText>
        </PriceTextW>
      </CollectionsTdText>
      <CollectionsTdText>
        <PriceTextW>
          <EtherIcon />
          <PriceText>{dayVol}</PriceText>
        </PriceTextW>
      </CollectionsTdText>
      <CollectionsTdText>
        <PriceTextW className="min-width">
          {dayVol > 0 ? (
            <PercentTextTop>{dayVol / 10}%</PercentTextTop>
          ) : (
            <PercentTextBottom>{dayVol / 10}%</PercentTextBottom>
          )}
        </PriceTextW>
      </CollectionsTdText>
      <CollectionsTdText>
        <PriceTextW>
          <PriceText>{ownersCount}</PriceText>
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

const testCollections = [
  {
    collectionName: "Borya Borya",
    isVerified: false,
    priceFloor: 20.02,
    totalVol: 400.103,
    dayVol: 48,
    ownersCount: 289,
    itemsCount: 1337,
  },
  {
    collectionName: "Azuki",
    isVerified: true,
    priceFloor: 300.706,
    totalVol: 800.74,
    dayVol: -30.5,
    ownersCount: 8700,
    itemsCount: 5000,
  },
  {
    collectionName: "Bored Ape",
    isVerified: true,
    priceFloor: 80.009,
    totalVol: 900.8,
    dayVol: 80,
    ownersCount: 10000,
    itemsCount: 4000,
  },
];

const CollectionsMenu: React.FC = () => {
  const [isVerifiedOnly, setIsVerifiedOnly] = useState<boolean>(false);
  const [collections, setCollections] =
    useState<CollectionRowProps[]>(testCollections);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  }>({ key: "", direction: "asc" });

  const handleIsVefiriedOnly = () => {
    setIsVerifiedOnly(!isVerifiedOnly);
  };

  const requestSort = (key: string) => {
    console.log("SORT KEEEEEEEEEEEY", key);
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    console.log(sortConfig);
  };

  const verifiedOnly = collections.filter(
    (collection: CollectionRowProps) => collection.isVerified === true,
  );
  const sortedCollections = isVerifiedOnly ? verifiedOnly : [...collections];
  useMemo(() => {
    if (sortedCollections !== null) {
      sortedCollections.sort((a: CollectionRowProps, b: CollectionRowProps) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }

        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedCollections;
  }, [collections, sortConfig]);

  return (
    <CollectionMenuWrap>
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

      <FilterSelected />

      <ContainerTable>
        <CollectionsWrapTable>
          <CollectionsHeadTr className="offers-menu-head">
            <CollectionsTd className="first-column"></CollectionsTd>
            <CollectionsTd>Collection</CollectionsTd>
            <CollectionsTd>
              <PriceTextW onClick={() => requestSort("priceFloor")}>
                Floor Price
              </PriceTextW>
            </CollectionsTd>
            <CollectionsTd onClick={() => requestSort("totalVol")}>
              <PriceTextW>Total Vol</PriceTextW>
            </CollectionsTd>
            <CollectionsTd onClick={() => requestSort("dayVol")}>
              24h Vol
            </CollectionsTd>
            <CollectionsTd onClick={() => requestSort("dayVol")}>
              24h Vol
            </CollectionsTd>
            <CollectionsTd onClick={() => requestSort("ownersCount")}>
              Owners
            </CollectionsTd>
            <CollectionsTd onClick={() => requestSort("itemsCount")}>
              Items
            </CollectionsTd>
          </CollectionsHeadTr>
          {sortedCollections.map((row) => {
            return (
              <CollectionRow
                key={row.collectionName + row.ownersCount + row.itemsCount}
                collectionName={row.collectionName}
                isVerified={row.isVerified}
                priceFloor={row.priceFloor}
                totalVol={row.totalVol}
                dayVol={row.dayVol}
                ownersCount={row.ownersCount}
                itemsCount={row.itemsCount}
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
