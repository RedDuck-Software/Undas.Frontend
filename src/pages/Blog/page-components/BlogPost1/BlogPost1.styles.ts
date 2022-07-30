import styled from "styled-components";

import { PageTitle } from "../../../../globalStyles";
import { ViewAllBtn } from "../../../HomePage/page-components/Recomended/Recommended.styles";
import { back } from "../../../OfferRent/imports";

export const ArticleWrap = styled.div`
  padding: 80px 0 120px;
  @media (max-width: 992px) {
    padding: 40px 0 80px;
  }
  @media (max-width: 768px) {
    padding: 20px 0 60px;
  }
  @media (max-width: 576px) {
    padding: 20px 0 30px;
  }
`;
export const ArticleMainBlock = styled.div`
  padding-bottom: 60px;
  @media (max-width: 992px) {
    padding-bottom: 40px;
  }
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;
export const BlockContainer = styled.div`
  padding: 0 12rem;
  @media (max-width: 992px) {
    padding: 0;
  }
`;
export const ArticleTitle = styled(PageTitle)`
  color: #5d3f92;
`;
export const ArticleDescription = styled.ul`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #7c7c7c;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  margin: 20px 0 30px;
  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 17px;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
`;
export const ArticleDescriptionItem = styled.li`
  @media (max-width: 576px) {
    &:first-child {
      flex: 0 0 100%;
    }
  }
`;
export const ArticleImage = styled.img`
  width: 100%;
  border-radius: 10px;
  background-color: white;
`;
export const ArticleText = styled.p`
  text-indent: 3ch;
  margin: 30px 0 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #232428;
  @media (min-width: 1700px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
export const RelatedArticles = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;
export const Text = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #232428;
  margin-bottom: 20px;
`;
export const RelatedButton = styled(ViewAllBtn)`
  display: none;
  text-transform: capitalize;
  @media (max-width: 576px) {
    display: block;
    position: static;
  }
`;
interface IColoredArticleText {
  textAlign?: string;
}
export const ColoredArticleText = styled(ArticleText)<IColoredArticleText>`
  color: #873dc1;
  font-weight: 500;
  text-align: ${(props) => props.textAlign || "left"};
`;
export const Colored = styled.span`
  color: #873dc1;
`;
export const CardsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  @media (max-width: 576px) {
    gap: 15px;
  }
  @media (max-width: 576px) {
    gap: 10px;
    display: block;
  }
`;
export const TopLinkWrapper = styled.div`
  width: 100%;
  padding: 15px;
  background: #fbf5ff;
  box-shadow: inset 0px 0px 2px #7c7c7c;
`;
export const TopLink = styled.a`
  text-decoration: none;
  max-width: 80rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #873dc1;
  transition: all 0.3s ease-in;
  &::before {
    content: url(${back});
    vertical-align: middle;
    padding-right: 12px;
  }
  &:hover {
    color: #873dc1;
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const ContainerHead = styled.div`
  z-index: 99;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  gap: 15px;
  @media (max-width: 469px) {
    padding: 0 1rem;
  }
  @media (min-width: 1700px) {
    max-width: 105rem;
  }
`;
