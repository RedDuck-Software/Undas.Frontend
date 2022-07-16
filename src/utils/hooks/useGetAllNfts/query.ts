import { gql } from "urql";

export const GET_ALL_NFTS = gql`
  {
    listings {
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
    }
    stakingListings {
      id
      seller
      token
      tokenId
      tokenURI
      stakingStatus
      tokenName
      tokenDescription
      colloteralWei
      premiumWei
      deadlineUTC
      collectionName
    }
  }
`;
