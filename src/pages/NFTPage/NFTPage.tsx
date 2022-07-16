import { css } from "@emotion/react";
import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
  import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { createClient, useQuery } from "urql";

import {
  CartIco,
  ViewsIco,
  FavouriteIco,
  FavouriteCounterIco,
  UnlockIco,
  RefreshIco,
  FlaggedIco,
  ThreeCircleIco,
  OpenInIco,
  EthIco,
  RentIco,
  OffersIco,
  DetailsIco,
  AboutIco,
  PropertiesIco,
  StatsIco,
  LevelsIco,
  ItemActivityIco,
  StakingIco,
} from "./imports";
import {
  NFTPageWrap,
  NavigationWrap,
  NameInner,
  Name,
  NameNft,
  NameCollection,
  VerifiedIcon,
  Platform,
  NavMenu,
  NavElement,
  MainInfoWrap,
  ImageWrap,
  Image,
  FavouriteCounter,
  CounterNumber,
  Info,
  InfoElement,
  PurpleText,
  SaleBlock,
  TopBar,
  PriceText,
  InfoButton,
  PriceInUSD,
  RentElement,
  RentalPeriod,
  RightSideBlock,
  NotListed,
  OwnerSettingsWrapper,
  OwnerSettingsButton,
  OwnerSettingsNavigation,
  ContainerButton,
} from "./NFTPage.styles";
import Accordion from "./page-components/Accordion/Accordion";
import About from "./page-components/Accordion/accordrion-components/About";
import Description from "./page-components/Accordion/accordrion-components/Description";
import Details from "./page-components/Accordion/accordrion-components/Details";
import ItemActivity from "./page-components/Accordion/accordrion-components/ItemActivity";
import Levels from "./page-components/Accordion/accordrion-components/Levels";
import Offers from "./page-components/Accordion/accordrion-components/Offers";
import Properties from "./page-components/Accordion/accordrion-components/Properties";
import Staking from "./page-components/Accordion/accordrion-components/Staking";
import Stats from "./page-components/Accordion/accordrion-components/Stats";
import Buy from "./page-components/Buy";

import AdvertisingSlider from "../../components/AdvertisingSlider/AdvertisingSlider";
import { GET_NFT_OFFERS, GET_SAME_COLLECTIONS } from "../../components/AdvertisingSlider/query";
import { Background } from "../../globalStyles";
import { Marketplace__factory } from "../../typechain";
import { MARKETPLACE_ADDRESS } from "../../utils/addressHelpers";
import Context from "../../utils/Context";
import { Wrapper } from "../CategoriesPage/Categories.styles";
import { Verified } from "../CategoriesPage/imports";

const NFTPage: React.FC = () => {
  const override = css`
    display: block;
    margin: auto;
  `;

  const navigate = useNavigate();
  const { connector } = useContext(Context);
  const [name, setName] = useState<string>();
  const [tokenURI, setTokenURI] = useState<string>();
  const [priceInNum, setPriceInNum] = useState(0);
  const [colloteral, setColloteral] = useState(0);
  const [premium, setPremium] = useState(0);
  const [, setDescription] = useState<string>();
  const [listingId, setListingId] = useState(0);
  const [stakingId, setStakingId] = useState(0);
  const [seller, setSeller] = useState<string>();
  const [collectionName, setcollectionName] = useState<string>("No collection");
  const [collectionId,setCollectionId] = useState('null')
  const [status, setStatus] = useState('');
  const [itemForCarousel,setItemsForCarousel] = useState<any>()
  const [itemsForOffer,setItemsForOffer] = useState<any>()

  const [loading, setLoading] = useState(true);
  const [showBuy, setShowBuy] = useState(true);
  const [showRent, setShowRent] = useState(true);
  const [isOwner, setIsOwner] = useState(true);

  const state: any = useLocation();
  const URI = state.state.URI;
  const nameFromProps = state.state.name;
  const tokenId = state.state.tokenId;
  const getOwner = async () => {
    if (!connector) {
      return;
    }

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);
    const singerAddress = await (await signer.getAddress()).toLowerCase();

    if (!seller) {
      setSeller(state.state.tokenOwner);
    }
    if (singerAddress == seller) {
      setIsOwner(false);
    }
  };
  async function rentToken(
    stakingId: number,
    colloteralWei?: number,
    premium?: number,
  ) {
    if (colloteralWei == undefined) {
      return;
    }
    if (premium == undefined) {
      return;
    }
    if (!connector) {
      navigate("/login");
      return;
    }
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );
    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer,
    );
    const amountToPay = +colloteralWei + +premium + (+premium * 20) / 100;

    const formattedAmountToPay = ethers.utils.formatUnits(
      amountToPay.toString(),
      "ether",
    );
    const tx = await MarketplaceContract.rentNFT(stakingId, false, {
      value: ethers.utils.parseUnits(formattedAmountToPay, "ether"),
      gasPrice: 20000,
    });
    await tx.wait();
  }
