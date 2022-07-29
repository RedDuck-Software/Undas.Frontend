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
  const { listings, listingsError, listingsLoading } = useGetListingNfts(
    accountPage,
    account,
  );
  const { rentings, rentingsError, rentingsLoading } = useGetRentingNfts(
    accountPage,
    account,
  );
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
    statusFilter?.newNfts,
    statusFilter?.buying,
    statusFilter?.stacking,
    statusFilter?.hasOffers,
  ]);

  useEffect(() => {
    if (statusFilter?.newNfts) {
      setFilteredNfts(filteredNfts.slice(-50));
    }
  }, [statusFilter?.newNfts]);

  return {
    nfts: statusFilter && filteredNfts,
    nftsLoading: listingsLoading || mintsLoading || rentingsLoading,
    nftsError: listingsError || mintsError || rentingsError,
  };
};
