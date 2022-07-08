import { gql } from "urql";

export const GET_COLLECTION_INFO = gql`
  query getCollectionInfo($collectionId: ID!) {
    collection(id: $collectionId) {
      id
      owner
      collectionName
      collectionInfo
      collectionUrl
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
    }
  }
`;
