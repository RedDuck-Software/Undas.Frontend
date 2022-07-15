import { Link } from "react-router-dom";
import styled from "styled-components";

import { CollectionPrev } from "./imports";

import { PrimaryButton, SecondaryButton } from "../../../../globalStyles";

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const UndasDiv = styled.div`
  position: absolute;
  width: 830px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 4px 4px 4px rgb(35 36 40 / 50%);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  -moz-backdrop-filter: blur(30px);
  border-radius: 20px;
  -webkit-box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  -moz-box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  left: 12rem;
  top: 50px;
  padding: 20px;
  z-index: 2;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const TextGet = styled.h1`
  font-family: "Jost";
  font-style: semibold;
  font-weight: 600;
  font-size: 36px;
  line-height: 52px;
  background: linear-gradient(263.07deg, #873dc1 2.08%, #232428 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const TextUndas = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
  background: #873dc1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const TextStacking = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  background: linear-gradient(263.07deg, #873dc1 2.08%, #232428 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: center;
`;
export const SliderButtonsBlock = styled.div`
  position: absolute;
  width: 255px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 4px 4px 4px rgb(35 36 40 / 50%);
  backdrop-filter: blur(30px);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  -moz-box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  left: 12rem;
  top: 240px;
  z-index: 2;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const ExploreButton = styled(PrimaryButton)`
  width: 215px;
  height: 36px;
`;
export const CreateButton = styled(SecondaryButton)`
  width: 215px;
  height: 36px;
  margin-top: 15px;
`;
export const CollectionDiv = styled(Link).attrs({ target: "_blank" })`
  position: absolute;
  width: 180px;
  height: 60px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 4px 4px 4px rgb(35 36 40 / 50%);
  backdrop-filter: blur(30px);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  -moz-box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  box-shadow: 4px -4px 10px -2px rgb(34 60 80 / 20%);
  bottom: 50px;
  right: 160px;
  padding-top: 20px;
  text-decoration: none;
  @media (max-width: 1200px) {
    bottom: 2%;
    right: 4%;
  }
  @media (max-width: 576px) {
    display: none;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;
export const ImgNFTSmall = styled.img`
  width: 50px;
  height: 50px;
`;
export const IMGdiv = styled.div`
  background-image: url(${CollectionPrev});
  width: 50px;
  height: 50px;
  margin-top: -15px;
  border-radius: 10px;
  margin-left: 5px;
  position: absolute;
`;
export const CollectionTitle = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #232428;
  top: 5px;
  position: absolute;
  margin-left: -30px;
  width: 100px;
`;
export const SeeCollection = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #873dc1;
  position: absolute;
  width: 100px;
  top: 30px;
  left: 60px;
`;
