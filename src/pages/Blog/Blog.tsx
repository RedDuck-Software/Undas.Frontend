import React from 'react';

import { BlogWrap } from './Blog.styles';

import { Container, Background } from '../../globalStyles';

const Blog: React.FC = () => {
  return (
    <Background>
      <Container>
        <BlogWrap></BlogWrap>
      </Container>
    </Background>
  );
};

export default Blog;
