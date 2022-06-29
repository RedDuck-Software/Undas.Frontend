import styled from "styled-components";
import { Wrapper } from "../../../CategoriesPage/Categories.styles";

export const NFTWrap = styled.div`
  width: 380px;
  height: 380px;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-color: #fbf5ff;
  padding: 10px;
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
export const ImageWrapper = styled.div`
  width: 100%;
  padding: 10px 30px;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 300px;
  min-height: 300px;
  object-fit: cover;
  background-color: #fff;
  @media (max-width: 992px) {
    height: 250px;
    min-height: 250px;
  }
`;
export const NFTAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
export const AboutWrapper = styled(Wrapper)`
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
export const CollectionWrapper = styled(Wrapper)`
  @media (max-width: 1200px) {
    order: 2;
    flex: 0 0 100%;
  }
`;
export const Name = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #232428;
  margin-right: 10px;
  max-width: 140px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  color: #232428;
  max-width: 135px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media (max-width: 1200px) {
    max-width: 250px;
  }
`;
export const CreatorText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
`;
export const CreatorLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #873dc1;
  text-decoration: none;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
    color: #873dc1;
  }
`;
