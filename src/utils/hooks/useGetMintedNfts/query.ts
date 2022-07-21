import { gql } from "urql";

export const GET_MINTED_NFTS = gql`
  {
    tokens(where: { price: null, colloteral: null, premiumWei: null }) {
      id
      name
      uri
      collectionName
      collectionId
      tokenAdress
    }
  }
`;
