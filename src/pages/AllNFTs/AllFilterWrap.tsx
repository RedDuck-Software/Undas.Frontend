import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { createClient } from "urql";

import NFTListItem from "./page-components/NFTListItem/NFTListItem";

import { ClipLoaderWrapper } from "../../components/NFTCard/Grid/NFTGridItem.styles";
import {
  useBuy,
  useHasOffers,
  useNew,
  usePriceFilter,
  useRent,
  useSearch,
  useSelectedCategories,
  useSelectedCollections,
} from "../../store/reducers/Filter/helpers";
import { ViewMode } from "../../types/viewMode";
import { useGetAllNfts } from "../../utils/hooks/useGetAllNfts";
import { priceFilterBetween } from "../../utils/priceFilter";
import CreatedCollections from "../AccountPage/page-components/Created/CreatedCollections";
import { CreatedType } from "../AccountPage/page-components/Created/types";
import CollectionGridWrap from "../CollectionPage/page-components/CollectionGridWrap";

interface CommonProps {
  id: number;
  name: string;
  URI: string;
  tokenAddress?: string;
  collectionName?: string;
}

export interface ItemsProps extends CommonProps {
  priceInNum: number;
  listingId: number;
}
export interface StakingsProps extends CommonProps {
  premiumInNum: number;
  colloteralWei: number;
  stakingId: number;
}

interface CommonListProps extends CommonProps {
  priceInNum?: number;
  premiumInNum?: number;
}

interface IAllFilterWrap {
  accountPage?: boolean;
  createdType?: CreatedType;
  getResults?: any;
  priceFilterOrder?: string;
  viewMode: ViewMode;
}

