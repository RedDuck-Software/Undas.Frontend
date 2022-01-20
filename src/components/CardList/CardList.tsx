import React, { useEffect, useState, useContext } from "react";
import Context from "../../utils/Context";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

import { RootState } from "../../store";
import { useSelector } from "react-redux";

import { ethers } from "ethers";

import { getId } from "../../utils/getId";
import { getListing } from "../../utils/getListing";
import { getListingsLastIndex } from "../../utils/getListingsLastIndex";
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

const CardList: React.FC<CardListProps> = ({ newFilter }) => {
  const { connector } = useContext(Context);

  const count = useSelector((state: RootState) => state.NFTsCounter.value);
  const items: ItemsProps[] = [];

  const [list, setList] = useState<ItemsProps[]>();
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

  const getCards = async () => {
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

  async function getCardsData() {
    const response = await getCards();
    setList(response);
  }

  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }
    setLoading(false);

    getCardsData();
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
                  console.log(e.target.value);
                }}
              >
                {/* <TableSelectMenu
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                    >
                      <TableMenuOption>for 7 days</TableMenuOption>
                      <TableMenuOption>for 14 days</TableMenuOption>
                    </TableSelectMenu> */}
                <AllItemsOption value="NFT to buy">NFT to buy</AllItemsOption>
                <AllItemsOption value="NFT to rent">NFT to rent</AllItemsOption>
              </AllItemsMenu>
              {/* <SortByDropdown>
                <SortByButton onClick={toggleSortByMenuShow}>
                  Sort by{" "}
                  {sortByMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </SortByButton>
                <SortByMenu className={sortByMenuShow}>
                  <MenuItem>Recently Created</MenuItem>
                  <MenuItem>Recently Sold</MenuItem>
                  <MenuItem>Recently Received</MenuItem>
                  <MenuItem>Rent NFT</MenuItem>
                  <MenuItem>Ending Soon</MenuItem>
                  <MenuItem>Price: Low to High</MenuItem>
                  <MenuItem>Price: High to Low</MenuItem>
                  <MenuItem>Highest Last Sale</MenuItem>
                  <MenuItem>Most Viewed</MenuItem>
                  <MenuItem>Most Favorited</MenuItem>
                  <MenuItem>Oldest</MenuItem>
                </SortByMenu>
              </SortByDropdown> */}
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
                <div>HERE COME STAKINGS</div>
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
