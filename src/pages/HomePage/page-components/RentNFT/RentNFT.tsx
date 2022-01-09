import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'

import { Container, Button } from '../../../../globalStyles'
import {
  RentNFTSec,
  RentNFTTitle,
  RentNFTWrapper,
  RentNFTItem,
  Image,
  BlackLayer,
  RentNFTItemText,
  ButtonWrapper,
} from './RentNFT.styles'

import image from '../../../../images/image-rent/rent-item-image.png'

const CarouselSettings = {
  itemsToShow: 3,
  disableArrowsOnEnd: true,
}

const breakPoints = [
  { width: 460, itemsToShow: 1 },
  { width: 462, itemsToShow: 3 },
]

const RentNFT = () => {
  return (
    <RentNFTSec>
      <Container>
        <RentNFTTitle>Rent NFT</RentNFTTitle>
        <RentNFTWrapper>
          <Carousel
            {...CarouselSettings}
            breakPoints={breakPoints}
            isRTL={false}
          >
            <RentNFTItem>
              <Image src={image} />
              <BlackLayer />
              <RentNFTItemText>Information about NFT</RentNFTItemText>
            </RentNFTItem>
            <RentNFTItem>
              <Image src={image} />
              <BlackLayer />
              <RentNFTItemText>Information about NFT</RentNFTItemText>
            </RentNFTItem>
            <RentNFTItem>
              <Image src={image} />
              <BlackLayer />
              <RentNFTItemText>Information about NFT</RentNFTItemText>
            </RentNFTItem>
            <RentNFTItem>
              <Image src={image} />
              <BlackLayer />
              <RentNFTItemText>Information about NFT</RentNFTItemText>
            </RentNFTItem>
            <RentNFTItem>
              <Image src={image} />
              <BlackLayer />
              <RentNFTItemText>Information about NFT</RentNFTItemText>
            </RentNFTItem>
            <RentNFTItem>
              <Image src={image} />
              <BlackLayer />
              <RentNFTItemText>Information about NFT</RentNFTItemText>
            </RentNFTItem>
            <RentNFTItem>
              <Image src={image} />
              <BlackLayer />
              <RentNFTItemText>Information about NFT</RentNFTItemText>
            </RentNFTItem>
            <RentNFTItem>
              <Image src={image} />
              <BlackLayer />
              <RentNFTItemText>Information about NFT</RentNFTItemText>
            </RentNFTItem>
            <RentNFTItem>
              <Image src={image} />
              <BlackLayer />
              <RentNFTItemText>Information about NFT</RentNFTItemText>
            </RentNFTItem>
          </Carousel>
          <ButtonWrapper>
            <Link to="rent-nft">
              <Button violet big>
                Read about rent NFT
              </Button>
            </Link>
          </ButtonWrapper>
        </RentNFTWrapper>
      </Container>
    </RentNFTSec>
  )
}

export default RentNFT
