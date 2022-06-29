import React from "react";

import { Banner, Title, Info, InfoCard, InfoText } from "./Categories.styles";
import { CollectionBanner } from "./imports";
import Collection from "./page-components/Collection";

import { Container, Background } from "../../globalStyles";

const CategoriesArt: React.FC = () => {
  return (
    <>
      <Banner>
        <img src={CollectionBanner} alt="CollectionBanner" />
      </Banner>
      <Background>
        <Container>
          <Info>
            <div>
              <Title>Artwork</Title>
            </div>
            <InfoCard>
              <InfoText>
                On this page you can enjoy a selection of interesting
                collections. This section features Artwork collections. The
                Artwork category is dedicated to popular works by artists.
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

export default CategoriesArt;
