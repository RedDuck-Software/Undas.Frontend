import React from "react";

import { Background } from "../../globalStyles";

import {
  InfoSection,
  BrowseCategory,
  TopCollections,
  TopBuyers,
  RentNFT,
} from "./page-components";
import Slider from "./page-components/Slider/Slider";
import Promo from './page-components/Promo/Promo';
import Info from './page-components/Info/Info'
import {Container} from "../../globalStyles";
import Recommended from "./page-components/Recomended/Recommended";
import ManageNFT from "./page-components/ManageNFT/ManageNFT";
import NewNFT from "./page-components/NewNFT/NewNFT";

const HomePage = () => {
  return (
    <div>
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
      </div>
  );
};

export default HomePage;
