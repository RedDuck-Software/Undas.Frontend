import React from "react";

import {
  AccountWrap,
  Name,
  VerifiedIco,
  GrayText,
  CopyIco,
  SingOutIco,
  SettingsIco,
  AchievmentsBlock,
} from "./AccountCard.styles";

import { Wrapper } from "../../../CategoriesPage/Categories.styles";
import { ImageWrap } from "../../../CollectionPage/page-components/CollectionCard/CollectionCard.styles";
import ProfilePic from "../../assets/profile-pic.png";
import {
  AchievementColoredIco1,
  AchievementColoredIco2,
  AchievementColoredIco3,
  AchievementColoredIco4,
  AchievementColoredIco5,
  AchievementColoredIco6,
} from "../../imports";

interface IAccountCard {
  account?: string;
  disconnect?: any;
}

const AccountCard: React.FC<IAccountCard> = ({ account, disconnect }) => {
  const accountSplit = account?.split("");
  accountSplit?.splice(6, 32, "...");
  return (
    <AccountWrap>
      <Wrapper disp="flex" gap="10px">
        <ImageWrap className="account-image">
          <img src={ProfilePic} alt="profile-pic" />
        </ImageWrap>
        <Wrapper disp="flex" flexDirection="column" gap="10px">
          <Name>Unnamed</Name>
          <Wrapper disp="flex" gap="10px">
            <span>{accountSplit?.join("")}</span>
            <CopyIco />
          </Wrapper>
          <span>&#34;Return&#34; is a meditation o...</span>
          <GrayText>Was a long time ago</GrayText>
        </Wrapper>
        <VerifiedIco />
      </Wrapper>
      <Wrapper
        disp="flex"
        justifyContent="space-between"
        marg="5px 0 0 0"
        alignItems="center"
      >
        <Wrapper
          disp="flex"
          gap="5px"
          curs="pointer"
          onClick={() => {
            disconnect();
          }}
        >
          <SingOutIco />
          <GrayText>Sing Out</GrayText>
        </Wrapper>
        <SettingsIco />
        <AchievmentsBlock>
          <AchievementColoredIco1 />
          <AchievementColoredIco2 />
          <AchievementColoredIco3 />
          <AchievementColoredIco4 />
          <AchievementColoredIco5 />
          <AchievementColoredIco6 />
        </AchievmentsBlock>
      </Wrapper>
    </AccountWrap>
  );
};

export default AccountCard;
