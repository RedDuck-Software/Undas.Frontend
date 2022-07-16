import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { createClient } from "urql";

import { ClipLoaderWrapper } from "./NFTGridItem.styles";

import CollectionGridWrap from "../../../pages/CollectionPage/page-components/CollectionGridWrap";
import {
  useBuy,
  useHasOffers,
  useRent,
  useSelectedCategories,
  useSelectedCollections,
} from "../../../store/reducers/Filter/helpers";
import { useGetAllNfts } from "../../../utils/hooks/useGetAllNfts";

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

interface IAllGridWrap {
  getResults?: any;
  priceFilter?: string;
}

const AllGridWrap: React.FC<IAllGridWrap> = ({
  /* priceFilter, */ getResults,
}) => {
  const buyingFilter = useSelector(useBuy);
  const rentingFilter = useSelector(useRent);
  const hasOfferFilter = useSelector(useHasOffers);
  const selectedCollectionFilter = useSelector(useSelectedCollections);
  const selectedCategoryFilter = useSelector(useSelectedCategories);
  const { nfts, nftsLoading } = useGetAllNfts(
    {
      ...buyingFilter,
      ...rentingFilter,
      ...hasOfferFilter,
    },
    selectedCollectionFilter.length > 0 ? true : false,
    selectedCategoryFilter.length > 0 ? true : false,
  );

  const [loading, setLoading] = useState(false);

  const [commonList, setCommonList] = useState<CommonListProps[]>([]);

  const getCollectionsTokens = async () => {
    const tokens = await fetchCollectionTokens(
      selectedCollectionFilter,
      buyingFilter.buying,
      rentingFilter.stacking,
      hasOfferFilter.hasOffers,
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
        tokenAddress: "0x82907ed3c6adea2f470066abf614f3b38094bef2",
      });
    });

    return selectedCollectionTokens;
  };

  const getCategoryTokens = async () => {
    const tokens = await fetchCategoryTokens(
      selectedCategoryFilter,
      buyingFilter.buying,
      rentingFilter.stacking,
      hasOfferFilter.hasOffers,
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
        tokenAddress: "0x82907ed3c6adea2f470066abf614f3b38094bef2",
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
    if (!priceFilter) return nfts;

    let sortedArr;

    if (priceFilter === "low-to-high") {
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

    if (priceFilter === "high-to-low") {
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
    setCommonList(nfts);
  }, [
    nfts,
    nftsLoading,
    buyingFilter.buying,
    rentingFilter.stacking,
    hasOfferFilter.hasOffers,
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

    if (selectedCategoryFilter.length == 0) {
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

console.log('commonList',commonList)
  useEffect(() => {
    if (commonList) getResults(commonList.length);
  }, [commonList]);
  return loading ? (
    <ClipLoaderWrapper>
      <ClipLoader color={"#BD10E0"} loading={loading} size={150} />
    </ClipLoaderWrapper>
  ) : (
    <>{commonList && <CollectionGridWrap itemList={commonList} />}</>
  );
};
const APIURL =
  "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

const collectionsTokens = (
  selectedCollectionFilter: [],
  buying: boolean,
  stacking: boolean,
  hasOffers: boolean,
) => {
  const query = `{${selectedCollectionFilter.map(
    (item: { id: number | string }) => {
      return `
        tokens_${item.id}: tokens(where: {collectionId: ${item.id}
        ${buying ? ", price_not: null" : ""}
        ${stacking ? ", premiumWei_not: null" : ""}
        ${hasOffers ? ", hasOffer: true" : ""}
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

const client = createClient({
  url: APIURL,
});

async function fetchCollectionTokens(
  selectedCollections: [],
  buying: boolean,
  stacking: boolean,
  hasOffers: boolean,
) {
  const customQuery = collectionsTokens(
    selectedCollections,
    buying,
    stacking,
    hasOffers,
  );

  const data = await client.query(customQuery).toPromise();
  return data.data;
}

async function fetchCategoryTokens(
  selectedCategoryFilter: [],
  buying: boolean,
  stacking: boolean,
  hasOffers: boolean,
) {
  const customQuery = categoryTokens(
    selectedCategoryFilter,
    buying,
    stacking,
    hasOffers,
  );

  const data = await client.query(customQuery).toPromise();
  return data.data;
}

export default AllGridWrap;
