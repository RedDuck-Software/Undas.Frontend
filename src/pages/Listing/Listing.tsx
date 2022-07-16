import { ethers } from "ethers";
import React from "react";
import { useState, useContext } from "react";

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
} from "./Listing.styles";

import { Background } from "../../globalStyles";
import Image from "../../images/card-item.png";
import { UndasGeneralNFT__factory } from "../../typechain";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";
import Context from "../../utils/Context";

const Listing: React.FC = () => {
  const { connector } = useContext(Context);

  const [tokenId, setTokenId] = useState("");
  const [NFTAddress, setNFTAddress] = useState("");
  const [price, setPrice] = useState("");
  const [showModalWindow, setShowModalWindow] = useState(false);

  const bid = async () => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);
    const SIGNER_ADDRESS = await signer.getAddress();

    const NFTContract = UndasGeneralNFT__factory.connect(
      "0xB073DeaC0dc753d27cC41a0f443000579d017361",
      signer,
    );

    //const MarketplaceContract = Marketplace__factory.connect(
    //  MARKETPLACE_ADDRESS,
    //  signer,
    //);

    const isApprovedForAll = await NFTContract.isApprovedForAll(
      SIGNER_ADDRESS,
      MARKETPLACE_ADDRESS,
    );
      
    if (!isApprovedForAll) {
      await (
        await NFTContract.setApprovalForAll(MARKETPLACE_ADDRESS, true)
      ).wait();
    }

    // const tx = await MarketplaceContract.bidExternal(
    //   // NFTAddress,
    //   // tokenId,
    //   // ethers.utils.parseEther(price),
    //   // { value: ethers.utils.parseEther("0.1") },
    // );
    setShowModalWindow(false);
    // await tx.wait().then(() => {
    //   setShowModalWindow(false);
    // });
  };

  return (
    <Background>
      {showModalWindow ? "ModalWindow" : <></>}
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
