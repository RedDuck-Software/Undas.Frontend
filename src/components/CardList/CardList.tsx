import React, { useEffect, useState, useContext } from 'react';
import Context from '../../utils/Context';
import { ethers } from 'ethers';

import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';

import { getId } from '../../utils/getId';
import { getListing } from '../../utils/getListing';
import { getListingsLastIndex } from '../../utils/getListingsLastIndex';
import { isBuyableFunction } from '../../utils/isBuyable';
import { canRentNFTFunction } from '../../utils/canRentNFT';
import { getStaking } from '../../utils/getStaking';
import { getStakingsLastIndex } from '../../utils/getStakingsLastIndex';

import { card01, card02, card03 } from './imports';
import { CardItem, FilterButtons } from '../';
import Pagination from '../Pagination/Pagination';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { MdOutlineApps, MdOutlineGridView } from 'react-icons/md';
import {
  CardListWrapper,
  CardListHeading,
  CardListResults,
  CardListFilters,
  AllItemsMenu,
  AllItemsOption,
  SortByMenu,
  SortByOption,
  ToggleMarkupContainer,
  ButtonView2x2,
  ButtonView3x3,
  CardsWrapper,
  CardLink,
} from './CardList.styles';

interface CardListProps {
  newFilter?: boolean;
}

export interface ItemsProps {
  priceInNum: number;
  id: number;
}
export interface StakingsProps {
  premiumInNum: number;
  id: number;
}

const CardList: React.FC<CardListProps> = ({ newFilter }) => {
  const { connector } = useContext(Context);
  const items: ItemsProps[] = [];
  const stakings: StakingsProps[] = [];

  const [list, setList] = useState<ItemsProps[]>();
  const [stakingsList, setStakingsList] = useState<StakingsProps[]>();
  const [loading, setLoading] = useState(true);
  const [amountOfNFTs, setAmountOfNFTs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [showList, setShowList] = useState('NFT to buy');

  const override = css`
    display: block;
    margin: auto;
  `;

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
      const id = tokenId.toNumber();

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
      const canRentNFT = await canRentNFTFunction(i, connector);

      if (!CardProps) {
        continue;
      }

      const { premium, tokenId } = CardProps;
      const premiumInNum = Number(ethers.utils.formatUnits(premium, 18));
      const id = tokenId.toNumber();

      if (canRentNFT) {
        stakings.push({ premiumInNum, id });
        setAmountOfNFTs(amountOfNFTs + 1);
      }
    }

    console.log(stakings);
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
      return console.log('loading');
    }

    setLoading(false);

    getListingsData();
    getStakingsData();
  }, [connector]);

  return (
    <CardListWrapper>
      {loading ? (
        <ClipLoader
          color={'#BD10E0'}
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
              showList === 'NFT to buy' ? (
                list?.map((item) => {
                  return (
                    <CardLink key={item.id} to={'/product/' + item.id}>
                      <CardItem
                        key={item.id}
                        image={card01}
                        price={item.priceInNum}
                        id={item.id}
                      />
                    </CardLink>
                  );
                })
              ) : (
                stakingsList?.map((item) => {
                  return (
                    <CardLink key={item.id} to={'/product/' + item.id}>
                      <CardItem
                        key={item.id}
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
        </>
      )}
      <Pagination itemPerPage={itemsPerPage} totalItems={1} />
    </CardListWrapper>
  );
};

export default CardList;
