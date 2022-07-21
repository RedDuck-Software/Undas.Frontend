import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useState, useContext, useEffect } from "react";
import { createClient } from "urql";
import { useQuery } from "urql";

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
  CancelBtnWrapper,
  NFTImg,
} from "./Menu.styles";
import {
  GET_RECEIVED_OFFERS_FOR_NOT_LISTED_NFTS,
  GET_YOUR_OFFERS_FOR_NOT_LISTED_NFTS,
} from "./query";
import { OfferType } from "./types";

import FilterSelected from "../../../../components/FilterSelected/FilterSelected";
import Error from "../../../../components/Modal/Error/Error";
import {
  Marketplace__factory,
  UndasGeneralNFT__factory,
} from "../../../../typechain";
import { TransactionError } from "../../../../types/global";
import {
  MARKETPLACE_ADDRESS,
  NFT_ADDRESS,
} from "../../../../utils/addressHelpers";
import Context from "../../../../utils/Context";
import { CartIco, HandShakeIco } from "../../../NFTPage/imports";
import {
  OffersTr,
  OffersHeadTr,
  OffersText,
} from "../../../NFTPage/page-components/Accordion/Accordion.styles";
import { OffResaivedIco, OffMadeIco, ItemVerifyIco } from "../../imports";
import NoData from "../NoData/NoData";

interface CommonProps {
  tokenId: number;
  tokenName: string;
  tokenURI: string;
  tokenAddress?: string;
  owner: string;
  taker: string;
  collectionId?: string;
}

export interface RentingOfferProps extends CommonProps {
  offeredPremiumInNum: number;
  offeredColloteralWei: number;
  stakingId: number;
}

export interface BuyingOfferProps extends CommonProps {
  offeredNumber: number;
  listingId?: number;
  offerId?: number;
}

