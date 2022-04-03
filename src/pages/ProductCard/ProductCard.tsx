import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../../utils/Context";
import { isBuyableFunction } from "../../utils/isBuyable";
import { getStaking } from "../../utils/getStaking";

import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

import {
  ProductPrice,
  PriceHistory,
  Rent,
  Staking,
  ItemActivity,
  MoreFromCollection,
} from "./page-components";

import { Background } from "../../globalStyles";

import {
  LeftSide,
  CardImageContainer,
  CardImage,
  ProductCardSec,
  ProductContainer,
  ProductContainerCenter,
  RightSide,
} from "./ProductCard.styles";

import Image from "../../images/card-item.png";
import { ethers } from "ethers";
import { NFT_ADDRESS } from "../../utils/addressHelpers";
import { UndasGeneralNFT__factory } from "../../typechain";
import { getNFTStakingIds } from "../../utils/getNFTStakingIds";
import { getListing } from "../../utils/getListing";
import { getNFTListingIds } from "../../utils/getNFTListingIds";
import getTokenURI from "../../utils/getTokenURI";

const ProductCard = () => {
  const { connector } = useContext(Context);

  let { id: pageId } = useParams();

  const [stakingId, setStakingId] = useState(0);
  const [listingId, setListingId] = useState(0);
  const [tokenURI, setTokenURI] = useState<string>();
  const [loading, setLoading] = useState(true);
  const [showPriceHistory] = useState(false);
  const [showStaking, setShowStaking] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const [showRent, setShowRent] = useState(false);

  const override = css`
    display: block;
    margin: auto;
  `;

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
      Number(pageId),
      connector
    );

    setStakingId(stakingId!.value.toNumber());

    await getShowStaking();
    await getShowRent();

    setLoading(false);
  }

  async function getListingId() {
    setLoading(true);
    if (!connector) return;

    const listingId = await getNFTListingIds(
      NFT_ADDRESS,
      Number(pageId),
      connector
    );

    setListingId(listingId!.value.toNumber());
    await getShowBuy();
    setLoading(false);
  }

  const fetchTokenURI = async () => {
    if (!connector) return;
    let uri = await getTokenURI(+pageId!, connector);
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
      {loading ? (
        <ClipLoader
          color={"#BD10E0"}
          css={override}
          loading={loading}
          size={150}
        />
      ) : (
        <ProductCardSec>
          <ProductContainer>
            <LeftSide>
              <CardImageContainer>
                <CardImage src={tokenURI} />
              </CardImageContainer>
            </LeftSide>
            <RightSide>
              <ProductPrice id={listingId} />
              {showPriceHistory ? <PriceHistory /> : <></>}
              {showRent ? <Rent id={stakingId} /> : <></>}
              {showStaking ? <Staking id={stakingId.toString()} /> : <></>}
            </RightSide>
          </ProductContainer>
          <ProductContainerCenter>
            <ItemActivity />
            <MoreFromCollection id={+pageId!} />
          </ProductContainerCenter>
        </ProductCardSec>
      )}
    </Background>
  );
};

export default ProductCard;
