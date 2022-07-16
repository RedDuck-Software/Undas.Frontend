import { ethers } from "ethers";
import { useQuery } from "urql";

import { GET_WITH_OFFER_NFTS } from "./query";

export const useGetWithOfferNfts = () => {
  const [result] = useQuery({
    query: GET_WITH_OFFER_NFTS,
  });

  const { data, fetching, error } = result;

  const getHasOffers = () => {
    if (error) return;

    const hasOffers: any = [];

    data.listings.map((nft: any) => {
      if (nft.listingStatus == "ACTIVE") {
        hasOffers.push({
          id: nft.tokenId,
          name: nft.tokenName,
          URI: nft.tokenURI,
          listingId: nft.id,
          priceInNum: Number(ethers.utils.formatUnits(nft.price, 18)),
          tokenAddress: nft.token,
        });
      }
    });

    data.stakingListings.map((nft: any) => {
      if (nft.stakingStatus == "ACTIVE") {
        hasOffers.push({
          id: nft.tokenId,
          name: nft.tokenName,
          URI: nft.tokenURI,
          stakingId: nft.id,
          premiumInNum: Number(ethers.utils.formatUnits(nft.price, 18)),
          colloteralWei: nft.colloteralWei,
          tokenAddress: nft.token,
        });
      }
    });

    return hasOffers;
  };

  return {
    withOffers: !fetching && getHasOffers(),
    withOffersLoading: fetching,
    withOffersError: error,
  };
};
