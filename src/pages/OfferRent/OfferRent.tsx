import React, { useContext, useState } from "react";

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

import { verify, UND, down, info } from "./imports";

import { useSelector } from "react-redux";
import { useName, useToken, useUri } from "../../store/";
import Context from "../../utils/Context";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";
import { Marketplace__factory } from "../../typechain/factories/Marketplace__factory";
// import { OnlyOne__factory } from "../../typechain";

import { ethers } from "ethers";
// import { cp } from "fs/promises";

const OfferRent: React.FC = () => {
  // const dispatch = useDispatch();
  const litsingId = useSelector(useToken);
  const tokenName = useSelector(useName);
  const tokenUri = useSelector(useUri);
  const { connector } = useContext(Context);

  const [premium, setPremium] = useState(0);
  const [colloteral, setColloteral] = useState(0);
  const [isTokenFee, setIsTokenFee] = useState(false);

  async function makeRentOffer() {
    if (!connector) return;
    // if (priceInNum == undefined) {
    //   return;
    // }
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);
    const userBalanceInWei = ethers.utils.formatUnits(
      await signer.getBalance(),
    );

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );
    //TODO:NORMAL APPROVAL
    // const ApprovalTokenAmount = (priceInNum * 2) / 100;

    // const OnlyOneContract = OnlyOne__factory.connect(
    //   "0x2DC8B77b750657Bf3480b20693Bc4Dc0dce45105",
    //   signer,
    // );

    // console.log(OnlyOneContract)
    // OnlyOneContract.approve(
    //   "0x54FAf9EE113f2cd8D921D46C47c3A67a26E3A77F",
    //   ethers.utils.parseUnits(ApprovalTokenAmount.toString(), 18),
    // );

    console.log(colloteral + premium);
    const amountToPay = colloteral + premium + (premium * 20) / 100;

    console.log("amountToPay", amountToPay);
    console.log("litsingId", litsingId);
    console.log("dsadas", ethers.utils.parseEther("1"));
    const tx = await MarketplaceContract.stakingOffer(
      litsingId,
      ethers.utils.parseUnits(colloteral.toString(), "ether"),
      ethers.utils.parseUnits(premium.toString(), "ether"),
      {
        value: ethers.utils.parseUnits(amountToPay.toString(), "ether"),
      },
    );

    await tx.wait();
  }

  console.log(tokenName, tokenUri, litsingId);

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
              <AmmountInput
                type="text"
                placeholder="Amount"
                onChange={(e) => setColloteral(+e.target.value)}
              />
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
              <AmmountInput
                type="text"
                placeholder="Amount"
                onChange={(e) => setPremium(+e.target.value)}
              />
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
              <CheckboxLabel
                htmlFor="purchases"
                onClick={() => setIsTokenFee((prevState) => !prevState)}
              >
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
              <ButtonMakeOffer onClick={() => makeRentOffer()}>
                Make Offer
              </ButtonMakeOffer>
            </AgreeRowButton>
          </FirstCollum>
          <SecondCollum>
            <NameRow>
              <CollectionName>{tokenName}</CollectionName>
              <ImageVerify src={verify} alt="verify-image" />
              <ImageUND src={UND} alt="undas-image" />
            </NameRow>
            <ImageNFT src={tokenUri} alt="undas-image" />
          </SecondCollum>
        </OfferContainer>
      </Container>
    </Background>
  );
};

export default OfferRent;
