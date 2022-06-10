import React from "react";

import {
  OwnerItemText,
  NFTSelected,
  NFTInfoContainer,
  AddNFT,
  SelectedNFTCardBox,
  TextPrice,
  EthSelect,
  PriceRow,
  EthText,
  ImageDown,
  AmmountInput,
  CostSelect,
  DollarText,
  OwnerContainer,
  ImgDelete,
  DaySelect,
  TextOffer,
  ImageDownOffer,
  TimeSelect,
  TextTime,
  TextPmAm,
  PayRow,
  CheckboxInput,
  UNDLabel,
  CheckboxLabel,
  ImageInfo,
  DollarPrice,
  NameRow,
  UNDPrice,
  BuyContainer,
  AgreeRow,
  CheckBoxCenter,
  CheckboxInputAgreement,
  AgreementLink,
  CheckboxLabelAgreement,
  AgreeRowButton,
  ButtonMakeOffer,
} from "./CastomOffer.styles";

import { addNFT, down, deleteNFT, info } from "../../imports";

import NFTCard from "../../../HomePage/page-components/NFTCard/NFTCard";

const CastomOffer: React.FC = () => {
  return (
    <div>
      <OwnerContainer>
        <OwnerItemText>Owner Item</OwnerItemText>
        <NFTSelected>NFT item’s selected 1</NFTSelected>
        <SelectedNFTCardBox>
          <NFTInfoContainer>
            <NFTCard uri="nft1" name="NFTCard" />
          </NFTInfoContainer>
          <NFTInfoContainer className="disable">
            <NFTCard uri="nft2" name="NFTCard2" />
            <AddNFT src={addNFT} alt="add-nft-image" />
          </NFTInfoContainer>
        </SelectedNFTCardBox>
        <TextPrice>Offer a surcharge to the owner</TextPrice>
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
      </OwnerContainer>
      <BuyContainer>
        <OwnerItemText>My Item</OwnerItemText>
        <NFTSelected>NFT item’s selected 2</NFTSelected>
        <SelectedNFTCardBox className="margin-20">
          <NFTInfoContainer>
            <NFTCard uri="nft1" name="NFTCard" />
            <ImgDelete src={deleteNFT} alt="delete-nft-image" />
          </NFTInfoContainer>
          <NFTInfoContainer>
            <NFTCard uri="nft1" name="NFTCard" />
            <ImgDelete src={deleteNFT} alt="delete-nft-image" />
          </NFTInfoContainer>
          <NFTInfoContainer>
            <NFTCard uri="nft1" name="NFTCard" />
            <ImgDelete src={deleteNFT} alt="delete-nft-image" />
          </NFTInfoContainer>
          <NFTInfoContainer className="disable">
            <NFTCard uri="nft2" name="NFTCard2" />
            <AddNFT src={addNFT} alt="add-nft-image" />
          </NFTInfoContainer>
        </SelectedNFTCardBox>
        <TextPrice>Offer your surcharge</TextPrice>
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
        <TextOffer>Offer Expiration</TextOffer>
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
      </BuyContainer>
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
    </div>
  );
};

export default CastomOffer;
