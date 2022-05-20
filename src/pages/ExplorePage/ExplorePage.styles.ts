import styled from 'styled-components';

import { Container } from '../../globalStyles';

export const ExploreContainer = styled(Container)`
  display: flex;
  justify-content: center;

  ${Container}
`;

export const ExploreHeading = styled.div`
  max-height: 155px;
  background: #f6e9ff;
`;

export const ExploreBackground = styled.img`
  width: 100%;
`;

export const ExploreContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const ExploreHeaderContent = styled.div`
  text-align: center;
  padding-top: 3.75rem;
`;

export const ExploreTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 362px) {
    font-size: 1.75rem;
  }
`;

export const ExploreSubtitle = styled.h3`
  padding: 1rem 0 2rem;
  font-size: 1.8rem;
  font-weight: 400;
  word-spacing: 0.8rem;

  @media (max-width: 480px) {
    padding: 0.5rem 0 2rem;
    font-size: 1.5rem;
    word-spacing: 0.5rem;
  }

  @media (max-width: 362px) {
    font-size: 1.25rem;
  }
`;

export const ExplorePagginationContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 0.5rem 0 4rem;
`;
