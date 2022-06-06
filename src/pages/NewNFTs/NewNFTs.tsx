import React from "react";

import {
  NewNFTsContainer,
  NewNFTsPagginationContainer,
} from "./NewNFTs.styles";

import { CardList, Paggination } from "../../components";
import { Background } from "../../globalStyles";

const NewNFTs: React.FC = () => {
  console.log("Dsadasdвфывфывфывыф");
  return (
    <Background>
      <NewNFTsContainer>
        <CardList newFilter={true} />
      </NewNFTsContainer>
      <NewNFTsPagginationContainer>
        <Paggination />
      </NewNFTsPagginationContainer>
    </Background>
  );
};

export default NewNFTs;
