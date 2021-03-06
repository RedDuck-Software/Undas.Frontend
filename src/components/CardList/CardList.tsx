import { css } from "@emotion/react";
import { ethers } from "ethers";
import React, { useEffect, useState, useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { createClient } from "urql";

import {
  CardListWrapper,
  CardListHeading,
  CardListResults,
  CardListFilters,
  AllItemsMenu,
  AllItemsOption,
  CardsWrapper,
  CardLink,
} from "./CardList.styles";
import { card01 } from "./imports";

import { CardItem, FilterButtons } from "../";
import { canRentNFTFunction } from "../../utils/canRentNFT";
import Context from "../../utils/Context";
// import { getListing } from "../../utils/getListing";
// import { getListingsLastIndex } from "../../utils/getListingsLastIndex";
import { getStaking } from "../../utils/getStaking";
import { getStakingsLastIndex } from "../../utils/getStakingsLastIndex";
// import { isBuyableFunction } from "../../utils/isBuyable";
import Pagination from "../Pagination/Pagination";

interface CardListProps {
  newFilter?: boolean;
  priceFilter?: { min: number; max: number };
}

export interface ItemsProps {
  priceInNum: number;
  id: number;
  name?: string;
  URI?: string;
}
export interface StakingsProps {
  premiumInNum: number;
  id: number;
}

const CardList: React.FC<CardListProps> = ({ newFilter, priceFilter }) => {
  const { connector } = useContext(Context);
  const items: ItemsProps[] = [];
  const stakings: StakingsProps[] = [];

  const [list, setList] = useState<ItemsProps[]>();
  const [stakingsList, setStakingsList] = useState<StakingsProps[]>();
  const [filteredList, setFilteredList] = useState<ItemsProps[]>();
  const [loading, setLoading] = useState(true);
  const [amountOfNFTs, setAmountOfNFTs] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [showList, setShowList] = useState("NFT to buy");

  const override = css`
    display: block;
    margin: auto;
  `;

  const getListings = async () => {
    setAmountOfNFTs(0);
    if (!connector) {
      return;
    }

    const tokens = await fetchData();

    tokens.map((nft: any) => {
      if (nft.listingStatus == "ACTIVE") {
        const price = nft.price;
        const id = nft.tokenId;
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
      const premiumInNum = Number(ethers.utils.formatUnits(premium, 18));
      const id = tokenId.toNumber();

      if (canRentNFT) {
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

  useEffect(() => {
    if (priceFilter?.min && priceFilter?.max) {
      setFilteredList(
        list?.filter(
          (item) =>
            item.priceInNum >= priceFilter.min &&
            item.priceInNum <= priceFilter.max,
        ),
      );
    }
  }, [priceFilter?.min, priceFilter?.max, priceFilter, list]);

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
            </CardListFilters>
          </CardListHeading>
          {newFilter ? <FilterButtons /> : <></>}
          <CardsWrapper>
            {amountOfNFTs ? (
              showList === "NFT to buy" ? (
                filteredList?.map((item) => {
                  return (
                    <CardLink key={item.id} to={"/product/" + item.id}>
                      <CardItem
                        key={item.id}
                        image={item.URI}
                        price={item.priceInNum}
                        name={item.name}
                      />
                    </CardLink>
                  );
                })
              ) : (
                stakingsList?.map((item) => {
                  return (
                    <CardLink key={item.id} to={"/product/" + item.id}>
                      <CardItem
                        key={item.id}
                        image={card01}
                        price={item.premiumInNum}
                        name={item.id.toString()}
                      />
                    </CardLink>
                  );
                })
              )
            ) : (
              <span>There is no NFTs on the marketplace</span>
            )}
          </CardsWrapper>
        </>
      )}
      <Pagination itemPerPage={itemsPerPage} totalItems={1} />
    </CardListWrapper>
  );
};

const APIURL =
  "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

const tokensQuery = `
    query   {
      listings(first: 5) {
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
const client = createClient({
  url: APIURL,
});

async function fetchData() {
  const data = await client.query(tokensQuery).toPromise();
  return data.data.listings;
}

export default CardList;
