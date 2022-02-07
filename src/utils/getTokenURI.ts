import { ethers } from "ethers";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { UndasGeneralNFT__factory } from "../typechain";
import { NFT_ADDRESS } from "./addressHelpers";

const getTokenURI = async (i: number, connector: AbstractConnector) => {
  if (!connector) {
    return;
  }
  const provider = new ethers.providers.Web3Provider(
    await connector.getProvider()
  );
  const signer = provider.getSigner(0);
  const NFTContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);
  const tx = await NFTContract.tokenURI(i);
  return tx;
};

export default getTokenURI;
