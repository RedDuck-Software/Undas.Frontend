import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import React,{useContext} from "react";

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
} from "../Rent/Rent.styles";

import {
  PageWrapper,
  UNDLabel,
  ImageInfo,
  AgreementLink,
  CheckboxLabelAgreement,
  CheckboxInputAgreement,
  NFTInfoContainer,
  OverlayPopUp,
  FAQLink,
  ButtonInfo,
} from "../OfferRent/OfferRent.styles";

import { Background, Container, PageTitle } from "../../globalStyles";

import { info } from "../OfferRent/imports";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NFTCard from "../HomePage/page-components/NFTCard/NFTCard";
import {useLocation } from "react-router-dom";
import Context from "../../utils/Context";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";
import { Marketplace__factory } from "../../typechain";
import { createClient } from "urql";
import { ethers} from "ethers";

const Rent: React.FC = () => {
  const { connector } = useContext(Context);
  const state:any = useLocation()
  console.log(state.state.state)

  async function buyToken(tokenId: number, priceInNum?: number) {

    if (!connector) return;
    if (priceInNum == undefined) {
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

    const tx = await MarketplaceContract.buyToken(tokenId, {
      value: ethers.utils.parseUnits(priceInNum.toString(), "ether"),
    });
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
          <PageTitle>Complete checkout</PageTitle>
          <ContentWrapper>
            <LeftBlock>
              <ContentItem>
                <ContentItemName>Price NFT</ContentItemName>
                <ContentItemPriceWrap>
                  <ContentItemPriceEth>{state.state.state.price}</ContentItemPriceEth>
                  <ContentItemPriceUsd>$123 278,00</ContentItemPriceUsd>
                </ContentItemPriceWrap>
              </ContentItem>
              <ContentItem>
                <ContentItemName>
                  Marketplace commission
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
                      <ImageInfo src={info} alt="info-image" className="margin"/>
                    </ButtonInfo>
                  </OverlayTrigger>
                </ContentItemName>
                <ContentItemPriceWrap>
                  <ContentItemPriceEth>0,035</ContentItemPriceEth>
                  <ContentItemPriceUsd>$258,25</ContentItemPriceUsd>
                </ContentItemPriceWrap>
              </ContentItem>
              <ContentItem>
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
                            Speech bubble that will fall out when you click on the
                            information on the icon <FAQLink href="/faq">FAQ</FAQLink>
                          </OverlayPopUp>
                        }
                      >
                        <ButtonInfo>
                          <ImageInfo src={info} alt="info-image" className="margin"/>
                        </ButtonInfo>
                      </OverlayTrigger>
                    </CheckboxLabel>
                  </CheckboxRow>
                </ContentItemName>
                <ContentItemPriceWrap>
                  <ContentItemPriceUnd>2</ContentItemPriceUnd>
                  <ContentItemPriceUsd>$258,25</ContentItemPriceUsd>
                </ContentItemPriceWrap>
              </ContentItem>
              <ContentItem>
                <Total>Total</Total>
                <ContentItemPriceWrap>
                  <TotalPrice>
                    <TotalPriceEth>{state.state.state.price}</TotalPriceEth>
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
                <NFTCard uri={state.state.state.URI} name={state.state.state.name} />
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
            <Button onClick={() => buyToken(state.state.state.listingId,state.state.state.price)}>Buy Now</Button>
          </BottomWrapper>
        </PageWrapper>
      </Container>
    </Background>
  );
};

export default Rent;
