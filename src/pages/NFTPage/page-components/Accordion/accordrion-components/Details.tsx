import React from "react";

import { CopyIco } from "../../../../AccountPage/page-components/AccountCard/AccountCard.styles";
import { Wrapper } from "../../../../CategoriesPage/Categories.styles";
import { DetailsWrap, DetailsElement, ColoredText } from "../Accordion.styles";

const Details: React.FC = () => {
  return (
    <DetailsWrap>
      <DetailsElement>
        <span>Contact Address</span>
        <Wrapper disp="flex" alignItems="center" gap="15px">
          <CopyIco />
          <ColoredText color="#873DC1">0x2953...4963</ColoredText>
        </Wrapper>
      </DetailsElement>
      <DetailsElement>
        <span>Token ID</span>
        <ColoredText color="#7C7C7C">9527241133496410...</ColoredText>
      </DetailsElement>
      <DetailsElement>
        <span>Token Standard</span>
        <ColoredText color="#7C7C7C">ERC-721</ColoredText>
      </DetailsElement>
      <DetailsElement>
        <span>Blockchain</span>
        <ColoredText color="#7C7C7C">Ethereum</ColoredText>
      </DetailsElement>
      <DetailsElement>
        <span>Metadata</span>
        <ColoredText color="#7C7C7C">Editable</ColoredText>
      </DetailsElement>
    </DetailsWrap>
  );
};

export default Details;
