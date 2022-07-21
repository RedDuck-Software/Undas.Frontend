import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "urql";

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
  CollectionName,
} from "./NFTGridItem.styles";
import { GET_NFT_LAST_SALES, GET_NFT_TOP_OFFER } from "./query";

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
  collectionOwner?: string;
  isRented?: boolean;
}

const NFTGridItem: React.FC<NFTGridItemProps> = (props) => {
  const navigate = useNavigate();
  const { account } = useWeb3React();
  const [userAccount, setAccount] = useState<any>();
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [topOffer, setTopOffer] = useState(0);
  const [lastSales, setLastSales] = useState(0);

  function setOwner() {
    if (userAccount && userAccount.toLowerCase() == props.tokenOwner) {
      setIsOwner(true);
    }
  }
  const createdMultipleQuery = () => {
    const offersItems = useQuery({
      query: GET_NFT_TOP_OFFER,
      variables: { tokenId: props.tokenId, tokenAddress: props.tokenAddress },
    });
    const lastSales = useQuery({
      query: GET_NFT_LAST_SALES,
      variables: { tokenId: props.tokenId, tokenAddress: props.tokenAddress },
    });
    return [offersItems, lastSales];
  };
  const [[offersItemsList], [lastSalesList]] = createdMultipleQuery();

  const result = offersItemsList;
  const { data, fetching } = result;

  useEffect(() => {
    if (account) {
      setAccount(account);
      setOwner();
    }

    if (data) {
      if (data.buyingOffers[0] && !data.stakingOffers[0]) {
        setTopOffer(data.buyingOffers[0].newOfferedPrice);
      }
      if (!data.buyingOffers[0] && data.stakingOffers[0]) {
        setTopOffer(
          +data.stakingOffers[0].newOfferedColloteral +
            +data.stakingOffers[0].newOfferedPremiumWei,
        );
      }
    }
    if (lastSalesList.data) {
      if (lastSalesList.data.listings[0]) {
        setLastSales(lastSalesList.data.listings[0].price);
      }
    }
  }, [account, userAccount, fetching, lastSalesList.fetching]);
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
        <CollectionName to="/">
          <Name>
            {props.collectionName ? props.collectionName : "No collection"}
          </Name>
        </CollectionName>
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
          <TagName>
            <Name>{props.name}</Name>
          </TagName>
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
          ) : isOwner == true && !props.isRented ? (
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
          ) : props.isRented == true && isOwner ? (
            <BuyBtn
              onClick={(e) => {
                navigate(
                  `/interaction-rent/tokenAddress=${props.tokenAddress}&id=${props.tokenId}`,
                  { state: { ...props } },
                );
                e.stopPropagation();
              }}
            >
              Return nft
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
          ) : (
            <BuyBtn
              onClick={(e) => {
                navigate(
                  `/nft/buy/tokenAddress=${props.tokenAddress}&id=${props.tokenId}`,
                  { state: { ...props } },
                );
                e.stopPropagation();
              }}
            >
              View
            </BuyBtn>
          )}
        </LeftBlock>
        <PriceList>
          <PriceItem>
            <span>Price</span>
            <Wrapper disp="flex" gap="6px">
              <PriceInEth>{props.price ? props.price: "-"}</PriceInEth>
              <EthLogo />
            </Wrapper>
          </PriceItem>
          <PriceItem>
            <span>Rent</span>
            <Wrapper disp="flex" gap="6px">
              <PriceInEth>
                {props.colloteralWei
                  ? ethers.utils.formatUnits(
                      props.colloteralWei.toString(),
                      "ether",
                    )
                  : "-"}
              </PriceInEth>
              <EthLogo />
            </Wrapper>
          </PriceItem>
          <PriceItem>
            <TextSpan>Top Offer</TextSpan>
            <Wrapper disp="flex" gap="6px">
              <PriceInEth>
                {topOffer
                  ? ethers.utils.formatUnits(topOffer.toString(), "ether")
                  : "-"}
              </PriceInEth>
              <EthLogo />
            </Wrapper>
          </PriceItem>
          <PriceItem>
            <TextSpan>Last Sales</TextSpan>
            <Wrapper disp="flex" gap="6px">
              <PriceInEth>
                {lastSales
                  ? ethers.utils.formatUnits(lastSales.toString(), "ether")
                  : "-"}
              </PriceInEth>
              <EthLogo />
            </Wrapper>
          </PriceItem>
        </PriceList>
      </BuyingBlock>
    </NFTWrap>
  );
};

export default NFTGridItem;