const OffersMenu = () => {
  const [showTransactionError, setShowTransactionError] =
    useState<boolean>(false);
  const [transactionError, setTransactionError] = useState<TransactionError>({
    code: -1,
    message: "",
  });

  const { connector } = useContext(Context);
  const { account } = useWeb3React();

  const [offerType, setOfferType] = useState(OfferType.resaived);

  const stakings: RentingOfferProps[] = [];
  const listing: BuyingOfferProps[] = [];

  const userRentingOffers: RentingOfferProps[] = [];
  const userListingOffers: BuyingOfferProps[] = [];

  const [rentingOffersList, setRentingOffersList] = useState<
    RentingOfferProps[]
  >([]);
  const [buyingOffersList, setBuyingOffersList] = useState<BuyingOfferProps[]>(
    [],
  );

  const [userOffersForRent, setUserOffersForRent] = useState<
    RentingOfferProps[]
  >([]);
  const [userOffersForBuy, setUserOffersForBuy] = useState<BuyingOfferProps[]>(
    [],
  );

  const [owner, setOwner] = useState("");

  const createdMultipleQuery = () => {
    const madeOffers = useQuery({
      query: GET_YOUR_OFFERS_FOR_NOT_LISTED_NFTS,
      variables: { creator: account },
    });
    const receivedOffers = useQuery({
      query: GET_RECEIVED_OFFERS_FOR_NOT_LISTED_NFTS,
      variables: { creator: account },
    });

    return [madeOffers, receivedOffers];
  };
  const [[madeOffersResult], [receivedOffersResult]] = createdMultipleQuery();

  const getOwner = async () => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);
    const singerAddress = await signer.getAddress();

    setOwner(singerAddress);
  };

  const cancelListingOffer = async (listingId: any) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );
    try {
      const tx = await MarketplaceContract.cancelListingOffer(listingId);
      await tx.wait();
    } catch (error: any) {
      setTransactionError(error);
      setShowTransactionError(true);
    }
  };

  const removeStakingOffer = async (stakingId: number) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    try {
      const tx = await MarketplaceContract.removeStakingOffer(stakingId);
      await tx.wait();
    } catch (error: any) {
      setTransactionError(error);
      setShowTransactionError(true);
    }
  };

  const acceptStakingOffer = async (stakingId: number, taker: string) => {
    if (!connector) return;
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    try {
      const tx = await MarketplaceContract.acceptStakingOffer(
        stakingId,
        taker,
        false,
      );
      await tx.wait();
    } catch (error: any) {
      setTransactionError(error);
      setShowTransactionError(true);
    }
  };
  const acceptBuyingOffer = async (listingId: any, taker: any) => {
    if (!connector) return;
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    try {
      const tx = await MarketplaceContract.acceptListingOffer(listingId, taker);
      await tx.wait();
    } catch (error: any) {
      setTransactionError(error);
      setShowTransactionError(true);
    }
  };

  const acceptOfferForNotListedToken = async (offerId: any) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    const NftContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);
    //approve to market
    try {
      const approve = await NftContract.setApprovalForAll(
        MARKETPLACE_ADDRESS,
        true,
      );

      await approve.wait();
    } catch (error: any) {
      setTransactionError(error);
      setShowTransactionError(true);
    }

    //todo put hardcoded to env
    try {
      const tx = await MarketplaceContract.acceptOfferForNotListedToken(
        offerId,
        "0x19CF92bC45Bc202DC4d4eE80f50ffE49CB09F91d",
      );

      await tx.wait();
    } catch (error: any) {
      setTransactionError(error);
      setShowTransactionError(true);
    }
  };

  const denyOfferForNotListedToken = async (offerId: any) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    try {
      const tx = await MarketplaceContract.denyOfferForNotListedToken(offerId);
      await tx.wait();
    } catch (error: any) {
      setTransactionError(error);
      setShowTransactionError(true);
    }
  };

  const cancelUserOfferForNotListedToken = async (offerId: any) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );

    try {
      const tx = await MarketplaceContract.cancelOfferForNotListedToken(
        offerId,
      );
      await tx.wait();
    } catch (error: any) {
      setTransactionError(error);
      setShowTransactionError(true);
    }
  };

  const getStaking0ffers = async () => {
    if (!connector) {
      return;
    }

    const offers = await fetchStakingData();

    offers.stakingOffers.map((offer: any) => {
      if (
        offer.offerStatus == "ACTIVE" &&
        offer.newOfferedColloteral != "0" &&
        offer.newOfferedPremiumWei != "0"
      ) {
        const tokenId = offer.tokenId;
        const tokenName = offer.tokenName;
        const stakingId = offer.stakingId;
        const tokenURI = offer.tokenURI;
        const offeredColloteralWei = Number(
          ethers.utils.formatUnits(offer.newOfferedColloteral, 18),
        );
        const offeredPremiumInNum = Number(
          ethers.utils.formatUnits(offer.newOfferedPremiumWei, 18),
        );
        const tokenAddress = offer.tokenAdress;
        const owner = offer.owner;
        const taker = offer.taker;

        stakings.push({
          tokenId,
          tokenName,
          tokenURI,
          tokenAddress,
          owner,
          taker,
          offeredColloteralWei,
          offeredPremiumInNum,
          stakingId,
        });
      }
    });
    return stakings;
  };

  const getBuyingOffers = async () => {
    const offers = await fetchBuyingData();

    const { data, fetching } = receivedOffersResult;

    if (fetching) return;

    offers.buyingOffers.map((offer: any) => {
      if (offer.offerStatus == "ACTIVE" && offer.newOfferedPrice != 0) {
        const tokenId = offer.tokenId;
        const tokenName = offer.tokenName;
        const listingId = offer.listingId;
        const tokenURI = offer.tokenURI;
        const offeredNumber = Number(
          ethers.utils.formatUnits(offer.newOfferedPrice, 18),
        );
        const tokenAddress = offer.tokenAdress;
        const owner = offer.owner;
        const taker = offer.taker;

        listing.push({
          tokenId,
          tokenName,
          tokenURI,
          tokenAddress,
          owner,
          taker,
          offeredNumber,
          listingId,
        });
      }
    });
    data.offerForUserNfts.map((offer: any) => {
      if (offer.offerStatus == "ACTIVE") {
        const tokenId = offer.tokenId;
        const tokenName = offer.tokenName;
        const offerId = offer.offerId;
        const tokenURI = offer.tokenUri;
        const offeredNumber = Number(
          ethers.utils.formatUnits(offer.offeredAmount, 18),
        );
        const tokenAddress = "0x19CF92bC45Bc202DC4d4eE80f50ffE49CB09F91d";
        const owner = offer.to;
        const taker = offer.from;
        const collectionId = offer.collectionId;

        listing.push({
          tokenId,
          tokenName,
          tokenURI,
          tokenAddress,
          owner,
          taker,
          offeredNumber,
          offerId,
          collectionId,
        });
      }
    });

    return listing;
  };

  const getUserBuyingOffers = async () => {
    if (!connector) {
      return;
    }
    const offers = await fetchUserBuyingOffersData();

    const { data, fetching } = madeOffersResult;
    if (fetching) return;
    offers.buyingOffers.map((offer: any) => {
      if (offer.offerStatus == "ACTIVE" && offer.newOfferedPrice != 0) {
        const tokenId = offer.tokenId;
        const tokenName = offer.tokenName;
        const listingId = offer.listingId;
        const tokenURI = offer.tokenURI;
        const offeredNumber = Number(
          ethers.utils.formatUnits(offer.newOfferedPrice, 18),
        );
        const tokenAddress = offer.tokenAdress;
        const owner = offer.owner;
        const taker = offer.taker;

        userListingOffers.push({
          tokenId,
          tokenName,
          tokenURI,
          tokenAddress,
          owner,
          taker,
          offeredNumber,
          listingId,
        });
      }
    });
    data.offerForUserNfts.map((offer: any) => {
      if (offer.offerStatus == "ACTIVE" || offer.offerStatus == "EXPIRED") {
        const tokenId = offer.tokenId;
        const tokenName = offer.tokenName;
        const offerId = offer.offerId;
        const tokenURI = offer.tokenUri;
        const offeredNumber = Number(
          ethers.utils.formatUnits(offer.offeredAmount, 18),
        );
        const tokenAddress = "0x19CF92bC45Bc202DC4d4eE80f50ffE49CB09F91d";
        const owner = offer.to;
        const taker = offer.from;
        const collectionId = offer.collectionId;

        userListingOffers.push({
          tokenId,
          tokenName,
          tokenURI,
          tokenAddress,
          owner,
          taker,
          offeredNumber,
          offerId,
          collectionId,
        });
      }
    });
    return userListingOffers;
  };

  const getUserRentingOffers = async () => {
    if (!connector) {
      return;
    }
    const offers = await fetchUserRentingOffersData();
    offers.stakingOffers.map((offer: any) => {
      if (
        offer.offerStatus == "ACTIVE" &&
        offer.newOfferedPremiumWei != "0" &&
        offer.newOfferedPremiumWei != "0"
      ) {
        const tokenId = offer.tokenId;
        const tokenName = offer.tokenName;
        const stakingId = offer.stakingId;
        const tokenURI = offer.tokenURI;
        const offeredColloteralWei = Number(
          ethers.utils.formatUnits(offer.newOfferedColloteral, 18),
        );
        const offeredPremiumInNum = Number(
          ethers.utils.formatUnits(offer.newOfferedPremiumWei, 18),
        );
        const tokenAddress = offer.tokenAdress;
        const owner = offer.owner;
        const taker = offer.taker;

        userRentingOffers.push({
          tokenId,
          tokenName,
          tokenURI,
          tokenAddress,
          owner,
          taker,
          offeredColloteralWei,
          offeredPremiumInNum,
          stakingId,
        });
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
    getOwner();
    getStakingsOffersData();
    getBuyingOffersData();
    getUserOffersData();
    getUserRentingOffersData();
  }, [
    connector,
    owner,
    madeOffersResult.fetching,
    receivedOffersResult.fetching,
  ]);

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
        stakingId
        
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
    const data = await client.query(userBuyingOffersQuery).toPromise();

    return data.data;
  }
  async function fetchUserRentingOffersData() {
    const data = await client.query(userRentingOffersQuery).toPromise();

    return data.data;
  }
  return {
    offersCounter: rentingOffersList.length + buyingOffersList.length,
    offersMenu: (
      <>
        <OfferMenuWrap>
          {showTransactionError && transactionError.message.length > 0 && (
            <Error
              error={transactionError}
              show={showTransactionError}
              setShow={setShowTransactionError}
            />
          )}
          <OfferFilterWrap>
            <FilterButton
              className={
                offerType === OfferType.resaived ? "offers-active" : ""
              }
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

          <FilterSelected />

          {offerType === OfferType.made && (
            <CancelBtnWrapper>
              <CancelBtn>Cancel all Offers</CancelBtn>
            </CancelBtnWrapper>
          )}

          <OffersWrapTable>
            {offerType === OfferType.resaived && (
              <>
                {rentingOffersList.length > 0 || buyingOffersList.length > 0 ? (
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
                ) : (
                  <NoData />
                )}
                {rentingOffersList.map((i) => {
                  return (
                    <OffersTr className="offers-menu-row" key={i.tokenURI}>
                      <OffersTdText className="first-column">
                        <HandShakeIco />
                        <OffersTooltipWrap className="offers-tooltip">
                          <OffersTooltip>Rent</OffersTooltip>
                        </OffersTooltipWrap>
                      </OffersTdText>
                      <OffersTdText className="offers-table-item">
                        <ItemIcon>
                          <NFTImg src={i.tokenURI} alt="item image" />
                        </ItemIcon>
                        <ItemName>{i.tokenName}</ItemName>
                        <ItemVerifyIco />
                      </OffersTdText>
                      <OffersTdText>
                        <PriceTextETH>
                          {i.offeredColloteralWei}/{i.offeredPremiumInNum}
                        </PriceTextETH>
                        <WethText>WETH</WethText>
                      </OffersTdText>
                      <OffersTdText>
                        <OffersText>No expiration time</OffersText>
                      </OffersTdText>
                      <OffersTdText>
                        <OffersText color="#5D3F92">{i.taker}</OffersText>
                      </OffersTdText>
                      <OffersTdButton>
                        <AcceptBTN
                          onClick={() =>
        
                            acceptStakingOffer(i.stakingId, i.taker)
                          }
                        >
                          Accept
                        </AcceptBTN>
                      </OffersTdButton>
                      <OffersTdButton>
                        <MakeOfferBTN>Make offer</MakeOfferBTN>
                      </OffersTdButton>
                      <OffersTdButton>
                        <DenyBTN
                          onClick={() => {
                            alert("Not ready yet");
                          }}
                        >
                          Deny
                        </DenyBTN>
                      </OffersTdButton>
                    </OffersTr>
                  );
                })}
                {buyingOffersList.map((i) => {
                  if (i.listingId) {
                    return (
                      <OffersTr className="offers-menu-row" key={i.tokenURI}>
                        <OffersTdText className="first-column">
                          <CartIco />
                          <OffersTooltipWrap className="offers-tooltip">
                            <OffersTooltip>Buy</OffersTooltip>
                          </OffersTooltipWrap>
                        </OffersTdText>
                        <OffersTdText className="offers-table-item">
                          <ItemIcon>
                            <NFTImg src={i.tokenURI} alt="item icon" />
                          </ItemIcon>
                          <ItemName>{i.tokenName}</ItemName>
                        </OffersTdText>
                        <OffersTdText>
                          <PriceTextETH>{i.offeredNumber}</PriceTextETH>
                          <WethText>WETH</WethText>
                        </OffersTdText>
                        <OffersTdText>
                          <OffersText>No expiration time</OffersText>
                        </OffersTdText>
                        <OffersTdText>
                          <OffersText color="#5D3F92">{i.taker}</OffersText>
                        </OffersTdText>
                        <OffersTdButton>
                          <AcceptBTN
                            onClick={() =>
                              acceptBuyingOffer(i.listingId, i.taker)
                            }
                          >
                            Accept
                          </AcceptBTN>
                        </OffersTdButton>
                        <OffersTdButton>
                          <MakeOfferBTN>Make offer</MakeOfferBTN>
                        </OffersTdButton>
                        <OffersTdButton>
                          <DenyBTN onClick={() => alert("deny NOT READY :( ")}>
                            Deny
                          </DenyBTN>
                        </OffersTdButton>
                      </OffersTr>
                    );
                  }
                  /// .|.
                  if (i.offerId) {
                    return (
                      <OffersTr className="offers-menu-row" key={i.tokenURI}>
                        <OffersTdText className="first-column">
                          <CartIco />
                          <OffersTooltipWrap className="offers-tooltip">
                            <OffersTooltip>Buy</OffersTooltip>
                          </OffersTooltipWrap>
                        </OffersTdText>
                        <OffersTdText className="offers-table-item">
                          <ItemIcon>
                            <NFTImg src={i.tokenURI} alt="item icon" />
                          </ItemIcon>
                          <ItemName>{i.tokenName}</ItemName>
                        </OffersTdText>
                        <OffersTdText>
                          <PriceTextETH>{i.offeredNumber}</PriceTextETH>
                          <WethText>WETH</WethText>
                        </OffersTdText>
                        <OffersTdText>
                          <OffersText>No expiration time</OffersText>
                        </OffersTdText>
                        <OffersTdText>
                          <OffersText color="#5D3F92">{i.taker}</OffersText>
                        </OffersTdText>
                        <OffersTdButton>
                          <AcceptBTN
                            onClick={() =>
                              acceptOfferForNotListedToken(i.offerId)
                            }
                          >
                            Accept
                          </AcceptBTN>
                        </OffersTdButton>
                        <OffersTdButton>
                          <MakeOfferBTN>Make offer</MakeOfferBTN>
                        </OffersTdButton>
                        <OffersTdButton>
                          <DenyBTN
                            onClick={() =>
                              denyOfferForNotListedToken(i.offerId)
                            }
                          >
                            Deny
                          </DenyBTN>
                        </OffersTdButton>
                      </OffersTr>
                    );
                  }
                })}
              </>
            )}
            {offerType === OfferType.made && (
              <>
                {userOffersForRent.length > 0 || userOffersForBuy.length > 0 ? (
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
                ) : (
                  <NoData />
                )}

                {userOffersForRent.map((i) => {
                  return (
                    <OffersTr className="offers-menu-row" key={i.tokenURI}>
                      <OffersTdText className="first-column">
                        <HandShakeIco />
                        <OffersTooltipWrap className="offers-tooltip">
                          <OffersTooltip>Rent</OffersTooltip>
                        </OffersTooltipWrap>
                      </OffersTdText>
                      <OffersTdText className="offers-table-item">
                        <ItemIcon>
                          <NFTImg src={i.tokenURI} alt="item icon" />
                        </ItemIcon>
                        <ItemName>{i.tokenName}</ItemName>
                      </OffersTdText>
                      <OffersTdText>
                        <PriceTextETH>
                          {i.offeredColloteralWei}/{i.offeredPremiumInNum}
                        </PriceTextETH>
                        <WethText>WETH</WethText>
                      </OffersTdText>
                      <OffersTdText>
                        <OffersText>No expiration time</OffersText>
                      </OffersTdText>
                      <OffersTdText>
                        <OffersText color="#5D3F92">{i.owner}</OffersText>
                      </OffersTdText>
                      <OffersTdEmpty></OffersTdEmpty>
                      <OffersTdButton>
                        <MakeOfferBTN>Edit Offer</MakeOfferBTN>
                      </OffersTdButton>
                      <OffersTdButton>
                        <DenyBTN
                          onClick={() => removeStakingOffer(i.stakingId)}
                        >
                          Cancel
                        </DenyBTN>
                      </OffersTdButton>
                    </OffersTr>
                  );
                })}
                {userOffersForBuy.map((i) => {
                  if (i.listingId) {
                    return (
                      <OffersTr className="offers-menu-row" key={i.tokenURI}>
                        <OffersTdText className="first-column">
                          <CartIco />
                          <OffersTooltipWrap className="offers-tooltip">
                            <OffersTooltip>Buy</OffersTooltip>
                          </OffersTooltipWrap>
                        </OffersTdText>
                        <OffersTdText className="offers-table-item">
                          <ItemIcon>
                            <NFTImg src={i.tokenURI} alt="item icon" />
                          </ItemIcon>
                          <ItemName>{i.tokenName}</ItemName>
                        </OffersTdText>
                        <OffersTdText>
                          <PriceTextETH>{i.offeredNumber}</PriceTextETH>
                          <WethText>WETH</WethText>
                        </OffersTdText>
                        <OffersTdText>
                          <OffersText>No expiration time</OffersText>
                        </OffersTdText>
                        <OffersTdText>
                          <OffersText color="#5D3F92">{i.owner}</OffersText>
                        </OffersTdText>
                        <OffersTdEmpty></OffersTdEmpty>
                        <OffersTdButton>
                          <MakeOfferBTN>Edit Offer</MakeOfferBTN>
                        </OffersTdButton>
                        <OffersTdButton>
                          <DenyBTN
                            onClick={() => {
                              cancelListingOffer(i.listingId);
                            }}
                          >
                            Cancel
                          </DenyBTN>
                        </OffersTdButton>
                      </OffersTr>
                    );
                  }
                  if (i.offerId) {
                    return (
                      <OffersTr className="offers-menu-row" key={i.tokenURI}>
                        <OffersTdText className="first-column">
                          <CartIco />
                          <OffersTooltipWrap className="offers-tooltip">
                            <OffersTooltip>Buy</OffersTooltip>
                          </OffersTooltipWrap>
                        </OffersTdText>
                        <OffersTdText className="offers-table-item">
                          <ItemIcon>
                            <NFTImg src={i.tokenURI} alt="item icon" />
                          </ItemIcon>
                          <ItemName>{i.tokenName}</ItemName>
                        </OffersTdText>
                        <OffersTdText>
                          <PriceTextETH>{i.offeredNumber}</PriceTextETH>
                          <WethText>WETH</WethText>
                        </OffersTdText>
                        <OffersTdText>
                          <OffersText>No expiration time</OffersText>
                        </OffersTdText>
                        <OffersTdText>
                          <OffersText color="#5D3F92">{i.owner}</OffersText>
                        </OffersTdText>
                        <OffersTdEmpty></OffersTdEmpty>
                        <OffersTdButton>
                          <MakeOfferBTN>Edit Offer</MakeOfferBTN>
                        </OffersTdButton>
                        <OffersTdButton>
                          <DenyBTN
                            onClick={() => {
                              cancelUserOfferForNotListedToken(i.offerId); //suda
                            }}
                          >
                            Cancel
                          </DenyBTN>
                        </OffersTdButton>
                      </OffersTr>
                    );
                  }
                })}
              </>
            )}
          </OffersWrapTable>
        </OfferMenuWrap>
      </>
    ),
  };
};

export default OffersMenu;
