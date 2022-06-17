import React from "react";

import { WalletIco, AddingNFTIco, NFTTradingIco, StackingIco } from "./imports";
import {
  ManageNFTContainer,
  ManageCardWrap,
  ManageCard,
  CardTitle,
  DescHolder,
  DescList,
  PurpleText,
  StyledSpan,
} from "./ManageNFT.styles";

import { Title, TitleWrap } from "../Recomended/Recommended.styles";

const ManageNFT: React.FC = () => {
  return (
    <ManageNFTContainer>
      <TitleWrap>
        <Title>Manage Your NFTs</Title>
      </TitleWrap>
      <ManageCardWrap>
        <ManageCard>
          <WalletIco />
          <CardTitle>Setting Up Your Wallet</CardTitle>
          <DescHolder>
            <DescList>Register your wallet</DescList>
            <DescList>Connect it to UNDAS</DescList>
          </DescHolder>
          <PurpleText to="/faq">Learn More ...</PurpleText>
        </ManageCard>
        <ManageCard alignSelf="self-end">
          <AddingNFTIco />
          <CardTitle>Adding NFT</CardTitle>
          <DescHolder>
            <DescList>
              Click <PurpleText to="/create-nft" fs="14px">Create</PurpleText>
            </DescList>
            <DescList>
              <StyledSpan>Choose an NFT and collection to create</StyledSpan>
            </DescList>
          </DescHolder>
          <PurpleText to="/faq">Learn More ...</PurpleText>
        </ManageCard>
        <ManageCard>
          <NFTTradingIco />
          <CardTitle>NFT trading</CardTitle>
          <DescHolder>
            <DescList>Sell</DescList>
            <DescList>Rent</DescList>
            <DescList>Exchange</DescList>
          </DescHolder>
          <PurpleText to="/faq">Learn More ...</PurpleText>
        </ManageCard>
        <ManageCard alignSelf="self-end">
          <StackingIco />
          <CardTitle>Stacking and Marketplace Token</CardTitle>
          <DescHolder>
            <DescList>Earn passive income from NFT Stacking</DescList>
            <DescList>Earn from token holding</DescList>
          </DescHolder>
          <PurpleText to="/faq">Learn More ...</PurpleText>
        </ManageCard>
      </ManageCardWrap>
    </ManageNFTContainer>
  );
};

export default ManageNFT;
