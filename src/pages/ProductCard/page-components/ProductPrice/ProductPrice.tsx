import { useState, useEffect, useContext } from "react";
import Context from "../../../../utils/Context";

import { ethers } from "ethers";
import { MARKETPLACE_ADDRESS } from "../../../../utils/addressHelpers";
import { Marketplace__factory } from "../../../../typechain";

import { Button } from "../../../../globalStyles";

import { Price, PriceContainer, ButtonsContainer } from "./ProductPrice.styles";
import { useWeb3React } from "@web3-react/core";

const ProductPrice = ({ id }: { id: number }) => {
  const { connector } = useContext(Context);

  let web3React = useWeb3React();
  let account = web3React.account;

  const [price, setPrice] = useState(0);
  const [priceInEth, setPriceInEth] = useState(0);
  const [seller, setSeller] = useState("");

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

  async function getEthPrice() {
    const API_URL =
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
    const response = await fetch(API_URL);
    const responseInJson = await response.json();
    return responseInJson;
  }

  async function getProductPrice() {
    const ProductPrice = await getListing(id);

    if (!ProductPrice) {
      return;
    }

    const { price, seller } = await ProductPrice;
    const priceInNum = Number(ethers.utils.formatUnits(price, 18));

    const ethPrice = await getEthPrice();
    const NFTPrice = (ethPrice.USD * priceInNum).toFixed(2);

    setPriceInEth(Number(NFTPrice));
    setPrice(priceInNum);
    setSeller(seller);
  }

  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }

    getProductPrice();
  }, [connector, web3React]);

  console.log(id);

  return (
    <>
      {seller === account || id < 0 ? (
        <></>
      ) : (
        <Price>
          Price
          <PriceContainer>
            <h3>{price}</h3> <span>($ {priceInEth})</span>
          </PriceContainer>
          <ButtonsContainer>
            <Button violet onClick={() => buyToken(id)}>
              Buy now
            </Button>
          </ButtonsContainer>
        </Price>
      )}
    </>
  );
};

export default ProductPrice;
