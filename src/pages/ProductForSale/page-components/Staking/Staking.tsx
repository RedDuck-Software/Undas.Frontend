import React, { useState, useContext, useEffect } from 'react';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { Button } from '../../../../globalStyles';

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
} from './Staking,styles';

import { ethers } from 'ethers';
import Context from '../../../../utils/Context';

import {
  MARKETPLACE_ADDRESS,
  NFT_ADDRESS,
} from '../../../../utils/addressHelpers';
import Marketplace from '../../../../abi/Marketplace.json';
import NFT from '../../../../abi/TestNFT.json';
import { TestNFT__factory, Marketplace__factory } from '../../../../typechain';
import intervalIntoTimeStamp from '../../../../utils/intervalIntoTimeStamp';

const Staking = () => {
  const [stakingOpen, setStakingOpen] = useState(false);
  const [isPuttedForStaking, setIsPuttedForStaking] = useState(false);

  const { connector } = useContext(Context);
  const [price, setPrice] = useState(280);
  const [deadline, setDeadline] = useState('for 7 days');
  const [premium, setPremium] = useState(0);

  const quoteForStaking = async () => {
    if (!connector || !stakingOpen) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);

    const NFTContract = TestNFT__factory.connect(NFT_ADDRESS, signer);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const isApprovedForAll = await NFTContract.isApprovedForAll(
      '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
    );

    if (!isApprovedForAll) {
      await (
        await NFTContract.setApprovalForAll(MARKETPLACE_ADDRESS, true)
      ).wait();
    }

    const tx = await MarketplaceContract.quoteForStaking(
      NFT_ADDRESS,
      0,
      ethers.utils.parseEther(price.toString()),
      15,
      intervalIntoTimeStamp(deadline)
    );
    await tx.wait();
    setIsPuttedForStaking(!isPuttedForStaking);
  };

  const toogleStakingOpen = () => {
    setStakingOpen(!stakingOpen);
  };

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
                    <TableInput
                      type="number"
                      placeholder={price.toString()}
                      id="price"
                      onChange={(e) => setPrice(+e.target.value)}
                    />
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
                    <TableSelectMenu
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                    >
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
                <Button violet onClick={quoteForStaking}>
                  Cancel
                </Button>
              </CongratulationContainer>
            ) : (
              <>
                <ButtonRow>
                  <Button violet big onClick={quoteForStaking}>
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
  );
};

export default Staking;
