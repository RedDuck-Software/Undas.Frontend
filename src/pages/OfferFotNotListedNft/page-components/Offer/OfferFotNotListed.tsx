import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useLocation, useNavigate } from "react-router-dom";

import {
  OfferContainer,
  CollectionName,
  FirstCollum,
  SecondCollum,
  NameRow,
  TextPrice,
  PriceRow,
  AmmountInput,
  CostSelect,
  DollarText,
  TextOffer,
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
  ButtonInfo,
  OverlayPopUp,
  FAQLink,
  Container,
  Filter,
  FilterItem,
  FilterTitle,
  Arrow,
  FilterMenu,
  MenuItem,
  BlockchainIMG,
  FilterMenuDay,
  FilterDay,
} from "./Offer.styles";

import LoadingModal from "../../../../components/LoadingModal/LoadingModal";
import NFTCard from "../../../../components/NFTCardOffers/NFTCard";
import { Marketplace__factory } from "../../../../typechain";
import { MARKETPLACE_ADDRESS } from "../../../../utils/addressHelpers";
import Context from "../../../../utils/Context";
import { bsc, solana } from "../../../CreateNFT/imports";
import { usd } from "../../../OfferRent/imports";
import { eth, info } from "../../imports";

const OfferFotNotListed: React.FC = () => {
  const [autoRedirect, setAutoRedirect] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { connector } = useContext(Context);

  const state: any = useLocation();
  const collectionId = state.state.state.collectionId;
  const tokenId = state.state.state.tokenId;
  const tokenContract = state.state.state.tokenAddress;
  console.log(state)
  const [offeredPrice, setOfferedPrice] = useState<string>();
  const navigate = useNavigate();
  async function makeSaleOffer() {
    if (!connector) {
      navigate("/login");
      return;
    }

    if (!offeredPrice) return alert("no offeredPrice");

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );
    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const tx = await MarketplaceContract.offerForNotListedToken(
      collectionId,
      tokenId,
      tokenContract,
      {
        value: ethers.utils.parseUnits(offeredPrice.toString(), "ether"),
      },
    );

    setLoading(true);
    await tx.wait();
    if (autoRedirect) {
      setAutoRedirect(false);
      navigate("/account");
    }
    setLoading(false);
  }

  const handleCleanForm = () => {
    setLoading(false);
  };

  const handleOffer = () => {
    setAutoRedirect(true);
    makeSaleOffer();
  };

  const [priceFilter, setPriceFilter] = useState<string>("");
  const [active, setActive] = useState<any>({
    price: false,
    day: false,
  });
  useEffect(() => {
    console.log(priceFilter);
  }, [active, priceFilter]);

  return (
    <OfferContainer>
      <LoadingModal
        isLoading={loading}
        setAutoRedirect={setAutoRedirect}
        addMore={handleCleanForm}
      />
      <Container>
        <FirstCollum>
          <NameRow>
            <TextPrice>Price</TextPrice>
          </NameRow>
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
            <AmmountInput
              type="number"
              placeholder="Amount"
              onChange={(e) => setOfferedPrice(e.target.value)}
            />
            <CostSelect>
              <DollarText>0.00</DollarText>
            </CostSelect>
          </PriceRow>
          <NameRow className="margin-top">
            <TextOffer>Offer Expiration</TextOffer>
          </NameRow>
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
            </CheckboxLabel>
            <DollarPrice className="margin-0">258,25</DollarPrice>
            <UNDPrice className="small-size">
              UND 2 <DollarPrice>258,25</DollarPrice>
            </UNDPrice>
          </PayRow>
        </FirstCollum>
        <SecondCollum>
          <NameRow>
            <CollectionName>Owner item</CollectionName>
          </NameRow>
          <NFTInfoContainer className="max-width">
            <NFTCard
              uri={state.state.state.URI}
              name={state.state.state.tokenName}
              collectionName={state.state.state.collectionName}
            />
          </NFTInfoContainer>
        </SecondCollum>
      </Container>
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
        <ButtonMakeOffer onClick={handleOffer}>Make Offer</ButtonMakeOffer>
      </AgreeRowButton>
    </OfferContainer>
  );
};

export default OfferFotNotListed;
