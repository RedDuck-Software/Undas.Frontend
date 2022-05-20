import { ethers } from "ethers";
import React, { useState, useContext, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

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
  ButtonRow,
  CongratulationContainer,
} from "./Staking,styles";

import { Button } from "../../../../globalStyles";
import {
  UndasGeneralNFT__factory,
  Marketplace__factory,
} from "../../../../typechain";
import {
  MARKETPLACE_ADDRESS,
  NFT_ADDRESS,
} from "../../../../utils/addressHelpers";
import Context from "../../../../utils/Context";
import { getNFTStakingIds } from "../../../../utils/getNFTStakingIds";
import intervalIntoTimeStamp from "../../../../utils/intervalIntoTimeStamp";

const Staking: React.FC<{ itemId: string }> = ({ itemId }) => {
  const [stakingOpen, setStakingOpen] = useState(false);
  const [isPuttedForStaking, setIsPuttedForStaking] = useState<boolean>();
  const [stakingId, setStakingId] = useState<number>();
  const { connector } = useContext(Context);
  const [price, setPrice] = useState("280");
  const [deadline, setDeadline] = useState("7");
  const [premium, setPremium] = useState("15");

  const quoteForStaking = async () => {
    if (!connector || !stakingOpen) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);
    const SIGNER_ADDRESS = await signer.getAddress();

    const NFTContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);

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

    const tx = await MarketplaceContract.quoteForStaking(
      NFT_ADDRESS,
      itemId,
      ethers.utils.parseEther(price.toString()),
      ethers.utils.parseEther(premium.toString()),
      intervalIntoTimeStamp(deadline),
      { value: ethers.utils.parseEther("0.1") }
    );
    await tx.wait();
  };

  const stopStaking = async () => {
    if (!connector || !stakingOpen) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );
    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const tx = await MarketplaceContract.stopStaking(stakingId!);

    await tx.wait().then((error) => {
      setIsPuttedForStaking(false);
      console.log(error);
    });
  };

  const getIsPuttedForStaking = async () => {
    if (!connector) return;
    const staking = await getNFTStakingIds(NFT_ADDRESS, +itemId, connector);
    console.log(staking!.valueExists);
    if (staking!.valueExists) {
      setStakingId(+staking!.value);
      setIsPuttedForStaking(true);
    } else setIsPuttedForStaking(false);
  };

  useEffect(() => {
    if (!connector) return;

    getIsPuttedForStaking();
  });

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
                  <TableHeadTitle>Collateral (ETH)</TableHeadTitle>
                  <TableHeadTitle>
                    <TableInput
                      type="number"
                      placeholder={price.toString()}
                      id="price"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </TableHeadTitle>
                </TableRow>
              </StakingTableHead>
              <StakingTableBody>
                <TableRow>
                  <TableColumn>Premium (ETH)</TableColumn>
                  <TableColumn>
                    <TableInput
                      type="number"
                      placeholder="15"
                      id="premium"
                      onChange={(e) => setPremium(e.target.value)}
                    />
                  </TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Term</TableColumn>
                  <TableColumn>
                    <TableInput
                      type="number"
                      placeholder="7"
                      id="term"
                      onChange={(e) => setDeadline(e.target.value)}
                    />
                  </TableColumn>
                </TableRow>
              </StakingTableBody>
            </StakingTable>
            {isPuttedForStaking ? (
              <CongratulationContainer>
                <span>Congratulations! You have put your NFT for staking.</span>
                <Button violet onClick={stopStaking}>
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
