import React, {FC} from 'react'

import {
    OffersWrap,
    OffersTr,
    OffersTd,
    OffersTdText,
    OffersHeadTr,
    OffersText
} from "../Accordion.styles";
import {CartIco, EthIco, HandShakeIco} from "../../../imports";

import {
    PriceText
} from '../../../NFTPage.styles'

const Offers: FC = () => {
    return (
        <OffersWrap >
            <OffersHeadTr>
                <OffersTd padd="10px 0" textAlign="end">Price</OffersTd>
                <OffersTd padd="10px 0" textAlign="end">Expiration</OffersTd>
                <OffersTd padd="10px 0" textAlign="end">From</OffersTd>
            </OffersHeadTr>
            <OffersTr>
                <OffersTdText><HandShakeIco /></OffersTdText>
                <OffersTdText>
                    <EthIco />
                    <PriceText>1,2</PriceText>
                    <OffersText>WETH</OffersText>
                </OffersTdText>
                <OffersTdText>
                    <OffersText>In 20 hours</OffersText>
                </OffersTdText>
                <OffersTdText>
                    <OffersText color="#5D3F92">65BA4F</OffersText>
                </OffersTdText>
            </OffersTr>
            <OffersTr>
                <OffersTdText><CartIco /></OffersTdText>
                <OffersTdText>
                    <EthIco />
                    <PriceText>1,2</PriceText>
                    <OffersText>WETH</OffersText>
                </OffersTdText>
                <OffersTdText>
                    <OffersText>In 20 hours</OffersText>
                </OffersTdText>
                <OffersTdText>
                    <OffersText color="#5D3F92">65BA4F</OffersText>
                </OffersTdText>
            </OffersTr>
            <OffersTr>
                <OffersTdText><HandShakeIco /></OffersTdText>
                <OffersTdText>
                    <EthIco />
                    <PriceText>1,2</PriceText>
                    <OffersText>WETH</OffersText>
                </OffersTdText>
                <OffersTdText>
                    <OffersText>In 20 hours</OffersText>
                </OffersTdText>
                <OffersTdText>
                    <OffersText color="#5D3F92">65BA4F</OffersText>
                </OffersTdText>
            </OffersTr>
            <OffersTr>
                <OffersTdText><HandShakeIco /></OffersTdText>
                <OffersTdText>
                    <EthIco />
                    <PriceText>1,2</PriceText>
                    <OffersText>WETH</OffersText>
                </OffersTdText>
                <OffersTdText>
                    <OffersText>In 20 hours</OffersText>
                </OffersTdText>
                <OffersTdText>
                    <OffersText color="#5D3F92">65BA4F</OffersText>
                </OffersTdText>
            </OffersTr>
        </OffersWrap>
    )
}

export default Offers