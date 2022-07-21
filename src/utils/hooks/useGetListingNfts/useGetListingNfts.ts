import { ethers } from "ethers";
import { useQuery } from "urql";

import { GET_LISTING_NFTS } from "./query";

export const useGetListingNfts = () => {
  const [result] = useQuery({
    query: GET_LISTING_NFTS,
  });

  const { data, fetching, error } = result;

  const getListings = () => {
    if (error) return "error";

    const listingNfts: any = [];
    data.listings.map((nft: any) => {
      listingNfts.push({
        id: nft.tokenId,
        name: nft.tokenName,
        URI: nft.tokenURI,
        listingId: nft.id,
        priceInNum: Number(ethers.utils.formatUnits(nft.price, 18)),
        tokenAddress: nft.token,
        collectionName: nft.collectionName,
      });
    });

    return listingNfts;
  };

  return {
    listings: !fetching && getListings(),
    listingsLoading: fetching,
    listingsError: error,
  };
};
