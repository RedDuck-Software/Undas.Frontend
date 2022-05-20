import { AbstractConnector } from "@web3-react/abstract-connector";
import { ethers } from "ethers";

import { MARKETPLACE_ADDRESS, NFT_ADDRESS } from "./addressHelpers";

import { Marketplace__factory, UndasGeneralNFT__factory } from "../typechain";

export const getListing = async (
  listingId: number,
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

  const tx = await MarketplaceContract.getListing(listingId);

  const name: string = await NFTContract.name();
  const URI: string = await NFTContract.tokenURI(tx.tokenId);

  return { tx, name, URI };
};
