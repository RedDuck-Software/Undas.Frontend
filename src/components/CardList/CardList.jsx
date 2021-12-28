import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

import { CardItem, FilterButtons } from '../../components'

import { card01, card02, card03 } from './imports'

import { MdOutlineApps, MdOutlineGridView } from 'react-icons/md'
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
} from './CardList.styles'

const CardList = (props) => {
  const [itemsMenuShow, setItemsMenuShow] = useState('')
  const [sortByMenuShow, setSortByMenuShow] = useState('')

  const toggleItemsMenuShow = () => {
    if (itemsMenuShow) {
      setItemsMenuShow('')
    } else {
      setItemsMenuShow('active')
    }
  }

  const toggleSortByMenuShow = () => {
    if (sortByMenuShow) {
      setSortByMenuShow('')
    } else {
      setSortByMenuShow('active')
    }
  }

  console.log(props)

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

      {props.newFilter ? <FilterButtons /> : <></>}

      <CardsWrapper>
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
      </CardsWrapper>
    </CardListWrapper>
  )
}

export default CardList
