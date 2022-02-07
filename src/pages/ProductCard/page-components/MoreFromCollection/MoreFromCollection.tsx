import React, { useState, useContext, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { CardItem } from "../../../../components";

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
import { UndasGeneralNFT__factory } from "../../../../typechain";
import { NFT_ADDRESS } from "../../../../utils/addressHelpers";
import { CardLink } from "../../../../components/CardList/CardList.styles";
import { getListingsLastIndex } from "../../../../utils/getListingsLastIndex";
import { getStakingsLastIndex } from "../../../../utils/getStakingsLastIndex";
import getTokenURI from "../../../../utils/getTokenURI";

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
  const items: { URI: string; id: number }[] = [];

  const [Collection, setCollection] = useState(true);
  const [list, setList] = useState<{ URI: string; id: number }[]>();
  const [itemsToShow, setItemsToShow] = useState(3);

  const getItems = async () => {
    if (!connector) {
      return;
    }

    const listingsLastIndex = await getListingsLastIndex(connector);
    const stakingsLastIndex = await getStakingsLastIndex(connector);
    if (!listingsLastIndex || !stakingsLastIndex) return;
    const lastIndex = Math.max(
      listingsLastIndex?.toNumber(),
      stakingsLastIndex?.toNumber()
    );

    for (let i = 0; i < lastIndex; i++) {
      let data = await getTokenURI(i, connector);
      if (!data || i === id) {
        continue;
      }
      items.push({ URI: data, id: i });
    }
    return items;
  };
  async function getItemsData() {
    const response = await getItems();
    setList(response);
  }

  useEffect(() => {
    if (!connector) {
      return console.log("loading");
    }
    getItemsData();
  }, [connector]);

  const toogleCollection = () => {
    setCollection(!Collection);
    console.log(itemsToShow);
  };

  return (
    <>
      <MoreFromCollectionContainer>
        {Collection && list ? (
          <>
            <MoreFromCollectionTop onClick={toogleCollection}>
              More from this collection <IoIosArrowUp />
            </MoreFromCollectionTop>
            <MoreFromCollectionContent>
              <CardsContainer>
                {list?.slice(0, itemsToShow).map((item) => {
                  return (
                    <CardLink key={item.id} to={"/product/" + item.id}>
                      <CardItem
                        key={item.id}
                        image={item.URI}
                        id={item.id}
                        price={1}
                      />
                    </CardLink>
                  );
                })}
              </CardsContainer>
              <ButtonContainer>
                {itemsToShow < list?.length ? (
                  <Button
                    violet
                    big
                    onClick={() => setItemsToShow(itemsToShow + 3)}
                  >
                    Show More
                  </Button>
                ) : (
                  <Button violet big onClick={() => setItemsToShow(3)}>
                    Hide
                  </Button>
                )}
              </ButtonContainer>
            </MoreFromCollectionContent>
          </>
        ) : (
          <MoreFromCollectionTop closed onClick={toogleCollection}>
            More from this collection <IoIosArrowDown />
          </MoreFromCollectionTop>
        )}
      </MoreFromCollectionContainer>
    </>
  );
};

export default MoreFromCollection;
