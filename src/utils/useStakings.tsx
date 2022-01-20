import { ethers } from "ethers";
import { useContext } from "react";
import { Marketplace__factory, TestNFT__factory } from "../typechain";
import { MARKETPLACE_ADDRESS, NFT_ADDRESS } from "./addressHelpers";
import Context from "./Context";

const useStakings = async (itemId?: number) => {
  const { connector } = useContext(Context);
  const provider = new ethers.providers.Web3Provider(
    async () => await connector?.getProvider()
  );
  const signer = provider.getSigner(0);
  const MarketplaceContract = Marketplace__factory.connect(
    MARKETPLACE_ADDRESS,
    signer
  );
  let tx;
  if (itemId) {
    tx = await MarketplaceContract._stakings(itemId);
  }
  const lastIndex = await MarketplaceContract._stakingsLastIndex();
  return { tx, lastIndex };
};

export default useStakings;
