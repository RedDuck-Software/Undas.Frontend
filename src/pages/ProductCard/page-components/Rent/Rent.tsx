import { ethers } from 'ethers';
import { useState, useContext, useEffect } from 'react';
import Context from '../../../../utils/Context';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { Button } from '../../../../globalStyles';
import {
  MARKETPLACE_ADDRESS,
  NFT_ADDRESS,
} from '../../../../utils/addressHelpers';

import { TestNFT__factory, Marketplace__factory } from '../../../../typechain';

import { calculateTerm } from '../../../../utils/calculateTerm';
import { getStaking } from '../../../../utils/getStaking';
import { canRentNFTFunction } from '../../../../utils/canRentNFT';

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
  const { connector } = useContext(Context);

  const [rentOpen, setRentOpen] = useState(true);
  const [isRented, setIsRented] = useState(false);
  const [canRent] = useState(true);
  const [premium, setPremium] = useState(0);
  const [collateral, setCollateral] = useState(0);
  const [term, setTerm] = useState<number | undefined>(0);
  const [paymentsAmount, setPaymentsAmount] = useState(0);

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

    setPaymentsAmount(paymentsAmount + 1);
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

    setPaymentsAmount(paymentsAmount + 1);
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
    if (!connector) return;

    const ProductValue = await getStaking(id, connector);
    const canRentNFT = await canRentNFTFunction(id, connector);

    if (!canRentNFT) {
      setIsRented(true);
    }

    if (!ProductValue) {
      return;
    }

    const { collateral, premium, deadline, paymentsAmount } = ProductValue;

    const deadlineInNum = Number(ethers.utils.formatUnits(deadline, 0));
    const termInNum = calculateTerm(deadlineInNum);
    const premiumInNum = Number(ethers.utils.formatUnits(premium, 18));
    const collateralInNum = Number(ethers.utils.formatUnits(collateral, 18));
    const paymentsAmountinNum = Number(
      ethers.utils.formatUnits(paymentsAmount, 0)
    );

    setCollateral(collateralInNum);
    setPremium(premiumInNum);
    setTerm(termInNum);
    setPaymentsAmount(paymentsAmountinNum);
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
                    <TableColumn>Premium</TableColumn>
                    <TableColumn>{premium}</TableColumn>
                  </TableRow>
                  <TableRow>
                    <TableColumn>Term</TableColumn>
                    <TableColumn>For {term} days</TableColumn>
                  </TableRow>
                  <TableRow>
                    <TableColumn>Number of payments made</TableColumn>
                    <TableColumn>{paymentsAmount}</TableColumn>
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