const AllFilterWrap: React.FC<IAllFilterWrap> = ({
  /* priceFilterOrder, */ accountPage,
  getResults,
  viewMode,
  createdType,
}) => {
  const { account } = useWeb3React();
  const searchFilter = useSelector(useSearch);
  const newFilter = useSelector(useNew);
  const buyingFilter = useSelector(useBuy);
  const rentingFilter = useSelector(useRent);
  const hasOfferFilter = useSelector(useHasOffers);
  const priceFilter = useSelector(usePriceFilter);
  const selectedCollectionFilter = useSelector(useSelectedCollections);
  const selectedCategoryFilter = useSelector(useSelectedCategories);
  const { nfts, nftsLoading } = useGetAllNfts(
    {
      ...newFilter,
      ...buyingFilter,
      ...rentingFilter,
      ...hasOfferFilter,
    },
    selectedCollectionFilter.length > 0 ? true : false,
    selectedCategoryFilter.length > 0 ? true : false,
    accountPage,
    account,
  );

  const [loading, setLoading] = useState(false);

  const [commonList, setCommonList] = useState<CommonListProps[]>([]);

  const getCollectionsTokens = async () => {
    const tokens = await fetchCollectionTokens(
      selectedCollectionFilter,
      buyingFilter.buying,
      rentingFilter.stacking,
      hasOfferFilter.hasOffers,
      accountPage ? accountPage : false,
      account,
    );
    const mergedCollections: any[] = [];
    for (const key of Object.keys(tokens)) {
      const value = tokens[key];
      mergedCollections.push(...value);
    }
    const selectedCollectionTokens: any = [];

    mergedCollections.map((nft: any) => {
      const priceInNum = nft.price
        ? Number(ethers.utils.formatUnits(nft.price, 18))
        : 0;
      selectedCollectionTokens.push({
        priceInNum,
        id: nft.id,
        name: nft.name,
        URI: nft.uri,
        collectionId: nft.collectionId,
        collectionName: nft.collectionName,
        tokenAddress: "0x19CF92bC45Bc202DC4d4eE80f50ffE49CB09F91d",
      });
    });

    return selectedCollectionTokens;
  };

  const getCreatedCollections = async () => {
    const query = `{
      collections(where: { owner: "${account}" }) {
        collectionName
        owner
        id
        collectionInfo
        collectionUrl
        collectionFeatureUrl
        collectionBannerUrl
        collectionCategory
      }
    }`;

    const collections = await fetchCreatedCollections(
      selectedCategoryFilter,
      account,
      query,
    );

    const mergedCollections: any[] = [];
    for (const key of Object.keys(collections)) {
      const value = collections[key];
      mergedCollections.push(...value);
    }

    const selectedCategoryCollections: any = [];

    mergedCollections.map((collection: any) => {
      selectedCategoryCollections.push({
        id: collection.id,
        collectionName: collection.collectionName,
        collectionUrl: collection.collectionUrl,
        collectionFeatureUrl: collection.collectionFeatureUrl,
        owner: collection.owner,
        collectionInfo: collection.collectionInfo,
        collectionCategory: collection.collectonCategory,
      });
    });

    return selectedCategoryCollections;
  };

  const getCreatedCollectionsData = async () => {
    if (accountPage) {
      let response;

      if (selectedCategoryFilter.length == 0) {
        response = await getCreatedCollections();
        if (response) {
          setCommonList(response);
        }
        return;
      }

      response = await getCreatedCollections();
      if (response) {
        setCommonList(response);
      }
    }
  };

  const getCategoryTokens = async () => {
    const tokens = await fetchCategoryTokens(
      selectedCategoryFilter,
      buyingFilter.buying,
      rentingFilter.stacking,
      hasOfferFilter.hasOffers,
      accountPage ? accountPage : false,
      account,
    );

    const mergedCategories: any[] = [];
    for (const key of Object.keys(tokens)) {
      const value = tokens[key];
      mergedCategories.push(...value);
    }
    const selectedCategoryTokens: any = [];

    mergedCategories.map((nft: any) => {
      const priceInNum = nft.price
        ? Number(ethers.utils.formatUnits(nft.price, 18))
        : 0;
      selectedCategoryTokens.push({
        priceInNum,
        id: nft.id,
        name: nft.name,
        URI: nft.uri,
        collectionId: nft.collectionId,
        collectionName: nft.collectionName,
        tokenAddress: "0x19CF92bC45Bc202DC4d4eE80f50ffE49CB09F91d",
      });
    });

    return selectedCategoryTokens;
  };

  async function getCollectionsTokensData() {
    const response = await getCollectionsTokens();
    if (response) {
      if (selectedCategoryFilter.length > 0) {
        const result = new Map(
          [...commonList, ...response].map((item: any) => [item["name"], item]),
        ).values();
        setCommonList(Array.from(result));
        return;
      }
      setCommonList(response);
    }
  }

  async function getCategoriesTokensData() {
    const response = await getCategoryTokens();
    if (response) {
      if (selectedCollectionFilter.length > 0) {
        const result = new Map(
          [...commonList, ...response].map((item: any) => [item["name"], item]),
        ).values();
        setCommonList(Array.from(result));
        return;
      }
      setCommonList(response);
    }
  }

  // async function getNetwork(){
  //   const provider:any = await detectEthereumProvider();
  //
  //   const chainId = await provider.request({ method: "eth_chainId" });
  //   const goerliTestChainId = '0x5'
  //
  //   if (network === goerliTestChainId) {
  //   } else {
  //     await provider.request({
  //       method: 'wallet_switchEthereumChain',
  //       params: [{ chainId: goerliTestChainId}],
  //     });
  //
  //   }
  // }

  /* const priceSort = async () => {
    if (!priceFilterOrder) return nfts;

    let sortedArr;

    if (priceFilterOrder === "low-to-high") {
      sortedArr = nfts?.sort(
        (a: { priceInNum: any }, b: { priceInNum: any }) => {
          if (a.priceInNum > b.priceInNum) {
            return 1;
          }
          if (a.priceInNum < b.priceInNum) {
            return -1;
          }
          return 0;
        },
      );
      return sortedArr;
    }

    if (priceFilterOrder === "high-to-low") {
      sortedArr = nfts?.sort(
        (a: { priceInNum: any }, b: { priceInNum: any }) => {
          if (a.priceInNum < b.priceInNum) {
            return 1;
          }
          if (a.priceInNum > b.priceInNum) {
            return -1;
          }
          return 0;
        },
      );
      return sortedArr;
    }
  }; */

  useEffect(() => {
    if (priceFilter.min == "" && priceFilter.max == "") {
      setCommonList(nfts);
      return;
    }
    setCommonList(nfts);
  }, [
    nfts,
    nftsLoading,
    newFilter.newNfts,
    buyingFilter.buying,
    rentingFilter.stacking,
    hasOfferFilter.hasOffers,
    priceFilter,
  ]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);

    if (selectedCollectionFilter.length == 0) {
      setCommonList(nfts);
    }

    getCollectionsTokensData();
  }, [
    selectedCollectionFilter,
    buyingFilter.buying,
    rentingFilter.stacking,
    hasOfferFilter.hasOffers,
  ]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);

    if (selectedCategoryFilter.length == 0 && !accountPage) {
      setCommonList(nfts);
      return;
    }

    getCategoriesTokensData();
  }, [
    selectedCategoryFilter,
    buyingFilter.buying,
    rentingFilter.stacking,
    hasOfferFilter.hasOffers,
  ]);

  useEffect(() => {
    if (accountPage) {
      if (createdType == CreatedType.nft) {
        setCommonList(nfts);
        return;
      }
      getCreatedCollectionsData();
    }
  }, [selectedCategoryFilter, createdType]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);

    if (searchFilter.length == 0) {
      setCommonList(nfts);
      return;
    }

    const result = commonList.filter((item: { name: string }) => {
      return item.name.toLowerCase().includes(searchFilter.toLowerCase());
    });

    setCommonList(result);
  }, [searchFilter]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);

    if (!priceFilter) return;
    if (!priceFilter.min && !priceFilter.max) return;

    if (!priceFilter.min) {
      const { max } = priceFilter;
      const result = commonList.filter(priceFilterBetween(0, max));
      setCommonList(result);
      return;
    }

    if (!priceFilter.max) {
      const { min } = priceFilter;
      const result = commonList.filter(priceFilterBetween(min, 9999999999999));
      setCommonList(result);
      return;
    }

    if (priceFilter.min && priceFilter.max) {
      const { min, max } = priceFilter;
      const result = commonList.filter(priceFilterBetween(min, max));
      setCommonList(result);
      return;
    }
  }, [priceFilter]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
    if (commonList) getResults(commonList.length);
  }, [commonList, viewMode]);

  return loading ? (
    <ClipLoaderWrapper>
      <ClipLoader color={"#BD10E0"} loading={loading} size={150} />
    </ClipLoaderWrapper>
  ) : accountPage ? (
    <>
      {createdType == CreatedType.nft ? (
        <>
          {commonList && commonList.length > 0 ? (
            <>
              {viewMode === ViewMode.grid ? (
                <CollectionGridWrap itemList={commonList} />
              ) : (
                <NFTListItem itemList={commonList} />
              )}
            </>
          ) : (
            "No items found"
          )}
        </>
      ) : (
        <>
          <CreatedCollections createdCollections={commonList} />
        </>
      )}
    </>
  ) : (
    <>
      {commonList && commonList.length > 0 ? (
        <>
          {viewMode === ViewMode.grid ? (
            <CollectionGridWrap itemList={commonList} />
          ) : (
            <NFTListItem itemList={commonList} />
          )}
        </>
      ) : (
        "No items found"
      )}
    </>
  );
};

