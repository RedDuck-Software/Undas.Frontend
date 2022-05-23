import React from "react";
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
} from "./NFTGridItem.styles";

import { ReactComponent as EthLogo } from "../../../icons/eth-logo-nft.svg";
import { ReactComponent as LockIco } from "../../../icons/lock.svg";
import { ReactComponent as PreviewIco } from "../../../icons/preview.svg";
import {
  Platform,
  Wrapper,
} from "../../../pages/CategoriesPage/Categories.styles";
import { Verified } from "../../../pages/CategoriesPage/imports";
import { setComponent } from "../../../store/reducers/modalAction";

interface NFTGridProps {
  tokenId: number;
  URI: string;
  name: string;
  price?: number;
  premium?: number;
}

const NFTGridItem: React.FC<NFTGridProps> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
              dispatch(setComponent("buy", props.tokenId));
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
              <PriceInEth>{props.price ?? "-"}</PriceInEth>
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

export default NFTGridItem;