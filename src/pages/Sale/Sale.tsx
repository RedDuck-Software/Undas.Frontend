import { ethers } from "ethers";
import React, { useContext, useState, useEffect } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";

import {
  BlockTitle,
  BlockWrap,
  DurationWrap,
  ButtonsBlock,
  DurationButton,
  DurationRow,
  BlockButton,
  SwiperNFT,
} from "./Sale.styles";

import LoadingModal from "../../components/LoadingModal/LoadingModal";
import NFTCard from "../../components/NFTCardOffers/NFTCard";
import { Background, Container, PageTitle } from "../../globalStyles";
import { Marketplace__factory } from "../../typechain";
import { UndasGeneralNFT__factory } from "../../typechain";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";
import Context from "../../utils/Context";
import { bsc, solana } from "../CreateNFT/imports";
import { info, deleteNFT, eth, usd } from "../OfferRent/imports";
import {
  PageWrapper,
  NameRow,
  TextPrice,
  PriceRow,
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
  ImgDelete,
  AddNFTCard,
  AddNFTContainer,
  OverlayPopUp,
  ButtonInfo,
  FAQLink,
  Filter,
  FilterItem,
  FilterTitle,
  Arrow,
  FilterMenu,
  MenuItem,
  BlockchainIMG,
} from "../OfferRent/OfferRent.styles";
import ModalsNFT from "../OfferRent/page-components//ModalsNFT/ModalsNFT";
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
  const [autoRedirect, setAutoRedirect] = useState<boolean>(false);
  const [loadingSale, setLoadingSale] = useState<boolean>(false);
  const [loadingRent, setLoadingRent] = useState<boolean>(false);
  const [isNFTBundle, setIsNFTBundle] = useState<boolean>(false);
  const navigate = useNavigate();
  const { connector } = useContext(Context);
  const [priceForSale, setPriceForSale] = useState(0);
  const [colloteral, setColloteral] = useState(0);
  const [premium, setPremium] = useState(0);
  const [durationInDay, setDurationInDay] = useState(1);

  const state: any = useLocation();

  const URI = state.state.state.URI;
  const nameFromProps = state.state.state.name;
  const NFT_ADDRESS = state.state.state.tokenAddress;
  const tokenId = state.state.state.tokenId;

  async function sellToken() {
    if (!connector) return;
    if (tokenId == undefined && tokenId == null) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const NftContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);

    const approve = await NftContract.setApprovalForAll(
      MARKETPLACE_ADDRESS,
      true,
    );
    await approve.wait();
    const expectedValue = (priceForSale * 2) / 100;

    const formattedPrice = ethers.utils.parseUnits(
      priceForSale.toString(),
      "ether",
    );

    //undas contract
    const tx = await MarketplaceContract.bidExternal(
      NFT_ADDRESS,
      tokenId,
      formattedPrice,
      false,
      {
        value: ethers.utils.parseUnits(expectedValue.toString(), "ether"),
        gasLimit:355080
      },
    );
    setLoadingSale(true);
    await tx.wait();
    if (autoRedirect) {
      setAutoRedirect(false);
      navigate("/account");
    }
    setLoadingSale(false);
  }

  async function stakeToken() {
    if (!connector) return;

    if (tokenId == undefined && tokenId == null) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const NftContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);

    const approve = await NftContract.setApprovalForAll(
      MARKETPLACE_ADDRESS,
      true,
    );
    await approve.wait();

    const utcTimestamp = new Date().getTime();

    const deadlineUTC = utcTimestamp + durationInDay * 86400;
    const formattedColloteral = ethers.utils.parseUnits(
      colloteral.toString(),
      "ether",
    );
    const formattedPremium = ethers.utils.parseUnits(
      premium.toString(),
      "ether",
    );

    const amountToPay = (colloteral * 2) / 100;

    const tx = await MarketplaceContract.quoteForStakingExternal(
      NFT_ADDRESS,
      tokenId,
      formattedColloteral,
      formattedPremium,
      deadlineUTC,
      false,
      {
        value: ethers.utils.parseUnits(amountToPay.toString(), "ether"),
      },
    );

    setLoadingRent(true);
    await tx.wait();
    if (autoRedirect) {
      console.log("autoredirect");
      setAutoRedirect(false);
      navigate("/account");
    }
    setLoadingRent(false);
  }

  const handleNFTBundle = () => {
    setIsNFTBundle(!isNFTBundle);
  };

  const handleSell = () => {
    setAutoRedirect(true);
    sellToken();
  };

  const handleRent = () => {
    setAutoRedirect(true);
    stakeToken();
  };

  const handleCleanForm = () => {
    setLoadingSale(false);
    setLoadingRent(false);
    setIsNFTBundle(false);
    setPriceForSale(0);
    setColloteral(0);
    setPremium(0);
    setDurationInDay(1);
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
        isLoading={loadingSale || loadingRent}
        setAutoRedirect={setAutoRedirect}
        addMore={handleCleanForm}
      />
      <TopLinkWrapper>
        <Container>
          <TopLink onClick={() => history.back()}>Back</TopLink>
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
              onClick={handleNFTBundle}
            />
            <CheckboxLabelCollateral htmlFor="collateral">
              Make a Bundle
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
                <ImageInfo src={info} alt="info-image" className="margin-3" />
              </ButtonInfo>
            </OverlayTrigger>
          </ContainerCheckboxCollateral>
          <ContentWrapper>
            <LeftBlock>
              <BlockWrap>
                <BlockTitle>List item to sale</BlockTitle>
                <NameRow>
                  <TextPrice>Price</TextPrice>
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
                    onChange={(e) => setPriceForSale(+e.target.value)}
                  />
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
                      <DurationButton className="left">7</DurationButton>
                      <DurationButton>30</DurationButton>
                      <DurationButton>60</DurationButton>
                      <DurationButton>90</DurationButton>
                      <DurationButton>180</DurationButton>
                    </ButtonsBlock>
                  </DurationRow>
                </DurationWrap>
                <BlockButton onClick={handleSell}>Confirm</BlockButton>
              </BlockWrap>
              <BlockWrap>
                <BlockTitle>List item to rent</BlockTitle>
                <NameRow>
                  <TextPrice>
                    Deposit
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
                          className="margin"
                        />
                      </ButtonInfo>
                    </OverlayTrigger>
                  </TextPrice>
                </NameRow>
                <PriceRow>
                  <Filter className={active.price && "sort-day"}>
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
                  <Filter className={active.day && "sort-active"}>
                    <FilterItem
                      onClick={() => {
                        if (!active.day) {
                          setActive({ day: true });
                        } else setActive({ day: false });
                      }}
                    >
                      <FilterTitle>
                        <BlockchainIMG src={eth} alt="blockchain-image" />
                        ETH
                      </FilterTitle>
                      <Arrow className={active.day && "sort-active"} />
                    </FilterItem>
                    <FilterMenu className={active.day && "sort-active"}>
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
                  <InputDay placeholder="Min" />
                  <InputDay placeholder="Max" />
                </NameRow>
                <DurationWrap>
                  <TextPrice>Duration</TextPrice>
                  <DurationRow>
                    <TextDay>Day</TextDay>
                    <InputDay
                      placeholder="Custom date"
                      onChange={(e) => setDurationInDay(+e.target.value)}
                    />
                    <ButtonsBlock>
                      <DurationButton className="left">7</DurationButton>
                      <DurationButton>30</DurationButton>
                      <DurationButton>60</DurationButton>
                      <DurationButton>90</DurationButton>
                      <DurationButton>180</DurationButton>
                    </ButtonsBlock>
                  </DurationRow>
                </DurationWrap>
                <BlockButton onClick={handleRent}>Confirm</BlockButton>
              </BlockWrap>
            </LeftBlock>
            <RightBlock>
              <NameRow>
                <ItemAmount>NFT item</ItemAmount>
              </NameRow>
              <NFTInfoContainer>
                {URI && <NFTCard uri={URI} name={nameFromProps} />}
              </NFTInfoContainer>
            </RightBlock>
          </ContentWrapper>
          {isNFTBundle && (
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
