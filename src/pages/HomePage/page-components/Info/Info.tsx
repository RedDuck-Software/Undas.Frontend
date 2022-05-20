import React from "react";

import { MoneyIco, HandIco, NFTIco, SaleIco } from "./imports";
import { InfoBlock, InfoWrap, InfoList, InfoText } from "./Info.styles";

const Info: React.FC = () => {
  return (
    <InfoBlock>
      <InfoWrap>
        <InfoList>
          <MoneyIco />
          <InfoText>Earn passive income via NFT Stacking</InfoText>
        </InfoList>
        <InfoList>
          <HandIco />
          <InfoText>Rent or have your NFT rented</InfoText>
        </InfoList>
        <InfoList>
          <NFTIco />
          <InfoText>Recieve bonuses from NFT tranding</InfoText>
        </InfoList>
        <InfoList>
          <SaleIco />
          <InfoText>Save 50 % on commission</InfoText>
        </InfoList>
      </InfoWrap>
    </InfoBlock>
  );
};

export default Info;
