import { useQuery } from "urql";

import { GET_MINTED_NFTS } from "./query";

import { GET_CREATED_NFTS } from "../../../pages/AccountPage/query";

export const useGetMintedNfts = (accountPage?: boolean, account?: any) => {
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
        creator: nft.creator,
      });
    });

    /* if (accountPage) {
      const result = mints.filter((item: { creator: string }) => {
        return item.creator.toLowerCase() == account.toLowerCase();
      });
      return result;
    } */
    return mints;
  };

  const getAccountCreated = () => {
    if (!accountPage) return;

    const [result] = useQuery({
      query: GET_CREATED_NFTS,
      variables: { creator: account },
    });
    const { data, fetching, error } = result;

    if (error || fetching) return [];

    const createdItems: any = [];

    data.tokens.map((i: any) => {
      createdItems.push({
        id: i.id,
        name: i.name,
        URI: i.uri,
        tokenOwner: i.owner,
        collectionName: i.collectionName,
        collectionId: i.collectionId,
        tokenAddress: "0x19CF92bC45Bc202DC4d4eE80f50ffE49CB09F91d",
      });
    });

    return createdItems;
  };

  return {
    mints: !fetching && !accountPage ? getMints() : getAccountCreated(),
    mintsLoading: fetching,
    mintsError: error,
  };
};
