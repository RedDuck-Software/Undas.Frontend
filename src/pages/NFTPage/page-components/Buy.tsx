import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";

import { Marketplace__factory } from "../../../typechain";
import { MARKETPLACE_ADDRESS } from "../../../utils/addressHelpers";
import Context from "../../../utils/Context";
import { Wrapper } from "../../CategoriesPage/Categories.styles";
import { EthIco } from "../imports";
import {
  BuyBar,
  PriceText,
  PriceInUSD,
  ButtonWrap,
  InfoButton,
  PriceWrap,
  NotListedWrapper,
  NotListed,
} from "../NFTPage.styles";
import { OnlyOne__factory } from "../../../typechain";

interface BuyProps {
  id: number;
  isOwner?: boolean;
  priceInNum:number;
  showBuy?: boolean;
}

const Buy: React.FC<BuyProps> = ({ id, priceInNum, isOwner, showBuy }) => {
  const { connector } = useContext(Context);

  const web3React = useWeb3React();
  const account = web3React.account;
  console.log(priceInNum)
  const [price, setPrice] = useState(0);
  const [priceInEth, setPriceInEth] = useState(0);
  const [seller, setSeller] = useState("");
  
  console.log('listing',id)
  // console.log('price1',price1)

  const getListing = async (itemId: number) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const tx = await MarketplaceContract.getListing(itemId);

    return tx;
  };

  async function buyToken(tokenId: number, priceInNum?: number) {
    if (!connector) return;
    if (priceInNum == undefined) {
      return;
    }
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);
    const userBalanceInWei = ethers.utils.formatUnits(
      await signer.getBalance(),
    );
    const amount = ethers.utils.formatUnits(
      priceInNum
    );
    console.log(amount);
    console.log('user bal',userBalanceInWei)
    if (+userBalanceInWei < +amount) {
      alert("not enough funds");
      return;
    }
    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const ApprovalTokenAmount = (+amount * 2) / 100;

    const OnlyOneContract = OnlyOne__factory.connect(
      "0x2DC8B77b750657Bf3480b20693Bc4Dc0dce45105",
      signer,
    );

    OnlyOneContract.approve(
      "0x54FAf9EE113f2cd8D921D46C47c3A67a26E3A77F",
      ethers.utils.parseUnits(ApprovalTokenAmount.toString(), 18),
    );

    const tx = await MarketplaceContract.buyToken(tokenId, {
      value: ethers.utils.parseUnits(amount.toString(), "ether"),
    });
    await tx.wait();
  }

  
  async function getEthPrice() {
    const API_URL =
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
    const response = await fetch(API_URL);
    const responseInJson = await response.json();
    return responseInJson;
  }

  async function getProductPrice() {
    const ProductPrice = await getListing(id);

    if (!ProductPrice) {
      return;
    }

    const { price, seller } = await ProductPrice;
    const priceInNum = Number(ethers.utils.formatUnits(price, 18));

    const ethPrice = await getEthPrice();
    const NFTPrice = (ethPrice.USD * priceInNum).toFixed(2);

    setPriceInEth(Number(NFTPrice));
    setPrice(priceInNum);
    setSeller(seller);
  }

  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }

    getProductPrice();
  }, [connector, web3React]);

  return (
    <>
      {showBuy === false && isOwner === true ? (
        <NotListedWrapper>
          <NotListed>Not listed for sale</NotListed>
        </NotListedWrapper>
      ) : (
        <BuyBar>
          <span>Current price</span>
          <Wrapper disp="flex" alignItems="center">
            <PriceWrap>
              <EthIco />
              <PriceText>{price}</PriceText>
              <PriceInUSD>{`($${priceInEth})`}</PriceInUSD>
            </PriceWrap>
          </Wrapper>
          <ButtonWrap>
            <InfoButton
              bg="#873DC1"
              onClick={() => buyToken(id,priceInNum)}
              className="colored-btn"
              // disabled={isOwner}
            >
              Buy now
            </InfoButton>
            <InfoButton fc="#873DC1">Make offer</InfoButton>
          </ButtonWrap>
        </BuyBar>
      )}
    </>
  );
};

export default Buy;
