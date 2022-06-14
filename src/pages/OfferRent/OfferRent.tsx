import React, { useContext, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import {
  PageWrapper,
  OfferContainer,
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
  PayRow,
  AgreementLink,
  CheckboxLabelAgreement,
  CheckboxInputAgreement,
  InputDay,
  TextDay,
  PriceContainer,
  EthPrice,
  CheckboxLabelCollateral,
  CheckboxInputCollateral,
  ContainerCheckboxCollateral,
  NFTInfoContainer,
  SelectedNFT,
  ImgDelete,
  AddNFTCard,
  AddNFTContainer,
  ButtonInfo,
  OverlayPopUp,
  FAQLink,
  SwiperNFT,
} from "./OfferRent.styles";

import {
  TopLinkWrapper,
  TopLink,
  BottomWrapper,
  CheckBoxWrapper,
  Button,
  ItemAmount,
} from "../Rent/Rent.styles";

import ModalsNFT from "./page-components//ModalsNFT/ModalsNFT";
import { Background, Container, PageTitle } from "../../globalStyles";

import { down, info, deleteNFT } from "./imports";
import { useSelector } from "react-redux";
import { useName, useToken, useUri } from "../../store/";
import Context from "../../utils/Context";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";
import { Marketplace__factory } from "../../typechain";
// import { OnlyOne__factory } from "../../typechain";

import { ethers } from "ethers";
// import { cp } from "fs/promises";

import NFTCard from "../HomePage/page-components/NFTCard/NFTCard";

const OfferRent: React.FC = () => {
  const litsingId = useSelector(useToken);
  const tokenName = useSelector(useName);
  const tokenUri = useSelector(useUri);
  const { connector } = useContext(Context);

  const [premium, setPremium] = useState(0);
  const [colloteral, setColloteral] = useState(0);

  async function makeRentOffer() {
    if (!connector) return;
    // if (priceInNum == undefined) {
    //   return;
    // }
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );
    // TODO: NORMAL APPROVAL
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

    const amountToPay = colloteral + premium + (premium * 20) / 100;

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

  return (
    <Background>
      <TopLinkWrapper>
        <Container>
          <TopLink to="/">Back</TopLink>
        </Container>
      </TopLinkWrapper>
      <Container>
        <PageWrapper>
          <PageTitle>Offer Rent</PageTitle>
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
                  type="number"
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
                  type="number"
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
                <OverlayTrigger
                  delay={{ show: 250, hide: 3000 }}
                  placement="top"
                  overlay={
                    <OverlayPopUp>
                      Speech bubble that will fall out when you click on the
                      information on the icon <FAQLink href="/faq">FAQ</FAQLink>
                    </OverlayPopUp>
                  }
                >
                  <ButtonInfo>
                    <ImageInfo src={info} alt="info-image" />
                  </ButtonInfo>
                </OverlayTrigger>
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
                        className="margin-top"
                      />
                    </ButtonInfo>
                  </OverlayTrigger>
                </CheckboxLabel>
                <DollarPrice className="margin-0">258,25</DollarPrice>
              </PayRow>
            </FirstCollum>
            <SecondCollum>
              <NameRow>
                <ItemAmount>Owner item</ItemAmount>
              </NameRow>
              <NFTInfoContainer>
                <NFTCard uri={tokenUri} name={tokenName} />
              </NFTInfoContainer>
            </SecondCollum>
            <NameRow>
              <SelectedNFT>NFT item’s selected{"\u00A0"}</SelectedNFT>
              <SelectedNFT>2</SelectedNFT>
            </NameRow>
            <SwiperNFT
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="rent-slider"
              modules={[Navigation]}
              loop={false}
              navigation={true}
            >
              <>
                <SwiperSlide>
                  <NFTCard uri="nft1" name="NFTCard" />
                  <ImgDelete src={deleteNFT} alt="delete-nft-image" />
                </SwiperSlide>
                <SwiperSlide>
                  <NFTCard uri="nft1" name="NFTCard" />
                  <ImgDelete src={deleteNFT} alt="delete-nft-image" />
                </SwiperSlide>
                <SwiperSlide>
                  <NFTCard uri="nft1" name="NFTCard" />
                  <ImgDelete src={deleteNFT} alt="delete-nft-image" />
                </SwiperSlide>
                <SwiperSlide>
                  <AddNFTContainer>
                    <AddNFTCard>
                      <ModalsNFT />
                    </AddNFTCard>
                  </AddNFTContainer>
                </SwiperSlide>
              </>
            </SwiperNFT>
          </OfferContainer>
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
            <Button onClick={makeRentOffer}>Make Offer</Button>
          </BottomWrapper>
        </PageWrapper>
      </Container>
    </Background>
  );
};

export default OfferRent;
