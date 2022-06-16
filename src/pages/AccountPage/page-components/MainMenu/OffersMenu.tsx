import React, { useState,useContext,useEffect } from "react";

import {
  OfferMenuWrap,
  OfferFilterWrap,
  FilterButton,
  OffersWrapTable,
  ItemIcon,
  ItemName,
  OffersTooltip,
  OffersTooltipWrap,
  OffersTdText,
  OffersTdButton,
  OffersTdEmpty,
  AcceptBTN,
  MakeOfferBTN,
  DenyBTN,
  CancelBtn,
  WethText,
  PriceTextETH,
  SelectedFilters,
  Filter,
  FilterImg,
  FilterName,
  FilterClose,
  ClearAll,
} from "./Menu.styles";
import { OfferType } from "./types";

import { CartIco, HandShakeIco } from "../../../NFTPage/imports";
import {
  OffersTr,
  OffersHeadTr,
  OffersText,
} from "../../../NFTPage/page-components/Accordion/Accordion.styles";
import {
  OffResaivedIco,
  OffMadeIco,
  ItemImg,
  ItemVerifyIco,
  filter,
  close,
} from "../../imports";
import { createClient } from "urql";
import Context from "../../../../utils/Context";
import { ethers } from "ethers";
import { string } from "yup";

interface CommonProps {
  tokenId: number;
  tokenName: string;
  tokenURI: string;
  tokenAddress?: string;
  owner:string;
}

export interface BuyingOfferProps extends CommonProps {
  offeredPriceInNum: number;
  listingId:number;
}
export interface RentingOfferProps extends CommonProps {
  offeredPremiumInNum: number;
  offeredColloteralWei: number;
  stakingId:number;
}

