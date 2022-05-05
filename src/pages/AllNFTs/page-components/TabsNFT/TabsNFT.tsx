import { useState } from 'react';
import { Tab, Tabs} from 'react-bootstrap';
import "./settings-tabs.css"

import {
  InputTypeYourBid,
  ReturneText,
  ButtonRent,
  ButtonOffer,
  SpanSale,
  ButtonBid,
  ButtonRentSale,
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
      
      </Tab>
      <Tab eventKey="second" title={<span><i className="profile-icon-shop tab-icon"/></span>}>
        <ReturneText>Returne #204</ReturneText>
        <ButtonRent>Buy now</ButtonRent>
        <ButtonOffer>Make offer</ButtonOffer>
      </Tab>
      <Tab eventKey="third" title={<span><i className="profile-icon-handshake tab-icon"/></span>}>
        <ReturneText>Returne #204</ReturneText>
        <ButtonRent>Rent</ButtonRent>
        <ButtonOffer>Make offer</ButtonOffer>
      </Tab>
    </Tabs>
  );
};

export default TabsNFT;
