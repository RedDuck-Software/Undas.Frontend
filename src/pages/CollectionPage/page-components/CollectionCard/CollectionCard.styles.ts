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
  max-width: 460px;
  margin-top: -70px;
  @media (max-width: 1200px) {
    max-width: unset;
    width: 100%;
    display: block;
  }
`;
export const Favorite = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 16px;
  height: 16px;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
`;
export const ImageWrap = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
    min-width: 60px;
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
  margin: 10px auto 0;
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
  gap: 10px;
  flex: 0 1 70%;
  @media (max-width: 576px) {
  }
`;
