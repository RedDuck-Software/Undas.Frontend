import React, { useState } from "react";

import {
  TitleText,
  Back,
  BackText,
  TabsMenu,
  Tab,
  TextOffer,
} from "./OfferFotNotListedNft.styles";
import CastomOffer from "./page-components/CastomOffer/CastomOffer";
import OfferFotNotListed from "./page-components/Offer/OfferFotNotListed";


import { Background, Container } from "../../globalStyles";


const OfferFotNotListedNft: React.FC = () => {
  const [tab, setTab] = useState("offer");
  return (
    <Background>
      <Back onClick={() => history.back()}>
        <BackText>Back</BackText>
      </Back>
      <Container>
        <TitleText>Purchasing Offer</TitleText>
        <TabsMenu>
          <Tab
            onClick={() => setTab("offer")}
            className={tab === "offer" ? "active" : ""}
          >
            <TextOffer>Simple Offer</TextOffer>
          </Tab>
          <Tab
            onClick={() => setTab("castom")}
            className={tab === "castom" ? "active" : ""}
          >
            <TextOffer>Custom Offer</TextOffer>
          </Tab>
        </TabsMenu>
        {tab === "offer" && <OfferFotNotListed />}
        {tab === "castom" && <CastomOffer />}
      </Container>
    </Background>
  );
};

export default OfferFotNotListedNft;
