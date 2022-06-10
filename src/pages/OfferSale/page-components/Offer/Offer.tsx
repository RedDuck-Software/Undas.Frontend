import React from "react";

import {
  OfferContainer,
  CollectionName,
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
  NFTInfoContainer,
  CheckBoxCenter,
} from "./Offer.styles";

import NFTCard from "../../../HomePage/page-components/NFTCard/NFTCard";

import { down, info } from "../../imports";

const Offer: React.FC = () => {
  return (
    <OfferContainer>
      <FirstCollum>
        <NameRow>
          <TextPrice>Price</TextPrice>
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
        <NameRow className="margin-top-20">
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
            <ImageInfo src={info} alt="info-image" className="margin-top" />
          </CheckboxLabel>
          <DollarPrice className="margin-0">258,25</DollarPrice>
        </PayRow>
      </FirstCollum>
      <SecondCollum>
        <NameRow>
          <CollectionName>Owner item</CollectionName>
        </NameRow>
        <NFTInfoContainer>
          <NFTCard uri="nft1" name="NFTCard" />
        </NFTInfoContainer>
      </SecondCollum>
      <AgreeRow>
        <CheckBoxCenter>
          <CheckboxInputAgreement
            type="checkbox"
            id="agreement"
            className="custom-checkbox"
          />
          <CheckboxLabelAgreement htmlFor="agreement">
            I agree to the platform {"\u00A0"}
            <AgreementLink>agreement...</AgreementLink>
          </CheckboxLabelAgreement>
        </CheckBoxCenter>
      </AgreeRow>
      <AgreeRowButton>
        <ButtonMakeOffer>Make Offer</ButtonMakeOffer>
      </AgreeRowButton>
    </OfferContainer>
  );
};

export default Offer;
