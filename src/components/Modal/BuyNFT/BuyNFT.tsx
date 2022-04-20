import React, { FC, useState, useContext } from "react";

//Styles
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
} from "./BuyNFT.styles";
import { Wrapper } from "../../../pages/CategoriesPage/Categories.styles";
import { ColoredText } from "../../../pages/NFTPage/page-components/Accordion/Accordion.styles";
import { NFTImg, UNDIco } from "../imports";
import { EthIco } from "../../ASideFilter/imports";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/reducers/modalAction";
import { useToken } from "../../../store";
import Context from "../../../utils/Context";
import {ethers} from "ethers";

const BuyNFT: FC = () => {
    const dispatch = useDispatch();
    const tokenId = useSelector(useToken);
    console.log(tokenId);

    const { connector } = useContext(Context);

    const getShowBuy = async () => {
        if (!connector) return;

        const provider = new ethers.providers.Web3Provider(
            await connector.getProvider()
        )
        const signer = provider.getSigner(0)

    };

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

export default BuyNFT;
