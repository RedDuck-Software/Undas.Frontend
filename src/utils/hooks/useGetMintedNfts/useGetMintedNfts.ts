import { useQuery } from "urql";

import { GET_MINTED_NFTS } from "./query";

export const useGetMintedNfts = () => {
  const [result] = useQuery({
    query: GET_MINTED_NFTS,
  });

  const { data, fetching, error } = result;

  const getMints = () => {
    if (error) return;

    const mints: any = [];

    data.tokens.map((nft: any) => {
      mints.push({
        id: nft.id,
        name: nft.name,
        URI: nft.uri,
        tokenAddress: nft.tokenAdress,
        collectionName: nft.collectionName,
      });
    });

    return mints;
  };

  return {
    mints: !fetching && getMints(),
    mintsLoading: fetching,
    mintsError: error,
  };
};
