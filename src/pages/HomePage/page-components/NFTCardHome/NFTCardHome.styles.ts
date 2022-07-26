import styled from "styled-components";

import { Wrapper } from "../../../CategoriesPage/Categories.styles";

export const AboutWrapper = styled(Wrapper)`
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background: rgba(35, 36, 40, 0.5);
  backdrop-filter: blur(8px);
  transition: all 0.4s linear;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
export const Name = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  margin-right: 10px;
  max-width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 2px #000;
  @media (max-width: 1200px) {
    order: 1;
    flex: 0 0 100%;
    margin-bottom: 10px;
    max-width: 100%;
  }
`;
export const CollectionText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  max-width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 2px #000;
  @media (max-width: 1200px) {
    max-width: 250px;
  }
`;
export const NFTWrap = styled.div`
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-color: #fbf5ff;
  padding: 0;
  transition: all 0.4s linear;
  &:hover ${AboutWrapper} {
    backdrop-filter: blur(0);
  }
  &:hover ${CollectionText} {
    color: #fbf5ff;
  }
  &:hover ${Name} {
    color: #fbf5ff;
  }
  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 640px) {
    width: 70%;
    margin: 0 auto;
  }
  @media (max-width: 550px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 480px;
  min-height: 340px;
  object-fit: cover;
  background-color: #fff;
  @media (max-width: 992px) {
    height: 300px;
    min-height: 300px;
  }
`;
export const CollectionWrapper = styled(Wrapper)`
  @media (max-width: 1200px) {
    order: 2;
    flex: 0 0 100%;
  }
`;
