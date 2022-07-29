import { gql } from "urql";

export const GET_LISTING_NFTS = gql`
  {
    listings(where: { listingStatus: ACTIVE }) {
      id
      token
      seller
      tokenId
      tokenURI
      listingStatus
      price
      tokenDescription
      tokenName
      collectionName
      seller
      collectionId
    }
  }
`;
