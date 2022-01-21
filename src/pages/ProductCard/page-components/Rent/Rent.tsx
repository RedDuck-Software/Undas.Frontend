import { ethers } from 'ethers';
import React, { useState, useContext, useEffect } from 'react';
import Context from '../../../../utils/Context';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { Button } from '../../../../globalStyles';
import {
  MARKETPLACE_ADDRESS,
  NFT_ADDRESS,
} from '../../../../utils/addressHelpers';

import { TestNFT__factory, Marketplace__factory } from '../../../../typechain';

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
} from './Rent.styles';

const Rent = ({ id }: { id: number }) => {
  const [rentOpen, setRentOpen] = useState(true);
  const [isRented, setIsRented] = useState(false);
  const [canRent] = useState(true);
  const { connector } = useContext(Context);
  const [premium, setPremium] = useState(0);
  const [collateral, setCollateral] = useState(0);

  const getStakings = async (itemId: number) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const tx = await MarketplaceContract.getStaking(itemId);

    return tx;
  };

  const startRenting = async (itemId: number) => {
    if (!connector || !rentOpen) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);
    const SIGNER_ADDRESS = await signer.getAddress();

    const NFTContract = TestNFT__factory.connect(NFT_ADDRESS, signer);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const isApprovedForAll = await NFTContract.isApprovedForAll(
      SIGNER_ADDRESS,
      MARKETPLACE_ADDRESS
    );

    if (!isApprovedForAll) {
      await (
        await NFTContract.setApprovalForAll(MARKETPLACE_ADDRESS, true)
      ).wait();
    }

    const tx = await MarketplaceContract.rentNFT(itemId, {
      value: ethers.utils.parseEther((premium + collateral).toString()),
    });
    await tx.wait();
    setIsRented(true);
  };

  const payPremium = async (itemId: number) => {
    if (!connector || !rentOpen) return;
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const tx = await MarketplaceContract.payPremium(itemId, {
      value: ethers.utils.parseEther(premium.toString()),
    });
    await tx.wait();
  };

  const stopRental = async (itemId: number) => {
    if (!connector) return;
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);
    const SIGNER_ADDRESS = await signer.getAddress();

    const NFTContract = TestNFT__factory.connect(NFT_ADDRESS, signer);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const isApprovedForAll = await NFTContract.isApprovedForAll(
      SIGNER_ADDRESS,
      MARKETPLACE_ADDRESS
    );

    if (!isApprovedForAll) {
      await (
        await NFTContract.setApprovalForAll(MARKETPLACE_ADDRESS, true)
      ).wait();
    }

    const tx = await MarketplaceContract.stopStaking(itemId);
    await tx.wait();
  };

  async function getProductValue() {
    const ProductValue = await getStakings(id);

    if (!ProductValue) {
      return;
    }

    //TODO add term rendering
    const { collateral, premium } = ProductValue;
    const premiumInNum = +premium;
    const collateralInNum = Number(ethers.utils.formatUnits(collateral, 18));

    setCollateral(collateralInNum);
    setPremium(premiumInNum);
  }

  useEffect(() => {
    if (!connector) {
      return console.log('loading');
    }

    getProductValue();
  }, [connector]);

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
                    <TableHeadTitle>{collateral}</TableHeadTitle>
                  </TableRow>
                </RentTableHead>
                <RentTableBody>
                  <TableRow>
                    <TableColumn>Pledge value</TableColumn>
                    <TableColumn>{premium}</TableColumn>
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
                    <Button violet onClick={() => stopRental(id)}>
                      Stop renting
                    </Button>
                    <Button violet onClick={() => payPremium(id)}>
                      Pay premium
                    </Button>
                  </ButtonRow>
                </>
              ) : (
                <ButtonRow>
                  <Button violet big onClick={() => startRenting(id)}>
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
              Sorry, but you cannot currently rent this NFT because the owner
              has not yet given permission to do so. Try to rent this NFT later
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

export default Rent;
