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
} from "../NFTPage.styles";

const Buy: React.FC<{ id: number }> = ({ id }) => {
  const { connector } = useContext(Context);

  const web3React = useWeb3React();
  const account = web3React.account;

  const [price, setPrice] = useState(0);
  const [priceInEth, setPriceInEth] = useState(0);
  const [seller, setSeller] = useState("");

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

  const buyToken = async (itemId: number) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const tx = await MarketplaceContract.buyToken(itemId, {
      value: ethers.utils.parseEther(price.toString()),
    });

    await tx.wait();
  };

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

  return seller === account || id < 0 ? (
    <></>
  ) : (
    <BuyBar>
      <span>Current price</span>
      <Wrapper disp="flex" alignItems="center" marg="10px 0 20px 0">
        <EthIco />
        <PriceText>{price}</PriceText>
        <PriceInUSD>{`($${priceInEth})`}</PriceInUSD>
      </Wrapper>
      <ButtonWrap>
        <InfoButton bg="#873DC1" onClick={() => buyToken(id)}>
          Buy now
        </InfoButton>
        <InfoButton fc="#873DC1">Make offer</InfoButton>
      </ButtonWrap>
    </BuyBar>
  );
};

export default Buy;
