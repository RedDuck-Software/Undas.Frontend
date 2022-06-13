import React, { ReactNode } from "react";
import styled from "styled-components";
import { Container } from "../../../globalStyles";

interface BlogTheme {
    blogComponent: ReactNode;
}
const Wrap = styled.div`
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

const BlogThemeWrap: React.FC<BlogTheme> = ({ blogComponent }) => {
  return (
    <Wrap>
        <Container>{blogComponent}</Container>
    </Wrap>
  );
};

export default BlogThemeWrap;
