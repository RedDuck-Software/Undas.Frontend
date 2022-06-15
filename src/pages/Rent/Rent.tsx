import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

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
  PageWrapper,
  UNDLabel,
  ImageInfo,
  AgreementLink,
  CheckboxLabelAgreement,
  CheckboxInputAgreement,
  NFTInfoContainer,
  OverlayPopUp,
  ButtonInfo,
  FAQLink,
} from "../OfferRent/OfferRent.styles";

import { Background, Container, PageTitle } from "../../globalStyles";

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
        <PageWrapper>
          <PageTitle>Complete checkout</PageTitle>
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
                  <OverlayTrigger
                    delay={{ show: 250, hide: 3000 }}
                    placement="top"
                    overlay={
                      <OverlayPopUp>
                        Speech bubble that will fall out when you click on the
                        information on the icon{" "}
                        <FAQLink href="/faq">FAQ</FAQLink>
                      </OverlayPopUp>
                    }
                  >
                    <ButtonInfo>
                      <ImageInfo
                        src={info}
                        alt="info-image"
                        className="margin"
                      />
                    </ButtonInfo>
                  </OverlayTrigger>
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
                  <OverlayTrigger
                    delay={{ show: 250, hide: 3000 }}
                    placement="top"
                    overlay={
                      <OverlayPopUp>
                        Speech bubble that will fall out when you click on the
                        information on the icon{" "}
                        <FAQLink href="/faq">FAQ</FAQLink>
                      </OverlayPopUp>
                    }
                  >
                    <ButtonInfo>
                      <ImageInfo
                        src={info}
                        alt="info-image"
                        className="margin"
                      />
                    </ButtonInfo>
                  </OverlayTrigger>
                </ContentItemName>
                <ContentItemPriceWrap>
                  <ContentItemPriceEth>0,035</ContentItemPriceEth>
                  <ContentItemPriceUsd>$258,25</ContentItemPriceUsd>
                </ContentItemPriceWrap>
              </ContentItem>
              <ContentItem>
                <ContentItemName>
                  Marketplace commission
                  <OverlayTrigger
                    delay={{ show: 250, hide: 3000 }}
                    placement="top"
                    overlay={
                      <OverlayPopUp>
                        Speech bubble that will fall out when you click on the
                        information on the icon{" "}
                        <FAQLink href="/faq">FAQ</FAQLink>
                      </OverlayPopUp>
                    }
                  >
                    <ButtonInfo>
                      <ImageInfo
                        src={info}
                        alt="info-image"
                        className="margin"
                      />
                    </ButtonInfo>
                  </OverlayTrigger>
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
                      <OverlayTrigger
                        delay={{ show: 250, hide: 3000 }}
                        placement="top"
                        overlay={
                          <OverlayPopUp>
                            Speech bubble that will fall out when you click on
                            the information on the icon{" "}
                            <FAQLink href="/faq">FAQ</FAQLink>
                          </OverlayPopUp>
                        }
                      >
                        <ButtonInfo>
                          <ImageInfo
                            src={info}
                            alt="info-image"
                            className="margin"
                          />
                        </ButtonInfo>
                      </OverlayTrigger>
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
        </PageWrapper>
      </Container>
    </Background>
  );
};

export default Rent;
