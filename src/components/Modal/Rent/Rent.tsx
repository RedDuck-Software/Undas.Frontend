import React from "react";
import { useDispatch } from "react-redux";

import { Wrapper } from "../../../pages/CategoriesPage/Categories.styles";
import { ColoredText } from "../../../pages/NFTPage/page-components/Accordion/Accordion.styles";
import { closeModal } from "../../../store/reducers/modalAction";
import { EthIco } from "../../ASideFilter/imports";
import {
  WindowWrap,
  Title,
  Close,
  CheckoutWrap,
  NFTWrap,
  ImageWrap,
  PaymentInfo,
  PaymentElement,
  Info,
  TotalBlock,
  PrivacyPolicyBlock,
  ConfirmBtn,
  InputWrap,
} from "../BuyNFT/BuyNFT.styles";
import { EthIcoLight, InfoIco, NFTImg, UNDIco } from "../imports";

const Rent: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <WindowWrap>
      <Title>
        <span>Complete checkout</span>
        <Close
          onClick={() => {
            dispatch(closeModal());
          }}
        />
      </Title>
      <CheckoutWrap>
        <Wrapper
          disp="flex"
          justifyContent="space-between"
          alignItems="center"
          marg="0 0 20px 0"
        >
          <ColoredText color="#232428" fw="500" fs="18px">
            Item
          </ColoredText>
          <ColoredText color="#232428" fw="500" fs="18px">
            Rent NFT
          </ColoredText>
        </Wrapper>
        <Wrapper disp="flex" justifyContent="space-between" alignItems="center">
          <ColoredText color="#873DC1" fw="400" fs="14px">
            Name NFT
          </ColoredText>
          <InputWrap>
            <label>Select Period</label>
            <input placeholder="7 for 180 days" />
          </InputWrap>
        </Wrapper>
        <NFTWrap marg="15px 0 20px 0">
          <Wrapper disp="flex" gap="20px" alignItems="center">
            <ImageWrap>
              <img src={NFTImg} alt="nft-image" />
            </ImageWrap>
            <span>Price NFT</span>
          </Wrapper>
          <Wrapper>
            <Wrapper
              disp="flex"
              alignItems="center"
              gap="6px"
              justifyContent="flex-end"
            >
              <EthIcoLight />
              <ColoredText color="#5D3F92">40</ColoredText>
            </Wrapper>
            <ColoredText fs="12px" fw="400" color="#7C7C7C">
              $36,93
            </ColoredText>
          </Wrapper>
        </NFTWrap>
        <PaymentInfo>
          <PaymentElement padd="10px 0">
            <Wrapper disp="flex" alignItems="center" gap="15px">
              <span>Deposit</span>
              <InfoIco />
            </Wrapper>
            <Wrapper>
              <Wrapper
                disp="flex"
                alignItems="center"
                gap="6px"
                justifyContent="flex-end"
              >
                <EthIco />
                <ColoredText color="#5D3F92" fs="12px">
                  40
                </ColoredText>
              </Wrapper>
              <ColoredText fs="12px" fw="400" color="#7C7C7C">
                $123 278,00
              </ColoredText>
            </Wrapper>
          </PaymentElement>
          <PaymentElement padd="10px 0">
            <Wrapper disp="flex" alignItems="center" gap="15px">
              <span>
                Rental price for <ColoredText color="#873DC1">7</ColoredText>{" "}
                days
              </span>
              <InfoIco />
            </Wrapper>
            <Wrapper>
              <Wrapper
                disp="flex"
                alignItems="center"
                gap="6px"
                justifyContent="flex-end"
              >
                <EthIco />
                <ColoredText color="#5D3F92" fs="12px">
                  0,035
                </ColoredText>
              </Wrapper>
              <ColoredText fs="12px" fw="400" color="#7C7C7C">
                $258,25
              </ColoredText>
            </Wrapper>
          </PaymentElement>
          <PaymentElement padd="10px 0">
            <Wrapper disp="flex" alignItems="center" gap="15px">
              <span>Marketplace commission</span>
              <InfoIco />
            </Wrapper>
            <Wrapper>
              <Wrapper
                disp="flex"
                alignItems="center"
                gap="6px"
                justifyContent="flex-end"
              >
                <EthIco />
                <ColoredText color="#5D3F92" fs="12px">
                  0,035
                </ColoredText>
              </Wrapper>
              <ColoredText fs="12px" fw="400" color="#7C7C7C">
                $258,25
              </ColoredText>
            </Wrapper>
          </PaymentElement>
          <PaymentElement>
            <Wrapper disp="flex" flexDirection="column">
              <span>Marketplace fee 3%</span>
              <Wrapper
                disp="flex"
                alignItems="center"
                gap="15px"
                marg="10px 0 0 0"
              >
                <input type="checkbox" name="PayInUnd" />
                <label>
                  Pay in <UNDIco /> with a 50% discount
                </label>
                <Info />
              </Wrapper>
            </Wrapper>
            <Wrapper disp="flex" alignItems="center" gap="5px">
              <UNDIco />
              <ColoredText fs="16px" color="#5D3F92">
                2
              </ColoredText>
            </Wrapper>
          </PaymentElement>
        </PaymentInfo>
        <TotalBlock>
          <span>Total</span>
          <Wrapper>
            <Wrapper
              disp="flex"
              alignItems="center"
              gap="6px"
              justifyContent="flex-end"
            >
              <EthIco />
              <ColoredText fs="18px" fw="500" color="#5D3F92">
                40 + <UNDIco /> 2
              </ColoredText>
            </Wrapper>
            <ColoredText fs="12px" fw="400" color="#7C7C7C">
              $123 278,00
            </ColoredText>
          </Wrapper>
        </TotalBlock>
        <PrivacyPolicyBlock>
          <input type="checkbox" name="PayInUnd" />
          <label>
            I agree to the platform{" "}
            <ColoredText cursor="pointer" color="#893AC2">
              agreement ....
            </ColoredText>
          </label>
        </PrivacyPolicyBlock>
        <ConfirmBtn>Confirm</ConfirmBtn>
      </CheckoutWrap>
    </WindowWrap>
  );
};

export default Rent;
