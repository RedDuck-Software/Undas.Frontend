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
  Name,
  NavMenu,
  NavElement,
  MainInfoWrap,
  ImageWrap,
  Image,
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
  RightSideBlock
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

import { UndasGeneralNFT__factory } from "../../typechain";
import { NFT_ADDRESS } from "../../utils/addressHelpers";
import Context from "../../utils/Context";
import { getListing } from "../../utils/getListing";
import { getNFTListingIds } from "../../utils/getNFTListingIds";
import { getNFTStakingIds } from "../../utils/getNFTStakingIds";
import { getStaking } from "../../utils/getStaking";
import getTokenURI from "../../utils/getTokenURI";
import { Wrapper } from "../CategoriesPage/Categories.styles";

const NFTPage: React.FC = () => {
  const override = css`
    display: block;
    margin: auto;
  `;

  const params = useParams();
  const tokenId = params.id;

  const { connector } = useContext(Context);

  const [stakingId, setStakingId] = useState(0);
  const [listingId, setListingId] = useState(0);
  const [, setTokenURI] = useState<string>();
  const [loading, setLoading] = useState(true);
  // const [showPriceHistory] = useState(false);
  const [, setShowStaking] = useState(false);
  const [, setShowBuy] = useState(false);
  const [, setShowRent] = useState(false);

  const getShowStaking = async () => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
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
      await connector.getProvider()
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
      await connector.getProvider()
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
      setShowRent(true);
    }
  }

  async function getStakingId() {
    setLoading(true);
    if (!connector) return;

    const stakingId = await getNFTStakingIds(
      NFT_ADDRESS,
      Number(tokenId),
      connector
    );

    if(stakingId){
    setStakingId(stakingId.value.toNumber());
    }

    await getShowStaking();
    await getShowRent();

    setLoading(false);
  }

  async function getListingId() {
    setLoading(true);
    if (!connector) return;

    const listingId = await getNFTListingIds(
      NFT_ADDRESS,
      Number(tokenId),
      connector
    );

    if(listingId) {
      setListingId(listingId.value.toNumber());
    }
    await getShowBuy();
    setLoading(false);
  }

  const fetchTokenURI = async () => {
    if (!connector) return;
    const uri = await getTokenURI(+tokenId!, connector);
    setTokenURI(uri);
  };

  useEffect(() => {
    if (connector) {
      fetchTokenURI();
      getStakingId();
      getListingId();
    }
  }, [connector]);

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
              <Name>Name NFT</Name>
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
                <Image src={NFTImage} alt="nft-image" />
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
                    <span>91 views</span>
                  </InfoElement>
                  <InfoElement>
                    <FavouriteIco />
                    <span>10 favourites</span>
                  </InfoElement>
                  <InfoElement>
                    <UnlockIco />
                    <span>Unlockable Content</span>
                  </InfoElement>
                </Info>
                <SaleBlock>
                  <TopBar>
                    <CartIco />
                    Sale
                  </TopBar>
                  <Buy id={listingId} />
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
                    <InfoButton bg="#873DC1" flex="1 1 0" className="colored-btn">
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
          </>
        )}
      </NFTPageWrap>
    </Background>
  );
};
export default NFTPage;
