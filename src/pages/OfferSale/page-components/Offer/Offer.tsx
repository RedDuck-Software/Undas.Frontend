import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useLocation, useNavigate } from "react-router-dom";
import { createClient } from "urql";

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

const Offer: React.FC = () => {
  const [autoRedirect, setAutoRedirect] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { connector } = useContext(Context);

  const state: any = useLocation();
  const [tokenName, setTokenName] = useState<string>();
  const [tokenURI, setTokenURI] = useState<string>();
  const [listingId, setListingId] = useState<string>();
  const [offeredPrice, setOfferedPrice] = useState<string>();
  const navigate = useNavigate();

  async function makeSaleOffer() {
    if (!connector) {
      navigate("/login");
      return;
    }
    if (!offeredPrice) return alert("no offeredPrice");
    if (listingId == undefined) return alert("!listingid");

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );
    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const tx = await MarketplaceContract.listingOffer(listingId, {
      value: ethers.utils.parseUnits(offeredPrice.toString(), "ether"),
    });

    setLoading(true);
    await tx.wait();
    if (autoRedirect) {
      setAutoRedirect(false);
      navigate("/account");
    }
    setLoading(false);
  }
  useEffect(() => {
    if (connector) {
      getTokenData();
    }
  }, [connector, listingId]);

  const getTokenData = async () => {
    const tokensQuery = await fetchData();
    console.log(tokensQuery);
    if (
      tokensQuery.data.listings[0] &&
      tokensQuery.data.listings[0].listingStatus == "ACTIVE"
    ) {
      setTokenName(tokensQuery.data.listings[0].tokenName);
      setTokenURI(tokensQuery.data.listings[0].tokenURI);
      setListingId(tokensQuery.data.listings[0].id);

      return;
    }
  };

  const APIURL =
    "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";
  console.log(state.state.tokenId);
  const tokensQuery = `
{
  listings(where:{tokenId:"${state.state.state.tokenId}" token:"${state.state.state.tokenAddress}"}){
    id
 	tokenId
    tokenURI
    price
    tokenName
    token
    tokenDescription
    seller
    listingStatus
  }
}
 `;
  const client = createClient({
    url: APIURL,
  });

  async function fetchData() {
    const data = await client.query(tokensQuery).toPromise();

    return data;
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
              uri={tokenURI ? tokenURI : state.state.state.URI}
              name={tokenName ? tokenName : state.state.state.tokenName}
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

export default Offer;
