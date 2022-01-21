import { useState, useContext } from 'react';
import Context from '../../utils/Context';
import { ethers } from 'ethers';

import { MARKETPLACE_ADDRESS, NFT_ADDRESS } from '../../utils/addressHelpers';

import { TestNFT__factory, Marketplace__factory } from '../../typechain';

import { ModalWindow } from '../../components';
import { Background } from '../../globalStyles';

import {
  ListingSec,
  ListingContainer,
  LeftSide,
  RightSide,
  ItemInformation,
  CardImageContainer,
  CardImage,
  ListingForm,
  ListingFieldset,
  ListingLabel,
  ListingInput,
  ListingButton,
} from './Listing.styles';
import Image from '../../images/card-item.png';

const Listing = () => {
  const { connector } = useContext(Context);

  const [tokenId, setTokenId] = useState('');
  const [NFTAddress, setNFTAddress] = useState('');
  const [price, setPrice] = useState('');
  const [showModalWindow, setShowModalWindow] = useState(false);

  const bid = async () => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);
    const SIGNER_ADDRESS = await signer.getAddress();

    console.log(connector);
    console.log(signer);
    console.log(tokenId, NFTAddress, price);

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

    const tx = await MarketplaceContract.bid(
      NFTAddress,
      tokenId,
      ethers.utils.parseEther(price),
      { value: ethers.utils.parseEther('0.1') }
    );

    await tx.wait().then(() => {
      setShowModalWindow(false);
    });
  };

  return (
    <Background>
      {showModalWindow ? <ModalWindow /> : <></>}
      <ListingSec>
        <ListingContainer>
          <LeftSide>
            <CardImageContainer>
              <ItemInformation mobile></ItemInformation>
              <CardImage src={Image} />
            </CardImageContainer>
          </LeftSide>
          <RightSide>
            <ListingForm>
              <ListingFieldset>
                <ListingLabel htmlFor="nft-address">NFT address</ListingLabel>
                <br />
                <ListingInput
                  type="text"
                  id="nft-address"
                  name="nft-address"
                  value={NFTAddress}
                  onChange={(e) => setNFTAddress(e.target.value)}
                />
                <br />
              </ListingFieldset>
              <ListingFieldset>
                <ListingLabel htmlFor="nft-price">NFT price</ListingLabel>
                <br />
                <ListingInput
                  type="number"
                  id="nft-price"
                  name="nft-price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </ListingFieldset>
              <ListingFieldset>
                <ListingLabel htmlFor="token-id">Token id</ListingLabel>
                <br />
                <ListingInput
                  type="number"
                  id="token-id"
                  name="token-id"
                  value={tokenId}
                  onChange={(e) => setTokenId(e.target.value)}
                />
              </ListingFieldset>
            </ListingForm>
            <ListingButton violet big onClick={bid}>
              Put NFT on marketplace
            </ListingButton>
          </RightSide>
        </ListingContainer>
      </ListingSec>
    </Background>
  );
};

export default Listing;
