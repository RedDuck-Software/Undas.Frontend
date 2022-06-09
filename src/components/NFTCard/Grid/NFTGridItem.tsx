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
// import OfferRent from "../../../pages/OfferRent/OfferRent";
// import Link from 'react-router-dom';

interface NFTGridItemProps {
  tokenId: number; //listingID
  URI: string;
  name: string;
  price?: number;
  premium?: number;
  colloteralWei?: number;
}

const NFTGridItem: React.FC<NFTGridItemProps> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log('propsS',props)
  // const stackingFilter = useSelector(useFilter);
  return (
    <NFTWrap
      onClick={(e) => {
        navigate(`/nft/buy/${props.tokenId}`);  
          e.stopPropagation();
            {!props.premium?dispatch(
              setComponent(
                "additional-page-for-sale",
                props.tokenId,
                props.price,
                props.URI,  
                props.name, 
              ),
            ):dispatch(
              setComponent(
                "additional-page-for-rent",//comp
                props.tokenId,//tkid
                '',//pricenum
                props.URI,
                props.name,//
                props.premium,             
                props.colloteralWei,
              ))}

              //component: any, tokenId?: number,
   //priceInNum?: any, tokenURI?: string, name?: string,premiumInNum?:number,colloteralWei?:string
  //  return {type:SET_ADDITIONAL_PAGE_FOR_RENT, tokenId: tokenId, 
  //premiumInNum: premiumInNum, tokenURI:tokenURI, name:name, colloteral:colloteral};

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

          {props.price ? (
            <BuyBtn
              onClick={(e) => {
                e.stopPropagation();
                dispatch(
                  setComponent(
                    "buy",
                    props.tokenId,
                    props.price,
                    props.URI,
                    props.name,
                  ),
                );
              }}
            >
              Buy now
            </BuyBtn>
          ) : (
            <BuyBtn
              onClick={(e) => {
                e.stopPropagation();
                dispatch(
                  setComponent(
                    //set
                    "offer-rent",
                    props.tokenId,
                    props.price,
                    props.URI,
                    props.name,
                  ),
                );
                navigate(`/offer-rent`);
              }}
            >
              Rent Offer
            </BuyBtn>
          )}
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
              <PriceInEth>-</PriceInEth>
            </Wrapper>
          </PriceItem>
          <PriceItem>
            <TextSpan>Last Sales</TextSpan>
            <Wrapper disp="flex" gap="6px">
              <EthLogo />
              <PriceInEth>-</PriceInEth>
            </Wrapper>
          </PriceItem>
        </PriceList>
      </BuyingBlock>
    </NFTWrap>
  );
};

export default NFTGridItem;
