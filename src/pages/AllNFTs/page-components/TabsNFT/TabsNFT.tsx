import { useState } from 'react';
import { Tab, Tabs} from 'react-bootstrap';
import "./tabs-nft.css"

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

const TabsNFT = () => {
  const [showCategory] = useState(false);

  return (
    <Tabs defaultActiveKey="second">
      <Tab eventKey="profile" title={<span><i className="profile-icon tab-icon"/></span>}>
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
      <Tab eventKey="second" title={<span><i className="profile-icon-shop tab-icon"/></span>}>
        <ReturneText>Returne #204</ReturneText>
        <ButtonRent>Buy now</ButtonRent>
        <ButtonOffer>Make offer</ButtonOffer>
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
      <Tab eventKey="third" title={<span><i className="profile-icon-handshake tab-icon"/></span>}>
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
