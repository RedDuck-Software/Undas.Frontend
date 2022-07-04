import { gql } from "urql";

export const getTopCollections = gql`
  query getTopCollections(
    $orderBy: Collection_orderBy
    $direction: OrderDirection!
  ) {
    collections(orderBy: $orderBy, orderDirection: $direction) {
      id
      collectionName
      collectionUrl
      collectionVolume
      collectionItemsAmount
    }
  }
`;

export const getFloorPrice = gql`
  query getFloorPrice($collectionId: BigInt!) {
    listings(
      where: { collectionId: $collectionId, listingStatus: ACTIVE }
      orderBy: price
      orderDirection: asc
    ) {
      price
    }
  }
`;
