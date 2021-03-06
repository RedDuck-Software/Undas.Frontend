import React from "react";

import { card01, card02, card03 } from "./imports";
import { LargeCardListContainer } from "./LargeCardList.styles";

import { LargeCardItem } from "..";

const LargeCardList = () => {
  return (
    <LargeCardListContainer>
      <LargeCardItem image={card01} />
      <LargeCardItem image={card02} />
      <LargeCardItem image={card03} />
      <LargeCardItem image={card01} />
      <LargeCardItem image={card02} />
      <LargeCardItem image={card03} />
      <LargeCardItem image={card01} />
      <LargeCardItem image={card02} />
      <LargeCardItem image={card03} />
    </LargeCardListContainer>
  );
};

export default LargeCardList;
