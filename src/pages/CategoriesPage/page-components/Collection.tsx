import React from "react";

import {
  CollectionCard,
  AuthorWrap,
  CollectionBackground,
  CollectionPicWrap,
  CollectionText,
  NFTCards,
  Platform,
  NameNft,
  CollectionTextDiv,
  CardsWrapper,
  ImageCollection,
} from "../Categories.styles";
import {
  CollectionBG,
  CollectionPic,
  NFT1,
  NFT2,
  NFT3,
  Verified,
} from "../imports";

const Collection: React.FC = () => {
  return (
    <CollectionCard>
      <CollectionBackground src={CollectionBG} alt="collection-bg" />
      <AuthorWrap>
        <CollectionPicWrap>
          <img src={CollectionPic} alt="collection-pic" />
        </CollectionPicWrap>
        {/*CategoriesPage name*/}
        <div>
          <NameNft>
            <CollectionText fs="14px">Borya Borya</CollectionText>
            <img src={Verified} alt="verified-ico" />
            <Platform>UND</Platform>
          </NameNft>
          <CollectionText>by Borya Borya</CollectionText>
        </div>
        <CollectionTextDiv>
          <CollectionText lh="15px" padd="5px 0">
            If you believe in the future of DeFi, then you believein the future
            of rekt.news. Each auction winner will also be sent ...
          </CollectionText>
        </CollectionTextDiv>
      </AuthorWrap>
      <CardsWrapper>
        <NFTCards>
          <ImageCollection src={NFT1} alt="nft-card" />
        </NFTCards>
        <NFTCards>
          <ImageCollection src={NFT2} alt="nft-card" />
        </NFTCards>
        <NFTCards>
          <ImageCollection src={NFT3} alt="nft-card" />
        </NFTCards>
      </CardsWrapper>
    </CollectionCard>
  );
};

export default Collection;
