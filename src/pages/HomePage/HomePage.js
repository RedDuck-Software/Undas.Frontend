import React from 'react'

import { Background } from '../../globalStyles'

import {
  InfoSection,
  BrowseCategory,
  TopCollections,
  TopBuyers,
} from './page-components'

const HomePage = () => {
  return (
    <>
      <Background>
        <InfoSection />
        <BrowseCategory />
        <TopCollections />
        <TopBuyers />
      </Background>
    </>
  )
}

export default HomePage
