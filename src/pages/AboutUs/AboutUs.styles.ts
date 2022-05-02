import styled from "styled-components";

import { DownloadIco } from "./imports";

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
  padding-right: 36px;
  position: relative;
  &::after{
    content: "";
    width: 16px;
    height: 20px;
    background-image: url(${DownloadIco});
    background-size: cover;
    position: absolute;
    top: 6px;
    right: 0;
  }
  &:hover{
    color: #232428;
    text-decoration: underline;
  }
`;

export const OurTeamContent = styled.div `
  background: #CCB7F2;
  padding: 30px;
  border-radius: 20px;
  margin: 40px 0 60px;
`;
export const Roadmap = styled.div `
  padding: 0 15px 120px;
`;
export const RoadMapContent = styled.div `
  margin: 0 auto;
  position: relative;
  padding-top: 30px;
`;
export const AchievementСontainerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const AchievementСontainer = styled.div `
  width: 540px;
  position: absolute;

    &.left-side{
      left: 0;
    }
    &.right-side{
      right: 0;
    }
    &.first-container{
      top: 8%;
    }
    &.second-container{
      top: 24%;
    }
    &.third-container{
      top: 40%
    }
    &.fourth-container{
      top: 55%
    }
    &.fifth-container{
      top: 70%;
    }
`;
export const ContainerHead = styled.div `
  background: linear-gradient(270.18deg, #E2D1FF 0%, #CCB7F2 100%);
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  border-radius: 10px 10px 0 0 ;
  & p{
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #232428;
    margin: 0;
  }
  & span{
    color: #5D3F92;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
`;
export const ContainerContent = styled.div `
  background: linear-gradient(270.18deg, #CCB7F2 0%, #E2D1FF 100%);
  border-radius: 0 0 10px 10px;
  padding: 15px 20px;
  position: relative;
  &.left-side::after{
     content: '';
      width: 0; 
      height: 0; 
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid #CCB7F2;
      position: absolute;
      right: -10px;
      top: 20%;
    }
  &.right-side::before{
     content: '';
      width: 0; 
      height: 0; 
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent; 
      border-right:10px solid #E2D1FF; 
      position: absolute;
      left: -10px;
      top: 20%;
  }
  & .container-list{
    display: grid;
    grid-template: repeat(2,1fr) / repeat(2,1fr);
    gap: 10px;
    list-style: none;
    & li{
      position: relative;
      padding-left: 8px;
      display: inline-flex;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
      & li::before{
        content: '';
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #5D3F92;
        position: absolute;
        top: calc(50% - 2px);
        left: 0;
      }
      & .checked::after{
        content: '';
        width: 8px;
        height: 12px;
        border-bottom: 2px solid #5D3F92;
        border-right: 2px solid #5D3F92;
        transform: rotate(45deg);
        margin-left: 10px;
      }
  }
`;