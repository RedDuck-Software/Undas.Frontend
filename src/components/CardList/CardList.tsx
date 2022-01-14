import React, { useEffect, useState, useContext } from 'react';
import Context from '../../utils/Context';

import { RootState } from '../../store';
import { useSelector } from 'react-redux';

import { ethers } from 'ethers';

import { getId } from '../../utils/getId';
import { getListing } from '../../utils/getListing';

import { CardItem, FilterButtons } from '..';

import { card01, card02, card03 } from './imports';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
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

export interface ItemsProps {
  priceInNum: number;
  id: string;
}

const CardList: React.FC<CardListProps> = ({ newFilter }) => {
  const { connector } = useContext(Context);

  const count = useSelector((state: RootState) => state.NFTsCounter.value);

  const items: ItemsProps[] = [];

  const [list, setList] = useState<ItemsProps[]>();
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

  const getCards = async () => {
    for (let i = 0; i < count; i++) {
      if (!connector) {
        return;
      }

      const CardProps = await getListing(i, connector);

      if (!CardProps) {
        continue;
      }

      const { price } = CardProps;
      const priceInNum = Number(ethers.utils.formatUnits(price, 18));

      let id = getId(i + 1);

      items.push({ priceInNum, id });
    }

    return items;
  };

  async function getCardsData() {
    const response = await getCards();
    setList(response);
  }

  useEffect(() => {
    if (!connector) {
      return console.log('loading');
    }

    getCardsData();
  }, [connector]);

  return (
    <CardListWrapper>
      <CardListHeading>
        <CardListResults>{count} results</CardListResults>
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
        {count ? (
          list?.map((item, index) => {
            return (
              <CardLink key={index} to={'/product/' + ++index}>
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
          <span>There is no NFTs on the marketplace</span>
        )}
      </CardsWrapper>
    </CardListWrapper>
  );
};

export default CardList;
