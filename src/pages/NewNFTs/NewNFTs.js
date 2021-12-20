import React from 'react'

import { SideBar, CardList, Paggination } from '../../components'

import { Background } from '../../globalStyles'
import { NewNFTsContainer, NewNFTsPagginationContainer } from './NewNFTs.styles'

const NewNFTs = () => {
  return (
    <Background>
      <NewNFTsContainer>
        <SideBar />
        <CardList newFilter={true} />
      </NewNFTsContainer>
      <NewNFTsPagginationContainer>
        <Paggination />
      </NewNFTsPagginationContainer>
    </Background>
  )
}

export default NewNFTs
