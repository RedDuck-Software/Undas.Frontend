import { gql } from "urql";

export const GET_WITH_OFFER_NFTS = gql`
  {
    listings(where: { hasOffer: true }) {
      id
      token
      seller
      tokenId
      tokenURI
      listingStatus
      price
      tokenDescription
      tokenName
    }
    stakingListings(where: { hasOffer: true }) {
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
    }
  }
`;
