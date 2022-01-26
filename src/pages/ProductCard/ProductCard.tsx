import { useParams } from "react-router-dom";

import {
  ProductPrice,
  PriceHistory,
  Rent,
  Staking,
  ItemActivity,
  MoreFromCollection,
} from "./page-components";

import { Background, VioletText } from "../../globalStyles";

import {
  LeftSide,
  CardImageContainer,
  CardImage,
  BookmarkButton,
  ProductCardSec,
  ProductContainer,
  ProductContainerCenter,
  RightSide,
  ItemInformation,
  ProductSubtitle,
  ProductTitle,
  GenInformationTitle,
} from "./ProductCard.styles";

import Image from "../../images/card-item.png";
import { useContext, useEffect, useState } from "react";
import Context from "../../utils/Context";
import { ethers } from "ethers";
import { Marketplace__factory } from "../../typechain";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";

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

  return (
    <Background>
      <ProductCardSec>
        <ProductContainer>
          <LeftSide>
            <CardImageContainer>
              <ItemInformation mobile>
                <ProductTitle>Returne #</ProductTitle>
                <GenInformationTitle>
                  Owned by <VioletText>{makerWallet}</VioletText>
                </GenInformationTitle>
              </ItemInformation>
              <CardImage src={Image} />
              <BookmarkButton>10</BookmarkButton>
            </CardImageContainer>
          </LeftSide>
          <RightSide>
            <ItemInformation>
              <ProductTitle>Returne #</ProductTitle>
              <GenInformationTitle>
                Owned by <VioletText>{makerWallet}</VioletText>
              </GenInformationTitle>
            </ItemInformation>
            <ProductPrice id={+pageId! - 1} />
            <PriceHistory />
            <Rent id={+pageId! - 1} />
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
