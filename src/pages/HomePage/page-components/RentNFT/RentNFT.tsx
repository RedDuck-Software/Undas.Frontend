import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { Container, Button } from "../../../../globalStyles";
import {
  RentNFTSec,
  RentNFTTitle,
  RentNFTWrapper,
  RentNFTItem,
  Image,
  BlackLayer,
  RentNFTItemText,
  ButtonWrapper,
} from "./RentNFT.styles";
import { CardLink } from "../../../../components/CardList/CardList.styles";
import image from "../../../../images/image-rent/rent-item-image.png";
import Context from "../../../../utils/Context";
import { getListingsLastIndex } from "../../../../utils/getListingsLastIndex";
import { getStakingsLastIndex } from "../../../../utils/getStakingsLastIndex";
import getTokenURI from "../../../../utils/getTokenURI";

const CarouselSettings = {
  itemsToShow: 3,
  disableArrowsOnEnd: true,
};

const breakPoints = [
  { width: 460, itemsToShow: 1 },
  { width: 462, itemsToShow: 3 },
];

const RentNFT = () => {
  const { connector } = useContext(Context);
  const items: { URI: string; id: number }[] = [];
  const [list, setList] = useState<{ URI: string; id: number }[]>();

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
      if (!data) {
        continue;
      }
      items.push({ URI: data, id: i });
      console.log(items);
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
    console.log(list);
  }, [connector]);

  return (
    <RentNFTSec>
      <Container>
        <RentNFTTitle>Rent NFT</RentNFTTitle>
        <RentNFTWrapper>
          <Carousel
            {...CarouselSettings}
            breakPoints={breakPoints}
            isRTL={false}
          >
            {list?.map((item) => {
              return (
                <CardLink key={item.id} to={"/product/" + item.id}>
                  <RentNFTItem key={item.id}>
                    <Image src={item.URI} />
                    <BlackLayer />
                  </RentNFTItem>
                </CardLink>
              );
            })}
          </Carousel>
          <ButtonWrapper>
            <Link to="rent-nft">
              <Button violet big>
                Read about rent NFT
              </Button>
            </Link>
          </ButtonWrapper>
        </RentNFTWrapper>
      </Container>
    </RentNFTSec>
  );
};

export default RentNFT;
