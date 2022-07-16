import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { createClient } from "urql";

import CollectionGridWrap from "../../../pages/CollectionPage/page-components/CollectionGridWrap";
import {
  useBuy,
  useHasOffers,
  useRent,
  useSelectedCollections,
} from "../../../store/reducers/Filter/helpers";
import Context from "../../../utils/Context";

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

const AllGridWrap: React.FC<IAllGridWrap> = ({ priceFilter, getResults }) => {
  const { connector } = useContext(Context);
  // buy now
  const items: ItemsProps[] = [];
  const buyingFilter = useSelector(useBuy);
  const [list, setList] = useState<ItemsProps[]>([]);
  // rent - need refactor from staking to rent naming cause it's actually rent!!!
  const stakings: StakingsProps[] = [];
  const stackingFilter = useSelector(useRent);
  const [stakingsList, setStakingsList] = useState<StakingsProps[]>([]);
  // hasOffer
  const hasOffers: (ItemsProps | StakingsProps)[] = [];
  const hasOfferFilter = useSelector(useHasOffers);
  const [hasOffersList, setHasOffersList] = useState<
    (ItemsProps | StakingsProps)[]
  >([]);
  // selected collections
  const selectedCollectionFilter = useSelector(useSelectedCollections);
  const [selectedCollectionsTokens, setSelectedCollectionsTokens] =
    useState<any>([]);

  const [loading, setLoading] = useState(true);
  const [amountOfNFTs, setAmountOfNFTs] = useState(0);

  const [commonList, setCommonList] = useState<CommonListProps[]>([]);

  const getCollectionsTokens = async () => {
    const tokens = await fetchCollectionTokens(selectedCollectionFilter);
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

  const getListings = async () => {
    setAmountOfNFTs(0);

    const tokens = await fetchData();
    tokens.map((nft: any) => {
      if (nft.listingStatus == "ACTIVE") {
        const price = nft.price;
        const id = nft.tokenId;
        const listingId = nft.id;
        const name = nft.tokenName;
        const URI = nft.tokenURI;
        const priceInNum = Number(ethers.utils.formatUnits(price, 18));
        const tokenAddress = nft.token;
        const collectionName = nft.collectionName;
        items.push({
          priceInNum,
          id,
          name,
          URI,
          listingId,
          tokenAddress,
          collectionName,
        });

        setAmountOfNFTs(amountOfNFTs + 1);
      }
    });
    return items;
  };

  const getStakings = async () => {
    setAmountOfNFTs(0);

    const tokens = await fetchStakingData();

    tokens.stakingListings.map((nft: any) => {
      if (nft.stakingStatus == "ACTIVE") {
        const price = nft.premiumWei;
        const id = nft.tokenId;
        const name = nft.tokenName;
        const stakingId = nft.id;
        const URI = nft.tokenURI;
        const premiumInNum = Number(ethers.utils.formatUnits(price, 18));
        const colloteralWei = nft.colloteralWei;
        const tokenAddress = nft.token;
        const collectionName = nft.collectionName;

        stakings.push({
          id,
          name,
          URI,
          premiumInNum,
          colloteralWei,
          stakingId,
          tokenAddress,
          collectionName,
        });

        setAmountOfNFTs(amountOfNFTs + 1);
      }
    });
    return stakings;
  };

  const getHasOffers = async () => {
    setAmountOfNFTs(0);

    const tokens = await fetchHasOfferData();

    tokens.listings.map((nft: any) => {
      if (nft.listingStatus == "ACTIVE") {
        const price = nft.price;
        const id = nft.tokenId;
        const listingId = nft.id;
        const name = nft.tokenName;
        const URI = nft.tokenURI;
        const priceInNum = Number(ethers.utils.formatUnits(price, 18));
        const tokenAddress = nft.token;

        hasOffers.push({ priceInNum, id, name, URI, listingId, tokenAddress });

        setAmountOfNFTs(amountOfNFTs + 1);
      }
    });

    tokens.stakingListings.map((nft: any) => {
      if (nft.stakingStatus == "ACTIVE") {
        const price = nft.premiumWei;
        const id = nft.tokenId;
        const name = nft.tokenName;
        const stakingId = nft.id;
        const URI = nft.tokenURI;
        const premiumInNum = Number(ethers.utils.formatUnits(price, 18));
        const colloteralWei = nft.colloteralWei;
        const tokenAddress = nft.token;
        hasOffers.push({
          id,
          name,
          URI,
          premiumInNum,
          colloteralWei,
          stakingId,
          tokenAddress,
        });

        setAmountOfNFTs(amountOfNFTs + 1);
      }
    });

    return hasOffers;
  };

  async function getListingsData() {
    const response = await getListings();
    if (response) {
      setList(response);
    }
  }

  async function getStakingsData() {
    const response = await getStakings();
    if (response) {
      setStakingsList(response);
    }
  }

  async function getHasOffersData() {
    const response = await getHasOffers();
    if (response) {
      setHasOffersList(response);
    }
  }

  async function getCollectionsTokensData() {
    const response = await getCollectionsTokens();
    if (response) {
      setSelectedCollectionsTokens(response);
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
  useEffect(() => {
    if(!connector){
      return
    }

    getListingsData();
    getStakingsData();
    getHasOffersData();
    setLoading(false);
  }, [connector]);

  const priceSort = async () => {
    fetchData();
    if (!priceFilter) return list;

    let sortedArr;

    if (priceFilter === "low-to-high") {
      sortedArr = list?.sort(
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
      sortedArr = list?.sort(
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
  };

  // TO DO:
  // FIND SMARTER WAY TO MAKE FILTER
  useEffect(() => {
    if (!list && !stakingsList && !hasOffersList) {
      return;
    }

    if (
      buyingFilter.buying &&
      stackingFilter.stacking &&
      hasOfferFilter.hasOffers
    ) {
      setCommonList([...list, ...stakingsList]);
    } else if (stackingFilter.stacking && hasOfferFilter.hasOffers) {
      const unique = new Map(
        [...stakingsList, ...hasOffersList].map((item: any) => [
          item["id"],
          item,
        ]),
      ).values();
      setCommonList(Array.from(unique));
    } else if (buyingFilter.buying && hasOfferFilter.hasOffers) {
      const unique = new Map(
        [...list, ...hasOffersList].map((item: any) => [item["id"], item]),
      ).values();
      setCommonList(Array.from(unique));
    } else if (stackingFilter.stacking && buyingFilter.buying) {
      setCommonList([...list, ...stakingsList]);
    } else if (buyingFilter.buying) {
      setCommonList(list);
    } else if (stackingFilter.stacking) {
      setCommonList(stakingsList);
    } else if (hasOfferFilter.hasOffers) {
      setCommonList(hasOffersList);
    } else {
      priceSort()
        .then((sortedArr) => {
          if (sortedArr) {
            setList(sortedArr);
          }
        })
        .catch((e) => console.log(e));
      let common: (ItemsProps | StakingsProps | any)[] = [
        ...list,
        ...stakingsList,
      ];
      setCommonList(common); //!!  MB ADD TO 199
      common = common.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.id === value.id),
      );
    }
  }, [
    list,
    stakingsList,
    priceFilter,
    buyingFilter.buying,
    stackingFilter.stacking,
    hasOfferFilter.hasOffers,
  ]);

  useEffect(() => {
    getCollectionsTokensData();
    console.log("set fetched collections", selectedCollectionsTokens);
    if (selectedCollectionFilter.length == 0) {
      const common: (ItemsProps | StakingsProps | any)[] = [
        ...list,
        ...stakingsList,
      ];
      setCommonList(common);
    }
  }, [selectedCollectionFilter]);


  useEffect(() => {
    if (commonList) getResults(commonList.length);
  }, [commonList]);
  return loading ? (
    <ClipLoader color={"#BD10E0"} loading={loading} size={150} />
  ) : (
    <>
      {commonList ? (
        <CollectionGridWrap itemList={commonList} />
      ) : (
        <span>There are no NFTs on the marketplace</span>
      )}
    </>
  );
};
const APIURL =
  "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

const tokensQuery = `
  query {
    listings{
      id
      token
      seller
      tokenId
      tokenURI
      listingStatus
      price
      tokenDescription
      tokenName
      collectionName
    }
  }  
`;

const tokensStakingQuery = `
  query {
    stakingListings{
      id
      seller
      token
      tokenId
      tokenURI
      stakingStatus
      tokenName
      tokenDescription
      colloteralWei
      premiumWei
      deadlineUTC
      collectionName
    }
  }
 `;

const tokensHasOffersQuery = `
  {
    listings(where: {hasOffer: true}) {
      id
      token
      seller
      tokenId
      tokenURI
      listingStatus
      price
      tokenDescription
      tokenName   
    }
    stakingListings(where: {hasOffer: true}) {
      id
      seller
      token
      tokenId
      tokenURI
      stakingStatus
      tokenName
      tokenDescription
      colloteralWei
      premiumWei
      deadlineUTC
    }
  }
`;

const collectionsTokens = (selectedCollectionFilter: []) => {
  const query = `{${selectedCollectionFilter.map(
    (item: { id: number | string }) => {
      return `
        tokens_${item.id}: tokens(where: {collectionId: ${item.id}}) {
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

async function fetchData() {
  const data = await client.query(tokensQuery).toPromise();
  return data.data.listings;
}

async function fetchStakingData() {
  const data = await client.query(tokensStakingQuery).toPromise();
  return data.data;
}

async function fetchHasOfferData() {
  const data = await client.query(tokensHasOffersQuery).toPromise();
  return data.data;
}

async function fetchCollectionTokens(selectedCollections: []) {
  const customQuery = collectionsTokens(selectedCollections);

  const data = await client.query(customQuery).toPromise();
  return data.data;
}

export default AllGridWrap;
