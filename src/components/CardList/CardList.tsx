import React, { useEffect, useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { useContext } from 'react';
import Context from '../../utils/Context';
import { BigNumber, ethers } from 'ethers';

import { MARKETPLACE_ADDRESS } from '../../utils/addressHelpers';

import { Marketplace__factory } from '../../typechain';

import { CardItem, FilterButtons } from '..';

import { card01, card02, card03 } from './imports';

import { MdOutlineApps, MdOutlineGridView } from 'react-icons/md';
import {
  CardListWrapper,
  CardListHeading,
  CardListResults,
  CardListFilters,
  MenuItem,
  AllItemsDropdown,
  AllItemsButton,
  AllItemsMenu,
  SortByDropdown,
  SortByButton,
  SortByMenu,
  ToggleMarkupContainer,
  ButtonView2x2,
  ButtonView3x3,
  CardsWrapper,
  CardLink,
} from './CardList.styles';

interface CardListProps {
  newFilter?: boolean;
}

const CardList: React.FC<CardListProps> = ({ newFilter }) => {
  const { connector } = useContext(Context);

  const [itemsMenuShow, setItemsMenuShow] = useState('');
  const [sortByMenuShow, setSortByMenuShow] = useState('');

  const toggleItemsMenuShow = () => {
    if (itemsMenuShow) {
      setItemsMenuShow('');
    } else {
      setItemsMenuShow('active');
    }
  };

  const toggleSortByMenuShow = () => {
    if (sortByMenuShow) {
      setSortByMenuShow('');
    } else {
      setSortByMenuShow('active');
    }
  };

  const getId = (number: number) => {
    let id = '';
    number++;

    if (number < 100) {
      id = `00${number}`;
    } else if (number < 200) {
      id = `0${number}`;
    } else {
      id = `${number}`;
    }

    return id;
  };

  const getListing = async (itemId: number) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const tx = await MarketplaceContract.getListing(itemId);

    return tx;
  };

  const getCards = async () => {
    const items: JSX.Element[] = [];

    for (let i = 0; i < countNum; i++) {
      const CardProps = await getListing(i);

      if (!CardProps) {
        continue;
      }

      const { price } = CardProps;
      const priceInNum = ethers.utils.formatUnits(price, 18);

      const id = getId(i);
      console.log(priceInNum, id);
      items.push(
        <CardItem key={i} image={card01} id={id} price={priceInNum} />
      );
      console.log(items);

      // console.log(priceInNum);
      // const priceInWei = ethers.utils.parseUnits(priceInNum, 18);
      // console.log(priceInWei.toString());
    }

    return items;
  };

  const count = JSON.parse(localStorage.getItem('NFTsCounter') || '0');
  let countNum = 0;

  if (!count) {
    countNum = parseInt(count);
  }

  useEffect(() => {
    getCards();
  });

  return (
    <CardListWrapper>
      <CardListHeading>
        <CardListResults>19 364 263 results</CardListResults>
        <CardListFilters>
          <AllItemsDropdown>
            <AllItemsButton onClick={toggleItemsMenuShow}>
              All items {itemsMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </AllItemsButton>
            <AllItemsMenu className={itemsMenuShow}>
              <MenuItem>Single Items</MenuItem>
              <MenuItem>Bunbles</MenuItem>
            </AllItemsMenu>
          </AllItemsDropdown>
          <SortByDropdown>
            <SortByButton onClick={toggleSortByMenuShow}>
              Sort by {sortByMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
          </SortByDropdown>
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
        {/* {items} */}
        {/* <CardLink to="/product">
          <CardItem image={card01} />
        </CardLink>
        <CardLink to="/product">
          <CardItem image={card02} />
        </CardLink>
        <CardLink to="/product">
          <CardItem image={card03} />
        </CardLink>
        <CardLink to="/product">
          <CardItem image={card01} />
        </CardLink>
        <CardLink to="/product">
          <CardItem image={card02} />
        </CardLink>
        <CardLink to="/product">
          <CardItem image={card03} />
        </CardLink>
        <CardLink to="/product">
          <CardItem image={card01} />
        </CardLink>
        <CardLink to="/product">
          <CardItem image={card02} />
        </CardLink>
        <CardLink to="/product">
          <CardItem image={card03} />
        </CardLink> */}
      </CardsWrapper>
    </CardListWrapper>
  );
};

export default CardList;
