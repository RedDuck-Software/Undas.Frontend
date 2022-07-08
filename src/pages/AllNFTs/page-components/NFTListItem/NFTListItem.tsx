import React from "react";

import { eye, checked, block, heart } from "./imports";
import {
  ColImg,
  ImgNFT,
  ColTextTop,
  RowLine,
  ImagePreview,
  ImageEye,
  TextPreview,
  TextNameNFT,
  TextUND,
  ImageChecked,
  ImageBlock,
  ImageHeart,
  RowCenter,
} from "./NFTListItem.styles";

import TabsNFT from "../TabsNFT/TabsNFT";

type GridItem = {
  id: number;
  URI: string;
  name: string;
  priceInNum?: number;
  premiumInNum?: number;
  colloteralWei?: number;
  stakingId?: number;
  listingId?: number;
  tokenAddress?: string;
  tokenOwner?: string;
  collectionName?: string;
  collectionId?: string;
  collectionOwner?: string;
};
interface CollectionGridWrapperProps {
  itemList: GridItem[];
}

const NFTListItem: React.FC<CollectionGridWrapperProps> = ({ itemList }) => {
  return (
    <>
      {itemList.map((i) => {
        return (
          <>
            <RowLine>
              <ColImg>
                <ImgNFT src={i.URI}></ImgNFT>
                <ImagePreview>
                  <ImageEye src={eye} alt="eye-image" />
                  <TextPreview>Preview</TextPreview>
                </ImagePreview>
              </ColImg>
              <ColTextTop>
                <TextNameNFT>
                  {i.collectionName ? i.collectionName : "No collection"}
                </TextNameNFT>
                <ImageChecked src={checked} alt="checked-image" />
                <TextUND>UND</TextUND>
                <ImageBlock src={block} alt="block-image" />
                <ImageHeart src={heart} alt="heart-image" />
              </ColTextTop>
            </RowLine>
            <RowCenter>
              <TabsNFT itemLists={i} />
            </RowCenter>
          </>
        );
      })}
    </>
  );
};

export default NFTListItem;
