import React from 'react'

import { Background } from '../../globalStyles'

import {
  InfoSection,
  BrowseCategory,
  TopCollections,
  TopBuyers,
  RentNFT,
} from './page-components'

const HomePage = () => {
  return (
    <>
      <Background>
        <InfoSection />
        <BrowseCategory />
        <TopCollections />
        <TopBuyers />
        <RentNFT />
      </Background>
    </>
  )
}

export default HomePage
