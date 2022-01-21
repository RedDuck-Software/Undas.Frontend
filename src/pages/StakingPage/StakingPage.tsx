import { useState, useContext } from 'react';
import Context from '../../utils/Context';
import { ethers } from 'ethers';

import { MARKETPLACE_ADDRESS, NFT_ADDRESS } from '../../utils/addressHelpers';
import { TestNFT__factory, Marketplace__factory } from '../../typechain';

import { ModalWindow } from '../../components';
import { Background } from '../../globalStyles';

import {
  StakingSec,
  StakingContainer,
  LeftSide,
  RightSide,
  ItemInformation,
  CardImageContainer,
  CardImage,
  StakingForm,
  StakingFieldset,
  StakingLabel,
  StakingInput,
  StakingSelectLabel,
  StakingSelectMenu,
  SelectOption,
  StakingButton,
} from './StakingPage.styles';
import Image from '../../images/card-item.png';
import intervalIntoTimeStamp from '../../utils/intervalIntoTimeStamp';

const StakingPage = () => {
  const { connector } = useContext(Context);

  const [NFTAddress, setNFTAddress] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [price, setPrice] = useState('');
  const [premium, setPremium] = useState('');
  const [term, setTerm] = useState('for 7 days');

  const quoteForStaking = async () => {
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

    const tx = await MarketplaceContract.quoteForStaking(
      NFTAddress,
      tokenId,
      ethers.utils.parseEther(price.toString()),
      premium.toString(),
      intervalIntoTimeStamp(term),
      { value: ethers.utils.parseEther('0.1') }
    );
    await tx.wait();
  };

  return (
    <Background>
      <StakingSec>
        <StakingContainer>
          <LeftSide>
            <CardImageContainer>
              <ItemInformation mobile></ItemInformation>
              <CardImage src={Image} />
            </CardImageContainer>
          </LeftSide>
          <RightSide>
            <StakingForm>
              <StakingFieldset>
                <StakingLabel htmlFor="nft-address">NFT address</StakingLabel>
                <br />
                <StakingInput
                  type="text"
                  id="nft-address"
                  name="nft-address"
                  value={NFTAddress}
                  onChange={(e) => setNFTAddress(e.target.value)}
                />
                <br />
              </StakingFieldset>
              <StakingFieldset>
                <StakingLabel htmlFor="token-id">Token id</StakingLabel>
                <br />
                <StakingInput
                  type="number"
                  id="token-id"
                  name="token-id"
                  value={tokenId}
                  onChange={(e) => setTokenId(e.target.value)}
                />
              </StakingFieldset>
              <StakingFieldset>
                <StakingLabel htmlFor="price">Price (ETH)</StakingLabel>
                <br />
                <StakingInput
                  type="number"
                  id="price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </StakingFieldset>
              <StakingFieldset>
                <StakingLabel htmlFor="premium">Premium (ETH)</StakingLabel>
                <br />
                <StakingInput
                  type="number"
                  id="premium"
                  name="premium"
                  value={premium}
                  onChange={(e) => setPremium(e.target.value)}
                />
              </StakingFieldset>
            </StakingForm>
            <StakingSelectLabel htmlFor="term">Term</StakingSelectLabel>
            <StakingSelectMenu
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            >
              <SelectOption>for 7 days</SelectOption>
              <SelectOption>for 14 days</SelectOption>
            </StakingSelectMenu>
            <StakingButton onClick={quoteForStaking} violet big>
              Put NFT on staking
            </StakingButton>
          </RightSide>
        </StakingContainer>
      </StakingSec>
    </Background>
  );
};

export default StakingPage;
