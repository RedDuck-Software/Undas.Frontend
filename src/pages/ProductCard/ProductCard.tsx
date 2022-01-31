import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../utils/Context';

import { isBuyableFunction } from '../../utils/isBuyable';

import {
  ProductPrice,
  PriceHistory,
  Rent,
  Staking,
  ItemActivity,
  MoreFromCollection,
} from './page-components';

import { Background } from '../../globalStyles';

import {
  LeftSide,
  CardImageContainer,
  CardImage,
  ProductCardSec,
  ProductContainer,
  ProductContainerCenter,
  RightSide,
} from './ProductCard.styles';

import Image from '../../images/card-item.png';
import { ethers } from 'ethers';
import { MARKETPLACE_ADDRESS, NFT_ADDRESS } from '../../utils/addressHelpers';
import { Marketplace__factory, TestNFT__factory } from '../../typechain';

const ProductCard = () => {
  const { connector } = useContext(Context);

  let { id: pageId } = useParams();
  const [showPriceHistory] = useState(false);
  const [showStaking, setShowStaking] = useState(false);
  const [makerWallet, setMakerWallet] = useState('');

  const getStakings = async (itemId: number) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const tx = await MarketplaceContract.getStaking(itemId);

    return tx;
  };

  const getShowStaking = async (itemId: number) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);

    const NFTContract = TestNFT__factory.connect(NFT_ADDRESS, signer);

    const address = await signer.getAddress();
    const owner = await NFTContract.owner();

    const ProductValue = await getStakings(itemId);

    if (!ProductValue) return;

    const { maker } = ProductValue;

    if (
      address === owner &&
      maker === '0x0000000000000000000000000000000000000000'
    ) {
      setShowStaking(true);
    }
  };

  async function getProductValue() {
    const ProductValue = await getStakings(+pageId!);
    console.log(ProductValue);
    if (!ProductValue) {
      return;
    }
    const { maker } = ProductValue;
    setMakerWallet(maker);
  }

  useEffect(() => {
    if (!connector) {
      return console.log('loading');
    }

    getShowStaking(Number(pageId));
    getProductValue();

    console.log(isBuyableFunction(Number(pageId), connector));
  }, [connector]);

  return (
    <Background>
      <ProductCardSec>
        <ProductContainer>
          <LeftSide>
            <CardImageContainer>
              <CardImage src={Image} />
            </CardImageContainer>
          </LeftSide>
          <RightSide>
            <ProductPrice id={Number(pageId!)} />
            {showPriceHistory ? <PriceHistory /> : <></>}
            <Rent id={Number(pageId!)} />
            {showStaking ? <Staking id={pageId!} /> : <></>}
          </RightSide>
        </ProductContainer>
        <ProductContainerCenter>
          <ItemActivity />
          <MoreFromCollection />
        </ProductContainerCenter>
      </ProductCardSec>
    </Background>
  );
};

export default ProductCard;
