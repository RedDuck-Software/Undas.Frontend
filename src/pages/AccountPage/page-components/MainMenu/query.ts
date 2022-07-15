import { gql } from "urql";


export const GET_YOUR_OFFERS_FOR_NOT_LISTED_NFTS = gql`
  query getCreatedNfts($creator: Bytes!) {
    offerForUserNfts(where:{from: $creator}){
    offeredAmount
    collectionId
    offerId
    offeredAmount
    offerStatus
    to
    from
    tokenUri
    tokenId
    tokenName
    }
  }
`;
export const GET_RECEIVED_OFFERS_FOR_NOT_LISTED_NFTS = gql`
  query getCreatedNfts($creator: Bytes!) {
    offerForUserNfts(where:{to: $creator}){
    offeredAmount
    collectionId
    offerId
    offeredAmount
    offerStatus
    to
    from
    tokenUri
    tokenId
    tokenName
    }
  }
`;