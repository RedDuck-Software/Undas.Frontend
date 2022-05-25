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
  box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #873dc1;
  padding: 6px 18px;
  border: none;
  float: right;
  max-height: 36px;
  cursor: pointer;
  display: none;

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
