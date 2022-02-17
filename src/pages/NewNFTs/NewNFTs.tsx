import React from "react";

import { CardList, Paggination } from "../../components";

import { Background } from "../../globalStyles";
import {
  NewNFTsContainer,
  NewNFTsPagginationContainer,
} from "./NewNFTs.styles";

const NewNFTs = () => {
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
