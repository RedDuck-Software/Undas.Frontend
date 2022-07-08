import { gql } from "urql";

export const GET_CREATED_NFTS = gql`
  query getCreatedNfts($creator: Bytes!) {
    tokens(where: { creator: $creator }) {
      collectionName
      owner
      id
      desciption
      uri
      collectionId
      name
    }
  }
`;

export const GET_CREATED_COLLECTIONS = gql`
  query getCreatedCollections($owner: Bytes!) {
    collections(where: { owner: $owner }) {
      collectionName
      owner
      id
      collectionInfo
      collectionUrl
      collectionCategory
    }
  }
`;
