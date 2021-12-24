import React, { useState } from 'react'

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

import { Button } from '../../../../globalStyles'

import {
  RentContainer,
  RentTop,
  RentContent,
  RentTable,
  RentTableHead,
  TableRow,
  TableHeadTitle,
  RentTableBody,
  TableColumn,
  ButtonRow,
} from './Rent.styles'

const Rent = () => {
  const [rentOpen, setRentOpen] = useState(true)
  const [isRented, setIsRented] = useState(false)
  const [canRent] = useState(true)

  const startToRentin = () => {
    setIsRented(!isRented)
  }

  const toogleRentOpen = () => {
    setRentOpen(!rentOpen)
  }

  return (
    <RentContainer>
      {rentOpen ? (
        canRent ? (
          <>
            <RentTop onClick={toogleRentOpen}>
              Rent <IoIosArrowUp />
            </RentTop>
            <RentContent>
              <RentTable>
                <RentTableHead>
                  <TableRow>
                    <TableHeadTitle>Price</TableHeadTitle>
                    <TableHeadTitle>280</TableHeadTitle>
                  </TableRow>
                </RentTableHead>
                <RentTableBody>
                  <TableRow>
                    <TableColumn>Pledge value</TableColumn>
                    <TableColumn>280</TableColumn>
                  </TableRow>
                  <TableRow>
                    <TableColumn>Term</TableColumn>
                    <TableColumn>For 7 days</TableColumn>
                  </TableRow>
                </RentTableBody>
              </RentTable>
              {isRented ? (
                <>
                  <ButtonRow>
                    <Button violet onClick={startToRentin}>
                      Stop renting
                    </Button>
                    <Button violet>Buy</Button>
                  </ButtonRow>
                </>
              ) : (
                <ButtonRow>
                  <Button violet big onClick={startToRentin}>
                    Rent NFT
                  </Button>
                </ButtonRow>
              )}
            </RentContent>
          </>
        ) : (
          <>
            <RentTop grey onClick={toogleRentOpen}>
              Rent <IoIosArrowUp />
            </RentTop>
            <RentContent grey>
              Sorry, but you cannot currently rent this NTF because the owner
              has not yet given permission to do so. Try to rent this to NTF
              later
            </RentContent>
          </>
        )
      ) : canRent ? (
        <>
          <RentTop closed onClick={toogleRentOpen}>
            Rent <IoIosArrowDown />
          </RentTop>
        </>
      ) : (
        <RentTop grey closed onClick={toogleRentOpen}>
          Rent <IoIosArrowDown />
        </RentTop>
      )}
    </RentContainer>
  )
}

export default Rent
