import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import {
  ListingContainer,
  ListingsTop,
  ListingContent,
  ListingTable,
  ListingTableHead,
  TableRow,
  TableHeadTitle,
  ListingTableBody,
  TableColumn,
  PriceNumber,
  BuyButton,
} from './Listing.styled';

const Listing = () => {
  const [Listing, setListing] = useState(false);

  const toogleListing = () => {
    setListing(!Listing);
  };

  return (
    <ListingContainer>
      {Listing ? (
        <>
          <ListingsTop onClick={toogleListing}>
            Listings
            <IoIosArrowUp />
          </ListingsTop>
          <ListingContent>
            <ListingTable>
              <ListingTableHead>
                <TableRow>
                  <TableHeadTitle>Price</TableHeadTitle>
                  <TableHeadTitle>Expiration</TableHeadTitle>
                  <TableHeadTitle>From</TableHeadTitle>
                </TableRow>
              </ListingTableHead>
              <ListingTableBody>
                <TableRow>
                  <TableColumn>
                    <PriceNumber>2,5</PriceNumber> ETH
                  </TableColumn>
                  <TableColumn>In 4 months</TableColumn>
                  <TableColumn>Hype-eth</TableColumn>
                  <TableColumn>
                    <BuyButton>Buy</BuyButton>
                  </TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>
                    <PriceNumber>7</PriceNumber> ETH
                  </TableColumn>
                  <TableColumn>In 4 months</TableColumn>
                  <TableColumn>Hype-eth</TableColumn>
                  <TableColumn>
                    <BuyButton>Buy</BuyButton>
                  </TableColumn>
                </TableRow>
              </ListingTableBody>
            </ListingTable>
          </ListingContent>
        </>
      ) : (
        <>
          <ListingsTop closed onClick={toogleListing}>
            Listings
            <IoIosArrowDown />
          </ListingsTop>
        </>
      )}
    </ListingContainer>
  );
};

export default Listing;
