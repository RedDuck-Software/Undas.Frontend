import { useState, useEffect } from "react";

import { useGetListingNfts } from "../useGetListingNfts";
import { useGetMintedNfts } from "../useGetMintedNfts";
import { useGetRentingNfts } from "../useGetRentingNfts";

export const useGetAllNfts = (
  statusFilter?: {
    buying: boolean;
    stacking: boolean;
    hasOffers: boolean;
  },
  isCollections?: boolean,
  isCategories?: boolean,
) => {
  const [filteredNfts, setFilteredNfts] = useState<any>([]);
  // pass hasOffers
  const { listings, listingsError, listingsLoading } = useGetListingNfts();
  // pass hasOffers
  const { rentings, rentingsError, rentingsLoading } = useGetRentingNfts();
  const { mints, mintsError, mintsLoading } = useGetMintedNfts();

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
    nfts: filteredNfts,
    nftsLoading: listingsLoading || mintsLoading || rentingsLoading,
    nftsError: listingsError || mintsError || rentingsError,
  };
};
