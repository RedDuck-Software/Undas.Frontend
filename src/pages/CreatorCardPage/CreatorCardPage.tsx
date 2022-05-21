import React from "react";

import { Back, BackText, ListOnMarket } from "./CreatorCardPage.styles";

import { Container, Background } from "../../globalStyles";

const CreatorCardPage: React.FC = () => {
  return (
    <Background>
      <Back>
        <BackText>Back</BackText>
      </Back>
      <Container>
        <ListOnMarket>List on market</ListOnMarket>
      </Container>
    </Background>
  );
};

export default CreatorCardPage;
