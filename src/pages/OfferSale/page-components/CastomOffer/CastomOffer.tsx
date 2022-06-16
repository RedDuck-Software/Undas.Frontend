import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import {
  OwnerItemText,
  NFTSelected,
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
  ButtonInfo,
  FAQLink,
  OverlayPopUp,
  AddNFTContainer,
  AddNFTCard,
  SwiperNFT,
} from "./CastomOffer.styles";

import { down, deleteNFT, info } from "../../imports";

import NFTCard from "../../../HomePage/page-components/NFTCard/NFTCard";
import ModalsNFT from "../../../OfferRent/page-components//ModalsNFT/ModalsNFT";

const CastomOffer: React.FC = () => {
  return (
    <div>
      <OwnerContainer>
        <OwnerItemText>Owner Item</OwnerItemText>
        <NFTSelected className="margin-bottom">
          NFT item’s selected 1
        </NFTSelected>
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
        <NFTSelected className="margin-bottom">
          NFT item’s selected 2
        </NFTSelected>
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
            <OverlayTrigger
              delay={{ show: 250, hide: 30000 }}
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
          </CheckboxLabel>
          <DollarPrice className="margin-0">258,25</DollarPrice>
          <UNDPrice className="small-size">
            UND 2 <DollarPrice>258,25</DollarPrice>
          </UNDPrice>
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
