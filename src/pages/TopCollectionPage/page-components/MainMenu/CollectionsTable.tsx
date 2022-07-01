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
} from "./CollectionsTable.styles";

import FilterMobileButton from "../../../../components/ASideFilter/FilterMobileButton/FilterMobileButton";
import FilterSelected from "../../../../components/FilterSelected/FilterSelected";
import { PriceText } from "../../../NFTPage/NFTPage.styles";
import { EtherIcon } from "../../../NFTPage/page-components/Accordion/Accordion.styles";
import { ItemVerifyIco } from "../../imports";
import { getTopCollections, getFloorPrice } from "../../query";

interface IObjectKeys {
  [key: string]: any;
}

interface CollectionRowProps extends IObjectKeys {
  id: number;
  collectionUrl: string;
  collectionName: string;
  //isVerified: boolean;
  //priceFloor: string | number;
  //totalVol: string | number;
  //dayVol: number;
  //ownersCount: string | number;
  itemsCount: string | number;
}

const CollectionRow: React.FC<CollectionRowProps> = ({
  id,
  collectionUrl,
  collectionName,
  isVerified,
  totalVol,
  dayVol,
  ownersCount,
  itemsCount,
}) => {
  const [result] = useQuery({
    query: getFloorPrice,
    variables: { collectionId: id },
  });

  const { data, fetching } = result;

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
            {!fetching && data.listings.length > 0
              ? ethers.utils.formatEther(data.listings[0].price)
              : "-"}
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

const CollectionsMenu: React.FC = () => {
  const [isVerifiedOnly, setIsVerifiedOnly] = useState<boolean>(false);
  const [sortConfig, setSortConfig] = useState<{
    orderBy: string;
    direction: string;
  }>({ orderBy: "collectionItemsAmount", direction: "desc" });

  const [result] = useQuery({
    query: getTopCollections,
    variables: { ...sortConfig },
  });
  const { data, fetching } = result;

  const handleIsVefiriedOnly = () => {
    setIsVerifiedOnly(!isVerifiedOnly);
  };

  const requestSort = (orderBy: string) => {
    let direction = "asc";
    if (sortConfig.orderBy === orderBy && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ orderBy, direction });
  };

  /* const verifiedOnly = collections.filter(
    (collection: CollectionRowProps) => collection.isVerified === true,
  );

  const sortedCollections = isVerifiedOnly ? verifiedOnly : [...collections];
  useMemo(() => {
    if (sortedCollections !== null) {
      sortedCollections.sort((a: CollectionRowProps, b: CollectionRowProps) => {
        if (a[sortConfig.orderBy] < b[sortConfig.orderBy]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }

        if (a[sortConfig.orderBy] > b[sortConfig.orderBy]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedCollections;
  }, [collections, sortConfig]); */
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
                  id={row.id}
                  collectionName={row.collectionName}
                  collectionUrl={row.collectionUrl}
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
