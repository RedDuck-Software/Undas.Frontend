import React from 'react';

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
} from './CardLineNFT.styles';
import { girlNFT, eye, checked, block, heart } from './imports';

import TabsNFT from '../TabsNFT/TabsNFT';

const CardLineNFT: React.FC = () => {
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
          <TextNameNFT>Returne by Borya Borya</TextNameNFT>
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

export default CardLineNFT;
