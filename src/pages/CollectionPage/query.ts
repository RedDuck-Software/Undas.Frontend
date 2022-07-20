import { gql } from "urql";

export const GET_COLLECTION_INFO = gql`
  query getCollectionInfo($collectionId: ID!) {
    collection(id: $collectionId) {
      id
      owner
      collectionName
      collectionInfo
      collectionUrl
      collectionFeatureUrl
      collectionCategory
      collectionVolume
      collectionItemsAmount
      tokens {
        id
        name
        uri
        price
        collectionName
        collectionId
      }
      floorPrice: tokens(
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
