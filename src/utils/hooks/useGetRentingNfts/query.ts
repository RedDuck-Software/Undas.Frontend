import { gql } from "urql";

export const GET_RENTING_NFTS = gql`
  {
    stakingListings(where: { stakingStatus: ACTIVE }) {
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
      seller
    }
  }
`;
