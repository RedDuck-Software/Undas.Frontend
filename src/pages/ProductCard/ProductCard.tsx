import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../../utils/Context";

import { isBuyableFunction } from "../../utils/isBuyable";

import {
  ProductPrice,
  PriceHistory,
  Rent,
  Staking,
  ItemActivity,
  MoreFromCollection,
} from "./page-components";

import { Background } from "../../globalStyles";

import {
  LeftSide,
  CardImageContainer,
  CardImage,
  ProductCardSec,
  ProductContainer,
  ProductContainerCenter,
  RightSide,
} from "./ProductCard.styles";

import Image from "../../images/card-item.png";
import { ethers } from "ethers";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";
import { Marketplace__factory } from "../../typechain";

const ProductCard = () => {
  const { connector } = useContext(Context);

  let { id: pageId } = useParams();
  const [makerWallet, setMakerWallet] = useState("");

  const getStakings = async (itemId: number) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const tx = await MarketplaceContract.getStaking(itemId);

    return tx;
  };

  async function getProductValue() {
    const ProductValue = await getStakings(+pageId! - 1);
    console.log(ProductValue);
    if (!ProductValue) {
      return;
    }
    const { maker } = ProductValue;
    setMakerWallet(maker);
  }

  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }

    getProductValue();
  }, [connector]);

  const [showPriceHistory] = useState(false);

  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }

    console.log(isBuyableFunction(Number(pageId), connector));
  }, []);

  return (
    <Background>
      <ProductCardSec>
        <ProductContainer>
          <LeftSide>
            <CardImageContainer>
              <CardImage src={Image} />
            </CardImageContainer>
          </LeftSide>
          <RightSide>
            <ProductPrice id={Number(pageId!)} />
            {showPriceHistory ? <PriceHistory /> : <></>}
            <Rent id={Number(pageId!)} />
            <Staking />
          </RightSide>
        </ProductContainer>
        <ProductContainerCenter>
          <ItemActivity />
          <MoreFromCollection />
        </ProductContainerCenter>
      </ProductCardSec>
    </Background>
  );
};

export default ProductCard;
