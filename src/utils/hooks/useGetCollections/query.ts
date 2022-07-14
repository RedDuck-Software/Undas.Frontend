import { gql } from "urql";

export const GET_COLLECTIONS_LIST = gql`
  query getCollectionList($subString: String!) {
    collections(
      where: {
        collectionName_contains_nocase: $subString
        collectionItemsAmount_gt: 0
      }
    ) {
      id
      collectionName
      collectionUrl
      collectionCategory
      collectionVolume
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