const APIURL =
  "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

const collectionsTokens = (
  selectedCollectionFilter: [],
  buying: boolean,
  stacking: boolean,
  hasOffers: boolean,
  accountPage: boolean,
  account: any,
) => {
  const query = `{${selectedCollectionFilter.map(
    (item: { id: number | string }) => {
      return `
        tokens_${item.id}: tokens(where: {collectionId: ${item.id}
        ${buying ? ", price_not: null" : ""}
        ${stacking ? ", premiumWei_not: null" : ""}
        ${hasOffers ? ", hasOffer: true" : ""}
        ${accountPage ? `, creator: "${account}"` : ""}
      }) {
          id
          name
          uri
          price
          colloteral
          premiumWei
          collectionId
          collectionName
        }
      `;
    },
  )}}`;

  return query;
};

const categoryTokens = (
  selectedCategoryFilter: [],
  buying: boolean,
  stacking: boolean,
  hasOffers: boolean,
  accountPage: boolean,
  account: any,
) => {
  const query = `{${selectedCategoryFilter.map(
    (item: { categoryName: string }) => {
      return `
        tokens_${
          item.categoryName
        }: tokens(where: {collectionCategory: ${item.categoryName.toUpperCase()}
        ${buying ? ", price_not: null" : ""}
        ${stacking ? ", premiumWei_not: null" : ""}
        ${hasOffers ? ", hasOffer: true" : ""}
        ${accountPage ? `, creator: "${account}"` : ""}
      }) {
          id
          name
          uri
          price
          colloteral
          premiumWei
          collectionId
          collectionName
        }
      `;
    },
  )}}`;

  return query;
};

const createdCollections = (selectedCategoryFilter: [], account: any) => {
  const query = `{${selectedCategoryFilter.map(
    (item: { categoryName: string }) => {
      return `      
      collection_${
        item.categoryName
      }: collections(where: { owner: "${account}", collectionCategory: ${item.categoryName.toUpperCase()}
      }) {
          collectionName
          owner
          id
          collectionInfo
          collectionUrl
          collectionFeatureUrl
          collectionBannerUrl
          collectionCategory
        }
      `;
    },
  )}
  }`;

  return query;
};

const client = createClient({
  url: APIURL,
});

async function fetchCollectionTokens(
  selectedCollections: [],
  buying: boolean,
  stacking: boolean,
  hasOffers: boolean,
  accountPage: boolean,
  account: any,
) {
  const customQuery = collectionsTokens(
    selectedCollections,
    buying,
    stacking,
    hasOffers,
    accountPage,
    account,
  );

  const data = await client.query(customQuery).toPromise();
  return data.data;
}

async function fetchCategoryTokens(
  selectedCategoryFilter: [],
  buying: boolean,
  stacking: boolean,
  hasOffers: boolean,
  accountPage: boolean,
  account: any,
) {
  const customQuery = categoryTokens(
    selectedCategoryFilter,
    buying,
    stacking,
    hasOffers,
    accountPage,
    account,
  );

  const data = await client.query(customQuery).toPromise();
  return data.data;
}

async function fetchCreatedCollections(
  selectedCategoryFilter: [],
  account: any,
  query?: string,
) {
  const customQuery = createdCollections(selectedCategoryFilter, account);
  const data = await client
    .query(selectedCategoryFilter.length == 0 && query ? query : customQuery)
    .toPromise();
  return data.data;
}

export default AllFilterWrap;
