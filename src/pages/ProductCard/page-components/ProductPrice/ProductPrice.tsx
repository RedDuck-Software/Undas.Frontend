import { useState, useEffect, useContext } from 'react';
import Context from '../../../../utils/Context';

import { ethers } from 'ethers';
import { MARKETPLACE_ADDRESS } from '../../../../utils/addressHelpers';
import { Marketplace__factory } from '../../../../typechain';

import PlaceBid from '../PlaceBid/PlaceBid';

import { Button } from '../../../../globalStyles';

import {
  ProductPriceContainer,
  SaleEnds,
  CurrentPrice,
  PriceContainer,
  ButtonsContainer,
} from './ProductPrice.styles';

const ProductPrice = ({ id }: { id: number }) => {
  const { connector } = useContext(Context);
  const [price, setPrice] = useState(0);

  const getListing = async (itemId: number) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const tx = await MarketplaceContract.getListing(itemId);

    return tx;
  };

  const buyToken = async (itemId: number) => {
    if (!connector) return;

    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);

    const MarketplaceContract = Marketplace__factory.connect(
      MARKETPLACE_ADDRESS,
      signer
    );

    const tx = await MarketplaceContract.buyToken(itemId, {
      value: ethers.utils.parseEther(price.toString()),
    });

    await tx.wait();
  };

  async function getProductPrice() {
    const ProductPrice = await getListing(id);

    if (!ProductPrice) {
      return;
    }

    const { price } = ProductPrice;
    const priceInNum = Number(ethers.utils.formatUnits(price, 18));

    setPrice(priceInNum);
  }

  useEffect(() => {
    if (!connector) {
      return console.log('loading');
    }

    getProductPrice();
  }, [connector]);

  return (
    <>
      <ProductPriceContainer>
        <SaleEnds>Sale ends April 4, 2022 at 6:02pm EET</SaleEnds>
        <CurrentPrice>
          Current price
          <PriceContainer>
            <h3>{price}</h3> <span>($18 465,32)</span>
          </PriceContainer>
          <ButtonsContainer>
            <Button violet onClick={() => buyToken(id)}>
              Buy now
            </Button>
            <PlaceBid />
          </ButtonsContainer>
        </CurrentPrice>
      </ProductPriceContainer>
    </>
  );
};

export default ProductPrice;
