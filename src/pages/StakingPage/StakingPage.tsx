import { ethers } from 'ethers';
import React, { useState, useContext } from 'react';

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
  StakingButton,
  StakingWarning,
} from './StakingPage.styles';

import { Background } from '../../globalStyles';
import Image from '../../images/card-item.png';
import {
  UndasGeneralNFT__factory,
  Marketplace__factory,
} from '../../typechain';
import { MARKETPLACE_ADDRESS, NFT_ADDRESS } from '../../utils/addressHelpers';
import Context from '../../utils/Context';
import intervalIntoTimeStamp from '../../utils/intervalIntoTimeStamp';

const StakingPage: React.FC = () => {
  const { connector } = useContext(Context);

  const [NFTAddress, setNFTAddress] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [price, setPrice] = useState('');
  const [premium, setPremium] = useState('');
  const [term, setTerm] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const quoteForStaking = async () => {
    if (!connector) return;
    if (+term < 7) {
      setShowWarning(true);
      return;
    }

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

    console.log('Item data' + NFTAddress, tokenId, price, premium, term);
    const tx = await MarketplaceContract.quoteForStaking(
      NFTAddress,
      tokenId,
      ethers.utils.parseEther(price.toString()),
      ethers.utils.parseEther(premium.toString()),
      intervalIntoTimeStamp(term),
      { value: ethers.utils.parseEther('0.1') },
    );

    setShowWarning(false);

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
              <StakingFieldset>
                <StakingLabel htmlFor="term">Term</StakingLabel>
                <br />
                <StakingInput
                  type="number"
                  id="term"
                  name="term"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              </StakingFieldset>
            </StakingForm>
            {showWarning ? (
              <StakingWarning>
                Term cannot be smaller tnan 7 days{' '}
              </StakingWarning>
            ) : (
              <></>
            )}
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
