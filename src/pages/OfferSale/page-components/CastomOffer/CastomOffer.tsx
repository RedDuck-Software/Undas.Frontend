import React, { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import {
  OwnerItemText,
  NFTSelected,
  TextPrice,
  PriceRow,
  AmmountInput,
  CostSelect,
  DollarText,
  OwnerContainer,
  ImgDelete,
  TextOffer,
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
  Filter,
  FilterItem,
  FilterTitle,
  Arrow,
  FilterMenu,
  MenuItem,
  BlockchainIMG,
  FilterMenuDay,
  FilterDay,
} from "./CastomOffer.styles";

import { deleteNFT, info, eth } from "../../imports";

import NFTCard from "../../../../components/NFTCardOffers/NFTCard";
import ModalsNFT from "../../../OfferRent/page-components//ModalsNFT/ModalsNFT";
import { usd } from "../../../OfferRent/imports";
import { bsc, solana } from "../../../CreateNFT/imports";

const CastomOffer: React.FC = () => {
  const [priceFilter, setPriceFilter] = useState<string>("");
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
    day: false,
  });
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
          <Filter className={active.price && "sort-active"}>
            <FilterItem
              onClick={() => {
                if (!active.price) {
                  setActive({ price: true });
                } else setActive({ price: false });
              }}
            >
              <FilterTitle>
                <BlockchainIMG src={eth} alt="blockchain-image" />
                ETH
              </FilterTitle>
              <Arrow className={active.price && "sort-active"} />
            </FilterItem>
            <FilterMenu className={active.price && "sort-active"}>
              <MenuItem
                hover={true}
                onClick={() => {
                  setPriceFilter("");
                }}
              >
                <BlockchainIMG src={eth} alt="blockchain-image" />
                ETH
              </MenuItem>
              <MenuItem
                hover={true}
                onClick={() => {
                  setPriceFilter("");
                }}
              >
                <BlockchainIMG src={usd} alt="blockchain-image" />
                USD
              </MenuItem>
              <MenuItem
                hover={true}
                onClick={() => {
                  setPriceFilter("");
                }}
              >
                <BlockchainIMG src={solana} alt="blockchain-image" />
                Solana
              </MenuItem>
              <MenuItem
                hover={true}
                onClick={() => {
                  setPriceFilter("");
                }}
              >
                <BlockchainIMG src={bsc} alt="blockchain-image" />
                BNB
              </MenuItem>
            </FilterMenu>
          </Filter>
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
          <Filter className={active.event && "sort-day"}>
            <FilterItem
              onClick={() => {
                if (!active.event) {
                  setActive({ event: true });
                } else setActive({ event: false });
              }}
            >
              <FilterTitle>
                <BlockchainIMG src={eth} alt="blockchain-image" />
                ETH
              </FilterTitle>
              <Arrow className={active.event && "sort-active"} />
            </FilterItem>
            <FilterMenu className={active.event && "sort-active"}>
              <MenuItem
                hover={true}
                onClick={() => {
                  setPriceFilter("");
                }}
              >
                <BlockchainIMG src={eth} alt="blockchain-image" />
                ETH
              </MenuItem>
              <MenuItem
                hover={true}
                onClick={() => {
                  setPriceFilter("");
                }}
              >
                <BlockchainIMG src={usd} alt="blockchain-image" />
                USD
              </MenuItem>
              <MenuItem
                hover={true}
                onClick={() => {
                  setPriceFilter("");
                }}
              >
                <BlockchainIMG src={solana} alt="blockchain-image" />
                Solana
              </MenuItem>
              <MenuItem
                hover={true}
                onClick={() => {
                  setPriceFilter("");
                }}
              >
                <BlockchainIMG src={bsc} alt="blockchain-image" />
                BNB
              </MenuItem>
            </FilterMenu>
          </Filter>
          <AmmountInput type="text" placeholder="Amount" />
          <CostSelect>
            <DollarText>0.00</DollarText>
          </CostSelect>
        </PriceRow>
        <TextOffer>Offer Expiration</TextOffer>
        <PriceRow>
          <FilterDay className={active.day && "sort-day"}>
            <FilterItem
              onClick={() => {
                if (!active.day) {
                  setActive({ day: true });
                } else setActive({ day: false });
              }}
            >
              <FilterTitle className="day">3 day</FilterTitle>
              <Arrow className={active.day && "day-active"} />
            </FilterItem>
            <FilterMenuDay className={active.day && "day-active"}>
              <MenuItem
                hover={true}
                onClick={() => {
                  setPriceFilter("");
                }}
              >
                24 hours
              </MenuItem>
              <MenuItem
                hover={true}
                onClick={() => {
                  setPriceFilter("");
                }}
              >
                1 week
              </MenuItem>
              <MenuItem
                hover={true}
                onClick={() => {
                  setPriceFilter("");
                }}
              >
                1 month
              </MenuItem>
            </FilterMenuDay>
          </FilterDay>
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
