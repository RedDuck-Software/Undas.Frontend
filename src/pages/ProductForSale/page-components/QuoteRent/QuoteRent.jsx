import { ethers } from 'ethers';
import React, { useState } from 'react';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { useSelector } from 'react-redux';

import { Button } from '../../../../globalStyles';
import { CONTRACT_ADDRESS } from '../../../../utils/addressHelpers';
import Marketplace from '../../../../abi/Marketplace.json';

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
} from './QuoteRent.styles';

const QuoteRent = () => {
  const [rentOpen, setRentOpen] = useState(true);
  const [isRented, setIsRented] = useState(false);
  const [canRent] = useState(true);
  const connector = useSelector((state) => state.wallet?.connector);

  const startRenting = async () => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      Marketplace['abi'],
      signer
    );

    // const tx = await contract.quoteForStaking(
    //   '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    //   1,
    //   ethers.utils.parseEther('10'),
    //   ethers.utils.parseEther('2'),
    //   ethers.utils.parseEther('100') //format of deadlineUTC ???
    // );

    // await tx.wait();

    // setIsRented(!isRented);
  };

  const toogleRentOpen = () => {
    setRentOpen(!rentOpen);
  };

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
                    <Button violet onClick={startRenting}>
                      Stop renting
                    </Button>
                    <Button violet>Buy</Button>
                  </ButtonRow>
                </>
              ) : (
                <ButtonRow>
                  <Button violet big onClick={startRenting}>
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
  );
};

export default QuoteRent;
