import React from "react";

import { girlNFT, eye, checked, block, heart } from "./imports";
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

interface NFTListItemProps {
  name: string;
  URI?: string;
}

const NFTListItem: React.FC<NFTListItemProps> = ({ name, URI }) => {
  return (
    <>
      <RowLine>
        <ColImg>
          <ImgNFT src={URI ? URI : girlNFT}></ImgNFT>
          <ImagePreview>
            <ImageEye src={eye} alt="eye-image" />
            <TextPreview>Preview</TextPreview>
          </ImagePreview>
        </ColImg>
        <ColTextTop>
          <TextNameNFT>{name}</TextNameNFT>
          <ImageChecked src={checked} alt="checked-image" />
          <TextUND>UND</TextUND>
          <ImageBlock src={block} alt="block-image" />
          <ImageHeart src={heart} alt="heart-image" />
        </ColTextTop>
      </RowLine>
      <RowCenter>
        <TabsNFT />
      </RowCenter>
    </>
  );
};

export default NFTListItem;
