import React, { useState } from "react";

import {
  CardWrap,
  ImageWrap,
  CollectionName,
  Creator,
  PurpleText,
  ImgCollection,
  CreatorWrapper,
  Favorite,
} from "./CollectionCard.styles";

import { Message } from "../../../../globalStyles";
import { CopyIco } from "../../../AccountPage/page-components/AccountCard/AccountCard.styles";
import { heart } from "../../../AllNFTs/page-components/NFTListItem/imports";
import { Platform, Wrapper } from "../../../CategoriesPage/Categories.styles";
import { Verified } from "../../../CategoriesPage/imports";

interface CollectionCardProps {
  name: string;
  creator: string;
  logo: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  name,
  creator,
  logo,
}) => {
  const creatorSplit = creator?.split("");
  creatorSplit?.splice(8, 24, "...");

  const [show, setShow] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(creator);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  return (
    <CardWrap>
      <Wrapper
        disp="flex"
        gap="20px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Favorite src={heart} alt="heart-image" />
        <ImageWrap>
          <ImgCollection src={logo} alt="collection-pic" />
        </ImageWrap>
        <CreatorWrapper>
          <CollectionName>{name}</CollectionName>
          <img src={Verified} alt="verified-ico" />
          <Platform col="#873DC1">UND</Platform>
        </CreatorWrapper>
      </Wrapper>
      <Creator onClick={copyToClipboard}>
        Creator <PurpleText>{creatorSplit?.join("")}</PurpleText>
        <CopyIco />
        <Message opacity={show}>Adress is Copied!</Message>
      </Creator>
    </CardWrap>
  );
};

export default CollectionCard;
