import { css } from "@emotion/react";
import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { createClient } from "urql";

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
  NotListedWrapper,
  OwnerSettingsWrapper,
  OwnerSettingsButton,
  OwnerSettingsNavigation,
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
  const [collectionName, setcollectionName] = useState<string>('No collection');

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
    console.log('seeller',seller)
    console.log('state',state)
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

  const getShowBuy = async () => {
    if (!connector) {
      console.log("!connector");
    }
    console.log("listingID", listingId);
    if (listingId) {
      setShowBuy(true);
    } else {
      setShowBuy(false);
    }
  };

  async function getShowRent() {
    if (stakingId) {
      setShowRent(true);
    } else {
      setShowRent(false);
    }
  }

  useEffect(() => {
    getTokenData();
    getShowBuy();
    getShowRent();
    getOwner();
  }, [connector, listingId, stakingId, premium, colloteral, seller]);

  const getTokenData = async () => {
    const tokensQuery = await fetchData();
    console.log("tokensQuery", tokensQuery);
    if (
      tokensQuery.data.listings[0] &&
      tokensQuery.data.listings[0].listingStatus == "ACTIVE"
    ) {
      console.log('tokensQuery.data.listings[0].id;')
      setName(tokensQuery.data.listings[0].tokenName);
      setTokenURI(tokensQuery.data.listings[0].tokenURI);
      setPriceInNum(tokensQuery.data.listings[0].price);
      setDescription(tokensQuery.data.listings[0].tokenDescription);
      setListingId(tokensQuery.data.listings[0].id);
      setSeller(tokensQuery.data.listings[0].seller);
      setcollectionName(tokensQuery.data.listings[0].collectionName?tokensQuery.data.listings[0].collectionName:'No collection')
      setLoading(false);

      return;
    }

    if (
      tokensQuery.data.stakingListings[0] &&
      tokensQuery.data.stakingListings[0].stakingStatus == "ACTIVE"
    ) {
      setName(tokensQuery.data.stakingListings[0].tokenName);
      setTokenURI(tokensQuery.data.stakingListings[0].tokenURI);
      setDescription(tokensQuery.data.stakingListings[0].tokenDescription);
      setStakingId(tokensQuery.data.stakingListings[0].id);
      setSeller(tokensQuery.data.stakingListings[0].seller);
      setColloteral(tokensQuery.data.stakingListings[0].colloteralWei);
      setPremium(tokensQuery.data.stakingListings[0].premiumWei);
      setLoading(false);

      return;
    }
    setLoading(false);
  };

  const APIURL =
    "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

  console.log("stateID", state.state.tokenId);
  console.log("stateADDRESS", state.state.tokenAddress);

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
                  <NameNft>Collection Name</NameNft>
                  <VerifiedIcon w="24px" className="nft-page">
                    <img src={Verified} alt="verified-ico" />
                  </VerifiedIcon>
                  <Platform col="#873DC1" fs="24px">
                    UND
                  </Platform>
                </Name>
                <Name>
                  <NameCollection>
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
                        Owned by <PurpleText>Hype-eth</PurpleText>
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
                      <NotListedWrapper>
                        <NotListed>Not listed for rent</NotListed>
                      </NotListedWrapper>
                    ) : (
                      <>
                        <RentElement>
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
                        <RentElement>
                          <span>Price for 1 Week Rental</span>
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
                        <RentElement>
                          <span>Period</span>
                          <RentalPeriod placeholder="7 for 90 days" />
                        </RentElement>
                        <RentElement h="76px">
                          <InfoButton
                            bg="#873DC1"
                            flex="1 1 0"
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
                <Offers isOwner={isOwner} />
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
            <AdvertisingSlider />
          </>
        )}
      </NFTPageWrap>
    </Background>
  );
};

export default NFTPage;
