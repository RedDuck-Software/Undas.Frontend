import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";

import {
  CardWrap,
  ImageWrap,
  SocialWrap,
  CollectionName,
  Description,
  Creator,
  PurpleText,
  MakeComplaint,
  MoreInfo,
  ImgCollection,
  DescriptionS,
  CreatorWrapper,
  ContainerPopUp,
  InputTextArea,
  SendButton,
} from "./CollectionCard.styles";

import { Platform, Wrapper } from "../../../CategoriesPage/Categories.styles";
import { Verified } from "../../../CategoriesPage/imports";
import {
  CollectionPic,
  TwitterIco,
  TelegramIco,
  DiscordIco,
  InstagramIco,
  SiteIco,
  More,
} from "../../imports";

const CollectionCard: React.FC = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <CardWrap>
      <Wrapper disp="flex" gap="20px">
        <ImageWrap>
          <ImgCollection src={CollectionPic} alt="collection-pic" />
        </ImageWrap>
        <Wrapper
          disp="flex"
          flexDirection="column"
          justifyContent="space-between"
          w="100%"
        >
          <SocialWrap>
            <SiteIco />
            <TwitterIco />
            <TelegramIco />
            <DiscordIco />
            <InstagramIco />
          </SocialWrap>
          <MoreInfo>
            <img src={More} alt="more-info" />
          </MoreInfo>
          <Description>
            If you believe in the future of DeFi, then you believein the future
            of ...
          </Description>
        </Wrapper>
      </Wrapper>
      <DescriptionS>
        If you believe in the future of DeFi, then you believein the future of
        ...
      </DescriptionS>
      <CreatorWrapper>
        <CollectionName>Collection Name</CollectionName>
        <img src={Verified} alt="verified-ico" />
        <Platform>UND</Platform>
      </CreatorWrapper>
      <Creator>
        Creator <PurpleText>Borya Borya</PurpleText>
      </Creator>
      <MakeComplaint ref={target} onClick={() => setShow(!show)}>
        Make a Complaint
      </MakeComplaint>
      <Overlay target={target.current} show={show} placement="bottom">
        {
          <ContainerPopUp>
            <InputTextArea placeholder="Comment"></InputTextArea>
            <SendButton>Send</SendButton>
          </ContainerPopUp>
        }
      </Overlay>
    </CardWrap>
  );
};

export default CollectionCard;
