import React from "react";

import {
  Banner,
  Title,
  Info,
  Subtitle,
  InfoCard,
  InfoText,
} from "./Categories.styles";
import { CollectionBanner, Email, Telegram } from "./imports";
import Collection from "./page-components/Collection";

import { Container, Background } from "../../globalStyles";

const CategoriesPhoto: React.FC = () => {
  return (
    <>
      <Banner>
        <img src={CollectionBanner} alt="CollectionBanner" />
      </Banner>
      <Background>
        <Container>
          <Info>
            <div>
              <Title>Photography</Title>
            </div>
            <InfoCard>
              <InfoText>
                On this page you can enjoy a selection of interesting
                collections. This section provides you with collections in the
                Photography category. The Photography category is collections of
                photos from the best photographers in the NFT world.
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

export default CategoriesPhoto;
