import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./tabs-nft.css";
import { useDispatch } from "react-redux";

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
} from "./TabsNFT.styles";

import { setComponent } from "../../../../store/reducers/modalAction";
import ModalsNFT from "../ModalsNFT/ModalsNFT";

const TabsNFT: React.FC = () => {
  const dispatch = useDispatch();

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
        <ReturneText>Returne #204</ReturneText>
        <SpanSale>Sale ends April 4, 2022 at 6:02pm EET</SpanSale>
        <InputTypeYourBid placeholder="Type Your Bid"></InputTypeYourBid>
        <ButtonRentSale>Buy now</ButtonRentSale>
        <ButtonBid>Make a Bid</ButtonBid>
        <RowDown>
          <DivDeposit>
            <DepositText>Price</DepositText>
            <EthereumText>3,000082</EthereumText>
          </DivDeposit>
          <DivPrice>
            <DepositText>Current Bid</DepositText>
            <EthereumText>3,000082</EthereumText>
          </DivPrice>
          <DivPeriod>
            <DepositText>Bid Unit</DepositText>
            <EthereumText>3,000082</EthereumText>
          </DivPeriod>
          <DivLastSales>
            <DepositText>Last Sales</DepositText>
            <EthereumText>3</EthereumText>
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
        <ReturneText>Returne #204</ReturneText>
        <ButtonRent
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setComponent("buy", 1));
          }}
        >
          Buy now
        </ButtonRent>
        <ModalsNFT />
        <RowDown>
          <DivDeposit>
            <DepositText>Price</DepositText>
            <EthereumText>3,000082</EthereumText>
          </DivDeposit>
          <DivPrice>
            <DepositText>Top Offer</DepositText>
            <EthereumText>3,000082</EthereumText>
          </DivPrice>
          <DivPeriod>
            <DepositText></DepositText>
          </DivPeriod>
          <DivLastSales>
            <DepositText>Last Sales</DepositText>
            <EthereumText>3</EthereumText>
          </DivLastSales>
        </RowDown>
      </Tab>
      <Tab
        eventKey="third"
        title={
          <span>
            <i className="profile-icon-handshake tab-figure" />
          </span>
        }
      >
        <ReturneText>Returne #204</ReturneText>
        <ButtonRent>Rent</ButtonRent>
        <ButtonOffer>Make offer</ButtonOffer>
        <RowDown>
          <DivDeposit>
            <DepositText>Deposit</DepositText>
            <EthereumText>3,000082</EthereumText>
          </DivDeposit>
          <DivPrice>
            <DepositText>Price a Day</DepositText>
            <EthereumText>3,000082</EthereumText>
          </DivPrice>
          <DivPeriod>
            <DepositText>Period</DepositText>
            <PeriodText>7 d- 30 d</PeriodText>
          </DivPeriod>
          <DivLastSales>
            <DepositText>Last Sales</DepositText>
            <EthereumText>3</EthereumText>
          </DivLastSales>
        </RowDown>
      </Tab>
    </Tabs>
  );
};

export default TabsNFT;
