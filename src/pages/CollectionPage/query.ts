//import { gql } from "urql";

/* export const GET_COLLECTION_INFO = gql`
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
        colloteral
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
`; */

export const GET_COLLECTION_INFO = (
  collectionId: string | number,
  listing?: string | number,
  renting?: string | number,
  hasOffer?: boolean,
  subString?: string,
) => `
  query getCollectionInfo {
    collection(id: ${collectionId}) {
      id
      owner
      collectionName
      collectionInfo
      collectionUrl
      collectionFeatureUrl
      collectionCategory
      collectionVolume
      collectionItemsAmount
      tokens${
        listing || renting || hasOffer || subString
          ? `(where: {
            ${listing ? "price_not: null" : ""}
            ${renting ? "colloteral_not: null" : ""}
            ${hasOffer ? "hasOffer: true" : ""}
            ${subString ? `name_contains_nocase: "${subString}"` : ""}
          })`
          : ""
      } {
        id
        name
        uri
        price
        colloteral
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
