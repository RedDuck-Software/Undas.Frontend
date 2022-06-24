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
              <InfoText>
                On this page you can enjoy a selection of interesting
                collections. This section provides you with collections in the
                GameFI category. The GameFI category is NFT collections for
                blockchain games.
              </InfoText>
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
