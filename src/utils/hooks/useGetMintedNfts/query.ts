import { gql } from "urql";

export const GET_MINTED_NFTS = gql`
  {
    tokens {
      id
      name
      uri
      collectionName
      tokenAdress
    }
  }
`;
