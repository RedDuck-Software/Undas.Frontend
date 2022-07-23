import { gql } from "urql";

export const GET_MINTED_NFTS = gql`
  query getMintedNfts {
    tokens(where: { price: null, colloteral: null, premiumWei: null} ) {
      id
      name
      uri
      collectionName
      collectionId
      tokenAdress
      owner
    }
  }
`;
