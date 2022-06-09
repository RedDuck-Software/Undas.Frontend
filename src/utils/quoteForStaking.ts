import { AbstractConnector } from "@web3-react/abstract-connector";
import { ethers } from "ethers";

import { MARKETPLACE_ADDRESS, NFT_ADDRESS } from "./addressHelpers";
import intervalIntoTimeStamp from "./intervalIntoTimeStamp";

import { Marketplace__factory, UndasGeneralNFT__factory } from "../typechain";

export const quoteForStaking = async (
  tokenId: string,
  price: string,
  premium: string,
  term: string,
  connector: AbstractConnector,
) => {
  if (!connector) return;
  console.log(intervalIntoTimeStamp);
  const provider = new ethers.providers.Web3Provider(
    await connector.getProvider(),
  );
  const signer = provider.getSigner(0);
  const SIGNER_ADDRESS = await signer.getAddress();

  const NFTContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);

  const MarketplaceContract = Marketplace__factory.connect(
    MARKETPLACE_ADDRESS,
    signer,
  );
  console.log(MarketplaceContract);
  const isApprovedForAll = await NFTContract.isApprovedForAll(
    SIGNER_ADDRESS,
    MARKETPLACE_ADDRESS,
  );

  if (!isApprovedForAll) {
    await (
      await NFTContract.setApprovalForAll(MARKETPLACE_ADDRESS, true)
    ).wait();
  }

  console.log("Item data" + NFT_ADDRESS, tokenId, price, premium, term);
  // const tx = await MarketplaceContract.quoteForStaking(
  //   NFT_ADDRESS,
  //   tokenId,
  //   ethers.utils.parseEther(price.toString()),
  //   ethers.utils.parseEther(premium.toString()),
  //   intervalIntoTimeStamp(term),
  //   { value: ethers.utils.parseEther("0.1") },
  // );

  // await tx.wait();
};
