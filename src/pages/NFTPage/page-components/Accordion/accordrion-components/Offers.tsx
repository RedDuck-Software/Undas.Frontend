import { ethers } from "ethers";
import React from "react";

import {  HandShakeIco } from "../../../imports";
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
} from "../Accordion.styles";

interface OffersProps {
  isOwner?: boolean;
  items?:any
}

const Offers: React.FC<OffersProps> = ({ isOwner,items}) => {
  console.log(items)

  const data = [...items.buyingOffers,...items.stakingOffers]
console.log(data)
  return (
    
    <OffersWrap>
      <OffersHeadTr>
        <OffersTd>Event</OffersTd>
        <OffersTd>Price</OffersTd>
        <OffersTd>Expiration</OffersTd>
        <OffersTd>From</OffersTd>
        {isOwner === true && (
          <>
            <OffersTd></OffersTd>
            <OffersTd></OffersTd>
            <OffersTd></OffersTd>
          </>
        )}
      </OffersHeadTr>
      {data.map((i) => {
        return <OffersTr key={i}>
            <OffersTdText>
              <HandShakeIco />
            </OffersTdText>
            <OffersTdText>
              <PriceTextETH>{i.newOfferedPrice?ethers.utils.formatUnits(
              i.newOfferedPrice.toString(),
              "ether",
            ):ethers.utils.formatUnits(
              (+i.newOfferedColloteral + +i.newOfferedPremiumWei).toString(),
              "ether",
            )}</PriceTextETH>
              <WethText>WETH</WethText>
            </OffersTdText>
            <OffersTdText>
              <OffersText>In 20 hours</OffersText>
            </OffersTdText>
            <OffersTdText>
              <OffersText color="#5D3F92">65BA4F</OffersText>
            </OffersTdText>
            {isOwner === true && (
              <>
                <OffersTdText>
                  <AcceptBTN>Accept</AcceptBTN>
                </OffersTdText>
                <OffersTdText>
                  <MakeOfferBTN>Make offer</MakeOfferBTN>
                </OffersTdText>
                <OffersTdText>
                  <DenyBTN>Deny</DenyBTN>
                </OffersTdText>
              </>
            )}
          </OffersTr>
      })}
    
    </OffersWrap>
  );
};

export default Offers;
