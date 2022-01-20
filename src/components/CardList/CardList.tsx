import React, { useEffect, useState, useContext } from "react";
import Context from "../../utils/Context";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

import { RootState } from "../../store";
import { useSelector } from "react-redux";

import { ethers } from "ethers";

import { getId } from "../../utils/getId";
import { getListing } from "../../utils/getListing";
import { getStaking } from "../../utils/getStaking";
import { getListingsLastIndex } from "../../utils/getListingsLastIndex";
import { getStakingsLastIndex } from "../../utils/getStakingsLastIndex";
import { isBuyableFunction } from "../../utils/isBuyable";

import { CardItem, FilterButtons } from "..";

import { card01, card02, card03 } from "./imports";
import Pagination from "../Pagination/Pagination";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdOutlineApps, MdOutlineGridView } from "react-icons/md";
import {
  CardListWrapper,
  CardListHeading,
  CardListResults,
  CardListFilters,
  MenuItem,
  AllItemsMenu,
  AllItemsOption,
  SortByMenu,
  SortByOption,
  ToggleMarkupContainer,
  ButtonView2x2,
  ButtonView3x3,
  CardsWrapper,
  CardLink,
} from "./CardList.styles";

interface CardListProps {
  newFilter?: boolean;
}

export interface ItemsProps {
  priceInNum: number;
  id: string;
}
export interface StakingsProps {
  premiumInNum: number;
  id: string;
}

const CardList: React.FC<CardListProps> = ({ newFilter }) => {
  const { connector } = useContext(Context);

  const count = useSelector((state: RootState) => state.NFTsCounter.value);
  const items: ItemsProps[] = [];
  const stakings: StakingsProps[] = [];

  const [list, setList] = useState<ItemsProps[]>();
  const [stakingsList, setStakingsList] = useState<StakingsProps[]>();
  const [loading, setLoading] = useState(true);
  const [itemsMenuShow, setItemsMenuShow] = useState("");
  const [sortByMenuShow, setSortByMenuShow] = useState("");
  const [amountOfNFTs, setAmountOfNFTs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [showList, setShowList] = useState("NFT to buy");

  const override = css`
    display: block;
    margin: auto;
  `;

  const toggleItemsMenuShow = () => {
    if (itemsMenuShow) {
      setItemsMenuShow("");
    } else {
      setItemsMenuShow("active");
    }
  };

  const toggleSortByMenuShow = () => {
    if (sortByMenuShow) {
      setSortByMenuShow("");
    } else {
      setSortByMenuShow("active");
    }
  };

  const getListings = async () => {
    setAmountOfNFTs(0);
    if (!connector) {
      return;
    }

    const lastIndex = await getListingsLastIndex(connector);
    if (!lastIndex) return;

    for (let i = 0; i < lastIndex?.toNumber(); i++) {
      const CardProps = await getListing(i, connector);
      const isBuyable = await isBuyableFunction(i, connector);

      if (!CardProps) {
        continue;
      }

      const { price, tokenId } = CardProps;
      const priceInNum = Number(ethers.utils.formatUnits(price, 18));

      let id = getId(tokenId.toNumber() + 1);

      if (isBuyable) {
        items.push({ priceInNum, id });
        setAmountOfNFTs(amountOfNFTs + 1);
      }
    }

    return items;
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
      const isBuyable = await isBuyableFunction(i, connector);

      if (!CardProps) {
        continue;
      }

      const { premium, tokenId } = CardProps;
      const premiumInNum = Number(ethers.utils.formatUnits(premium, 18));

      let id = getId(tokenId.toNumber() + 1);

      if (isBuyable) {
        stakings.push({ premiumInNum, id });
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

  return (
    <CardListWrapper>
      {loading ? (
        <ClipLoader
          color={"#BD10E0"}
          css={override}
          loading={loading}
          size={150}
        />
      ) : (
        <>
          <CardListHeading>
            <CardListResults>{amountOfNFTs} results</CardListResults>
            <CardListFilters>
              <AllItemsMenu
                value={showList}
                onChange={(e) => {
                  setShowList(e.target.value);
                }}
              >
                <AllItemsOption value="NFT to buy">NFT to buy</AllItemsOption>
                <AllItemsOption value="NFT to rent">NFT to rent</AllItemsOption>
              </AllItemsMenu>
              <ToggleMarkupContainer>
                <ButtonView2x2>
                  <MdOutlineGridView />
                </ButtonView2x2>
                <ButtonView3x3>
                  <MdOutlineApps />
                </ButtonView3x3>
              </ToggleMarkupContainer>
            </CardListFilters>
          </CardListHeading>
          {newFilter ? <FilterButtons /> : <></>}
          <CardsWrapper>
            {amountOfNFTs ? (
              showList === "NFT to buy" ? (
                list?.map((item, index) => {
                  return (
                    <CardLink key={index} to={"/product/" + item.id}>
                      <CardItem
                        key={index}
                        image={card01}
                        price={item.priceInNum}
                        id={item.id}
                      />
                    </CardLink>
                  );
                })
              ) : (
                stakingsList?.map((item, index) => {
                  return (
                    <CardLink key={index} to={"/product/" + item.id}>
                      <CardItem
                        key={index}
                        image={card01}
                        price={item.premiumInNum}
                        id={item.id}
                      />
                    </CardLink>
                  );
                })
              )
            ) : (
              <span>There is no NFTs on the marketplace</span>
            )}
          </CardsWrapper>
          ;
        </>
      )}
      <Pagination itemPerPage={itemsPerPage} totalItems={1} />
    </CardListWrapper>
  );
};

export default CardList;
