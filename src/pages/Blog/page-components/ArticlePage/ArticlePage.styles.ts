import styled from "styled-components";

import { PageTitle } from "../../../../globalStyles";

export const ArticleWrap = styled.div`
  padding: 80px 0 120px;
  @media (max-width: 992px) {
    padding: 60px 0 80px;
  }
  @media (max-width: 768px) {
    padding: 40px 0 60px;
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
`;
export const ArticleDescriptionItem = styled.li``;
export const ArticleImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;
export const ArticleText = styled.p`
  margin-top: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #232428;
`;
export const RelatedArticles = styled.div``;
export const Text = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #232428;
  margin-bottom: 20px;
`;
