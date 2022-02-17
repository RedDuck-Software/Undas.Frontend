import { ethers } from "ethers";
import { AbstractConnector } from "@web3-react/abstract-connector";

import { Marketplace__factory, UndasGeneralNFT__factory } from "../typechain";
import { MARKETPLACE_ADDRESS, NFT_ADDRESS } from "./addressHelpers";

export const getListing = async (
  itemId: number,
  connector: AbstractConnector
) => {
  if (!connector) return;

  const provider = new ethers.providers.Web3Provider(
    await connector?.getProvider()
  );

  const signer = provider.getSigner(0);

  const NFTContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);

  const MarketplaceContract = Marketplace__factory.connect(
    MARKETPLACE_ADDRESS,
    signer
  );

  const tx = await MarketplaceContract.getListing(itemId);

  const name = await NFTContract.name();
  const URI = await NFTContract.tokenURI(itemId);

  return { tx, name, URI };
};
