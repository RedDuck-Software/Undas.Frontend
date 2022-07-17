import { gql } from "urql";

export const GET_SAME_COLLECTIONS = gql`
  query collectionItems($collectionId: BigInt!) {
    tokens(where: { collectionId: $collectionId }) {
      name
      uri
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
