import { gql } from "urql";

export const GET_SAME_COLLECTIONS = gql`
  query collectionItems($collectionId: BigInt!) {
    tokens(where: { collectionId: $collectionId }) {
      name
      uri
      tokenAdress
      id
      owner
      description
      collectionId
      collectionName
    }
  }
`;

export const GET_NFT_OFFERS = gql`
  query collectionItems($tokenId: BigInt!, $tokenAddress: String!) {
    buyingOffers(
      where: {
        tokenId: $tokenId
        tokenAdress: $tokenAddress
        offerStatus: ACTIVE
      }
    ) {
      id
      listingId
      newOfferedPrice
    }
    stakingOffers(
      where: {
        tokenId: $tokenId
        tokenAdress: $tokenAddress
        offerStatus: ACTIVE
      }
    ) {
      id
      stakingId
      newOfferedColloteral
      newOfferedPremiumWei
    }
  }
`;

export const ITEM_ACTIVITY = gql`
  query collectionItems($tokenId: BigInt!, $tokenAddress: String!) {
    listings(where: { tokenId: $tokenId, token: $tokenAddress }) {
      price
      seller
      listingStatus
    }
    stakingListings(where: { tokenId: $tokenId, token: $tokenAddress }) {
      colloteralWei
      premiumWei
      seller
      taker
      stakingStatus
    }
    tokens(where: { id: $tokenId }) {
      owner
      price
    }
  }
`;
