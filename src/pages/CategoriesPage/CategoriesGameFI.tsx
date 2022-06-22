import React from "react";

import {
  Banner,
  Title,
  Info,
  Subtitle,
  InfoCard,
  InfoText,
  Contact,
  ContactText,
  ContactImage,
} from "./Categories.styles";
import { CollectionBanner, Email, Telegram } from "./imports";
import Collection from "./page-components/Collection";

import { Container, Background } from "../../globalStyles";

const CategoriesGameFI: React.FC = () => {
  return (
    <>
      <Banner>
        <img src={CollectionBanner} alt="CollectionBanner" />
      </Banner>
      <Background>
        <Container>
          <Info>
            <div>
              <Title>GameFI</Title>
              <Subtitle>Categories</Subtitle>
            </div>
            <InfoCard>
              <InfoText>Info about collection</InfoText>
              <Contact>
                <ContactImage src={Email} alt="email-ico" />
                <ContactImage src={Telegram} alt="telegram-ico" />
                <ContactText>cooperate with dreams</ContactText>
              </Contact>
            </InfoCard>
          </Info>
          <div>
            <Collection />
            <Collection />
            <Collection />
            <Collection />
          </div>
        </Container>
      </Background>
    </>
  );
};

export default CategoriesGameFI;
