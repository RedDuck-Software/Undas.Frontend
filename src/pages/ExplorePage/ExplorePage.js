import React from 'react'

import BackgroundImg from '../../images/image-explore/explore-background.png'

import { Background } from '../../globalStyles'
import {
  ExploreContainer,
  ExploreHeading,
  ExploreBackground,
  ExploreContent,
  ExploreHeaderContent,
  ExploreTitle,
  ExploreSubtitle,
  ExplorePagginationContainer,
} from './ExplorePage.styles'

import { LargeCardList, Paggination } from '../../components'

const ExplorePage = () => {
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
            <ExploreTitle>Explore Art</ExploreTitle>
            <ExploreSubtitle>Trending collections in Art</ExploreSubtitle>
            <LargeCardList />
          </ExploreHeaderContent>
        </ExploreContent>
      </ExploreContainer>
      <ExplorePagginationContainer>
        <Paggination />
      </ExplorePagginationContainer>
    </Background>
  )
}

export default ExplorePage
