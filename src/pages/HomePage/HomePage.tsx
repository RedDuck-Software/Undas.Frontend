import React from "react";

import { HomeContainer } from "./HomePage.styles";
import { RentNFT } from "./page-components";
import Info from "./page-components/Info/Info";
import ManageNFT from "./page-components/ManageNFT/ManageNFT";
import MobileHead from "./page-components/MobileHead/MobileHead";
import NewNFT from "./page-components/NewNFT/NewNFT";
import Promo from "./page-components/Promo/Promo";
import Recommended from "./page-components/Recomended/Recommended";
import Slider from "./page-components/Slider/Slider";

import { Container, Background } from "../../globalStyles";

const HomePage: React.FC = () => {
  return (
    <Background>
      <HomeContainer>
        <MobileHead />
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
    </Background>
  );
};

export default HomePage;
