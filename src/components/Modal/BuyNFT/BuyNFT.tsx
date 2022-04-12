import React, { FC } from "react";

//Styles
import {
    WindowWrap,
    Title,
    Close,
    CheckoutWrap,
    NFTWrap,
    ImageWrap,
} from "./BuyNFT.styles";
import { Wrapper } from "../../../pages/CategoriesPage/Categories.styles";
import { ColoredText } from "../../../pages/NFTPage/page-components/Accordion/Accordion.styles";
import { NFTImg } from "../imports";
import { EthIco } from "../../ASideFilter/imports";

const BuyNFT: FC = () => {
    return (
        <WindowWrap>
            <Title>
                <span>Complete checkout</span>
                <Close />
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
                <NFTWrap marg="15px 0 0 0">
                    <Wrapper disp="flex" gap="20px" alignItems="center">
                        <ImageWrap>
                            <img src={NFTImg} alt="nft-image" />
                        </ImageWrap>
                        <span>Price NFT</span>
                    </Wrapper>
                    <Wrapper>
                        <Wrapper disp="flex" alignItems="center" gap="6px" justifyContent="flex-end">
                            <EthIco />
                            <span>40</span>
                        </Wrapper>
                        <ColoredText fs="12px" fw="400" color="#7C7C7C">
                            $123 278,00
                        </ColoredText>
                    </Wrapper>
                </NFTWrap>
            </CheckoutWrap>
        </WindowWrap>
    );
};

export default BuyNFT;
