import React from "react";

import {
  TitleText,
  Back,
  BackText,
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
  InputDay,
  TextDay,
  PriceContainer,
  EthPrice,
  CheckboxLabelCollateral,
  CheckboxInputCollateral,
  ContainerCheckboxCollateral,
  NFTInfoContainer,
  SelectedNFT,
  SelectedNFTCardBox,
  ImgDelete,
  AddNFT,
  CheckBoxCenter,
} from "./OfferRent.styles";

import { Background, Container } from "../../globalStyles";

import { down, info, deleteNFT, addNFT } from "./imports";

import NFTCard from "../HomePage/page-components/NFTCard/NFTCard";

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
              <ContainerCheckboxCollateral>
                <CheckboxInputCollateral
                  type="checkbox"
                  id="collateral"
                  className="custom-checkbox"
                />
                <CheckboxLabelCollateral htmlFor="collateral">
                  Offer NFT as Collateral
                </CheckboxLabelCollateral>
              </ContainerCheckboxCollateral>
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
          <NameRow>
            <SelectedNFT>NFT item’s selected{"\u00A0"}</SelectedNFT>
            <SelectedNFT>2</SelectedNFT>
          </NameRow>
          <SelectedNFTCardBox>
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
      </Container>
    </Background>
  );
};

export default OfferRent;
