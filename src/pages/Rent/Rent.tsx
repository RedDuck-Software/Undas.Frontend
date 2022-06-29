import React, { useContext, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import {
  TopLinkWrapper,
  TopLink,
  ContentWrapper,
  BottomWrapper,
  LeftBlock,
  RightBlock,
  ContentItem,
  ContentItemName,
  ContentItemPriceWrap,
  ContentItemPriceEth,
  ContentItemPriceUsd,
  ContentItemPriceUnd,
  InputBlock,
  RentalLable,
  CheckboxRow,
  CheckboxInput,
  CheckboxLabel,
  Total,
  TotalPrice,
  TotalPriceEth,
  TotalPriceUnd,
  Plus,
  ItemAmount,
  CheckBoxWrapper,
  Button,
} from "./Rent.styles";

import {
  PageWrapper,
  UNDLabel,
  ImageInfo,
  AgreementLink,
  CheckboxLabelAgreement,
  CheckboxInputAgreement,
  NFTInfoContainer,
  OverlayPopUp,
  ButtonInfo,
  FAQLink,
} from "../OfferRent/OfferRent.styles";

import { Background, Container, PageTitle } from "../../globalStyles";

import { info } from "../OfferRent/imports";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import NFTCard from "../../components/NFTCardOffers/NFTCard";
import { RentalPeriod } from "../NFTPage/NFTPage.styles";
import Context from "../../utils/Context";
import { Marketplace__factory } from "../../typechain";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";

const Rent: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const state: any = useLocation();
  const { connector } = useContext(Context);
  const URI = state.state.state.URI;
  const nameFrom = state.state.state.name;
  const colloteral = ethers.utils.formatUnits(
    state.state.state.colloteralWei.toString(),
  );
  const premium = state.state.state.premium;
  const stakingId = state.state.state.stakingId;
  const navigate = useNavigate();

  async function rentToken(
    stakingId: number,
    colloteralWei?: number,
    premium?: number,
  ) {
    if (!connector) {
      navigate("/login");
      return;
    }

    if (colloteralWei == undefined) {
      return;
    }
    if (premium == undefined) {
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
    //todo in wei
    const amountToPay = (
      +colloteralWei +
      +premium +
      (+premium * 20) / 100
    ).toFixed(7);
    const tx = await MarketplaceContract.rentNFT(stakingId, false, {
      value: ethers.utils.parseUnits(amountToPay.toString(), "ether"),
    });
    setLoading(true);
    await tx.wait();
    console.log("rent done");
    setLoading(false);
  }

  return (
    <Background>
      {loading ? (
        <PageTitle>LOADING PENDING...</PageTitle>
      ) : (
        <>
          <TopLinkWrapper>
            <Container>
              <TopLink to="/">Back</TopLink>
            </Container>
          </TopLinkWrapper>
          <Container>
            <PageWrapper>
              <PageTitle>Complete checkout</PageTitle>
              <ContentWrapper>
                <LeftBlock>
                  <ContentItem>
                    <ContentItemName>Cost Day</ContentItemName>
                    <ContentItemPriceWrap>
                      <ContentItemPriceEth>{premium}</ContentItemPriceEth>
                      <ContentItemPriceUsd>$36,93</ContentItemPriceUsd>
                    </ContentItemPriceWrap>
                  </ContentItem>
                  <ContentItem>
                    <ContentItemName>
                      Deposit
                      <OverlayTrigger
                        delay={{ show: 250, hide: 3000 }}
                        placement="top"
                        overlay={
                          <OverlayPopUp>
                            Speech bubble that will fall out when you click on
                            the information on the icon{" "}
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
                    </ContentItemName>
                    <ContentItemPriceWrap>
                      <ContentItemPriceEth>{colloteral}</ContentItemPriceEth>
                      <ContentItemPriceUsd>$123 278,00</ContentItemPriceUsd>
                    </ContentItemPriceWrap>
                  </ContentItem>
                  <ContentItem>
                    <ContentItemName className="width">
                      Rental price for
                      <InputBlock>
                        <RentalLable htmlFor="period">
                          Select Period
                        </RentalLable>
                        <RentalPeriod id="period" placeholder="7 for 90 days" />
                      </InputBlock>
                      days
                      <OverlayTrigger
                        delay={{ show: 250, hide: 3000 }}
                        placement="top"
                        overlay={
                          <OverlayPopUp>
                            Speech bubble that will fall out when you click on
                            the information on the icon{" "}
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
                    </ContentItemName>
                    <ContentItemPriceWrap className="column">
                      <ContentItemPriceEth>0,035</ContentItemPriceEth>
                      <ContentItemPriceUsd>$258,25</ContentItemPriceUsd>
                    </ContentItemPriceWrap>
                  </ContentItem>
                  <ContentItem>
                    <ContentItemName className="width">
                      Marketplace commission
                      <OverlayTrigger
                        delay={{ show: 250, hide: 3000 }}
                        placement="top"
                        overlay={
                          <OverlayPopUp>
                            Speech bubble that will fall out when you click on
                            the information on the icon{" "}
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
                    </ContentItemName>
                    <ContentItemPriceWrap className="column">
                      <ContentItemPriceEth>0,035</ContentItemPriceEth>
                      <ContentItemPriceUsd>$258,25</ContentItemPriceUsd>
                    </ContentItemPriceWrap>
                  </ContentItem>
                  <ContentItem className="wrap">
                    <ContentItemName>
                      Marketplace fee 3%
                      <CheckboxRow>
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
                                Speech bubble that will fall out when you click
                                on the information on the icon{" "}
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
                        </CheckboxLabel>
                      </CheckboxRow>
                    </ContentItemName>
                    <ContentItemPriceWrap className="fee">
                      <ContentItemPriceUnd>2</ContentItemPriceUnd>
                      <ContentItemPriceUsd className="margin-3">
                        $258,25
                      </ContentItemPriceUsd>
                    </ContentItemPriceWrap>
                  </ContentItem>
                  <ContentItem>
                    <Total>Total</Total>
                    <ContentItemPriceWrap className="column">
                      <TotalPrice>
                        {/* ультра костыль чтобы законтрить 0.2+0.1 todo:сделать номарльно */}
                        <TotalPriceEth>
                          {(+premium * 100000 + +colloteral * 100000) / 100000}
                        </TotalPriceEth>
                        <Plus>+</Plus>
                        <TotalPriceUnd>2</TotalPriceUnd>
                      </TotalPrice>
                      <ContentItemPriceUsd>$123 278,00</ContentItemPriceUsd>
                    </ContentItemPriceWrap>
                  </ContentItem>
                </LeftBlock>
                <RightBlock>
                  <ItemAmount>Item</ItemAmount>
                  <NFTInfoContainer>
                    <NFTCard uri={URI} name={nameFrom} />
                  </NFTInfoContainer>
                </RightBlock>
              </ContentWrapper>
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
                <Button
                  onClick={() => rentToken(stakingId, +colloteral, premium)}
                >
                  Rent
                </Button>
              </BottomWrapper>
            </PageWrapper>
          </Container>
        </>
      )}
    </Background>
  );
};

export default Rent;
