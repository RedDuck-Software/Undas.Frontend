import { ethers } from "ethers";
import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
// import { createClient } from "urql";

import {
  TitleText,
  Back,
  BackText,
  MainContainer,
  ContentItem,
  ContentItemName,
  InputBlock,
  RentalPeriod,
  ContentItemPriceWrap,
  ContentItemPriceEth,
  ContentItemPriceUsd,
  CollectionName,
  FirstCollumn,
  SecondCollumn,
  NameRow,
  AgreeRow,
  AgreementLink,
  CheckboxLabelAgreement,
  CheckboxInputAgreement,
  Button,
  ButtonsBlock,
  NFTInfoContainer,
  CheckBoxCenter,
  ContentWrap,
} from "./InteractionRent.styles";

// import LoadingModal from "../../components/LoadingModal/LoadingModal";
import NFTCard from "../../components/NFTCardOffers/NFTCard";
import { Container } from "../../globalStyles";
import {
  Marketplace__factory,
  UndasGeneralNFT__factory,
} from "../../typechain";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";
import Context from "../../utils/Context";

// import Context from "../../utils/Context";

const InteractionRent: React.FC = () => {
  // const [, setAutoRedirect] = useState<boolean>(false);
  // const [loading, setLoading] = useState<boolean>(false);
  const { connector } = useContext(Context);

  const state: any = useLocation();
  const stakingId = state.state.tokenId;
  const premium = state.state.premium;
  const tokenAddress = state.state.tokenAddress;
  async function ReturnNFT(stakingId: number) {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const NFTContract = UndasGeneralNFT__factory.connect(tokenAddress, signer);
    const approve = await NFTContract.setApprovalForAll(
      MARKETPLACE_ADDRESS,
      true,
    );
    await approve.wait();

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );
    const tx = await MarketplaceContract.stopRental(stakingId); //this is staking id :)

    await tx.wait();
  }
  async function PayPremium(stakingId: number, premium: number) {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const amountToPay = (+premium * 20) / 100 + +premium;

    const tx = await MarketplaceContract.payPremium(stakingId, false, {
      value: amountToPay.toString(),
    }); //this is staking id :)

    await tx.wait();
  }

  const [, setRentalDays] = useState<number | string>();

  const handleRentalDays = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setRentalDays(value);
  };

  return (
    <MainContainer>
      <Back onClick={() => history.back()}>
        <BackText>Back</BackText>
      </Back>
      <Container>
        <TitleText>Interaction with Rent</TitleText>
        <ContentWrap>
          <FirstCollumn>
            <ContentItem>
              <ContentItemName className="width">
                Extend rental
                <InputBlock>
                  <RentalPeriod
                    id="period"
                    placeholder="7 for 90 days"
                    onChange={handleRentalDays}
                  />
                </InputBlock>
                days
              </ContentItemName>
              <ContentItemPriceWrap className="column">
                <ContentItemPriceEth>0,035</ContentItemPriceEth>
                <ContentItemPriceUsd>$258,25</ContentItemPriceUsd>
              </ContentItemPriceWrap>
            </ContentItem>
          </FirstCollumn>
          <SecondCollumn>
            <NameRow>
              <CollectionName>Owner item</CollectionName>
            </NameRow>
            <NFTInfoContainer className="max-width">
              <NFTCard
                uri={state.state.URI}
                name={state.state.name}
                collectionName={state.state.collectionName}
              />
            </NFTInfoContainer>
          </SecondCollumn>
        </ContentWrap>
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
        <ButtonsBlock>
          <Button onClick={() => PayPremium(stakingId, premium)}>
            Extend rental
          </Button>
          <Button onClick={() => ReturnNFT(stakingId)}>
            Return the leased NFT
          </Button>
        </ButtonsBlock>
      </Container>
    </MainContainer>
  );
};

export default InteractionRent;
