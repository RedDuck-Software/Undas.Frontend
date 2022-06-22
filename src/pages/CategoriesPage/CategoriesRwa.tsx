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

const CategoriesRwa: React.FC = () => {
  return (
    <>
      <Banner>
        <img src={CollectionBanner} alt="CollectionBanner" />
      </Banner>
      <Background>
        <Container>
          <Info>
            <div>
              <Title>Real World Asset NFT</Title>
              <Subtitle>Categories</Subtitle>
            </div>
            <InfoCard>
              <InfoText>
                You can submit your NFT collections for advertising in Undas. To
                discuss cooperation, please write to us.
              </InfoText>
              <Contact>
                <ContactImage src={Email} alt="email-ico" />
                <ContactImage src={Telegram} alt="telegram-ico" />
                <ContactText>Waiting for your message</ContactText>
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

export default CategoriesRwa;