import React, { useContext} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  NFTWrap,
  Info,
  Name,
  Favorite,
  ImageWrap,
  Image,
  Preview,
  BuyingBlock,
  TagName,
  LeftBlock,
  BuyBtn,
  PriceList,
  PriceItem,
  PriceInEth,
  TextSpan,
} from "./NFTGridCollection.styles";

import { setComponent } from "../../../../store/reducers/modalAction";
import { Platform, Wrapper } from "../../../CategoriesPage/Categories.styles";
import { Verified } from "../../../CategoriesPage/imports";
import { EthLogo, LockIco, PreviewIco } from "../../imports";

// import { Marketplace__factory } from "../../../../typechain";
// import { MARKETPLACE_ADDRESS } from "../../../../utils/addressHelpers";
// import { ethers } from "ethers";
import Context from "../../../../utils/Context";

interface NFTGridProps {
  tokenId: number;
  URI: string;
  name: string;
  priceInNum?: number;
  premium?: number;
}

const NFTGridCollection: React.FC<NFTGridProps> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("props")
  const { connector } = useContext(Context);
  console.log(connector)
  // console.log('dsadsadas',props)

  
  return (
    <NFTWrap
      onClick={() => {
        navigate(`/nft/buy/${props.tokenId}`);
      }}
    >
      <Info disp="flex" alignItems="center" gap="10px">
        <Name>{props.name}</Name>
        <img src={Verified} alt="verified-ico" />
        <Platform col="#873DC1">UND</Platform>
        <LockIco />
        <Favorite />
      </Info>
      <ImageWrap>
        <Image src={props.URI} alt="nft-image" />
        <Preview>
          <PreviewIco />
          <span>Preview</span>
        </Preview>
      </ImageWrap>
      <BuyingBlock>
        <LeftBlock>
          <TagName>Returne #{props.tokenId}</TagName>
          <BuyBtn
            onClick={(e) => {
              e.stopPropagation();
              // console.log('event')
              // console.log(props.tokenId)
              console.log("dsads")
              console.log(props.priceInNum)
             
              dispatch(setComponent("buy", props.tokenId, props.priceInNum));
            }}
          >
            Buy now
          </BuyBtn>
        </LeftBlock>
        <PriceList>
          <PriceItem>
            <span>Price</span>
            <Wrapper disp="flex" gap="6px">
              <EthLogo />
              <PriceInEth>{props.priceInNum ?? "-"}</PriceInEth>
            </Wrapper>
          </PriceItem>
          <PriceItem>
            <span>Rent</span>
            <Wrapper disp="flex" gap="6px">
              <EthLogo />
              <PriceInEth>{props.premium ?? "-"}</PriceInEth>
            </Wrapper>
          </PriceItem>
          <PriceItem>
            <TextSpan>Top Offer</TextSpan>
            <Wrapper disp="flex" gap="6px">
              <EthLogo />
              <PriceInEth>3,00008</PriceInEth>
            </Wrapper>
          </PriceItem>
          <PriceItem>
            <TextSpan>Last Sales</TextSpan>
            <Wrapper disp="flex" gap="6px">
              <EthLogo />
              <PriceInEth>3</PriceInEth>
            </Wrapper>
          </PriceItem>
        </PriceList>
      </BuyingBlock>
    </NFTWrap>
  );
};

export default NFTGridCollection;
