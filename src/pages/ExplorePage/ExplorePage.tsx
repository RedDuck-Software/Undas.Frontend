import React from 'react';

import {
  ExploreContainer,
  ExploreHeading,
  ExploreBackground,
  ExploreContent,
  ExploreHeaderContent,
  ExploreTitle,
  ExploreSubtitle,
  ExplorePagginationContainer,
} from './ExplorePage.styles';

import { LargeCardList, Paggination } from '../../components';
import { Background } from '../../globalStyles';
import BackgroundImg from '../../images/image-explore/explore-background.png';

interface ExplorePageProps {
  pageType: string;
}

const ExplorePage: React.FC<ExplorePageProps> = ({ pageType }) => {
  return (
    <Background>
      <ExploreHeading>
        <ExploreContainer>
          <ExploreBackground src={BackgroundImg} />
        </ExploreContainer>
      </ExploreHeading>
      <ExploreContainer>
        <ExploreContent>
          <ExploreHeaderContent>
            <ExploreTitle>Explore {pageType}</ExploreTitle>
            <ExploreSubtitle>
              Trending collections in {pageType}
            </ExploreSubtitle>
            <LargeCardList />
          </ExploreHeaderContent>
        </ExploreContent>
      </ExploreContainer>
      <ExplorePagginationContainer>
        <Paggination />
      </ExplorePagginationContainer>
    </Background>
  );
};

export default ExplorePage;
