import React from "react";

import { MoneyIco, HandIco, NFTIco, SaleIco } from "./imports";
import { InfoBlock, InfoWrap, InfoList, InfoText } from "./Info.styles";

const Info: React.FC = () => {
  return (
    <InfoBlock>
      <InfoWrap>
        <InfoList /*to="/article"*/>
          <MoneyIco />
          <InfoText>Earn passive income via NFT Staking</InfoText>
        </InfoList>
        <InfoList /*to="/article"*/>
          <HandIco />
          <InfoText>Rent or have your NFT rented</InfoText>
        </InfoList>
        <InfoList /*to="/article"*/>
          <NFTIco />
          <InfoText>Recieve bonuses from NFT tranding</InfoText>
        </InfoList>
        <InfoList /*to="/article"*/>
          <SaleIco />
          <InfoText>Save 50 % on commission</InfoText>
        </InfoList>
      </InfoWrap>
    </InfoBlock>
  );
};

export default Info;
