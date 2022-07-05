import { gql } from "urql";

export const getTopCollections = gql`
  query getTopCollections(
    $orderBy: Collection_orderBy
    $direction: OrderDirection!
  ) {
    collections(
      orderBy: $orderBy
      orderDirection: $direction
      where: { collectionVolume_gt: 0 }
    ) {
      id
      collectionName
      collectionUrl
      collectionVolume
      collectionItemsAmount
      tokens(
        orderBy: price
        orderDirection: desc
        first: 1
        where: { price_gt: 0 }
      ) {
        price
      }
    }
  }
`;
