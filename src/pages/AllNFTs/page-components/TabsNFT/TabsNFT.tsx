import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./tabs-nft.css";
import { useNavigate } from "react-router-dom";

import {
  InputTypeYourBid,
  ReturneText,
  ButtonRent,
  ButtonOffer,
  SpanSale,
  ButtonBid,
  ButtonRentSale,
  RowDown,
  DivDeposit,
  DepositText,
  EthereumText,
  DivPrice,
  DivPeriod,
  PeriodText,
  DivLastSales,
  RentIcon,
} from "./TabsNFT.styles";

// eslint-disable-next-line import/order
import { ethers } from "ethers";

type GridItem = {
  id: number;
  URI: string;
  name: string;
  priceInNum?: number;
  premiumInNum?: number;
  colloteralWei?: number;
  stakingId?: number;
  listingId?: number;
  tokenAddress?: string;
  tokenOwner?: string;
  collectionName?: string;
  collectionId?: string;
  collectionOwner?: string;
};
interface CollectionGridWrapperProps {
  itemLists: GridItem;
}
const TabsNFT: React.FC<CollectionGridWrapperProps> = (item) => {
  const navigate = useNavigate();

  const state = {
    tokenId: item.itemLists.id,
    tokenAddress: item.itemLists.tokenAddress,
    URI: item.itemLists.URI,
    colloteralWei: item.itemLists.colloteralWei,
    premium: ethers.utils.formatEther(
      item.itemLists.premiumInNum
        ? item.itemLists.premiumInNum.toString()
        : "0",
    ),
    stakingId: item.itemLists.stakingId,
    tokenOwner: item.itemLists.tokenOwner,
  };


  return (
    <Tabs defaultActiveKey="second" id="tab-nft" className="my-tabs">
      <Tab
        className=""
        eventKey="profile"
        title={
          <span>
            <i className="icon-sold tab-figure" />
          </span>
        }
      >
        <ReturneText>{item.itemLists.name}</ReturneText>
        <SpanSale>Sale ends April 4, 2022 at 6:02pm EET</SpanSale>
        <InputTypeYourBid placeholder="Type Your Bid"></InputTypeYourBid>
        <ButtonRentSale>Buy now</ButtonRentSale>
        <ButtonBid>Make a Bid</ButtonBid>
        <RowDown>
          <DivDeposit>
            <DepositText>Price</DepositText>
            <EthereumText>-</EthereumText>
          </DivDeposit>
          <DivPrice>
            <DepositText>Current Bid</DepositText>
            <EthereumText>-</EthereumText>
          </DivPrice>
          <DivPeriod>
            <DepositText>Bid Unit</DepositText>
            <EthereumText>-</EthereumText>
          </DivPeriod>
          <DivLastSales>
            <DepositText>Last Sales</DepositText>
            <EthereumText>-</EthereumText>
          </DivLastSales>
        </RowDown>
      </Tab>
      <Tab
        eventKey="second"
        title={
          <span>
            <i className="profile-icon-shop tab-figure" />
          </span>
        }
      >
        <ReturneText>{item.itemLists.name}</ReturneText>
        <ButtonRent
          onClick={(e) => {
            navigate(
              `/nft/buy/tokenAddress=${item.itemLists.tokenAddress}&id=${item.itemLists.id}`,
              { state: { ...state } },
            );
            e.stopPropagation();
          }}
        >
          Buy now
        </ButtonRent>
        <ButtonOffer
          onClick={(e) => {
            navigate(
              `/offer-sale/tokenAddress=${item.itemLists.tokenAddress}&id=${item.itemLists.id}`,
              { state: { state: { ...state } } },
            );
            e.stopPropagation();
          }}
        >
          Make offer
        </ButtonOffer>
        <RowDown>
          <DivDeposit>
            <DepositText>Price</DepositText>
            <EthereumText>
              {item.itemLists.priceInNum
                ? ethers.utils.formatEther(item.itemLists.priceInNum.toString())
                : "-"}
            </EthereumText>
          </DivDeposit>
          <DivPrice>
            <DepositText>Top Offer</DepositText>
            <EthereumText>-</EthereumText>
          </DivPrice>
          <DivPeriod>
            <DepositText></DepositText>
          </DivPeriod>
          <DivLastSales>
            <DepositText>Last Sales</DepositText>
            <EthereumText>-</EthereumText>
          </DivLastSales>
        </RowDown>
      </Tab>
      <Tab
        eventKey="third"
        title={
          <RentIcon>
            <i className="profile-icon-handshake tab-figure" />
          </RentIcon>
        }
      >
        <ReturneText>{item.itemLists.name}</ReturneText>
        <ButtonRent
          onClick={(e) => {
            navigate(
              `/nft/buy/tokenAddress=${item.itemLists.tokenAddress}&id=${item.itemLists.id}`,
              { state: { ...state } },
            );
            e.stopPropagation();
          }}
        >
          Rent
        </ButtonRent>
        <ButtonOffer
          onClick={(e) => {
            navigate(
              `/offer-rent/tokenAddress=${item.itemLists.tokenAddress}&id=${item.itemLists.id}`,
              { state: { state: { ...state } } },
            );
            e.stopPropagation();
          }}
        >
          Make offer
        </ButtonOffer>
        <RowDown>
          <DivDeposit>
            <DepositText>Deposit</DepositText>
            <EthereumText>
              {item.itemLists.colloteralWei
                ? ethers.utils.formatEther(
                    item.itemLists.colloteralWei.toString(),
                  )
                : "-"}
            </EthereumText>
          </DivDeposit>
          <DivPrice>
            <DepositText>Price a Day</DepositText>
            <EthereumText>
              {item.itemLists.premiumInNum
                ? ethers.utils.formatEther(
                    item.itemLists.premiumInNum.toString(),
                  )
                : "-"}
            </EthereumText>
          </DivPrice>
          <DivPeriod>
            <DepositText>Period</DepositText>
            <PeriodText>7 d- 30 d</PeriodText>
          </DivPeriod>
          <DivLastSales>
            <DepositText>Last Sales</DepositText>
            <EthereumText>-</EthereumText>
          </DivLastSales>
        </RowDown>
      </Tab>
    </Tabs>
  );
};

export default TabsNFT;