const OffersMenu: React.FC = () => {
  const [offerType, setOfferType] = useState(OfferType.resaived);
  const { connector } = useContext(Context);
  const stakings: RentingOfferProps[] = [];
  const [rentingOffersList, setRentingOffersList] = useState<RentingOfferProps[]>([]);
  const [owner, setOwner] = useState('');
  
  const getOwner = async () => {

      if (!connector) return;
  
      const provider = new ethers.providers.Web3Provider(
        await connector.getProvider(),
      );
  
      const signer = provider.getSigner(0);
      const singerAddress = await signer.getAddress();
      
      setOwner(singerAddress)

  }

  const getStakings = async () => { 
    if (!connector) {
      return;
  }
    const offers = await fetchStakingData();
    console.log('stakingOffers',offers)

    offers.stakingOffers.map((offer: any) => {

    const tokenId = offer.tokenId;
    const tokenName = offer.tokenName;
    const stakingId = offer.id;
    const tokenURI = offer.tokenURI;
    const offeredColloteralWei = Number(ethers.utils.formatUnits(offer.newOfferedColloteral, 18));
    const offeredPremiumInNum = Number(ethers.utils.formatUnits(offer.newOfferedPremiumWei, 18));
    const tokenAddress = offer.tokenAdress
    const owner = offer.owner

    stakings.push({ tokenId, tokenName, tokenURI, tokenAddress, owner, offeredColloteralWei,offeredPremiumInNum,stakingId });

    });
    return stakings;
  };

const APIURL =
  "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

const tokensStakingQuery = `
 query  {
  stakingOffers(where:{owner:"${owner}"}) {
      id
      newOfferedColloteral
      newOfferedPremiumWei
      tokenId
      tokenName
      tokenURI
      taker
      owner
      tokenAdress
  }
}
 `;

const client = createClient({
  url: APIURL,
}); 

async function fetchStakingData() {
  const data = await client.query(tokensStakingQuery).toPromise();
  console.log(data)
  return data.data;
}

useEffect(() => {
  if (!connector) {
    return console.log("loading");
  }

   getOwner();
   getStakingsData();
   
}, [connector,owner]);

async function getStakingsData() {
  const response = await getStakings();
  console.log('response',response)
  if (response) {
    setRentingOffersList(response);
  }
}
console.log('rentingOffersList',rentingOffersList)
  return (
    <OfferMenuWrap>
      <OfferFilterWrap>
        <FilterButton
          className={offerType === OfferType.resaived ? "offers-active" : ""}
          onClick={() => setOfferType(OfferType.resaived)}
        >
          <OffResaivedIco />
          Offers Received
        </FilterButton>
        <FilterButton
          className={offerType === OfferType.made ? "offers-active" : ""}
          onClick={() => setOfferType(OfferType.made)}
        >
          Offers Made
          <OffMadeIco />
        </FilterButton>
      </OfferFilterWrap>
      <SelectedFilters>
        <Filter>
          <FilterImg src={filter} alt="filter-image" />
          <FilterName>Borya Fo...</FilterName>
          <FilterClose src={close} alt="close" />
        </Filter>
        <ClearAll>Clear All</ClearAll>
      </SelectedFilters>
      <OffersWrapTable>
        {offerType === OfferType.resaived && (
          
          <>
            <OffersHeadTr className="offers-menu-head">
              <OffersTdText className="first-column"></OffersTdText>
              <OffersTdText>Item</OffersTdText>
              <OffersTdText>Price</OffersTdText>
              <OffersTdText>Expiration</OffersTdText>
              <OffersTdText>From</OffersTdText>
              <OffersTdText></OffersTdText>
              <OffersTdText></OffersTdText>
              <OffersTdText></OffersTdText>
            </OffersHeadTr>
           {rentingOffersList.map((i)=>{
              return <OffersTr className="offers-menu-row" key={i.tokenURI}>
              <OffersTdText className="first-column">
                <HandShakeIco />
                <OffersTooltipWrap className="offers-tooltip">
                  <OffersTooltip>Rent</OffersTooltip>
                </OffersTooltipWrap>
              </OffersTdText>
              <OffersTdText className="offers-table-item">
                <ItemIcon>
                  <img
                    src={i.tokenURI}
                    alt="item image"
                    className="offers-item-image"
                  />
                </ItemIcon>
                <ItemName>{i.tokenName}</ItemName>
                <ItemVerifyIco />
              </OffersTdText>
              <OffersTdText>
                <PriceTextETH>{i.offeredColloteralWei}/{i.offeredPremiumInNum}</PriceTextETH>
                <WethText>WETH</WethText>
              </OffersTdText>
              <OffersTdText>
                <OffersText>In 20 hours</OffersText>
              </OffersTdText>
              <OffersTdText>
                <OffersText color="#5D3F92">{i.tokenAddress}</OffersText>
              </OffersTdText>
              <OffersTdButton>
                <AcceptBTN>Accept</AcceptBTN>
              </OffersTdButton>
              <OffersTdButton>
                <MakeOfferBTN>Make offer</MakeOfferBTN>
              </OffersTdButton>
              <OffersTdButton>
                <DenyBTN>Deny</DenyBTN>
              </OffersTdButton>
            </OffersTr>
           })}
            <OffersTr className="offers-menu-row">
              <OffersTdText className="first-column">
                <CartIco />
                <OffersTooltipWrap className="offers-tooltip">
                  <OffersTooltip>Buy</OffersTooltip>
                </OffersTooltipWrap>
              </OffersTdText>
              <OffersTdText className="offers-table-item">
                <ItemIcon>
                  <img src={ItemImg} alt="item icon" />
                </ItemIcon>
                <ItemName>Name</ItemName>
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
              <OffersTdButton>
                <AcceptBTN>Accept</AcceptBTN>
              </OffersTdButton>
              <OffersTdButton>
                <MakeOfferBTN>Make offer</MakeOfferBTN>
              </OffersTdButton>
              <OffersTdButton>
                <DenyBTN>Deny</DenyBTN>
              </OffersTdButton>
            </OffersTr>
          </>
        )}
        {offerType === OfferType.made && (
          <>
            <CancelBtn>Cancel all Offers</CancelBtn>
            <OffersHeadTr className="offers-menu-head">
              <OffersTdText className="first-column"></OffersTdText>
              <OffersTdText>Item</OffersTdText>
              <OffersTdText>Price</OffersTdText>
              <OffersTdText>Expiration</OffersTdText>
              <OffersTdText>From</OffersTdText>
              <OffersTdText></OffersTdText>
              <OffersTdText></OffersTdText>
              <OffersTdText></OffersTdText>
            </OffersHeadTr>
            <OffersTr className="offers-menu-row">
              <OffersTdText className="first-column">
                <HandShakeIco />
                <OffersTooltipWrap className="offers-tooltip">
                  <OffersTooltip>Rent</OffersTooltip>
                </OffersTooltipWrap>
              </OffersTdText>
              <OffersTdText className="offers-table-item">
                <ItemIcon>
                  <img src={ItemImg} alt="item icon" />
                </ItemIcon>
                <ItemName>Name</ItemName>
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
              <OffersTdEmpty></OffersTdEmpty>
              <OffersTdButton>
                <MakeOfferBTN>Edit Offer</MakeOfferBTN>
              </OffersTdButton>
              <OffersTdButton>
                <DenyBTN>Cancel</DenyBTN>
              </OffersTdButton>
            </OffersTr>
          </>
        )}
      </OffersWrapTable>
    </OfferMenuWrap>
  );
};

export default OffersMenu;
