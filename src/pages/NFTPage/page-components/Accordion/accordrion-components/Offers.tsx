import React from 'react';

import { CartIco, HandShakeIco } from '../../../imports';
import {
  OffersWrap,
  OffersTr,
  OffersTd,
  OffersTdText,
  OffersHeadTr,
  OffersText,
  PriceTextETH,
  WethText,
  AcceptBTN,
  MakeOfferBTN,
  DenyBTN,
} from '../Accordion.styles';

const Offers: React.FC = () => {
  return (
    <OffersWrap>
      <OffersHeadTr>
        <OffersTd></OffersTd>
        <OffersTd>Price</OffersTd>
        <OffersTd>Expiration</OffersTd>
        <OffersTd>From</OffersTd>
        <OffersTd></OffersTd>
        <OffersTd></OffersTd>
        <OffersTd></OffersTd>
      </OffersHeadTr>
      <OffersTr>
        <OffersTdText>
          <HandShakeIco />
        </OffersTdText>
        <OffersTdText>
          <PriceTextETH>1,2</PriceTextETH>
          <WethText>WETH</WethText>
        </OffersTdText>
        <OffersTdText>
          <OffersText>In 20 hours</OffersText>
        </OffersTdText>
        <OffersTdText>
          <OffersText color="#5D3F92">65BA4F</OffersText>
        </OffersTdText>
        <OffersTdText>
          <AcceptBTN>Accept</AcceptBTN>
        </OffersTdText>
        <OffersTdText>
          <MakeOfferBTN>Make offer</MakeOfferBTN>
        </OffersTdText>
        <OffersTdText>
          <DenyBTN>Deny</DenyBTN>
        </OffersTdText>
      </OffersTr>
      <OffersTr>
        <OffersTdText>
          <CartIco />
        </OffersTdText>
        <OffersTdText>
          <PriceTextETH>1,2</PriceTextETH>
          <WethText>WETH</WethText>
        </OffersTdText>
        <OffersTdText>
          <OffersText>In 20 hours</OffersText>
        </OffersTdText>
        <OffersTdText>
          <OffersText color="#5D3F92">65BA4F</OffersText>
        </OffersTdText>
        <OffersTdText>
          <AcceptBTN>Accept</AcceptBTN>
        </OffersTdText>
        <OffersTdText>
          <MakeOfferBTN>Make offer</MakeOfferBTN>
        </OffersTdText>
        <OffersTdText>
          <DenyBTN>Deny</DenyBTN>
        </OffersTdText>
      </OffersTr>
      <OffersTr>
        <OffersTdText>
          <HandShakeIco />
        </OffersTdText>
        <OffersTdText>
          <PriceTextETH>1,2</PriceTextETH>
          <WethText>WETH</WethText>
        </OffersTdText>
        <OffersTdText>
          <OffersText>In 20 hours</OffersText>
        </OffersTdText>
        <OffersTdText>
          <OffersText color="#5D3F92">65BA4F</OffersText>
        </OffersTdText>
        <OffersTdText>
          <AcceptBTN>Accept</AcceptBTN>
        </OffersTdText>
        <OffersTdText>
          <MakeOfferBTN>Make offer</MakeOfferBTN>
        </OffersTdText>
        <OffersTdText>
          <DenyBTN>Deny</DenyBTN>
        </OffersTdText>
      </OffersTr>
      <OffersTr>
        <OffersTdText>
          <HandShakeIco />
        </OffersTdText>
        <OffersTdText>
          <PriceTextETH>1,2</PriceTextETH>
          <WethText>WETH</WethText>
        </OffersTdText>
        <OffersTdText>
          <OffersText>In 20 hours</OffersText>
        </OffersTdText>
        <OffersTdText>
          <OffersText color="#5D3F92">65BA4F</OffersText>
        </OffersTdText>
        <OffersTdText>
          <AcceptBTN>Accept</AcceptBTN>
        </OffersTdText>
        <OffersTdText>
          <MakeOfferBTN>Make offer</MakeOfferBTN>
        </OffersTdText>
        <OffersTdText>
          <DenyBTN>Deny</DenyBTN>
        </OffersTdText>
      </OffersTr>
    </OffersWrap>
  );
};

export default Offers;
