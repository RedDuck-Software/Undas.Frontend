import React from "react";
import styled from "styled-components";

import { RentNFT } from "./page-components";
import Info from "./page-components/Info/Info";
import ManageNFT from "./page-components/ManageNFT/ManageNFT";
import NewNFT from "./page-components/NewNFT/NewNFT";
import Promo from "./page-components/Promo/Promo";
import Recommended from "./page-components/Recomended/Recommended";
import Slider from "./page-components/Slider/Slider";

import { Container } from "../../globalStyles";

const HomeContainer = styled.div`
  margin-bottom: 150px;
`;

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Slider />
      <Promo />
      <Info />
      <Container>
        <Recommended />
        <RentNFT />
        <ManageNFT />
        <NewNFT />
      </Container>
      {/* <Background>
        <InfoSection />
        <RentNFT />
        <BrowseCategory />
        <TopCollections />
        <TopBuyers />
      </Background>*/}
    </HomeContainer>
  );
};

export default HomePage;
