import React from "react";

import {
  TopLinkWrapper,
  TopLink,
  ContentWrapper,
  BottomWrapper,
  LeftBlock,
  RightBlock,
  ContentItem,
  ContentItemName,
  ContentItemPriceWrap,
  ContentItemPriceEth,
  ContentItemPriceUsd,
  ContentItemPriceUnd,
  CheckboxRow,
  CheckboxInput,
  CheckboxLabel,
  Total,
  TotalPrice,
  TotalPriceEth,
  TotalPriceUnd,
  Plus,
  ItemAmount,
  CheckBoxWrapper,
  Button,
} from "../Rent/Rent.styles";

import {
  TitleText,
  UNDLabel,
  ImageInfo,
  AgreementLink,
  CheckboxLabelAgreement,
  CheckboxInputAgreement,
  NFTInfoContainer,
} from "../OfferRent/OfferRent.styles";

import { Background, Container } from "../../globalStyles";

import { info } from "../OfferRent/imports";

import NFTCard from "../HomePage/page-components/NFTCard/NFTCard";

const Rent: React.FC = () => {
  return (
    <Background>
      <TopLinkWrapper>
        <Container>
          <TopLink to="/">Back</TopLink>
        </Container>
      </TopLinkWrapper>
      <Container>
        <TitleText>Complete checkout</TitleText>
        <ContentWrapper>
          <LeftBlock>
            <ContentItem>
              <ContentItemName>Price NFT</ContentItemName>
              <ContentItemPriceWrap>
                <ContentItemPriceEth>40</ContentItemPriceEth>
                <ContentItemPriceUsd>$123 278,00</ContentItemPriceUsd>
              </ContentItemPriceWrap>
            </ContentItem>
            <ContentItem>
              <ContentItemName>
                Marketplace commission
                <ImageInfo src={info} alt="info-image" />
              </ContentItemName>
              <ContentItemPriceWrap>
                <ContentItemPriceEth>0,035</ContentItemPriceEth>
                <ContentItemPriceUsd>$258,25</ContentItemPriceUsd>
              </ContentItemPriceWrap>
            </ContentItem>
            <ContentItem>
              <ContentItemName>
                Marketplace fee 3%
                <CheckboxRow>
                  <CheckboxInput
                    type="checkbox"
                    id="purchases"
                    className="custom-checkbox"
                  />
                  <CheckboxLabel htmlFor="purchases">
                    Pay in {"\u00A0"}
                    <UNDLabel>UND</UNDLabel>
                    {"\u00A0"} with a 50% discount
                    <ImageInfo src={info} alt="info-image" />
                  </CheckboxLabel>
                </CheckboxRow>
              </ContentItemName>
              <ContentItemPriceWrap>
                <ContentItemPriceUnd>2</ContentItemPriceUnd>
                <ContentItemPriceUsd>$258,25</ContentItemPriceUsd>
              </ContentItemPriceWrap>
            </ContentItem>
            <ContentItem>
              <Total>Total</Total>
              <ContentItemPriceWrap>
                <TotalPrice>
                  <TotalPriceEth>40</TotalPriceEth>
                  <Plus>+</Plus>
                  <TotalPriceUnd>2</TotalPriceUnd>
                </TotalPrice>
                <ContentItemPriceUsd>$123 278,00</ContentItemPriceUsd>
              </ContentItemPriceWrap>
            </ContentItem>
          </LeftBlock>
          <RightBlock>
            <ItemAmount>Item</ItemAmount>
            <NFTInfoContainer>
              <NFTCard uri="nft1" name="NFTCard" />
            </NFTInfoContainer>
          </RightBlock>
        </ContentWrapper>
        <BottomWrapper>
          <CheckBoxWrapper>
            <CheckboxInputAgreement
              type="checkbox"
              id="agreement"
              className="custom-checkbox"
            />
            <CheckboxLabelAgreement htmlFor="agreement">
              I agree to the platform {"\u00A0"}
              <AgreementLink to="/">agreement...</AgreementLink>
            </CheckboxLabelAgreement>
          </CheckBoxWrapper>
          <Button>Buy Now</Button>
        </BottomWrapper>
      </Container>
    </Background>
  );
};

export default Rent;
