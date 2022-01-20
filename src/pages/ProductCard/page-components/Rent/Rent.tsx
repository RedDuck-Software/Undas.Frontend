import { ethers } from "ethers";
import React, { useState, useContext } from "react";
import Context from "../../../../utils/Context";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { Button } from "../../../../globalStyles";
import {
  MARKETPLACE_ADDRESS,
  NFT_ADDRESS,
} from "../../../../utils/addressHelpers";
import Marketplace from "../../../../abi/Marketplace.json";
import NFT from "../../../../abi/TestNFT.json";
import { TestNFT__factory, Marketplace__factory } from "../../../../typechain";

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
const Rent = () => {
  const [rentOpen, setRentOpen] = useState(true);
  const [isRented, setIsRented] = useState(false);
  const [canRent] = useState(true);
  const { connector } = useContext(Context);

  const startRenting = async () => {
    if (!connector || !rentOpen) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);

    console.log(connector);
    console.log(signer);

    // const NFTContract = new ethers.Contract(
    //   NFT_ADDRESS,
    //   Marketplace['abi'],
    //   signer
    // );

    const NFTContract = TestNFT__factory.connect(NFT_ADDRESS, signer);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const isApprovedForAll = await NFTContract.isApprovedForAll(
      "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
      "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    );

    if (!isApprovedForAll) {
      await (
        await NFTContract.setApprovalForAll(MARKETPLACE_ADDRESS, true)
      ).wait();
    }

    const tx = await MarketplaceContract.rentNFT(0, {
      value: ethers.utils.parseEther("0.0001"),
    });
    await tx.wait();
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

export default Rent;
