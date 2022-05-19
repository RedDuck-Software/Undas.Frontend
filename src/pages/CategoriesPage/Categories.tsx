import React from 'react';

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
} from './Categories.styles';
import { CollectionBanner, Email, Telegram } from './imports';
import Collection from './page-components/Collection';

import { Container } from '../../globalStyles';

const Categories: React.FC = () => {
  return (
    <>
      <Banner>
        <img src={CollectionBanner} alt="CollectionBanner" />
      </Banner>
      <Container>
        <Info>
          <div>
            <Title>Real World Asset NFT</Title>
            <Subtitle>Categories</Subtitle>
          </div>
          <InfoCard>
            <InfoText>
              You can exchange your NFT for an item, e.g. selling the tickets
              through our marketplace
            </InfoText>
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
    </>
  );
};

export default Categories;
