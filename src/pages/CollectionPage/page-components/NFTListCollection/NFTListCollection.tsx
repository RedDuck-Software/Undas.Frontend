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
} from "./NFTListCollection.styles";

interface NFTListItemProps {
  name: string;
}

const NFTListCollection: React.FC<NFTListItemProps> = ({ name }) => {
  return (
    <>
      <RowLine>
        <ColImg>
          <ImgNFT src={girlNFT}></ImgNFT>
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
        {/*<TabsNFT itemLists={...id:1,URI:'das',name:'das'} />*/}
      </RowCenter>
    </>
  );
};

export default NFTListCollection;
