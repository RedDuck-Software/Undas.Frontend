import TabsNFT from "../TabsNFT/TabsNFT";

import {  
  girlNFT,
  eye,
  checked,
  block,
  heart, } from './imports';


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
  RowDown,
  DivDeposit,
  DepositText,
  EthereumText,
  DivPrice,
  DivPeriod,
  PeriodText,
  DivLastSales,
} from './CardLineNFT.styles'

const CardLineNFT = () => {
    return (
        <div>
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
      </div>
    )
}

export default CardLineNFT;