console.log('itemsForOffer',itemsForOffer)
  const getShowBuy = async () => {
    if (!connector) {
      return;
    }
    if (listingId && status == 'ACTIVE') {
      setShowBuy(true);
    } else {
      setShowBuy(false);
    }
  };

  async function getShowRent() {
    if (stakingId && status == 'ACTIVE') {
      setShowRent(true);
    } else {
      setShowRent(false);
    }
  }

  console.log(state.state.tokenAddress )
  const createdMultipleQuery = () => {
    const collectionItems = useQuery({
      query: GET_SAME_COLLECTIONS,
      variables: { collectionId: collectionId}
    });
    const offersItems = useQuery({
      query: GET_NFT_OFFERS,
      variables: { tokenId:tokenId,tokenAddress:state.state.tokenAddress }
    });

    return [collectionItems,offersItems];
  };
  const [[collectionItemResult],[offersItems]] = createdMultipleQuery();

  const { data,fetching } = collectionItemResult;

  

  const getTokenData = async () => {
    const tokensQuery = await fetchData();
    if (
      tokensQuery.data.listings[0] &&
      tokensQuery.data.listings[0].listingStatus == "ACTIVE"
    ) {
      setName(tokensQuery.data.listings[0].tokenName);
      setTokenURI(tokensQuery.data.listings[0].tokenURI);
      setPriceInNum(tokensQuery.data.listings[0].price);
      setDescription(tokensQuery.data.listings[0].tokenDescription);
      setListingId(tokensQuery.data.listings[0].id);
      setSeller(tokensQuery.data.listings[0].seller);
      setStatus(tokensQuery.data.listings[0].listingStatus);
      setcollectionName(
        tokensQuery.data.listings[0].collectionName
          ? tokensQuery.data.listings[0].collectionName
          : "No collection",
      );
      setLoading(false);
      setCollectionId(tokensQuery.data.listings[0].collectionId)
      return;
    }
    
    if (
      tokensQuery.data.stakingListings[0] &&
      tokensQuery.data.stakingListings[0].stakingStatus == "ACTIVE"
    ) {
      setName(tokensQuery.data.stakingListings[0].tokenName);
      setTokenURI(tokensQuery.data.stakingListings[0].tokenURI);
      setDescription(tokensQuery.data.stakingListings[0].tokenDescription);
      setStatus(tokensQuery.data.stakingListings[0].stakingStatus);
      setStakingId(tokensQuery.data.stakingListings[0].id);
      setSeller(tokensQuery.data.stakingListings[0].seller);
      setColloteral(tokensQuery.data.stakingListings[0].colloteralWei);
      setPremium(tokensQuery.data.stakingListings[0].premiumWei);
      setCollectionId(tokensQuery.data.stakingListings[0].collectionId)
      setLoading(false);

      return;
    }
    setLoading(false);
  };
  console.log('itemsForOffer',itemsForOffer)
  useEffect(() => {
    if (fetching) return;
    setItemsForCarousel(data)
    setItemsForOffer(offersItems.data)
    getTokenData();
    getShowBuy();
    getShowRent();
    getOwner();
  }, [connector, listingId, stakingId, premium, colloteral, seller, fetching, collectionId, offersItems.fetching]);

  const APIURL =
    "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";
  const tokensQuery = `
{
  listings(where:{tokenId:"${state.state.tokenId}" token:"${state.state.tokenAddress}"}){
    id
 	tokenId
    tokenURI
    price
    tokenName
    token
    tokenDescription
    seller
    listingStatus
    collectionName
    collectionId
  }
  stakingListings(where:{tokenId:"${state.state.tokenId}" token:"${state.state.tokenAddress}"}){
    id
    seller
 	  tokenId
    tokenURI
    tokenName
    tokenDescription
    colloteralWei
    premiumWei
    deadlineUTC
    stakingStatus
    collectionId
  }
}
 `;

  const client = createClient({
    url: APIURL,
  });
  async function fetchData() {
    const data = await client.query(tokensQuery).toPromise();

    return data;
  }

  console.log('collectionId',collectionId)
  return (
    <Background>
      {!loading && !isOwner && (
        <OwnerSettingsWrapper>
          <OwnerSettingsNavigation>
            <>
              <OwnerSettingsButton isColored={true}>
                Cancel listing
              </OwnerSettingsButton>
            </>
            <OwnerSettingsButton
              isColored={true}
              onClick={(e) => {
                navigate(`/nft/sale/${tokenId}`, { state: { ...state } });
                e.stopPropagation();
              }}
            >
              Rent-sell
            </OwnerSettingsButton>
          </OwnerSettingsNavigation>
        </OwnerSettingsWrapper>
      )}
      <NFTPageWrap>
        {loading ? (
          <ClipLoader
            color={"#BD10E0"}
            css={override}
            loading={loading}
            size={150}
          />
        ) : (
          <>
            <NavigationWrap>
              <NameInner>
                <Name>
                  <NameNft>{collectionName}</NameNft>
                  <VerifiedIcon w="24px" className="nft-page">
                    <img src={Verified} alt="verified-ico" />
                  </VerifiedIcon>
                  <Platform col="#873DC1" fs="24px">
                    UND
                  </Platform>
                </Name>
                <Name>
                  <NameCollection to="/">
                    {nameFromProps ? nameFromProps : name}
                  </NameCollection>
                </Name>
              </NameInner>
              <NavMenu>
                <NavElement className="first-element">
                  <RefreshIco />
                </NavElement>
                <NavElement>
                  <FlaggedIco />
                </NavElement>
                <NavElement>
                  <ThreeCircleIco />
                </NavElement>
                <NavElement className="last-element">
                  <OpenInIco />
                </NavElement>
              </NavMenu>
            </NavigationWrap>
            <MainInfoWrap>
              <ImageWrap>
                <Image src={URI ? URI : tokenURI} alt="nft-image" />
                <FavouriteCounter>
                  <FavouriteCounterIco />
                  <CounterNumber>10</CounterNumber>
                </FavouriteCounter>
              </ImageWrap>
              <RightSideBlock>
                <Wrapper
                  disp="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Info>
                    <InfoElement>
                      <span>
                        Owned by <PurpleText>{seller?seller.slice(0, 8) + "...":'somebody'}</PurpleText>
                      </span>
                    </InfoElement>
                    <InfoElement>
                      <ViewsIco />
                      <span>
                        91 <span className="hide">views</span>
                      </span>
                    </InfoElement>
                    <InfoElement>
                      <FavouriteIco />
                      <span>
                        10 <span className="hide">favourites</span>
                      </span>
                    </InfoElement>
                    <InfoElement>
                      <UnlockIco />
                      <span className="hide">Unlockable Content</span>
                    </InfoElement>
                  </Info>
                  <SaleBlock>
                    <TopBar className="head-open">
                      <CartIco />
                      Sale
                    </TopBar>
                    <Buy
                      id={listingId}
                      isOwner={isOwner}
                      showBuy={showBuy}
                      priceInNum={priceInNum}
                      tokenAddress={state.state.tokenAddress}
                      tokenId={state.state.tokenId}
                      state={state.state}
                    />
                  </SaleBlock>

                  <SaleBlock>
                    <TopBar className="head-open">
                      <RentIco />
                      Rent
                    </TopBar>

                    {showRent === false && isOwner === true ? (
                      <>
                          <RentElement h="76px">

                          <NotListed>Not listed for rent yet</NotListed>                          
                          <InfoButton
                            fc="#873DC1"
                            disabled={!isOwner}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(
                                `/offer-for-not-listed-nft/tokenAddress=${state.state.tokenAddress}&id=${state.state.tokenId}`,
                                { state: { ...state } },
                              );
                            }}
                          >
                            Make offer to rent
                          </InfoButton>
                        </RentElement>
                      </>
                      
                    ) : !state.state.premium ? (
                      <>
                          <RentElement h="76px">

                          <NotListed>Not listed for rent yet</NotListed>                          
                      
                        </RentElement>
                      </>
                    ): (
                      <>
                        <RentElement className="center">
                          <span>Deposit</span>
                          <Wrapper disp="flex" alignItems="center">
                            <EthIco />
                            <PriceText>
                              {ethers.utils.formatUnits(
                                colloteral.toString(),
                                "ether",
                              )}
                            </PriceText>
                            <PriceInUSD>($18 465,32)</PriceInUSD>
                          </Wrapper>
                        </RentElement>
                        <RentElement className="center">
                          <span>Price for 1  Rental</span>
                          <Wrapper disp="flex" alignItems="center">
                            <EthIco />
                            <PriceText>
                              {ethers.utils.formatUnits(
                                premium.toString(),
                                "ether",
                              )}
                            </PriceText>
                            <PriceInUSD>($36,93)</PriceInUSD>
                          </Wrapper>
                        </RentElement>
                        <RentElement className="center">
                          <span>Period</span>
                          <RentalPeriod placeholder="7 for 90 days" />
                        </RentElement>
                        <RentElement h="unset">
                          <ContainerButton>
                            <InfoButton
                              bg="#873DC1"
                              className="colored-btn"
                              disabled={!isOwner}
                              onClick={() =>
                                rentToken(stakingId, colloteral, premium)
                              }
                            >
                              Rent
                            </InfoButton>
                            <InfoButton
                              fc="#873DC1"
                              disabled={!isOwner}
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(
                                  `/offer-rent/tokenAddress=${state.state.tokenAddress}&id=${state.state.tokenId}`,
                                  { state: { ...state } },
                                );
                              }}
                            >
                              Make offer
                            </InfoButton>
                          </ContainerButton>
                        </RentElement>
                      </>
                    )}
                  </SaleBlock>
                </Wrapper>
              </RightSideBlock>
            </MainInfoWrap>
            {/*Accordions*/}
            <Wrapper disp="flex" flexWrap="wrap" gap="10px">
              <Accordion name="Offers" ico={<OffersIco />}>
                {itemsForOffer?<Offers isOwner={!isOwner} items={itemsForOffer} />:''}
                
              </Accordion>
              <Accordion name="Staking" ico={<StakingIco />} und="UND">
                <Staking />
              </Accordion>
              <Accordion name="Item Activity" ico={<ItemActivityIco />}>
                <ItemActivity />
              </Accordion>
              <Accordion name="Description" classLabel="half-width">
                <Description />
              </Accordion>
              <Accordion
                name="Details"
                ico={<DetailsIco />}
                classLabel="half-width"
              >
                <Details />
              </Accordion>
              <Accordion
                name="About"
                ico={<AboutIco />}
                classLabel="half-width"
              >
                <About />
              </Accordion>
              <Accordion
                name="Properties"
                ico={<PropertiesIco />}
                classLabel="half-width"
              >
                <Properties />
              </Accordion>
              <Accordion
                name="Stats"
                ico={<StatsIco />}
                classLabel="half-width"
              >
                <Stats complete={3} />
              </Accordion>
              <Accordion
                name="Levels"
                ico={<LevelsIco />}
                classLabel="half-width"
              >
                <Levels complete={4} />
              </Accordion>
            </Wrapper>
            {itemForCarousel ?
            <AdvertisingSlider collectionItems={itemForCarousel} collectionId={+collectionId}/>
            :
              <></>
          }
          </>
        )}
      </NFTPageWrap>
    </Background>
  );
};

export default NFTPage;
