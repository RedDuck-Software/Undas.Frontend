import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React from "react";
import { useState, useContext, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

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
} from "./Rent.styles";

import { Button } from "../../../../globalStyles";
import {
  UndasGeneralNFT__factory,
  Marketplace__factory,
} from "../../../../typechain";
import {
  MARKETPLACE_ADDRESS,
  NFT_ADDRESS,
} from "../../../../utils/addressHelpers";
import { calculateRequiredPayments } from "../../../../utils/calculateRequiredPayments";
import { calculateTerm } from "../../../../utils/calculateTerm";
import { canRentNFTFunction } from "../../../../utils/canRentNFT";
import Context from "../../../../utils/Context";
import { getStaking } from "../../../../utils/getStaking";

const Rent: React.FC<{ id: number }> = ({ id }) => {
  const { connector } = useContext(Context);

  const web3React = useWeb3React();
  // const account = web3React.account;

  const [rentOpen, setRentOpen] = useState(true);
  const [isRented, setIsRented] = useState(false);
  const [canRent] = useState(true);
  const [premium, setPremium] = useState(0);
  const [collateral, setCollateral] = useState(0);
  const [term, setTerm] = useState<number | undefined>(0);
  const [showRentInfo, setShowRentInfo] = useState(false);
  const [paymentsAmount, setPaymentsAmount] = useState(0);
  const [paymentsDue, setPaymentsDue] = useState(0x00);
  const [nextPaymentDate, setNextPaymentDate] = useState(0);
  const [requiredPayments, setRequiredPayments] = useState(0);

  const startRenting = async (itemId: number) => {
    if (!connector || !rentOpen) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );
    const signer = provider.getSigner(0);
    const SIGNER_ADDRESS = await signer.getAddress();

    const NFTContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);
    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const isApprovedForAll = await NFTContract.isApprovedForAll(
      SIGNER_ADDRESS,
      MARKETPLACE_ADDRESS,
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
    setShowRentInfo(true);
  };

  const payPremium = async (itemId: number) => {
    if (!connector || !rentOpen) return;
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );
    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
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
      await connector.getProvider(),
    );
    const signer = provider.getSigner(0);
    const SIGNER_ADDRESS = await signer.getAddress();

    const NFTContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const isApprovedForAll = await NFTContract.isApprovedForAll(
      SIGNER_ADDRESS,
      MARKETPLACE_ADDRESS,
    );

    if (!isApprovedForAll) {
      await (
        await NFTContract.setApprovalForAll(MARKETPLACE_ADDRESS, true)
      ).wait();
    }

    const tx = await MarketplaceContract.stopRental(itemId);
    await tx.wait();

    setIsRented(false);
    setShowRentInfo(false);
  };

  const getDateOfNextPayment = async (itemId: number) => {
    if (!connector) return;
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );
    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const tx = await MarketplaceContract.dateOfNextPayment(itemId);
    return tx;
  };

  const getAsyncValues = async (itemId: number) => {
    if (!connector) return;

    if (!isRented) {
      return;
    }
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );
    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const productValue = await getStaking(id, connector);
    if (!productValue) {
      return;
    }
    const { deadline, startRentalUTC } = productValue.tx;
    const deadlineInNum = Number(ethers.utils.formatUnits(deadline, 0));
    const startRentalUTCInNum = Number(
      ethers.utils.formatUnits(startRentalUTC, 0),
    );

    const requiredPayments = calculateRequiredPayments(
      deadlineInNum,
      startRentalUTCInNum,
    );
    const paymentsDue = await MarketplaceContract.paymentsDue(itemId);

    return { paymentsDue, requiredPayments };
  };

  async function getProductValue() {
    if (!connector) return;

    const ProductValue = await getStaking(id, connector);
    const canRentNFT = await canRentNFTFunction(id, connector);

    if (!canRentNFT) {
      setIsRented(true);
      setShowRentInfo(true);
    }

    if (!ProductValue) {
      return;
    }

    const { collateral, premium, deadline, paymentsAmount } = ProductValue.tx;

    const deadlineInNum = Number(ethers.utils.formatUnits(deadline, 0));
    const deadlineInSecs = deadlineInNum;
    const termInNum = calculateTerm(deadlineInSecs);

    const premiumInNum = Number(ethers.utils.formatUnits(premium, 18));
    const collateralInNum = Number(ethers.utils.formatUnits(collateral, 18));
    const paymentsAmountInNum = Number(
      ethers.utils.formatUnits(paymentsAmount, 0),
    );

    setCollateral(collateralInNum);
    setPremium(premiumInNum);
    setTerm(termInNum);
    setPaymentsAmount(paymentsAmountInNum);
  }

  const callAsyncValues = async () => {
    const asyncValues = await getAsyncValues(id);
    if (!asyncValues) {
      return;
    }
    const { paymentsDue, requiredPayments } = asyncValues;

    const paymentsDueInNum = Number(paymentsDue);

    const dateOfNextPayment = await getDateOfNextPayment(id);
    if (!dateOfNextPayment) {
      return;
    }
    const dateOfNextPaymentInNum = Number(
      ethers.utils.formatUnits(dateOfNextPayment, 0),
    );
    const now = Date.now();
    const nextPaymentDateInDays = Math.round(
      (dateOfNextPaymentInNum - now / 1000) / 86400,
    );

    setNextPaymentDate(Math.round(nextPaymentDateInDays));
    setPaymentsDue(paymentsDueInNum);
    setRequiredPayments(requiredPayments);
  };

  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }

    if (isRented) {
      callAsyncValues();
    }
  }, [connector, isRented]);

  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }

    getProductValue();
  }, [connector, web3React]);

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
                  {showRentInfo ? (
                    <>
                      <TableRow>
                        <TableColumn>Number of payments made</TableColumn>
                        <TableColumn>{paymentsAmount}</TableColumn>
                      </TableRow>
                      <TableRow>
                        <TableColumn>Number of required payments</TableColumn>
                        <TableColumn>{requiredPayments}</TableColumn>
                      </TableRow>
                      <TableRow>
                        <TableColumn>Next payment must be made</TableColumn>
                        <TableColumn>in {nextPaymentDate} days</TableColumn>
                      </TableRow>
                      <TableRow>
                        <TableColumn>Payments to be made already</TableColumn>
                        <TableColumn>
                          {paymentsDue > 0 ? paymentsDue : "All paid!"}
                        </TableColumn>
                      </TableRow>
                    </>
                  ) : (
                    <></>
                  )}
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
