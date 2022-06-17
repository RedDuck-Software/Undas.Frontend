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
import ClipLoader from "react-spinners/ClipLoader";
import {Marketplace__factory, UndasGeneralNFT__factory} from "../../../../typechain";
import {MARKETPLACE_ADDRESS} from "../../../../utils/addressHelpers";

interface CommonProps {
  tokenId: number;
  tokenName: string;
  tokenURI: string;
  tokenAddress?: string;
  owner:string;
  taker:string;
}

export interface RentingOfferProps extends CommonProps {
  offeredPremiumInNum: number;
  offeredColloteralWei: number;
  stakingId:number;
}

export interface BuyingOfferProps extends CommonProps {
  offeredNumber: number;
  listingId:number;
}


const OffersMenu: React.FC = () => {

  const { connector } = useContext(Context);

  const [offerType, setOfferType] = useState(OfferType.resaived);

  const stakings: RentingOfferProps[] = [];
  const listing: BuyingOfferProps[] = [];

  const userRentingOffers: RentingOfferProps[] = [];
  const userListingOffers: BuyingOfferProps[] = [];


  const [rentingOffersList, setRentingOffersList] = useState<RentingOfferProps[]>([]);
  const [buyingOffersList, setBuyingOffersList] = useState<BuyingOfferProps[]>([])

  const [userOffersForRent,setUserOffersForRent] = useState<RentingOfferProps[]>([]);
  const [userOffersForBuy,setUserOffersForBuy] = useState<BuyingOfferProps[]>([]);

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

  const cancelListingOffer = async(listingId:number) => {
    console.log(listingId)
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
        await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
        MARKETPLACE_ADDRESS,
        signer,
    );

    const tx = await MarketplaceContract.cancelListingOffer(listingId)

    await tx.wait();


  }

  const removeStakingOffer = async(stakingId:number) => {
    console.log(stakingId)
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
        await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
        MARKETPLACE_ADDRESS,
        signer,
    );

    const tx = await MarketplaceContract.removeStakingOffer(stakingId)

    await tx.wait();


  }

 const acceptStakingOffer = async(stakingId:number, taker:string) => {
      console.log(stakingId)
      if (!connector) return;

      const provider = new ethers.providers.Web3Provider(
          await connector.getProvider(),
      );

      const signer = provider.getSigner(0);

      const MarketplaceContract = Marketplace__factory.connect(
          MARKETPLACE_ADDRESS,
          signer,
      );

      const tx = await MarketplaceContract.acceptStakingOffer(stakingId,taker,false)

      await tx.wait();


  }

  const acceptBuyingOffer = async(listingId:number, taker:string) => {
    console.log(listingId)
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
        await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
        MARKETPLACE_ADDRESS,
        signer,
    );

    const tx = await MarketplaceContract.acceptListingOffer(listingId,taker)

    await tx.wait();


  }

  const getStaking0ffers = async () => {

      if (!connector) {
        return;
    }

    const offers = await fetchStakingData();

    offers.stakingOffers.map((offer: any) => {
      console.log('offer222',offer)
      if(offer.offerStatus == "ACTIVE" && offer.newOfferedColloteral != "0" && offer.newOfferedPremiumWei != "0"){

        const tokenId = offer.tokenId;
        const tokenName = offer.tokenName;
        const stakingId = offer.id;
        const tokenURI = offer.tokenURI;
        const offeredColloteralWei = Number(ethers.utils.formatUnits(offer.newOfferedColloteral, 18));
        const offeredPremiumInNum = Number(ethers.utils.formatUnits(offer.newOfferedPremiumWei, 18));
        const tokenAddress = offer.tokenAdress
        const owner = offer.owner
        const taker = offer.taker

        stakings.push({ tokenId, tokenName, tokenURI, tokenAddress, owner,taker, offeredColloteralWei,offeredPremiumInNum,stakingId });
      }
    });
    return stakings;
  };

  const getBuyingOffers = async () => {
    if (!connector) {
      return;
    }
    const offers = await fetchBuyingData();

    offers.buyingOffers.map((offer: any) => {
      console.log('BUYoffer',offer)
          //костыль надо <offer.offeredNumber != 0)> переделать контракт
      if(offer.offerStatus == "ACTIVE" && offer.newOfferedPrice != 0){
        console.log('offer')
        const tokenId = offer.tokenId;
        const tokenName = offer.tokenName;
        const listingId = offer.id;
        const tokenURI = offer.tokenURI;
        const offeredNumber = Number(ethers.utils.formatUnits(offer.newOfferedPrice, 18));
        const tokenAddress = offer.tokenAdress
        const owner = offer.owner
        const taker = offer.taker

        listing.push({tokenId, tokenName, tokenURI, tokenAddress, owner, taker, offeredNumber, listingId});
      }
    });
    return listing;
  };

  const getUserBuyingOffers = async () => {
    if (!connector) {
      return;
    }
    const offers = await fetchUserBuyingOffersData();

    offers.buyingOffers.map((offer: any) => {
      console.log('dasda',offer.newOfferedPrice != 0)
      if(offer.offerStatus == "ACTIVE" && offer.newOfferedPrice != 0) {

        const tokenId = offer.tokenId;
        const tokenName = offer.tokenName;
        const listingId = offer.id;
        const tokenURI = offer.tokenURI;
        const offeredNumber = Number(ethers.utils.formatUnits(offer.newOfferedPrice, 18));
        const tokenAddress = offer.tokenAdress
        const owner = offer.owner
        const taker = offer.taker

        userListingOffers.push({tokenId, tokenName, tokenURI, tokenAddress, owner, taker, offeredNumber, listingId});
      }
    });
    return userListingOffers;
  };

  const getUserRentingOffers = async () => {
    if (!connector) {
      return;
    }
    const offers = await fetchUserRentingOffersData();
    console.log('offers22',offers)
    offers.stakingOffers.map((offer: any) => {
      if(offer.offerStatus == "ACTIVE" && offer.newOfferedPremiumWei != "0" && offer.newOfferedPremiumWei != "0"){

        const tokenId = offer.tokenId;
        const tokenName = offer.tokenName;
        const stakingId = offer.id;
        const tokenURI = offer.tokenURI;
        const offeredColloteralWei = Number(ethers.utils.formatUnits(offer.newOfferedColloteral, 18));
        const offeredPremiumInNum = Number(ethers.utils.formatUnits(offer.newOfferedPremiumWei, 18));
        const tokenAddress = offer.tokenAdress
        const owner = offer.owner
        const taker = offer.taker

        userRentingOffers.push({ tokenId, tokenName, tokenURI, tokenAddress, owner,taker, offeredColloteralWei,offeredPremiumInNum,stakingId });
      }
    });
    return userRentingOffers;
  };

  async function getStakingsOffersData() {
    const response = await getStaking0ffers();

    if (response) {
      setRentingOffersList(response);
    }

  }

  async function getBuyingOffersData() {

    const response = await getBuyingOffers();

    if (response) {
      setBuyingOffersList(response);
    }

  }

  async function getUserOffersData() {
    const response = await getUserBuyingOffers();
    console.log('response',response)
    if (response) {
      setUserOffersForBuy(response);
    }

  }

  async function getUserRentingOffersData() {
    const response = await getUserRentingOffers();

    if (response) {
      setUserOffersForRent(response);
    }

  }

