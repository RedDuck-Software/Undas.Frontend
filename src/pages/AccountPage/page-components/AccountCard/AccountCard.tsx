import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  AccountWrap,
  Name,
  GrayText,
  CopyIco,
  SingOutIco,
  SettingsIco,
  SettingsLink,
  AchievmentsBlock,
} from "./AccountCard.styles";

import { Message } from "../../../../globalStyles";
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
  profile?: string;
  disconnect?: any;
}

const AccountCard: React.FC<IAccountCard> = ({ profile, disconnect }) => {
  const profileSplit = profile?.split("");
  profileSplit?.splice(6, 32, "...");
  const navigate = useNavigate();

  const { account } = useWeb3React();
  const [userAccount, setAccount] = useState<any>();

  useEffect(() => {
    if (account) {
      setAccount(account);
    }
  }, [account, userAccount]);

  const [show, setShow] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(userAccount);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  //
  return (
    <AccountWrap>
      <Wrapper disp="flex" gap="10px">
        <ImageWrap className="account-image">
          <img src={ProfilePic} alt="profile-pic" />
        </ImageWrap>
        <Wrapper disp="flex" flexDirection="column" gap="10px">
          <Name>Unnamed</Name>
          <Wrapper disp="flex" gap="10px" onClick={copyToClipboard}>
            <span>{profileSplit?.join("")}</span>
            <CopyIco />
            <Message opacity={show}>Adress is Copied!</Message>
          </Wrapper>
          <span>&#34;Return&#34; is a meditation o...</span>
          <GrayText>Was a long time ago</GrayText>
        </Wrapper>
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
        <SettingsLink to="/settings">
          <SettingsIco />
        </SettingsLink>
        <AchievmentsBlock>
          <AchievementColoredIco1
            onClick={(e) => {
              navigate(`/achievements`);
              e.stopPropagation();
            }}
          />
          <AchievementColoredIco2
            onClick={(e) => {
              navigate(`/achievements`);
              e.stopPropagation();
            }}
          />
          <AchievementColoredIco3
            onClick={(e) => {
              navigate(`/achievements`);
              e.stopPropagation();
            }}
          />
          <AchievementColoredIco4
            onClick={(e) => {
              navigate(`/achievements`);
              e.stopPropagation();
            }}
          />
          <AchievementColoredIco5
            onClick={(e) => {
              navigate(`/achievements`);
              e.stopPropagation();
            }}
          />
          <AchievementColoredIco6
            onClick={(e) => {
              navigate(`/achievements`);
              e.stopPropagation();
            }}
          />
        </AchievmentsBlock>
      </Wrapper>
    </AccountWrap>
  );
};

export default AccountCard;
