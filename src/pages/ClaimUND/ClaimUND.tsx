import React from "react";

import { PageFAQTitle, BtnClaim } from "./ClaimUND.styles";

import { Background, Container } from "../../globalStyles";

const ClaimUND: React.FC = () => {
  return (
    <Background>
      <Container>
        <PageFAQTitle>Claim UND Test</PageFAQTitle>
        <BtnClaim>Claim Test Undas Tokens</BtnClaim>
      </Container>
    </Background>
  );
};

export default ClaimUND;
