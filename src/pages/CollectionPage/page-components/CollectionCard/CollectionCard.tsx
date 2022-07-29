import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";

import {
  CardWrap,
  ImageWrap,
  SocialWrap,
  CollectionName,
  Creator,
  PurpleText,
  // MoreInfo,
  ImgCollection,
  CreatorWrapper,
  MakeComplaint,
  ContainerPopUp,
  InputTextArea,
  SendButton,
} from "./CollectionCard.styles";

import { Message } from "../../../../globalStyles";
import { CopyIco } from "../../../AccountPage/page-components/AccountCard/AccountCard.styles";
import { Platform, Wrapper } from "../../../CategoriesPage/Categories.styles";
import { Verified } from "../../../CategoriesPage/imports";
import {
  TwitterIco,
  TelegramIco,
  DiscordIco,
  InstagramIco,
  SiteIco,
  // More,
} from "../../imports";

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
  const target = useRef(null);
  const [showTarget, setShowTarget] = useState(false);

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
      <Wrapper disp="flex" gap="20px" justifyContent="space-between">
        <ImageWrap>
          <ImgCollection src={logo} alt="collection-pic" />
        </ImageWrap>
        <Wrapper flexBasis="52%" flexBasisXS="70%">
          <SocialWrap>
            <SiteIco />
            <TwitterIco />
            <TelegramIco />
            <DiscordIco />
            <InstagramIco />
          </SocialWrap>
          {/* <MoreInfo>
            <img src={More} alt="more-info" />
          </MoreInfo> */}
          <MakeComplaint ref={target} onClick={() => setShowTarget(true)}>
            Make a Complaint
          </MakeComplaint>
          <Overlay target={target.current} show={showTarget} placement="bottom">
            {
              <ContainerPopUp>
                <InputTextArea placeholder="Comment" />
                <SendButton onClick={() => setShowTarget(false)}>
                  Send
                </SendButton>
              </ContainerPopUp>
            }
          </Overlay>
        </Wrapper>
      </Wrapper>
      <CreatorWrapper>
        <CollectionName>{name}</CollectionName>
        <img src={Verified} alt="verified-ico" />
        <Platform>UND</Platform>
      </CreatorWrapper>
      <Creator onClick={copyToClipboard}>
        Creator <PurpleText>{creatorSplit?.join("")}</PurpleText>
        <CopyIco />
        <Message opacity={show}>Adress is Copied!</Message>
      </Creator>
    </CardWrap>
  );
};

export default CollectionCard;
