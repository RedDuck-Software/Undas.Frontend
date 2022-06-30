import React from "react";

import { Banner, Title, Info, InfoCard, InfoText } from "./Categories.styles";
import { CollectionBanner } from "./imports";
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
            </div>
            <InfoCard>
              <InfoText>
                On this page you can enjoy a selection of interesting
                collections. This section provides you with collections in the
                Real World Asset NFT category. The Real World Asset NFT category
                is a token that denotes virtual ownership of a physical good.
              </InfoText>
            </InfoCard>
          </Info>
          <div>
            {/*<Collection />*/}
            {/*<Collection />*/}
            {/*<Collection />*/}
            {/*<Collection />*/}
          </div>
        </Container>
      </Background>
    </>
  );
};

export default CategoriesRwa;
