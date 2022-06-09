import { ethers } from "ethers";
import React, { useState, useEffect, useContext } from "react";

import {
  ForSaleWrapper,
  ForSaleButton,
  ForSaleDropdown,
  ForSaleMenu,
  DropdownLine,
  DropdownPrice,
  DropdownInput,
  DropdownButton,
  MenuTop,
  ItemImage,
  AuctionDescription,
  MenuLine,
  MenuPrice,
  MenuAgreementLine,
  MenuInput,
  AgreementLink,
  MenuButtonsWrapper,
} from "./PutUpForSale.styles";

import { Button } from "../../../../globalStyles";
import Image from "../../../../images/card-item.png";
import {
  UndasGeneralNFT__factory,
  Marketplace__factory,
} from "../../../../typechain";
import {
  MARKETPLACE_ADDRESS,
  NFT_ADDRESS,
} from "../../../../utils/addressHelpers";
import Context from "../../../../utils/Context";
import { getNFTListingIds } from "../../../../utils/getNFTListingIds";
import { isBuyableFunction } from "../../../../utils/isBuyable";

const PutUpForSale: React.FC<{ itemId: string }> = ({ itemId }) => {
  const { connector } = useContext(Context);

  const [price, setPrice] = useState("35");

  const [isDropdownOpen, setDropdown] = useState(false);
  const [isMenuShown, setMenuShown] = useState(false);
  const [isButtonsActive, setIsButtonsActive] = useState("disabled");
  const [isBuyable, setIsBuyable] = useState<boolean | undefined>(undefined);
  const [listingId, setListingId] = useState<number>();

  const bid = async () => {
    if (!connector || isButtonsActive === "disabled") return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);
    const SIGNER_ADDRESS = await signer.getAddress();

    const NFTContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);

    // const MarketplaceContract = Marketplace__factory.connect(
    //   MARKETPLACE_ADDRESS,
    //   signer,
    // );

    const isApprovedForAll = await NFTContract.isApprovedForAll(
      SIGNER_ADDRESS,
      MARKETPLACE_ADDRESS,
    );

    if (!isApprovedForAll) {
      await (
        await NFTContract.setApprovalForAll(MARKETPLACE_ADDRESS, true)
      ).wait();
    }

    // const tx = await MarketplaceContract.bid(
    //   NFT_ADDRESS,
    //   +itemId,
    //   ethers.utils.parseEther(price),
    //   {
    //     value: ethers.utils.parseEther("0.1"),
    //     gasLimit: 300000,
    //   },
    // );

    // await tx.wait().then(
    //   () => {
    //     setIsBuyable(true);
    //     toogleMenu();
    //     toogleDropdown();
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    // );
  };

  const Cancel = async () => {
    if (!connector || !listingId) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const tx = await MarketplaceContract.cancel(listingId);

    await tx.wait().then((error) => {
      setIsBuyable(false);
      console.log(error);
    });
  };

  const toogleDropdown = () => {
    setDropdown(!isDropdownOpen);
  };

  const toogleMenu = () => {
    if (!isMenuShown && isButtonsActive === "disabled") {
      setMenuShown(!isMenuShown);
    } else if (isButtonsActive === "disabled") {
      return;
    } else {
      setMenuShown(!isMenuShown);
      setIsButtonsActive("disabled");
    }
  };

  const cancelMenuShow = () => {
    setMenuShown(!isMenuShown);
  };

  const toogleButtons = () => {
    if (isButtonsActive === "disabled") {
      setIsButtonsActive("active");
    } else {
      setIsButtonsActive("disabled");
    }
  };

  const setBuyable = async () => {
    if (!connector) return;
    const listingId = await getNFTListingIds(NFT_ADDRESS, +itemId, connector);
    if (listingId) {
      setListingId(+listingId.value);
    }
    if (listingId && listingId.valueExists) {
      const buyable = await isBuyableFunction(+listingId.value, connector);
      setIsBuyable(buyable);
    } else setIsBuyable(false);
  };

  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }

    setBuyable();
  }, [connector]);

  return (
    <ForSaleWrapper>
      {isBuyable ? (
        <ForSaleButton violet onClick={Cancel}>
          Cancel
        </ForSaleButton>
      ) : (
        <>
          <ForSaleButton violet onClick={toogleDropdown}>
            Sell
          </ForSaleButton>
          {isDropdownOpen ? (
            <ForSaleDropdown>
              <DropdownLine>
                <DropdownPrice>Price</DropdownPrice>
                <DropdownInput
                  type="number"
                  placeholder={price.toString()}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </DropdownLine>
              <DropdownLine>
                <DropdownButton
                  onClick={() => {
                    toogleMenu();
                    // calculateCommission();
                  }}
                >
                  Sell
                </DropdownButton>
              </DropdownLine>
            </ForSaleDropdown>
          ) : (
            <></>
          )}
          {isMenuShown ? (
            <ForSaleMenu>
              <MenuTop>
                <ItemImage src={Image} />
                <AuctionDescription>
                  <MenuLine>
                    Price <MenuPrice>{price}</MenuPrice>
                  </MenuLine>
                </AuctionDescription>
              </MenuTop>
              <MenuAgreementLine>
                <MenuInput type="checkbox" onClick={toogleButtons} />I agree to
                the platform <AgreementLink>agreement</AgreementLink> ....
              </MenuAgreementLine>
              <MenuButtonsWrapper>
                <Button onClick={cancelMenuShow}>Cancel</Button>
                <Button className={isButtonsActive} onClick={bid} violet>
                  Confirm
                </Button>
              </MenuButtonsWrapper>
            </ForSaleMenu>
          ) : (
            <></>
          )}
        </>
      )}
    </ForSaleWrapper>
  );
};

export default PutUpForSale;
