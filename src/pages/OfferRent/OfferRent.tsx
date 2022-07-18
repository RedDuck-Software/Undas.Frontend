import { ethers } from "ethers";
import React, { useContext, useState, useEffect } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import { createClient } from "urql";

import { info, deleteNFT, eth, usd } from "./imports";
import {
  PageWrapper,
  OfferContainer,
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
  ContainerCollum,
  Filter,
  FilterItem,
  FilterTitle,
  Arrow,
  FilterMenu,
  MenuItem,
  BlockchainIMG,
  FilterMenuDay,
  FilterDay,
} from "./OfferRent.styles";
import ModalsNFT from "./page-components//ModalsNFT/ModalsNFT";

import LoadingModal from "../../components/LoadingModal/LoadingModal";
import Error from "../../components/Modal/Error/Error";
import NFTCard from "../../components/NFTCardOffers/NFTCard";
import { Background, Container, PageTitle } from "../../globalStyles";
import { Marketplace__factory } from "../../typechain";
import { TransactionError } from "../../types/global";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";
import Context from "../../utils/Context";
import { bsc, solana } from "../CreateNFT/imports";
import {
  TopLinkWrapper,
  TopLink,
  BottomWrapper,
  CheckBoxWrapper,
  Button,
  ItemAmount,
} from "../Rent/Rent.styles";

const OfferRent: React.FC = () => {
  const [showTransactionError, setShowTransactionError] =
    useState<boolean>(false);
  const [transactionError, setTransactionError] = useState<TransactionError>({
    code: -1,
    message: "",
  });

  const [autoRedirect, setAutoRedirect] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { connector } = useContext(Context);

  const state: any = useLocation();

  const [premium, setPremium] = useState(0);
  const [colloteral, setColloteral] = useState(0);
  const [listingId, setListingId] = useState("");
  const [URI, setURI] = useState("");
  const [name, setName] = useState("");
  const [isNFTCollateral, setIsNFTCollateral] = useState(false);
  const navigate = useNavigate();

  async function makeRentOffer() {
    if (!connector) {
      navigate("/login");
      return;
    }

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const amountToPay = (colloteral + premium + (premium * 20) / 100).toFixed(
      7,
    );
    const tx = await MarketplaceContract.stakingOffer(
      listingId,
      ethers.utils.parseUnits(colloteral.toString(), "ether"),
      ethers.utils.parseUnits(premium.toString(), "ether"),
      {
        value: ethers.utils.parseUnits(amountToPay.toString(), "ether"),
      },
    );

    try {
      setLoading(true);
      await tx.wait();
      if (autoRedirect) {
        setAutoRedirect(false);
        navigate("/account");
      }
      setLoading(false);
    } catch (error: any) {
      setTransactionError(error);
      setShowTransactionError(true);
    }
  }

  useEffect(() => {
    if (connector) {
      getTokenData();
    }
  }, [connector, listingId]);

  const getTokenData = async () => {
    const tokensQuery = await fetchData();

    if (
      tokensQuery.data.stakingListings[0] &&
      tokensQuery.data.stakingListings[0].stakingStatus == "ACTIVE"
    ) {
      setListingId(tokensQuery.data.stakingListings[0].id);
      setURI(tokensQuery.data.stakingListings[0].tokenURI);
      setName(tokensQuery.data.stakingListings[0].tokenName);

      return;
    }
  };

  const APIURL =
    "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

  const tokensQuery = `
    {
      stakingListings(where:{tokenId:"${state.state.state.tokenId}" token:"${state.state.state.tokenAddress}"}){
        id
        tokenId
        tokenURI
        tokenDescription
        seller
        stakingStatus
        tokenName
        tokenURI
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

  const handleNFTCollateralMode = () => {
    setIsNFTCollateral(!isNFTCollateral);
  };

  const handleCleanForm = () => {
    setLoading(false);
  };

  const handleOffer = () => {
    setAutoRedirect(true);
    makeRentOffer();
  };

  const [priceFilter, setPriceFilter] = useState<string>("");
  const [active, setActive] = useState<any>({
    price: false,
    event: false,
    day: false,
  });

  useEffect(() => {
    console.log(priceFilter);
  }, [active, priceFilter]);

  return (
    <Background>
      <LoadingModal
        isLoading={loading}
        setAutoRedirect={setAutoRedirect}
        addMore={handleCleanForm}
      />
      {showTransactionError && transactionError.message.length > 0 && (
        <Error
          error={transactionError}
          show={showTransactionError}
          setShow={setShowTransactionError}
        />
      )}
      <TopLinkWrapper>
        <Container>
          <TopLink onClick={() => history.back()}>Back</TopLink>
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
            <CheckboxLabelCollateral
              htmlFor="collateral"
              onClick={handleNFTCollateralMode}
            >
              Offer NFT as Collateral
            </CheckboxLabelCollateral>
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
          </ContainerCheckboxCollateral>
          <OfferContainer>
            <ContainerCollum>
              <FirstCollum>
                <NameRow>
                  <TextPrice>Deposit</TextPrice>
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
                <NameRow className="margin-top-30">
                  <TextOffer className="no-margin">
                    Marketplace commission
                  </TextOffer>
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
                  <UNDPrice className="small-size">
                    UND 2 <DollarPrice>258,25</DollarPrice>
                  </UNDPrice>
                </PayRow>
              </FirstCollum>
              <SecondCollum>
                <NameRow>
                  <ItemAmount>Owner item</ItemAmount>
                </NameRow>
                <NFTInfoContainer className="max-width">
                  <NFTCard
                    uri={URI ? URI : state.state.state.URI}
                    name={name ? name : state.state.state.name}
                  />
                </NFTInfoContainer>
              </SecondCollum>
            </ContainerCollum>
            {isNFTCollateral && (
              <>
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
                </SwiperNFT>
              </>
            )}
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
            <Button onClick={handleOffer}>Make Offer</Button>
          </BottomWrapper>
        </PageWrapper>
      </Container>
    </Background>
  );
};

export default OfferRent;
