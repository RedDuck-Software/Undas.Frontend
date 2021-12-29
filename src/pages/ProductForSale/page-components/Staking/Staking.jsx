import React, { useState } from 'react'

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

import { Button } from '../../../../globalStyles'

import {
  StakingContainer,
  StakingTop,
  StakingContent,
  StakingTable,
  StakingTableHead,
  TableRow,
  TableHeadTitle,
  TableInput,
  StakingTableBody,
  TableColumn,
  TableSelectMenu,
  TableMenuOption,
  ButtonRow,
  CongratulationContainer,
} from './Staking,styles'

const Staking = () => {
  const [stakingOpen, setStakingOpen] = useState(false)
  const [isPuttedForStaking, setIsPuttedForStaking] = useState(false)

  const toogleStakingOpen = () => {
    setStakingOpen(!stakingOpen)
  }

  const putForStaking = () => {
    setIsPuttedForStaking(!isPuttedForStaking)
  }

  return (
    <StakingContainer>
      {stakingOpen ? (
        <>
          <StakingTop onClick={toogleStakingOpen}>
            Staking <IoIosArrowUp />
          </StakingTop>
          <StakingContent>
            <StakingTable>
              <StakingTableHead>
                <TableRow>
                  <TableHeadTitle>Price (ETH)</TableHeadTitle>
                  <TableHeadTitle>
                    <TableInput placeholder="280" id="price" />
                  </TableHeadTitle>
                </TableRow>
              </StakingTableHead>
              <StakingTableBody>
                <TableRow>
                  <TableColumn>Premium (ETH)</TableColumn>
                  <TableColumn>
                    <TableInput placeholder="15" id="premium" />
                  </TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Term</TableColumn>
                  <TableColumn>
                    <TableSelectMenu>
                      <TableMenuOption>for 7 days</TableMenuOption>
                      <TableMenuOption>for 14 days</TableMenuOption>
                    </TableSelectMenu>
                  </TableColumn>
                </TableRow>
              </StakingTableBody>
            </StakingTable>
            {isPuttedForStaking ? (
              <CongratulationContainer>
                <span>Congratulations! You have put your NFT for staking.</span>
                <Button violet onClick={putForStaking}>
                  Cancel
                </Button>
              </CongratulationContainer>
            ) : (
              <>
                <ButtonRow>
                  <Button violet big onClick={putForStaking}>
                    Put for staking
                  </Button>
                </ButtonRow>
              </>
            )}
          </StakingContent>
        </>
      ) : (
        <>
          <StakingTop closed onClick={toogleStakingOpen}>
            Staking <IoIosArrowDown />
          </StakingTop>
        </>
      )}
    </StakingContainer>
  )
}

export default Staking
