import React, { useState, useContext } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { CardItem } from "../../../../components";

import { card01, card02, card03 } from "./imports";

import { Button } from "../../../../globalStyles";

import {
  MoreFromCollectionContainer,
  MoreFromCollectionTop,
  MoreFromCollectionContent,
  CardsContainer,
  ButtonContainer,
} from "./MoreFromCollection.styles";
import Context from "../../../../utils/Context";
import { ethers } from "ethers";
import {
  Marketplace__factory,
  UndasGeneralNFT__factory,
} from "../../../../typechain";
import { NFT_ADDRESS } from "../../../../utils/addressHelpers";

export interface ItemsProps {
  priceInNum: number;
  id: number;
}
export interface StakingsProps {
  premiumInNum: number;
  id: number;
}

interface CollectionProps {
  id: number;
}

const MoreFromCollection: React.FC<CollectionProps> = ({ id }) => {
  const { connector } = useContext(Context);
  const items: ItemsProps[] = [];
  const stakings: StakingsProps[] = [];

  const [Collection, setCollection] = useState(true);
  const [list, setList] = useState<ItemsProps[]>();
  const [stakingsList, setStakingsList] = useState<StakingsProps[]>();
  const [tokenURI, setTokenURI] = useState("");

  const getTokenURI = async () => {
    if (!connector) {
      return;
    }
    const provider = new ethers.providers.Web3Provider(
      await connector.getProvider()
    );

    const signer = provider.getSigner(0);

    const NFTContract = UndasGeneralNFT__factory.connect(NFT_ADDRESS, signer);
    const tx = await NFTContract.tokenURI(0x0a9e);
    setTokenURI(tx);
  };

  console.log(tokenURI);

  const toogleCollection = () => {
    setCollection(!Collection);
  };

  return (
    <MoreFromCollectionContainer>
      {Collection ? (
        <>
          <MoreFromCollectionTop onClick={toogleCollection}>
            More from this collection <IoIosArrowUp />
          </MoreFromCollectionTop>
          <MoreFromCollectionContent>
            <CardsContainer>
              <CardItem image={card01} />
              <CardItem image={card02} />
              <CardItem image={card03} />
            </CardsContainer>
            <ButtonContainer>
              <Button violet big>
                View Collection
              </Button>
            </ButtonContainer>
          </MoreFromCollectionContent>
        </>
      ) : (
        <>
          <MoreFromCollectionTop closed onClick={toogleCollection}>
            More from this collection <IoIosArrowDown />
          </MoreFromCollectionTop>
        </>
      )}
    </MoreFromCollectionContainer>
  );
};

export default MoreFromCollection;
