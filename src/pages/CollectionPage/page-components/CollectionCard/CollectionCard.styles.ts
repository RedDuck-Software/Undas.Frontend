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
  width: 40%;
  margin-top: -70px;
  margin-right: 15px;
  @media (max-width: 1200px) {
    max-width: unset;
    width: 100%;
    display: block;
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
export const MakeComplaint = styled.button`
  background-color: #fff;
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #873dc1;
  padding: 5px 15px;
  border: 1px solid #873dc1;
  margin-top: 20px;
  width: 100%;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background: #873dc1;
    color: #fff;
  }
  @media (max-width: 576px) {
    font-size: 14px;

    margin-top: 10px;
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
  z-index: 500;
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
  @media (max-width: 576px) {
    width: 95%;
    margin-left: unset;
  }
`;
export const InputTextArea = styled.textarea`
  width: 320px;
  border: none;
  margin: 20px 15px 0px;
  padding: 8px;
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
  @media (max-width: 576px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
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
export const SocialWrap = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }

  & svg:hover path {
    fill: #873dc1;
  }
  @media (max-width: 1200px) {
    justify-content: center;
    gap: 20px;
  }
  @media (max-width: 576px) {
    gap: 10px;
  }
`;
export const CollectionName = styled.h2`
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  @media (max-width: 1200px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 29px;
  }
  @media (max-width: 576px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const Creator = styled.h4`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #232428;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;
export const PurpleText = styled(Creator)`
  color: #873dc1;
  margin: 0;
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
