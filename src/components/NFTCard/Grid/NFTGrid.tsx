import React, { FC } from "react";

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
} from "./NFTGrid.styles";
import {
  CollectionText,
  Platform,
  Wrapper,
} from "../../../pages/CollectionsPage/Collections.styles";
import { Verified } from "../../../pages/CollectionsPage/imports";
import { ReactComponent as LockIco } from "../../../icons/lock.svg";
import { ReactComponent as PreviewIco } from "../../../icons/preview.svg";
import { ReactComponent as EthLogo } from "../../../icons/eth-logo-nft.svg";
import NFTExample from "../../../images/NFTExample.png";
import { BigNumber } from "ethers";
import { ListingStructOutput } from "../../../typechain/Marketplace";

interface INFTGrid {
  tokenId: number;
  URI: string;
  name: string;
  price?: number;
  premium?: number;
}

const NFTGrid = (props: INFTGrid) => {
  return (
    <NFTWrap>
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
          <TagName>Returne {props.tokenId}</TagName>
          <BuyBtn>Buy now</BuyBtn>
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
            <span>Top Offer</span>
            <Wrapper disp="flex" gap="6px">
              <EthLogo />
              <PriceInEth>TOP_OFFER</PriceInEth>
            </Wrapper>
          </PriceItem>
          <PriceItem>
            <span>Last Sales</span>
            <Wrapper disp="flex" gap="6px">
              <EthLogo />
              <PriceInEth>LAST_SALES</PriceInEth>
            </Wrapper>
          </PriceItem>
        </PriceList>
      </BuyingBlock>
    </NFTWrap>
  );
};

export default NFTGrid;
