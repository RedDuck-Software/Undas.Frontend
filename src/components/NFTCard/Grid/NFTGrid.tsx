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

const NFTGrid: FC<{ tokenId: number }> = ({ tokenId }) => {
  return (
    <NFTWrap>
      <Info disp="flex" alignItems="center" gap="10px">
        <Name>Returne by ...</Name>
        <img src={Verified} alt="verified-ico" />
        <Platform col="#873DC1">UND</Platform>
        <LockIco />
        <Favorite />
      </Info>
      <ImageWrap>
        <Image src={NFTExample} alt="nft-image" />
        <Preview>
          <PreviewIco />
          <span>Preview</span>
        </Preview>
      </ImageWrap>
      <BuyingBlock>
        <LeftBlock>
          <TagName>Returne {tokenId}</TagName>
          <BuyBtn>Buy now</BuyBtn>
        </LeftBlock>
        <PriceList>
          <PriceItem>
            <span>Price</span>
            <Wrapper disp="flex" gap="6px">
              <EthLogo />
              <PriceInEth>3,000082</PriceInEth>
            </Wrapper>
          </PriceItem>
          <PriceItem>
            <span>Rent</span>
            <Wrapper disp="flex" gap="6px">
              <EthLogo />
              <PriceInEth>3,00008</PriceInEth>
            </Wrapper>
          </PriceItem>
          <PriceItem>
            <span>Top Offer</span>
            <Wrapper disp="flex" gap="6px">
              <EthLogo />
              <PriceInEth>3,0008</PriceInEth>
            </Wrapper>
          </PriceItem>
          <PriceItem>
            <span>Last Sales</span>
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

export default NFTGrid;
