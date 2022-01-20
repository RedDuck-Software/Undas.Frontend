import { ethers } from "ethers";
import { AbstractConnector } from "@web3-react/abstract-connector";

import { Marketplace__factory } from "../typechain";
import { MARKETPLACE_ADDRESS } from "./addressHelpers";

export const getStaking = async (
  itemId: number,
  connector: AbstractConnector
) => {
  if (!connector) return;

  const provider = new ethers.providers.Web3Provider(
    await connector?.getProvider()
  );
  const signer = provider.getSigner(0);

  const MarketplaceContract = Marketplace__factory.connect(
    MARKETPLACE_ADDRESS,
    signer
  );

  const tx = await MarketplaceContract.getStaking(itemId);
  return tx;
};