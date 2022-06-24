import React from "react";

import {
  CollectionCard,
  AuthorWrap,
  CollectionPicWrap,
  CollectionText,
  NFTCards,
  Platform,
  NameNft,
  CollectionTextDiv,
  CardsWrapper,
  ImageCollection,
} from "../Created.styles";
import { CollectionPic, NFT1, NFT2, NFT3, Verified } from "../imports";

const Collection: React.FC = () => {
  return (
    <CollectionCard to="/collection">
      <AuthorWrap>
        <CollectionPicWrap>
          <img src={CollectionPic} alt="collection-pic" />
        </CollectionPicWrap>
        <div>
          <NameNft>
            <CollectionText>Borya Borya</CollectionText>
            <img src={Verified} alt="verified-ico" />
            <Platform>UND</Platform>
          </NameNft>
          <CollectionText>by Borya Borya</CollectionText>
        </div>
        <CollectionTextDiv>
          <CollectionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est placeat
            porro officiis incidunt dolore commodi maiores tempore? Corrupti
            repellendus hic quas alias est cum illo!
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
