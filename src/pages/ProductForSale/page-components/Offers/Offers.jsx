import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

// import { Background } from '../../../../globalStyles'

import {
  OffersContainer,
  OffersTop,
  OffersContent,
  OffersTable,
  OffersTableHead,
  TableRow,
  TableHeadTitle,
  OffersTableBody,
  TableColumn,
  PriceNumber,
} from './Offers.styles'

const Offers = () => {
  const [Offers, setOffers] = useState(true)

  const toogleOffers = () => {
    setOffers(!Offers)
  }

  return (
    // <Background>
    <OffersContainer>
      {Offers ? (
        <>
          <OffersTop onClick={toogleOffers}>
            Offers <IoIosArrowUp />
          </OffersTop>
          <OffersContent>
            <OffersTable>
              <OffersTableHead>
                <TableRow>
                  <TableHeadTitle>Price</TableHeadTitle>
                  <TableHeadTitle>Floor difference</TableHeadTitle>
                  <TableHeadTitle>Expiration</TableHeadTitle>
                  <TableHeadTitle>From</TableHeadTitle>
                </TableRow>
              </OffersTableHead>
              <OffersTableBody>
                <TableRow>
                  <TableColumn>
                    <PriceNumber>1,2</PriceNumber> WETH
                  </TableColumn>
                  <TableColumn>52.0% below</TableColumn>
                  <TableColumn>In 20 hours</TableColumn>
                  <TableColumn>65BA4F</TableColumn>
                </TableRow>
              </OffersTableBody>
            </OffersTable>
          </OffersContent>
        </>
      ) : (
        <>
          <OffersTop closed onClick={toogleOffers}>
            Offers <IoIosArrowDown />
          </OffersTop>
        </>
      )}
    </OffersContainer>
    // </Background>
  )
}

export default Offers
