import { useState, useEffect } from "react";

import { useGetListingNfts } from "../useGetListingNfts";
import { useGetMintedNfts } from "../useGetMintedNfts";
import { useGetRentingNfts } from "../useGetRentingNfts";

export const useGetAllNfts = (
  statusFilter?: {
    newNfts: boolean;
    buying: boolean;
    stacking: boolean;
    hasOffers: boolean;
  },
  isCollections?: boolean,
  isCategories?: boolean,
  accountPage?: boolean,
  account?: any,
) => {
  const [filteredNfts, setFilteredNfts] = useState<any>([]);
  const { listings, listingsError, listingsLoading } = useGetListingNfts();
  const { rentings, rentingsError, rentingsLoading } = useGetRentingNfts();
  // to do: pass hasOffers
  const { mints, mintsError, mintsLoading } = useGetMintedNfts(
    accountPage,
    account,
  );

  const getFilteredNfts = (
    buying: boolean,
    stacking: boolean,
    hasOffers: boolean,
    isCollections: boolean,
    isCategories: boolean,
  ) => {
    if (
      listings &&
      rentings &&
      mints &&
      isCollections == false &&
      isCategories == false
    ) {
      if (!buying && !stacking && !hasOffers) {
        setFilteredNfts([...listings, ...rentings, ...mints]);
        return;
      }

      if (buying && stacking && hasOffers) {
        setFilteredNfts([...listings, ...rentings, ...mints]);
        return;
      }

      if (buying && !stacking && !hasOffers) {
        setFilteredNfts(listings);
        return;
      }

      if (!buying && stacking && !hasOffers) {
        setFilteredNfts(rentings);
        return;
      }

      if (!buying && !stacking && hasOffers) {
        setFilteredNfts(mints);
        return;
      }

      if (buying && stacking && !hasOffers) {
        setFilteredNfts([...listings, ...rentings]);
        return;
      }

      if (buying && !stacking && hasOffers) {
        setFilteredNfts([...listings, ...mints]);
        return;
      }

      if (!buying && stacking && hasOffers) {
        setFilteredNfts([...rentings, ...mints]);
        return;
      }
    }
  };

  useEffect(() => {
    if (
      statusFilter &&
      isCollections !== undefined &&
      isCollections !== null &&
      isCategories !== undefined &&
      isCategories !== null
    ) {
      getFilteredNfts(
        statusFilter.buying,
        statusFilter.stacking,
        statusFilter.hasOffers,
        isCollections,
        isCategories,
      );
    }
  }, [
    listingsLoading,
    rentingsLoading,
    mintsLoading,
    statusFilter?.buying,
    statusFilter?.stacking,
    statusFilter?.hasOffers,
  ]);

  return {
    nfts:
      statusFilter && statusFilter.newNfts
        ? filteredNfts.slice(-50)
        : filteredNfts,
    nftsLoading: listingsLoading || mintsLoading || rentingsLoading,
    nftsError: listingsError || mintsError || rentingsError,
  };
};
