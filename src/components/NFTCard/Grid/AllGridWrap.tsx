import { ethers } from "ethers";
import React, { FC, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

//import NFTGridItem from "./NFTGridItem";

//import { GridLayout } from "../../../pages/AllNFTs/AllNFTs.styles";
import { useFilter } from "../../../store";
import { canRentNFTFunction } from "../../../utils/canRentNFT";
import Context from "../../../utils/Context";
// import { getListing } from "../../../utils/getListing";
// import { getListingsLastIndex } from "../../../utils/getListingsLastIndex";
// import { getStaking } from "../../../utils/getStaking";
// import { getStakingsLastIndex } from "../../../utils/getStakingsLastIndex";
// import { isBuyableFunction } from "../../../utils/isBuyable";
import CollectionGridWrap from "../../../pages/CollectionPage/page-components/CollectionGridWrap";

import { createClient } from "urql";
/* interface CardListProps {
  newFilter?: boolean;
  priceFilter?: { min: number; max: number };
} */

interface CommonProps {
  id: number;
  name: string;
  URI: string;
}

export interface ItemsProps extends CommonProps {
  priceInNum: number;
}
export interface StakingsProps extends CommonProps {
  premiumInNum: number;
}

interface CommonListProps extends CommonProps {
  priceInNum?: number;
  premiumInNum?: number;
}

interface IAllGridWrap {
  getResults?: any;
  priceFilter?: string;
}

const AllGridWrap: FC<IAllGridWrap> = ({ priceFilter }) => {
  const { connector } = useContext(Context);
  const items: ItemsProps[] = [];
  const stakings: StakingsProps[] = [];

  const stackingFilter = useSelector(useFilter);

  const [list, setList] = useState<ItemsProps[]>([]);
  const [stakingsList, setStakingsList] = useState<StakingsProps[]>([]);
  // const [filteredList, setFilteredList] = useState<ItemsProps[]>();
  const [loading, setLoading] = useState(true);
  const [amountOfNFTs, setAmountOfNFTs] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(9);
  // const [showList, setShowList] = useState('NFT to buy');
  const [commonList, setCommonList] = useState<CommonListProps[]>();

  console.log(connector);
  //getting listing from the graph`s API
  const getListings = async () => {
    setAmountOfNFTs(0);
    if (!connector) {
      return;
    }

    const tokens = await fetchData();

    tokens.map((nft: any) => {
      if (nft.listingStatus == "ACTIVE") {
        const price = nft.price;
        const id = nft.id;
        const name = nft.tokenName;
        const URI = nft.tokenURI;
        const priceInNum = Number(ethers.utils.formatUnits(price, 18));

        items.push({ priceInNum, id, name, URI });

        setAmountOfNFTs(amountOfNFTs + 1);
      }
    });
    return items;
  };

  const getStakings = async () => {
    setAmountOfNFTs(0);
    if (!connector) {
      return;
    }

    const tokens = await fetchStakingData();
    console.log("tokensStaking", tokens.stakingListings);
    tokens.stakingListings.map((nft: any) => {
      if (nft.stakingStatus == "ACTIVE") {
        console.log("DASDSAD");
        const price = nft.premiumWei;
        const id = nft.id;
        const name = nft.tokenName;
        const URI = nft.tokenURI;
        const premiumInNum = Number(ethers.utils.formatUnits(price, 18));
        console.log("1");
        stakings.push({ id, name, URI, premiumInNum });
        console.log("zxczczx", stakings);
        setAmountOfNFTs(amountOfNFTs + 1);
      }
    });
    return stakings;
  };

  async function getListingsData() {
    const response = await getListings();
    console.log("listing", response);
    if (response) {
      setList(response);
    }
  }

  async function getStakingsData() {
    const response = await getStakings();
    console.log("stakin22313gs", response);

    if (response) {
      setStakingsList(response);
    }
  }
  console.log(stakingsList);
  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }

    setLoading(false);
    console.log("useEf");
    getListingsData();
    getStakingsData();
    console.log("use efff");
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

  useEffect(() => {
    if (!list && !stakingsList) {
      return;
    } else if (list && !stakingsList) {
      setCommonList(list);
    } else if (!list && stakingsList) {
      setCommonList(stakingsList);
    } else {
      if (stackingFilter.stacking) {
        setCommonList(stakingsList);
      } else {
        priceSort()
          .then((sortedArr) => {
            if (sortedArr) {
              setList(sortedArr);
            }
          })
          .catch((e) => console.log(e));
        let common: (ItemsProps | StakingsProps)[] = [...list, ...stakingsList];
        common = common.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.id === value.id),
        );
        setCommonList(common);
      }
    }
    //console.log("List", list);
  }, [list, stakingsList, priceFilter, stackingFilter.stacking]);
  console.log("commonList", stakingsList);
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
    query   {
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
      }
    }  
`;

const tokensStakingQuery = `
 query  {
  stakingListings{
    id
    seller
    token
    tokenId
    tokenURI
    stakingStatus
    tokenName
    tokenName
    tokenDescription
    colloteralWei
    premiumWei
    deadlineUTC
  }
}
 `;

const client = createClient({
  url: APIURL,
});

async function fetchData() {
  const data = await client.query(tokensQuery).toPromise();
  console.log("listing", data.data.listings);
  return data.data.listings;
}
async function fetchStakingData() {
  const data = await client.query(tokensStakingQuery).toPromise();
  console.log("staking1", data.data.stakingListings);
  return data.data;
}
export default AllGridWrap;
