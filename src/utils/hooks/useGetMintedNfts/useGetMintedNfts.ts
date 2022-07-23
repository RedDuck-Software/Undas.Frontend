import { useQuery } from "urql";

import { GET_MINTED_NFTS } from "./query";

export const useGetMintedNfts = (accountPage?: boolean, account?: any) => {
  console.log("account", account);
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
        collectionId: nft.collectionId,
        owner: nft.owner,
      });
    });

    if (accountPage) {
      return mints.filter((item: { owner: string }) => item.owner == account);
    }

    return mints;
  };

  return {
    mints: !fetching && getMints(),
    mintsLoading: fetching,
    mintsError: error,
  };
};
