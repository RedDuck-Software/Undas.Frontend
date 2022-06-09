import { css } from "@emotion/react";
import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import {
  NFTImage,
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
  Background,
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
import { UndasGeneralNFT__factory } from "../../typechain";
import { NFT_ADDRESS } from "../../utils/addressHelpers";
import Context from "../../utils/Context";
import { getListing } from "../../utils/getListing";
import { getNFTListingIds } from "../../utils/getNFTListingIds";
import { getNFTStakingIds } from "../../utils/getNFTStakingIds";
import { getStaking } from "../../utils/getStaking";
import getTokenURI from "../../utils/getTokenURI";
import { Wrapper } from "../CategoriesPage/Categories.styles";
import { Verified } from "../CategoriesPage/imports";
import { createClient } from "urql";
import Listing from "../Listing/Listing";


const NFTPage: React.FC = () => {

  const override = css`
    display: block;
    margin: auto;
  `;
  const params = useParams();
  
  const tokenId = params.id;

    if(!tokenId){
    console.log('NO TOKEN ID')
    return <h2>ERROR</h2>
  }
  
  const { connector } = useContext(Context);

  const [name, setName] = useState<string>();
  const [tokenURI, setTokenURI] = useState<string>();
  const [priceInNum, setPriceInNum] = useState(0);
  const [colloteral, setColloteral] = useState(0);
  const [premium, setPremium] = useState(0);
  const [description, setDescription] = useState<string>();
  const [listingId, setListingId] = useState(0);
  const [stakingId, setStakingId] = useState(0);
  const [owner,setOwner] = useState<string>();
  const [loading, setLoading] = useState(true);

  // const [showPriceHistory] = useState(false);
  const [, setShowStaking] = useState(true);
  const [, setShowBuy] = useState(true);
  const [, setShowRent] = useState(true);

  console.log('LESTING AID',listingId)
  const getShowStaking = async () => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const NFTContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);

    const address = await signer.getAddress();
    const owner = await NFTContract.owner();

    const ProductValue = await getStaking(stakingId, connector);

    if (!ProductValue) return;

    const { maker } = ProductValue.tx;

    if (
      address === owner &&
      maker === "0x0000000000000000000000000000000000000000"
    ) {
      setShowStaking(true);
    }
  };

  const getShowBuy = async () => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const NFTContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);

    const address = await signer.getAddress();
    const owner = await NFTContract.owner();
    const ProductValue = await getListing(listingId, connector);

    if (!ProductValue) return;

    const { seller } = ProductValue.tx;

    if (
      address === owner &&
      seller === "0x0000000000000000000000000000000000000000"
    ) {
      setShowBuy(true);
    }
  };

  async function getShowRent() {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider(),
    );

    const signer = provider.getSigner(0);

    const NFTContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);

    const address = await signer.getAddress();
    const owner = await NFTContract.owner();

    const ProductValue = await getStaking(stakingId, connector);

    if (!ProductValue) return;

    const { maker } = ProductValue.tx;

    if (
      address !== owner &&
      maker !== "0x0000000000000000000000000000000000000000"
    ) {
      setShowRent(false );
    }
  }

  useEffect(() => {
    if (connector) {
      getShowStaking()
      getShowBuy()
      getShowRent()
      getTokenData();
    }
  }, [connector]);



  const getTokenData = async () => {

    const tokensQuery = await fetchData()
      
    if(tokensQuery.data.listings[0]){

        setName(tokensQuery.data.listings[0].tokenName)
        setTokenURI( tokensQuery.data.listings[0].tokenURI)
        setPriceInNum(tokensQuery.data.listings[0].price) 
        setDescription(tokensQuery.data.listings[0].tokenDescription) 
        setListingId(tokensQuery.data.listings[0].id) 
        setOwner(tokensQuery.data.listings[0].seller)

          
    }

    if(tokensQuery.data.stakingListings[0]){

        setName(tokensQuery.data.stakingListings[0].tokenName)
        setTokenURI(tokensQuery.data.stakingListings[0].tokenURI)
        setDescription(tokensQuery.data.stakingListings[0].tokenDescription) 
        setStakingId(tokensQuery.data.stakingListings[0].id) 
        setOwner(tokensQuery.data.stakingListings[0].seller)
        setColloteral(tokensQuery.data.stakingListings[0].colloteralWei)
        setPremium(tokensQuery.data.stakingListings[0].premium)
         
     }

    setLoading(false);

  }

const APIURL =
  "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

const tokensQuery = `
{
  listings(where:{tokenId:${params.id}}){
    id
 		tokenId
    tokenURI
    price
    tokenName
    tokenDescription
    seller
  }
  stakingListings(where:{tokenId:${params.id}}){
    id
    seller
 		tokenId
    tokenURI
    tokenName
    tokenDescription
    colloteralWei
    premiumWei
    deadlineUTC
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
                  <NameNft>Name NFT</NameNft>
                  <VerifiedIcon w="24px">
                    <img src={Verified} alt="verified-ico" />
                  </VerifiedIcon>
                  <Platform col="#873DC1" fs="36px" fsxs="24px">
                    UND
                  </Platform>
                </Name>
                <Name>
                  <NameCollection>Collection Name</NameCollection>
                  <VerifiedIcon>
                    <img src={Verified} alt="verified-ico" />
                  </VerifiedIcon>
                  <Platform col="#873DC1" fs="24px">
                    UND
                  </Platform>
                </Name>
              </NameInner>
              <NavMenu>
                <NavElement>
                  <RefreshIco />
                </NavElement>
                <NavElement>
                  <FlaggedIco />
                </NavElement>
                <NavElement>
                  <ThreeCircleIco />
                </NavElement>
                <NavElement>
                  <OpenInIco />
                </NavElement>
              </NavMenu>
            </NavigationWrap>
            <MainInfoWrap>
              <ImageWrap>
                <Image src={tokenURI} alt="nft-image" />
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
                    <TopBar>
                      <CartIco />
                      Sale
                    </TopBar>
                    <Buy id={+listingId} price1={+priceInNum}/>
                  </SaleBlock>
                  <SaleBlock>
                    <TopBar>
                      <RentIco />
                      Rent
                    </TopBar>
                    <RentElement>
                      <span>Deposit</span>
                      <Wrapper disp="flex" alignItems="center">
                        <EthIco />
                        <PriceText>2,5</PriceText>
                        <PriceInUSD>($18 465,32)</PriceInUSD>
                      </Wrapper>
                    </RentElement>
                    <RentElement>
                      <span>Price for 1 Day Rental</span>
                      <Wrapper disp="flex" alignItems="center">
                        <EthIco />
                        <PriceText>0,005</PriceText>
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
                      >
                        Rent
                      </InfoButton>
                      <InfoButton fc="#873DC1">Make offer</InfoButton>
                    </RentElement>
                  </SaleBlock>
                </Wrapper>
              </RightSideBlock>
            </MainInfoWrap>
            {/*Accordions*/}
            <Wrapper disp="flex" flexWrap="wrap" gap="10px">
              <Accordion name="Offers" ico={<OffersIco />}>
                <Offers />
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
              {/* <Wrapper
                                disp="flex"
                                flexDirection="column"
                                w="50%"
                                marg="0 0 0 auto"
                            > */}
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
              {/* </Wrapper> */}
            </Wrapper>
            <AdvertisingSlider />
          </>
        )}
      </NFTPageWrap>
    </Background>
  );
};

export default NFTPage;
