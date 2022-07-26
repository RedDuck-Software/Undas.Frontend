import { ethers } from "ethers";
import { useQuery } from "urql";

import { GET_RENTING_NFTS } from "./query";

export const useGetRentingNfts = (accountPage?: boolean, account?: any) => {
  const [result] = useQuery({
    query: GET_RENTING_NFTS,
  });

  const { data, fetching, error } = result;

  const getRentings = () => {
    if (error) return "error";
    const stakingNfts: any = [];

    data.stakingListings.map((nft: any) => {
      stakingNfts.push({
        id: nft.tokenId,
        name: nft.tokenName,
        URI: nft.tokenURI,
        stakingId: nft.id,
        premiumInNum: Number(ethers.utils.formatUnits(nft.premiumWei, 18)),
        colloteralWei: nft.colloteralWei,
        tokenAddress: nft.token,
        collectionName: nft.collectionName,
        seller: nft.seller,
        collectionId: nft.collectionId,
      });
    });

    if (accountPage) {
      const result = stakingNfts.filter(
        (item: { seller: string }) => item.seller == account,
      );
      return result;
    }

    return stakingNfts;
  };

  return {
    rentings: !fetching && getRentings(),
    rentingsLoading: fetching,
    rentingsError: error,
  };
};
