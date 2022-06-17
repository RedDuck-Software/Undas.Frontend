import styled from "styled-components";

import { DownloadIco } from "./imports";

export const AboutWrap = styled.div``;
export const AboutContent = styled.div``;
export const AboutTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    display: block;
    margin-bottom: 0px;
  }
`;

export const AboutGallery = styled.div`
  width: 45%;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const AboutContentText = styled.div`
  width: 50%;

  @media (max-width: 992px) {
    width: 100%;
  }
  @media (min-width: 1600px) {
    width: 65%;
  }
`;

export const ArticleText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #232428;
  max-height: 450px;
  overflow-y: auto;
  &.bottom-text {
    max-height: 690px;
    max-width: 90%;
  }
  span {
    color: #873dc1;
  }

  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 992px) {
    font-size: 16px;
    &.bottom-text {
      max-width: 100%;
    }
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
    max-height: none;
    &.bottom-text {
      max-height: none;
    }
  }
  @media (min-width: 1600px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const AboutBottomContent = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
`;

export const AboutContentImage = styled.img`
  width: 50%;
  max-height: 500px;

  @media (max-width: 992px) {
    display: none;
  }
  @media (min-width: 1600px) {
    width: 35%;
  }
`;

export const OurTeamWrap = styled.div`
  margin-top: 60px;

  @media (max-width: 992px) {
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    margin-top: 15px;
  }
  @media (max-width: 576px) {
    margin-top: 5px;
  }
`;

export const OurTeamTitle = styled.div`
  display: flex;
`;

export const Link = styled.a`
  color: #873dc1;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  margin: 0 20px 0 70px;
  text-decoration: none;
  padding-right: 36px;
  position: relative;
  &::after {
    content: "";
    width: 16px;
    height: 20px;
    background-image: url(${DownloadIco});
    background-size: cover;
    position: absolute;
    top: 6px;
    right: 0;
  }
  &:hover {
    color: #232428;
    text-decoration: underline;
  }

  @media (max-width: 992px) {
    margin-left: auto;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: none;
    margin-right: auto;
    margin: 0 20px 0 0;
    &::after {
      content: none;
    }
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const OurTeamContent = styled.div`
  background: #ccb7f2;
  padding: 30px;
  border-radius: 20px;
  margin: 30px 0 60px;

  @media (max-width: 992px) {
    margin: 30px 0 40px;
    padding: 10px 30px;
  }
  @media (max-width: 768px) {
    margin: 20px 0 30px;
    padding: 10px 15px;
  }
  @media (max-width: 576px) {
    padding: 5px 15px;
    margin: 20px 0 20px;
  }
`;

export const Roadmap = styled.div`
  padding: 0 15px 120px;

  @media (max-width: 992px) {
    padding: 0 0 80px;
  }
  @media (max-width: 768px) {
    padding: 0 0 50px;
  }
  @media (max-width: 576px) {
    padding: 0 0 50px;
  }
`;

export const RoadMapContent = styled.div`
  margin: 0 auto;
  position: relative;
  padding-top: 30px;

  @media (max-width: 992px) {
    padding-top: unset;
  }
`;

export const AchievementСontainerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AchievementСontainer = styled.div`
  width: 48%;
  position: absolute;

  &.left-side {
    left: 0;
  }
  &.right-side {
    right: 0;
  }
  &.first-container {
    top: 8%;
  }
  &.second-container {
    top: 24%;
  }
  &.third-container {
    top: 40%;
  }
  &.fourth-container {
    top: 55%;
  }
  &.fifth-container {
    top: 70%;
  }

  @media (max-width: 992px) {
    width: 97%;
    position: relative;
    margin-left: auto;
    margin-top: 30px;
    &.left-side {
      right: 0;
      left: unset;
    }
  }
  @media (max-width: 768px) {
    width: 96%;
  }
  @media (max-width: 576px) {
    width: 92%;
    margin-top: 15px;
  }
`;

export const ContainerHead = styled.div`
  background: linear-gradient(270.18deg, #e2d1ff 0%, #ccb7f2 100%);
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  border-radius: 10px 10px 0 0;

  @media (max-width: 576px) {
    display: block;
  }
`;

export const ContainerContent = styled.div`
  background: linear-gradient(270.18deg, #ccb7f2 0%, #e2d1ff 100%);
  border-radius: 0 0 10px 10px;
  padding: 15px 20px;
  position: relative;
  &.left-side::after {
    content: "";
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #ccb7f2;
    position: absolute;
    right: -10px;
    top: 20%;
  }
  &.right-side::before {
    content: "";
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #e2d1ff;
    position: absolute;
    left: -10px;
    top: 20%;
  }
  & .container-list {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    gap: 10px;
    list-style: none;
    & li {
      position: relative;
      padding-left: 8px;
      display: inline-flex;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
    & li::before {
      content: "";
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #5d3f92;
      position: absolute;
      top: calc(50% - 2px);
      left: 0;
    }
    & .checked::after {
      content: "";
      width: 8px;
      height: 12px;
      border-bottom: 2px solid #5d3f92;
      border-right: 2px solid #5d3f92;
      transform: rotate(45deg);
      margin-left: 10px;
    }
  }

  @media (max-width: 992px) {
    &.left-side::before {
      content: "";
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid #e2d1ff;
      position: absolute;
      left: -10px;
      top: 20%;
    }
    &.left-side::after {
      content: none;
    }
  }

  @media (max-width: 576px) {
    & .container-list {
      grid-template: none;
    }
    &.left-side::before {
      top: 35px;
    }
    &.right-side::before {
      top: 35px;
    }
  }
`;

export const PageTitleAbout = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #232428;
  margin: 60px 0 60px;

  @media (max-width: 992px) {
    margin: 30px 0 20px;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const SubTitleArticle = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #232428;
  margin: 0 0 20px;

  &.align-center {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const AboutGalleryCenter = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: none;
  margin-top: 20px;

  @media (max-width: 992px) {
    display: block;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SubTitleRoadmap = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  text-align: center;

  @media (max-width: 992px) {
    text-align: left;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const SubTitleBuilding = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #232428;

  @media (max-width: 992px) {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const SubTitleOurTeam = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #232428;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SubTitleOurTeamSmallSize = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #232428;
  display: none;
  margin-top: 30px;

  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 576px) {
    font-size: 16px;
    margin-top: 20px;
  }
`;

export const Download = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #7c7c7c;
  display: none;
  padding-top: 6px;
  margin-left: auto;

  &::before {
    content: "";
    width: 16px;
    height: 20px;
    background-image: url(${DownloadIco});
    background-size: cover;
    position: absolute;
    margin-left: -30px;
  }

  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const TextQuarter = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #232428;

  @media (max-width: 576px) {
    display: block;
  }
`;

export const TextDate = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #232428;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const TextDateSmallSize = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #232428;
  display: none;

  @media (max-width: 576px) {
    display: block;
  }
`;
