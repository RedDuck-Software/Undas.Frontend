import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import {
  ItemActivityContainer,
  ItemActivityTop,
  ItemActivityContent,
  ItemActivityFilter,
  FilterDropdown,
  FilterPropertiesWrapper,
  ClearAll,
  FilterPropertie,
  ItemActivityTable,
  ItemActivityTableHead,
  TableRow,
  TableHeadTitle,
  ItemActivityTableBody,
  TableColumn,
  PriceNumber,
} from './ItemActivity.styles';

const ItemActivity: React.FC = () => {
  const [ItemActivity, ] = useState(false);

  /* const toogleItemActivity = () => {
    setItemActivity(!ItemActivity);
  }; */

  return (
    <ItemActivityContainer>
      {ItemActivity ? (
        <>
          <ItemActivityTop>
            Item Activity <IoIosArrowUp />
          </ItemActivityTop>
          <ItemActivityContent>
            <ItemActivityFilter>
              <FilterDropdown>
                Filter <IoIosArrowDown />
              </FilterDropdown>
              <FilterPropertiesWrapper>
                <FilterPropertie>
                  Salers <AiOutlineClose />
                </FilterPropertie>
                <FilterPropertie>
                  Transfers <AiOutlineClose />
                </FilterPropertie>
                <ClearAll>Clear All</ClearAll>
              </FilterPropertiesWrapper>
            </ItemActivityFilter>
            <ItemActivityTable>
              <ItemActivityTableHead>
                <TableRow>
                  <TableHeadTitle>Event</TableHeadTitle>
                  <TableHeadTitle>Price</TableHeadTitle>
                  <TableHeadTitle>From</TableHeadTitle>
                  <TableHeadTitle>To</TableHeadTitle>
                  <TableHeadTitle>Date</TableHeadTitle>
                </TableRow>
              </ItemActivityTableHead>
              <ItemActivityTableBody>
                <TableRow>
                  <TableColumn>Sale</TableColumn>
                  <TableColumn>
                    <PriceNumber>2,5 ETH</PriceNumber>
                  </TableColumn>
                  <TableColumn>steen</TableColumn>
                  <TableColumn>Hype-eth</TableColumn>
                  <TableColumn>5 months ago</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Transfer</TableColumn>
                  <TableColumn></TableColumn>
                  <TableColumn>steen</TableColumn>
                  <TableColumn>Hype-eth</TableColumn>
                  <TableColumn>5 months ago</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Minted</TableColumn>
                  <TableColumn></TableColumn>
                  <TableColumn>NullAddress</TableColumn>
                  <TableColumn>steen</TableColumn>
                  <TableColumn>6 months ago</TableColumn>
                </TableRow>
              </ItemActivityTableBody>
            </ItemActivityTable>
          </ItemActivityContent>
        </>
      ) : (
        <>
          <ItemActivityTop closed>
            Item Activity <IoIosArrowDown />
          </ItemActivityTop>
        </>
      )}
    </ItemActivityContainer>
  );
};

export default ItemActivity;
