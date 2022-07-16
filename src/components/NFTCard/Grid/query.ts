import { gql } from "urql";


export const GET_NFT_TOP_OFFER = gql`
  query collectionItems($tokenId: BigInt! $tokenAddress: String!) {
    buyingOffers(where:{tokenId:$tokenId,tokenAdress:$tokenAddress,offerStatus:ACTIVE}orderBy:newOfferedPrice,orderDirection:desc ) {
      id
      listingId
      newOfferedPrice
    }
    stakingOffers(where:{tokenId:$tokenId,tokenAdress:$tokenAddress,offerStatus:ACTIVE}orderBy:newOfferedPremiumWei,orderDirection:desc ) {
      id
      stakingId
      newOfferedColloteral
      newOfferedPremiumWei
    }
  }
`;