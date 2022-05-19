import React from 'react';

import {
  RentNFTHeaderContainer,
  RentNFTContentContainer,
  RentNFTHeading,
  RentNFTBackground,
  RentNFTContent,
  RentNFTTitle,
  RentNFTSubtitle,
  BlockWrapper,
  BlockTitle,
  ImageWrapper,
  TextOnImage,
  BlackLayer,
  TextWrapper,
  RentNFTImage,
  DoubleCurveContainer,
  DoubleCurve,
  DoubleCurveMobile,
  ButtonsContainer,
} from './RentNFTPage.styled';

import { Button } from '../../globalStyles';
import doubleCurve from '../../icons/double_curve.svg';
import doubleCurveMobile from '../../icons/double_curve_mobile.svg';
import image01 from '../../images/image-cards/card05.png';
import BackgroundImg from '../../images/image-rent/bg-01.png';
import image02 from '../../images/image-rent/earn-money.png';

const RentNFTPage: React.FC = () => {
  return (
    <>
      <RentNFTHeading>
        <RentNFTHeaderContainer>
          <RentNFTBackground src={BackgroundImg} />
        </RentNFTHeaderContainer>
      </RentNFTHeading>
      <RentNFTContent>
        <RentNFTTitle>Rent NFT</RentNFTTitle>
        <RentNFTContentContainer>
          <RentNFTSubtitle>How it works?</RentNFTSubtitle>
          <BlockWrapper>
            <TextWrapper>
              <BlockTitle>About Only1.NFT:</BlockTitle> The Only1.NFT protocol
              is a pure, decentralized NFT renting market. Users can rent and
              stake NFTs, allowing both sides to make profits from temporary
              ownership of NFTs. With our revolutionary approach, you can get
              passive income from your NFTs and rent NFTs for temporary profits.
            </TextWrapper>
            <ImageWrapper>
              <RentNFTImage src={image01} />
              <TextOnImage>Take NFT</TextOnImage>
              <BlackLayer />
            </ImageWrapper>
          </BlockWrapper>
          <DoubleCurveContainer>
            <DoubleCurve src={doubleCurve} />
            <DoubleCurveMobile src={doubleCurveMobile} />
          </DoubleCurveContainer>
          <BlockWrapper>
            <ImageWrapper>
              <RentNFTImage src={image02} />
              <TextOnImage>Earn money</TextOnImage>
              <BlackLayer />
            </ImageWrapper>
            <TextWrapper>
              <BlockTitle>Protocol in detail:</BlockTitle> The protocol allows
              makers to put their NFT for staking by providing three mandatory
              values: collateral, fee, and term. Once a taker has selected an
              NFT for rent, the NFT is transferred to taker, and collateral is
              transferred to our smart contract, thus confirming the quote for
              staking. The taker is obligated to pay the fee weekly, otherwise
              his position becomes liquidated and the collateral is transferred
              to the maker of NFT.
            </TextWrapper>
          </BlockWrapper>
          <DoubleCurveContainer>
            <DoubleCurve mirrored src={doubleCurve} />
            <DoubleCurveMobile mirrored src={doubleCurveMobile} />
          </DoubleCurveContainer>
          <BlockWrapper>
            <TextWrapper>
              <BlockTitle>Call options example:</BlockTitle>This approach is
              similar to call options in the traditional finances. For example,
              imagine a taker has confirmed their position by renting NFT. They
              are paying weekly fees, for the right to buy the NFT at a specific
              collateral price. If the price of the NFT rose during the rental
              period, taker can stop paying fees and basically buy the NFT
              ownership for the collateral they have already put. Then they can
              immediately sell that NFT and make a profit that equals to [new
              sell price] - collateral - (fee * weeks of rental).
            </TextWrapper>
            <ImageWrapper>
              <RentNFTImage src={image01} />
              <TextOnImage>Return NFT</TextOnImage>
              <BlackLayer />
            </ImageWrapper>
          </BlockWrapper>
          <ButtonsContainer>
            <Button big violet>
              My account
            </Button>
            <Button big violet>
              Rent NFT
            </Button>
          </ButtonsContainer>
        </RentNFTContentContainer>
      </RentNFTContent>
    </>
  );
};

export default RentNFTPage;
