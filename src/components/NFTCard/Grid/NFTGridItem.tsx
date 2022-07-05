import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, {useEffect, useState} from "react";
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

interface NFTGridItemProps {
  tokenId: number; //listingID
  URI: string;
  name: string;
  price?: number;
  premium?: number;
  colloteralWei?: number;
  stakingId?: number;
  listingId?: number;
  tokenAddress?: string;
  tokenOwner?: string;
  collectionName?: string;
  collectionId?: string;
  collectionOwner?:string;
}

const NFTGridItem: React.FC<NFTGridItemProps> = (props) => {
  const navigate = useNavigate();
  const { account } = useWeb3React();
  const [userAccount,setAccount] = useState<any>()
  const [isOwner,setIsOwner] = useState<boolean>(false);
  console.log('1',props);
  console.log('2',props.collectionOwner)//fix
  console.log(isOwner)

  function setOwner(){
    console.log('props',props.collectionOwner)//fix
    console.log('user',userAccount)

    if(userAccount && userAccount.toLowerCase() == props.collectionOwner){
      console.log('owner')
      setIsOwner(true)
    }
    console.log('not an owner')
  }

  useEffect(() => {

    if(account){
      console.log('acc',account)
      setAccount(account)
      setOwner()
    }

  }, [account,userAccount]);


  return (
    <NFTWrap
      onClick={(e) => {
        navigate(
          `/nft/buy/tokenAddress=${props.tokenAddress}&id=${props.tokenId}`,
          { state: { ...props } },
        );
        e.stopPropagation();
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
                navigate(
                  `/buy/tokenAddress=${props.tokenAddress}?id=${props.tokenId}`,
                  { state: { state: { ...props } } },
                );
              }}
            >
              Buy
            </BuyBtn>
          ) : props.premium ? (
            <BuyBtn
              onClick={(e) => {
                e.stopPropagation();
                navigate(
                  `/rent/tokenAddress=${props.tokenAddress}?id=${props.tokenId}`,
                  { state: { state: { ...props } } },
                );
              }}
            >
              Rent
            </BuyBtn>
          ) : isOwner == true ? (
            <BuyBtn
              onClick={(e) => {
                e.stopPropagation();
                navigate(
                  `/nft/sale/tokenAddress=${props.tokenAddress}?id=${props.tokenId}`,
                  { state: { state: { ...props } } },
                );
                e.stopPropagation();
              }}
            >
              Sell
            </BuyBtn>
          ):(
              <BuyBtn
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(
                        `/nft/sale/tokenAddress=${props.tokenAddress}?id=${props.tokenId}`,
                        { state: { state: { ...props } } },
                    );
                    e.stopPropagation();
                  }}
              >
                View
              </BuyBtn>)}
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
            <span>Collotral</span>
            <Wrapper disp="flex" gap="6px">
              <EthLogo />
              <PriceInEth>
                {props.colloteralWei
                  ? ethers.utils.formatUnits(
                      props.colloteralWei.toString(),
                      "ether",
                    )
                  : "-"}
              </PriceInEth>
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
