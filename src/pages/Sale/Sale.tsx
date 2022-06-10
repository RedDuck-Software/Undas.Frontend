import React from "react";

import {
  BlockTitle,
  BlockWrap,
  DurationWrap,
  ButtonsBlock,
  DurationButton,
  DurationRow,
  BlockButton,
} from "./Sale.styles";

import { Background, Container, PageTitle } from "../../globalStyles";
import NFTCard from "../HomePage/page-components/NFTCard/NFTCard";
import { down, info, deleteNFT } from "../OfferRent/imports";
import {
  PageWrapper,
  NameRow,
  TextPrice,
  PriceRow,
  EthSelect,
  EthText,
  ImageDown,
  AmmountInput,
  CostSelect,
  DollarText,
  ImageInfo,
  AgreementLink,
  CheckboxLabelAgreement,
  CheckboxInputAgreement,
  InputDay,
  TextDay,
  CheckboxLabelCollateral,
  CheckboxInputCollateral,
  ContainerCheckboxCollateral,
  NFTInfoContainer,
  SelectedNFT,
  SelectedNFTCardBox,
  ImgDelete,
  AddNFT,
  AddNFTCard,
  AddNFTButton,
  AddNFTContainer,
} from "../OfferRent/OfferRent.styles";
import {
  LeftBlock,
  RightBlock,
  ContentWrapper,
  TopLinkWrapper,
  TopLink,
  BottomWrapper,
  CheckBoxWrapper,
  Button,
  ItemAmount,
} from "../Rent/Rent.styles";

const Sale: React.FC = () => {
  return (
    <Background>
      <TopLinkWrapper>
        <Container>
          <TopLink to="/">Back</TopLink>
        </Container>
      </TopLinkWrapper>
      <Container>
        <PageWrapper>
          <PageTitle>List on market</PageTitle>
          <ContainerCheckboxCollateral>
            <CheckboxInputCollateral
              type="checkbox"
              id="collateral"
              className="custom-checkbox"
            />
            <CheckboxLabelCollateral htmlFor="collateral">
              Make a Bundle
            </CheckboxLabelCollateral>
            <ImageInfo src={info} alt="info-image" />
          </ContainerCheckboxCollateral>
          <ContentWrapper>
            <LeftBlock>
              <BlockWrap>
                <BlockTitle>List item to sale</BlockTitle>
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
                <DurationWrap>
                  <TextPrice>Duration</TextPrice>
                  <DurationRow>
                    <TextDay>Day</TextDay>
                    <InputDay placeholder="Custom date" />
                    <ButtonsBlock>
                      <DurationButton>7</DurationButton>
                      <DurationButton>30</DurationButton>
                      <DurationButton>60</DurationButton>
                      <DurationButton>90</DurationButton>
                      <DurationButton>180</DurationButton>
                    </ButtonsBlock>
                  </DurationRow>
                </DurationWrap>
                <BlockButton>Confirm</BlockButton>
              </BlockWrap>
              <BlockWrap>
                <BlockTitle>List item to rent</BlockTitle>
                <NameRow>
                  <TextPrice>
                    Deposit
                    <ImageInfo src={info} alt="info-image" />
                  </TextPrice>
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
                  <InputDay placeholder="Min" />
                  <InputDay placeholder="Max" />
                </NameRow>
                <DurationWrap>
                  <TextPrice>Duration</TextPrice>
                  <DurationRow>
                    <TextDay>Day</TextDay>
                    <InputDay placeholder="Custom date" />
                    <ButtonsBlock>
                      <DurationButton>7</DurationButton>
                      <DurationButton>30</DurationButton>
                      <DurationButton>60</DurationButton>
                      <DurationButton>90</DurationButton>
                      <DurationButton>180</DurationButton>
                    </ButtonsBlock>
                  </DurationRow>
                </DurationWrap>
                <BlockButton>Confirm</BlockButton>
              </BlockWrap>
            </LeftBlock>
            <RightBlock>
              <NameRow>
                <ItemAmount>NFT item</ItemAmount>
              </NameRow>
              <NFTInfoContainer>
                <NFTCard uri="nft1" name="NFTCard" />
              </NFTInfoContainer>
            </RightBlock>
          </ContentWrapper>
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
            <AddNFTContainer>
              <AddNFTCard>
                <AddNFTButton>
                  <AddNFT className="add-btn">+</AddNFT>
                </AddNFTButton>
              </AddNFTCard>
            </AddNFTContainer>
          </SelectedNFTCardBox>
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
            <Button>Complete listing</Button>
          </BottomWrapper>
        </PageWrapper>
      </Container>
    </Background>
  );
};

export default Sale;
