import { gql } from "urql";

export const getListingsData = gql`
  {
    listings(where: { listingStatus: ACTIVE }) {
      id
      seller
      token
      tokenId
      price
      tokenURI
      listingStatus
      tokenName
      tokenDescription
      hasOffer
      collectionId
      collectionName
    }
    stakingListings(where: { stakingStatus: ACTIVE }) {
      id
      seller
      token
      tokenId
      colloteralWei
      deadlineUTC
      premiumWei
      tokenURI
      stakingStatus
      tokenName
      tokenDescription
      hasOffer
    }
  }
`;
