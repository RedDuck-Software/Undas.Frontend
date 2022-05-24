import styled from "styled-components";

import { CardWrap } from "../../../CollectionPage/page-components/CollectionCard/CollectionCard.styles";
import { Verified, Copy, SingOut, Settings } from "../../imports";

export const CopyIco = styled(Copy)`
  cursor: pointer;
`;
export const SingOutIco = styled(SingOut)`
  cursor: pointer;
`;
export const SettingsIco = styled(Settings)`
  cursor: pointer;
`;

export const AccountWrap = styled(CardWrap)`
  width: 350px;
  position: absolute;
  @media (max-width:992px) {
    position: static;
    width: 80%;
    margin-top: -5%;
    margin-right: 0;
  }
  @media (max-width: 620px){
    width: 100%;
    height: auto;
    & .account-image{
      min-width: 80px;
      height: 80px;
      img{
        width: 100%;
      }
    }
  }
  @media (max-width: 576px){
    & .account-image{
      min-width: 60px;
      height: 60px;
    }
  }
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #232428;
  @media (max-width: 576px){
    font-size: 18px;
    line-height: 22px;
  }
`;

export const VerifiedIco = styled(Verified)`
  margin-left: auto;
`;

export const GrayText = styled.span`
  color: #7c7c7c;
`;
