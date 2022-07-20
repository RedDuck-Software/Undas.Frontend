import React from "react";

import {
  Wrap,
  PartnersWrap,
  FirstPartner,
  SecondPartner,
} from "./Partners.styles";

import { Container } from "../../globalStyles";

const Partners: React.FC = () => {
  return (
    <Wrap>
      <Container>
        <PartnersWrap>
          <FirstPartner
            href="https://redduck.io/"
            target="_blank"
          ></FirstPartner>

          <SecondPartner
            href="https://sgm.team"
            target="_blank"
          ></SecondPartner>
        </PartnersWrap>
      </Container>
    </Wrap>
  );
};

export default Partners;
