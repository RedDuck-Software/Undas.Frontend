import styled from "styled-components";

import { DownloadIco } from "./imports"

export const AboutWrap = styled.div `
  
`;
export const AboutContent = styled.div `
  
`;
export const AboutTopContent = styled.div `
display: flex;
justify-content: space-between;
gap: 30px;
margin-bottom: 60px;
`;
export const AboutGallery = styled.div `
  width: 45%;
`;
export const AboutContentText = styled.div `
  width: 50%;
`;
export const ArticleText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #232428;
  max-height: 450px;
  overflow-y: auto;
    &.bottom-text{
      max-height: 690px;
      max-width: 90%;
    }
    span{
      color: #873DC1;
    }
`;

export const AboutBottomContent = styled.div `
  display: flex;
  gap: 30px;
  justify-content: space-between;

`;
export const AboutContentImage = styled.img `
  width: 50%;
`;
export const OurTeamWrap = styled.div `
  margin-top: 60px;
`;
export const OurTeamTitle = styled.div `
  display: flex;
`;
export const Link = styled.a `
  color: #873DC1;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  margin: 0 20px 0 70px;
  text-decoration: none;
  &:hover{
    color: #232428;
    text-decoration: underline;
  }
`;
export const LinkButton = styled.button `
  padding-left: 36px;
  position: relative;
  background: transparent;
  color: #7C7C7C;
  border: none;
  outline: none;
  transition: all .3s;
  &::before{
    content: "";
    width: 16px;
    height: 20px;
    background-image: url(${DownloadIco});
    background-size: cover;
    position: absolute;
    top: 6px;
    left: 0;
  }
  &:hover{
    color: #232428;
    text-decoration: underline;
  }
`;
export const OurTeamContent = styled.div `
  
`;
export const Roadmap = styled.div `
  
`;