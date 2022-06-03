import React from "react";

import {
  TitleText,
  Back,
  BackText,
  OfferContainer,
  CollectionName,
  ImageVerify,
  ImageUND,
  ImageNFT,
  FirstCollum,
  SecondCollum,
  NameRow,
  TextPrice,
  PriceRow,
  EthSelect,
  EthText,
  ImageDown,
  AmmountInput,
  CostSelect,
  DollarText,
  TextOffer,
  DaySelect,
  ImageDownOffer,
  TimeSelect,
  TextPmAm,
  TextTime,
  UNDPrice,
  CheckboxInput,
  CheckboxLabel,
  UNDLabel,
  ImageInfo,
  DollarPrice,
  AgreeRow,
  PayRow,
  AgreementLink,
  CheckboxLabelAgreement,
  CheckboxInputAgreement,
  ButtonMakeOffer,
  AgreeRowButton,
  InputDay,
  TextDay,
  PriceContainer,
  EthPrice,
} from "./OfferRent.styles";

import { Background, Container } from "../../globalStyles";

import { verify, UND, cardNFT, down, info } from "./imports";

const OfferRent: React.FC = () => {
  return (
    <Background>
      <Back>
        <BackText>Back</BackText>
      </Back>
      <Container>
        <TitleText>Offer Rent</TitleText>
        <OfferContainer>
          <FirstCollum>
            <NameRow>
              <TextPrice>Deposit</TextPrice>
            </NameRow>
            <PriceRow>
              <EthSelect>
                <EthText>ETH</EthText>
                <ImageDown src={down} alt="down-image" />
              </EthSelect>
              <AmmountInput type="text" placeholder="Amount" />
              <CostSelect>
                <DollarText>0.00</DollarText>
              </CostSelect>
            </PriceRow>
            <NameRow>
              <TextPrice className="сost-per-day">Cost per Day</TextPrice>
            </NameRow>
            <PriceRow>
              <EthSelect>
                <EthText>ETH</EthText>
                <ImageDown src={down} alt="down-image" />
              </EthSelect>
              <AmmountInput type="text" placeholder="Amount" />
              <CostSelect>
                <DollarText>0.00</DollarText>
              </CostSelect>
            </PriceRow>
            <NameRow>
              <TextPrice className="сost-per-day">Rental Period</TextPrice>
            </NameRow>
            <NameRow className="margin-top">
              <TextDay>Day</TextDay>
              <InputDay placeholder="Custom date" />
              <PriceContainer>
                <EthPrice>0,035</EthPrice>
                <DollarPrice>258,25</DollarPrice>
              </PriceContainer>
            </NameRow>
            <NameRow className="margin-top">
              <TextOffer>Offer Expiration</TextOffer>
            </NameRow>
            <PriceRow>
              <DaySelect>
                3 day
                <ImageDownOffer src={down} alt="down-image" />
              </DaySelect>
              <TimeSelect>
                <TextTime>06 : 35</TextTime>
                <TextPmAm>PM</TextPmAm>
              </TimeSelect>
            </PriceRow>
            <NameRow className="margin-top-30">
              <TextOffer>Marketplace commission</TextOffer>
              <ImageInfo src={info} alt="info-image" />
              <PriceContainer>
                <EthPrice>0,035</EthPrice>
                <DollarPrice>258,25</DollarPrice>
              </PriceContainer>
            </NameRow>
            <NameRow>
              <TextOffer>Marketplace fee 3%</TextOffer>
              <UNDPrice>UND 2</UNDPrice>
            </NameRow>
            <PayRow>
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
                <DollarPrice>258,25</DollarPrice>
              </CheckboxLabel>
            </PayRow>
            <AgreeRow>
              <CheckboxInputAgreement
                type="checkbox"
                id="agreement"
                className="custom-checkbox"
              />
              <CheckboxLabelAgreement htmlFor="agreement">
                I agree to the platform {"\u00A0"}
                <AgreementLink>agreement...</AgreementLink>
              </CheckboxLabelAgreement>
            </AgreeRow>
            <AgreeRowButton>
              <ButtonMakeOffer>Make Offer</ButtonMakeOffer>
            </AgreeRowButton>
          </FirstCollum>
          <SecondCollum>
            <NameRow>
              <CollectionName>Collection Name</CollectionName>
              <ImageVerify src={verify} alt="verify-image" />
              <ImageUND src={UND} alt="undas-image" />
            </NameRow>
            <ImageNFT src={cardNFT} alt="undas-image" />
          </SecondCollum>
        </OfferContainer>
      </Container>
    </Background>
  );
};

export default OfferRent;
