import styled from "styled-components";

export const CardWrap = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 5px 5px rgba(135, 61, 193, 0.25);
  backdrop-filter: blur(50px);
  font-weight: 400;
  font-size: 12px;
  color: #232428;
  max-width: 445px;
  margin-top: -70px;
  margin-right: 15px;
  @media (max-width: 1200px) {
    max-width: unset;
    width: 100%;
    display: block;
  }
  @media (max-width: 576px) {
    height: 250px;
  }
`;
export const ImageWrap = styled.div`
  min-width: 100px;
  height: 100px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
    min-width: 60px;
  }
`;
export const Description = styled.span`
  max-width: 218px;
  @media (max-width: 1200px) {
    max-width: unset;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
export const SocialWrap = styled.div`
  margin-left: 50px;
  max-width: 192px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  padding: 10px 15px;
  display: flex;
  gap: 15px;
  svg {
    cursor: pointer;
  }
  & svg:hover path {
    fill: #873dc1;
  }
  @media (max-width: 1200px) {
    margin-left: auto;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
export const CollectionName = styled.h2`
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;
export const Creator = styled.h4`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: inline-block;
  color: #232428;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;
export const PurpleText = styled(Creator)`
  color: #873dc1;
`;
export const MakeComplaint = styled.button`
  background-color: #fff;
  border: 1px solid #873dc1;
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #873dc1;
  padding: 6px 18px;
  float: right;
  max-height: 36px;
  cursor: pointer;
  display: none;
  &:hover {
    box-shadow: 0px 0px 5px rgb(135 61 193 / 50%);
  }
  @media (max-width: 1200px) {
    display: inline-block;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;
export const MoreInfo = styled.div`
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  backdrop-filter: blur(50px);
  border-radius: 10px;
  display: none;
  padding: 9px 16px;
  margin-left: auto;
  @media (max-width: 576px) {
    display: inline-block;
  }
`;
export const ImgCollection = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
  }
`;
export const DescriptionS = styled.span`
  display: none;
  @media (max-width: 576px) {
    display: inline-block;
  }
`;
export const CreatorWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px 0 5px 0;
  gap: 10px;
  @media (max-width: 576px) {
    margin: 10px 0 0 0;
  }
`;

export const ContainerPopUp = styled.div`
  height: 160px;
  width: 350px;
  background: #ffffff;
  border: 1px solid #7c7c7c;
  transform: matrix(1, 0, 0, -1, 0, 0);
  margin-left: -75px;
  margin-top: 11px;
  border-radius: 10px;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    left: 270px;
    top: -20px;
    border: 10px solid transparent;
    border-top: 10px solid #7c7c7c;
    transform: rotate(180deg);
  }
  &::after {
    content: "";
    position: absolute;
    left: 270px;
    top: -20px;
    border: 10px solid transparent;
    border-top: 10px solid #7c7c7c;
    transform: rotate(180deg);
  }
  &::after {
    border-top: 10px solid white;
    top: -18.5px;
  }
`;

export const InputTextArea = styled.textarea`
  width: 320px;
  border: none;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  height: 90px;
  resize: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #232428;
  &:focus {
    box-shadow: 0px 0px 5px rgb(135 61 193 / 50%);
    border: none;
    outline: none;
  }
`;

export const SendButton = styled.button`
  width: 90px;
  height: 36px;
  background: #873dc1;
  border-radius: 5px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  margin-right: 15px;
  float: right;
  border: none;
  &:hover {
    color: #873dc1;
    background: #ffffff;
    border: 1px solid #873dc1;
  }
`;
