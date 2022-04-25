import React, {FC} from 'react'

import {
    OffersWrap,
    OffersTr,
    OffersTd,
    OffersTdText,
    OffersHeadTr,
    OffersText,
    EtherIcon
} from "../Accordion.styles";
import {CartIco, EthIco, HandShakeIco} from "../../../imports";

import {
    PriceText
} from '../../../NFTPage.styles'

const Offers: FC = () => {
    return (
        <OffersWrap >
            <OffersHeadTr>
                <OffersTd></OffersTd>
                <OffersTd>Price</OffersTd>
                <OffersTd>Expiration</OffersTd>
                <OffersTd>From</OffersTd>
            </OffersHeadTr>
            <OffersTr>
                <OffersTdText><HandShakeIco /></OffersTdText>
                <OffersTdText>
                    <EtherIcon />
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
                    <EtherIcon />
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
                    <EtherIcon />
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
                    <EtherIcon />
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