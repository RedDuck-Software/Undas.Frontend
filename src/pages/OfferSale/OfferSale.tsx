import React, { useState } from "react";

import {
  TitleText,
  Back,
  BackText,
  TabsMenu,
  Tab,
  TextOffer,
} from "./OfferSale.styles";

import { Background, Container } from "../../globalStyles";
import CastomOffer from "./page-components/CastomOffer/CastomOffer";
import Offer from "./page-components/Offer/Offer";

const OfferSale: React.FC = () => {
  const [tab, setTab] = useState("offer");
  return (
    <Background>
      <Back>
        <BackText>Back</BackText>
      </Back>
      <Container>
        <TitleText>Offer for Sale</TitleText>
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
        {tab === "offer" && <Offer />}
        {tab === "castom" && <CastomOffer />}
      </Container>
    </Background>
  );
};

export default OfferSale;
