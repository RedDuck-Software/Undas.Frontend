import React from "react";

import {
  OfferContainer,
  CollectionName,
  ImageVerify,
  ImageUND,
  ImageNFT,
  FirstCollum,
  SecondCollum,
  TextNameNFT,
  ImageUNDItem,
  ImageVerifyItem,
  NameRow,
  TextCreator,
  CreatorName,
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
} from "./Offer.styles";

import { verify, UND, cardNFT, down, info } from "../../imports";

const Offer: React.FC = () => {
  return (
    <OfferContainer>
      <FirstCollum>
        <NameRow>
          <CollectionName>Collection Name</CollectionName>
          <ImageVerify src={verify} alt="verify-image" />
          <ImageUND src={UND} alt="undas-image" />
        </NameRow>
        <ImageNFT src={cardNFT} alt="undas-image" />
      </FirstCollum>
      <SecondCollum>
        <NameRow>
          <TextNameNFT>Name NFT</TextNameNFT>
          <ImageVerifyItem src={verify} alt="verify-image" />
          <ImageUNDItem src={UND} alt="undas-image" />
        </NameRow>
        <NameRow>
          <TextCreator>creator by {"\u00A0"}</TextCreator>
          <CreatorName>Boria Boria</CreatorName>
        </NameRow>
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
        <NameRow>
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
      </SecondCollum>
    </OfferContainer>
  );
};

export default Offer;
