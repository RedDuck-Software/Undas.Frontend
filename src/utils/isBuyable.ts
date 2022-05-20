import { AbstractConnector } from "@web3-react/abstract-connector";
import { ethers } from "ethers";

import { MARKETPLACE_ADDRESS } from "./addressHelpers";

import { Marketplace__factory } from "../typechain";

export const isBuyableFunction = async (
  itemId: number,
  connector: AbstractConnector
) => {
  if (!connector) {
    return;
  }

  const provider = new ethers.providers.Web3Provider(
    await connector.getProvider()
  );

  const signer = provider.getSigner(0);

  const MarketplaceContract = Marketplace__factory.connect(
    MARKETPLACE_ADDRESS,
    signer
  );

  const isBuyable = await MarketplaceContract.isBuyable(itemId);
  console.log(isBuyable);

  return isBuyable;
};
