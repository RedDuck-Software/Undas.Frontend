import { ethers } from "ethers";
import React, { FC, useContext, useEffect, useState } from "react";
import { GridLayout } from "../../../pages/AllNFTs/AllNFTs.styles";
import Context from "../../../utils/Context";
import { getListing } from "../../../utils/getListing";
import { getListingsLastIndex } from "../../../utils/getListingsLastIndex";
import { getStakingsLastIndex } from "../../../utils/getStakingsLastIndex";
import { isBuyableFunction } from "../../../utils/isBuyable";
import NFTGrid from "./NFTGrid";
import { getStaking } from "../../../utils/getStaking";
import { canRentNFTFunction } from "../../../utils/canRentNFT";
import ClipLoader from "react-spinners/ClipLoader";
import { number, string } from "yup";

//Redux
import {useSelector} from "react-redux";
import {useFilter} from "../../../store";

interface CardListProps {
  newFilter?: boolean;
  priceFilter?: { min: number; max: number };
}

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
  getResults?: any,
  priceFilter?: string
}

const AllGridWrap: FC<IAllGridWrap> = ({getResults, priceFilter}) => {
  const { connector } = useContext(Context);
  const items: ItemsProps[] = [];
  const stakings: StakingsProps[] = [];

  const stackingFilter = useSelector(useFilter)

  console.log(stackingFilter)

  const [list, setList] = useState<ItemsProps[]>();
  const [stakingsList, setStakingsList] = useState<StakingsProps[]>();
  const [filteredList, setFilteredList] = useState<ItemsProps[]>();
  const [loading, setLoading] = useState(true);
  const [amountOfNFTs, setAmountOfNFTs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [showList, setShowList] = useState("NFT to buy");
  const [commonList, setCommonList] = useState<CommonListProps[]>();

  const getListings = async () => {
    setAmountOfNFTs(0);
    if (!connector) {
      return;
    }

    const lastIndex = await getListingsLastIndex(connector);
    if (lastIndex || lastIndex === 0) {
      for (let i = 0; i < lastIndex?.toNumber(); i++) {
        // const metadata = await NFTContract.tokenMetadata(i);
        const CardProps = await getListing(i, connector);
        const isBuyable = await isBuyableFunction(i, connector);

        if (!CardProps) {
          continue;
        }

        const { price, tokenId } = CardProps.tx;
        const { name, URI } = CardProps;

        const priceInNum = Number(ethers.utils.formatUnits(price, 18));
        const id = tokenId.toNumber();

        if (isBuyable) {
          items.push({ priceInNum, id, name, URI });
          setAmountOfNFTs(amountOfNFTs + 1);
        }
      }

      return items;
    } else return;
  };

  const getStakings = async () => {
    setAmountOfNFTs(0);
    if (!connector) {
      return;
    }

    const lastIndex = await getStakingsLastIndex(connector);
    if (!lastIndex) return;

    for (let i = 0; i < lastIndex?.toNumber(); i++) {
      const CardProps = await getStaking(i, connector);

      let canRentNFT;
      if (CardProps?.tx.tokenId._hex !== "0x00") {
        canRentNFT = await canRentNFTFunction(i, connector);
      }

      if (!CardProps) {
        continue;
      }

      const { premium, tokenId } = CardProps.tx;
      const { name, URI } = CardProps;
      const premiumInNum = Number(ethers.utils.formatUnits(premium, 18));
      const id = tokenId.toNumber();

      if (canRentNFT) {
        stakings.push({ premiumInNum, id, name, URI });
        setAmountOfNFTs(amountOfNFTs + 1);
      }
    }

    return stakings;
  };

  async function getListingsData() {
    const response = await getListings();
    setList(response);
  }

  async function getStakingsData() {
    const response = await getStakings();
    setStakingsList(response);
  }

  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }

    setLoading(false);

    getListingsData();
    getStakingsData();
  }, [connector]);

  const priceSort = async () => {
    if (!priceFilter) return list 
    let sortedArr
    if (priceFilter === 'low-to-high') {
      sortedArr = await list?.sort((a, b) => {
        if (a.priceInNum! > b.priceInNum!) {
          return 1
        }
        if (a.priceInNum! < b.priceInNum!) {
          return -1
        }
        return 0
      })
      return sortedArr
    }
    if (priceFilter === 'high-to-low') {
      sortedArr = await list?.sort((a, b) => {
        if (a.priceInNum! < b.priceInNum!) {
          return 1
        }
        if (a.priceInNum! > b.priceInNum!) {
          return -1
        }
        return 0
      })
      return sortedArr
    }
  }

  useEffect(() => {
    if (!list && !stakingsList) {
      return;
    } else if (list && !stakingsList) {
      setCommonList(list);
    } else if (!list && stakingsList) {
      setCommonList(stakingsList);
    } else {
      priceSort()
          .then(sortedArr => {
            console.log('sortedArr: ', sortedArr)
            setList(sortedArr)
          })
          .catch(e => console.log(e))
      console.log(list)
      let common: (ItemsProps | StakingsProps)[] = [...list!, ...stakingsList!];
      common = common.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.id === value.id)
      );
      setCommonList(common);
      console.log('list: ',list)
      console.log('common: ',commonList)

    }
    //console.log("List", list);
  }, [list, stakingsList, priceFilter]);

  return loading ? (
    <ClipLoader color={"#BD10E0"} loading={loading} size={150} />
  ) : (
    <>
      <GridLayout>
        {commonList ? (
          commonList?.map((item) => {
            getResults(commonList.length)
            return (
              <NFTGrid
                key={item.id}
                tokenId={item.id}
                name={item.name}
                URI={item.URI}
                price={item?.priceInNum}
                premium={item?.premiumInNum}
              />
            );
          })
        ) : (
          <span>There are no NFTs on the marketplace</span>
        )}
      </GridLayout>
    </>
  );
};

export default AllGridWrap;
