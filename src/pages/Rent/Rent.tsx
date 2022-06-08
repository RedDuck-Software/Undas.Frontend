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
  InputBlock,
  RentalLable,
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
} from "./Rent.styles";

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
import { RentalPeriod } from "../NFTPage/NFTPage.styles";

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
              <ContentItemName>Cost Day</ContentItemName>
              <ContentItemPriceWrap>
                <ContentItemPriceEth>0,005</ContentItemPriceEth>
                <ContentItemPriceUsd>$36,93</ContentItemPriceUsd>
              </ContentItemPriceWrap>
            </ContentItem>
            <ContentItem>
              <ContentItemName>
                Deposit
                <ImageInfo src={info} alt="info-image" />
              </ContentItemName>
              <ContentItemPriceWrap>
                <ContentItemPriceEth>40</ContentItemPriceEth>
                <ContentItemPriceUsd>$123 278,00</ContentItemPriceUsd>
              </ContentItemPriceWrap>
            </ContentItem>
            <ContentItem>
              <ContentItemName>
                Rental price for
                <InputBlock>
                  <RentalLable htmlFor="period">Select Period</RentalLable>
                  <RentalPeriod id="period" placeholder="7 for 90 days" />
                </InputBlock>
                days
                <ImageInfo src={info} alt="info-image" />
              </ContentItemName>
              <ContentItemPriceWrap>
                <ContentItemPriceEth>0,035</ContentItemPriceEth>
                <ContentItemPriceUsd>$258,25</ContentItemPriceUsd>
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
          <Button>Rent</Button>
        </BottomWrapper>
      </Container>
    </Background>
  );
};

export default Rent;