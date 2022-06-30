import React from "react";

import {
  NFTWrap,
  Image,
  Name,
  CollectionText,
  AboutWrapper,
  CollectionWrapper,
} from "./NFTCardHome.styles";

// import { Platform } from "../../../CategoriesPage/Categories.styles";
import { Verified } from "../../../CategoriesPage/imports";

const NFTCardHome: React.FC<{ uri: string; name: string }> = ({
  uri,
  name,
}) => {
  return (
    <NFTWrap>
      <Image src={uri} alt="nft-image" />
      <AboutWrapper disp="flex">
        <Name>{name}</Name>
        <CollectionWrapper disp="flex" alignItems="center" gap="10px">
          <CollectionText>Collection Name</CollectionText>
          <img src={Verified} alt="verified-ico" />
          {/* <Platform col="#873DC1" fs="16px">
            UND
          </Platform> */}
        </CollectionWrapper>
      </AboutWrapper>
    </NFTWrap>
  );
};

export default NFTCardHome;