useEffect(() => {

  if (!connector) {
    return console.log("loading");
  }

  getOwner()

  if(owner && connector) {
    getStakingsOffersData()
    getBuyingOffersData();
    getUserOffersData()
    getUserRentingOffersData()
  }

}, [connector,owner]);


console.log(userOffersForBuy)
console.log(userOffersForRent)
  const APIURL =
      "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

  const stakingNftsOffersQuery = `
   query  {
    stakingOffers(where:{owner:"${owner}"}) {
        id
        newOfferedColloteral
        newOfferedPremiumWei
        tokenId
        tokenName
        tokenURI
        taker
        stakingId
        owner
        tokenAdress
        offerStatus
    }
  }
   `;

  const buyingNftsOffersQuery = `
   query  {
    buyingOffers(where:{owner:"${owner}"}) {
        id
        taker
        listingId
        newOfferedPrice
        owner
        tokenId
        tokenName
        tokenURI
        tokenAdress
        offerStatus
    }
  }
   `;

  const userRentingOffersQuery = `
   query  {
    stakingOffers(where:{taker:"${owner}"}) {
        id
        newOfferedColloteral
        newOfferedPremiumWei
        tokenId
        tokenName
        tokenURI
        taker
        owner
        tokenAdress
        offerStatus
        
    }
  }
   `;

  const userBuyingOffersQuery = `
   query  {
    buyingOffers(where:{taker:"${owner}"}) {
        id
        taker
        listingId
        newOfferedPrice
        owner
        tokenId
        tokenName
        tokenURI
        tokenAdress
        offerStatus
    }
  }
   `;
  const client = createClient({
    url: APIURL,
  });

  async function fetchStakingData() {
    const data = await client.query(stakingNftsOffersQuery).toPromise();

    return data.data;
  }

  async function fetchBuyingData() {
    const data = await client.query(buyingNftsOffersQuery).toPromise();

    return data.data;
  }

  async function fetchUserBuyingOffersData() {
    const data = await client.query(userBuyingOffersQuery ).toPromise();

    return data.data;
  }
  async function fetchUserRentingOffersData() {
    const data = await client.query(userRentingOffersQuery ).toPromise();

    return data.data;
  }


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
                <OffersText color="#5D3F92">{i.taker}</OffersText>
              </OffersTdText>
              <OffersTdButton>
                <AcceptBTN onClick={()=>acceptStakingOffer(i.stakingId,i.taker)}>Accept</AcceptBTN>
              </OffersTdButton>
              <OffersTdButton>
                <MakeOfferBTN>Make offer</MakeOfferBTN>
              </OffersTdButton>
              <OffersTdButton>
                <DenyBTN onClick={()=>{alert('Not ready yet')}}>Deny</DenyBTN>
              </OffersTdButton>
            </OffersTr>
           })}
            {buyingOffersList.map((i)=>{
              return <OffersTr className="offers-menu-row" key={i.tokenURI}>
                <OffersTdText className="first-column">
                  <CartIco />
                  <OffersTooltipWrap className="offers-tooltip">
                    <OffersTooltip>Buy</OffersTooltip>
                  </OffersTooltipWrap>
                </OffersTdText>
                <OffersTdText className="offers-table-item">
                  <ItemIcon>
                    <img src={i.tokenURI} width={30} height={30} alt="item icon" />
                  </ItemIcon>
                  <ItemName>{i.tokenName}</ItemName>
                </OffersTdText>
                <OffersTdText>
                  <PriceTextETH>{i.offeredNumber}</PriceTextETH>
                  <WethText>WETH</WethText>
                </OffersTdText>
                <OffersTdText>
                  <OffersText>In 20 hours</OffersText>
                </OffersTdText>
                <OffersTdText>
                  <OffersText color="#5D3F92">{i.taker}</OffersText>
                </OffersTdText>
                <OffersTdButton>
                  <AcceptBTN onClick={()=>acceptBuyingOffer(i.listingId,i.taker)}>Accept</AcceptBTN>
                </OffersTdButton>
                <OffersTdButton>
                  <MakeOfferBTN>Make offer</MakeOfferBTN>
                </OffersTdButton>
                <OffersTdButton>
                  <DenyBTN onClick={()=>alert('deny NOT READY :( ')}>Deny</DenyBTN>
                </OffersTdButton>
              </OffersTr>
            })}

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
              <OffersTdText>To</OffersTdText>
              <OffersTdText></OffersTdText>
              <OffersTdText></OffersTdText>
              <OffersTdText></OffersTdText>
            </OffersHeadTr>

             {userOffersForRent.map((i)=>{

             return <OffersTr className="offers-menu-row" key={i.tokenURI}>
              <OffersTdText className="first-column">
                <HandShakeIco />
                <OffersTooltipWrap className="offers-tooltip">
                  <OffersTooltip>Rent</OffersTooltip>
                </OffersTooltipWrap>
              </OffersTdText>
              <OffersTdText className="offers-table-item">
                <ItemIcon>
                  <img src={i.tokenURI} width={25} height={25} alt="item icon" />
                </ItemIcon>
                <ItemName>{i.tokenName}</ItemName>
              </OffersTdText>
              <OffersTdText>
                <PriceTextETH>{i.offeredColloteralWei}/{i.offeredPremiumInNum}</PriceTextETH>
                <WethText>WETH</WethText>
              </OffersTdText>
              <OffersTdText>
                <OffersText>In 20 hours</OffersText>
              </OffersTdText>
              <OffersTdText>
                <OffersText color="#5D3F92">{i.owner}</OffersText>
              </OffersTdText>
              <OffersTdEmpty></OffersTdEmpty>
              <OffersTdButton>
                <MakeOfferBTN>Edit Offer</MakeOfferBTN>
              </OffersTdButton>
              <OffersTdButton>
                <DenyBTN onClick={()=>removeStakingOffer(i.stakingId)}>Cancel</DenyBTN>
              </OffersTdButton>
            </OffersTr>
             })}
            {userOffersForBuy.map((i)=>{
              return <OffersTr className="offers-menu-row" key={i.tokenURI}>
                <OffersTdText className="first-column">
                  <CartIco />
                  <OffersTooltipWrap className="offers-tooltip">
                    <OffersTooltip>Buy</OffersTooltip>
                  </OffersTooltipWrap>
                </OffersTdText>
                <OffersTdText className="offers-table-item">
                  <ItemIcon>
                    <img src={i.tokenURI} width={25} height={25} alt="item icon" />
                  </ItemIcon>
                  <ItemName>{i.tokenName}</ItemName>
                </OffersTdText>
                <OffersTdText>
                  <PriceTextETH>{i.offeredNumber}</PriceTextETH>
                  <WethText>WETH</WethText>
                </OffersTdText>
                <OffersTdText>
                  <OffersText>In 20 hours</OffersText>
                </OffersTdText>
                <OffersTdText>
                  <OffersText color="#5D3F92">{i.owner}</OffersText>
                </OffersTdText>
                <OffersTdEmpty></OffersTdEmpty>
                <OffersTdButton>
                  <MakeOfferBTN>Edit Offer</MakeOfferBTN>
                </OffersTdButton>
                <OffersTdButton>
                  <DenyBTN onClick={()=>{cancelListingOffer(i.listingId)}}>Cancel</DenyBTN>
                </OffersTdButton>
              </OffersTr>
            })}
          </>
        )}
      </OffersWrapTable>
    </OfferMenuWrap>
  );
};

export default OffersMenu;
