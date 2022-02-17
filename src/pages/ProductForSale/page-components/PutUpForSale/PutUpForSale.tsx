import { useState, useEffect, useContext } from "react";
import Context from "../../../../utils/Context";
import { ethers } from "ethers";

import {
  MARKETPLACE_ADDRESS,
  NFT_ADDRESS,
} from "../../../../utils/addressHelpers";

import {
  UndasGeneralNFT__factory,
  Marketplace__factory,
} from "../../../../typechain";

import { isBuyableFunction } from "../../../../utils/isBuyable";

import Image from "../../../../images/card-item.png";

import { Button } from "../../../../globalStyles";

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
import { getNFTListingIds } from "../../../../utils/getNFTListingIds";
import { getNFTStakingIds } from "../../../../utils/getNFTStakingIds";

const PutUpForSale = ({ itemId }: { itemId: string }) => {
  const { connector } = useContext(Context);

  const [price, setPrice] = useState("35");
  // const [commision, setCommision] = useState(0);

  const [isDropdownOpen, setDropdown] = useState(false);
  const [isMenuShown, setMenuShown] = useState(false);
  const [isButtonsActive, setIsButtonsActive] = useState("disabled");
  const [isBuyable, setIsBuyable] = useState<boolean | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [stakingId, setStakingId] = useState<number>();
  const [listingId, setListingId] = useState<number>();

  const bid = async () => {
    if (!connector || isButtonsActive === "disabled") return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);
    const SIGNER_ADDRESS = await signer.getAddress();

    console.log(connector);
    console.log(signer);
    console.log(itemId, "0xB073DeaC0dc753d27cC41a0f443000579d017361", price);

    const NFTContract = UndasGeneralNFT__factory.connect(
      "0xB073DeaC0dc753d27cC41a0f443000579d017361",
      signer
    );

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
      NFT_ADDRESS,
      itemId,
      ethers.utils.parseEther(price),
      {
        value: ethers.utils.parseEther("0.1"),
        gasLimit: 300000,
      }
    );

    await tx.wait().then(
      () => {
        toogleMenu();
        toogleDropdown();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const Cancel = async () => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const tx = await MarketplaceContract.cancel(itemId);

    await tx.wait().then((error) => {
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

  return (
    <ForSaleWrapper>
      {/* <ForSaleButton violet onClick={Cancel}>
        Cancel
      </ForSaleButton> */}
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
              {/* <MenuLine>
                <span>Marketplace commission</span>{' '}
                <MenuPrice>{commision}</MenuPrice>
              </MenuLine> */}
            </AuctionDescription>
          </MenuTop>
          <MenuAgreementLine>
            <MenuInput type="checkbox" onClick={toogleButtons} />I agree to the
            platform <AgreementLink>agreement</AgreementLink> ....
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
    </ForSaleWrapper>
  );
};

export default PutUpForSale;
