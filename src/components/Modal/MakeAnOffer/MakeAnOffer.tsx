import React from "react";
import { useDispatch, useSelector } from "react-redux";

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
  CheckboxInput,
  CheckboxLabel,
  TextPay,
  CheckboxBlock,
  ColoredTextAgreement,
} from "./MakeAnOffer.styles";

import { Wrapper } from "../../../pages/CategoriesPage/Categories.styles";
import { ColoredText } from "../../../pages/NFTPage/page-components/Accordion/Accordion.styles";
import { useToken } from "../../../store";
import { closeModal } from "../../../store/reducers/modalAction";
import { EthIco } from "../../ASideFilter/imports";
import { NFTImg, UNDIco } from "../imports";

const MakeAnOffer: React.FC = () => {
  const dispatch = useDispatch();
  const tokenId = useSelector(useToken);

  // const { connector } = useContext(Context);

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
            Subtotal
          </ColoredText>
        </Wrapper>
        <ColoredText color="#873DC1" fw="400" fs="14px">
          Name NFT
        </ColoredText>
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
              <EthIco />
              <span>40</span>
            </Wrapper>
            <ColoredText fs="12px" fw="400" color="#7C7C7C">
              $123 278,00
            </ColoredText>
          </Wrapper>
        </NFTWrap>
        <PaymentInfo>
          <PaymentElement>
            <Wrapper disp="flex" flexDirection="column">
              <span>Marketplace fee 3%</span>
              <Wrapper
                disp="flex"
                alignItems="center"
                gap="15px"
                marg="10px 0 0 0"
              >
                <CheckboxBlock>
                  <CheckboxInput
                    type="checkbox"
                    id="poject"
                    name="PayInUnd"
                    className="custom-checkbox"
                  />
                  <CheckboxLabel htmlFor="poject">
                    <TextPay>
                      Pay in <UNDIco /> with a 50% discount
                    </TextPay>
                  </CheckboxLabel>
                </CheckboxBlock>
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
          <CheckboxBlock>
            <CheckboxInput
              type="checkbox"
              id="purchases"
              name="PayInUndAg"
              className="custom-checkbox"
            />
            <CheckboxLabel htmlFor="purchases">
              {" "}
              I agree to the platform{" "}
              <ColoredTextAgreement cursor="pointer" color="#893AC2">
                agreement ....
              </ColoredTextAgreement>
            </CheckboxLabel>
          </CheckboxBlock>
        </PrivacyPolicyBlock>
        <ConfirmBtn>Confirm</ConfirmBtn>
      </CheckoutWrap>
    </WindowWrap>
  );
};

export default MakeAnOffer;
