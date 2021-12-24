import styled from 'styled-components'

import { Container } from '../../globalStyles'

import Like from '../../icons/like.svg'
import View from '../../icons/view.svg'
import LikeGrey from '../../icons/like-grey.svg'
import Graph from '../../icons/graph.svg'

export const ProductCardSec = styled.div`
  padding: 7rem 0;

  @media (max-width: 1024px) {
    padding: 3rem 0;
  }
`

export const ProductContainer = styled(Container)`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 584px;
  }

  @media (max-width: 631px) {
    width: 100%;
    font-size: 0.85rem;
  }

  @media (max-width: 531px) {
    font-size: 0.75rem;
  }

  ${Container}
`

export const ProductContainerCenter = styled(Container)`
  display: flex;
  flex-direction: column;

  ${Container}
`

export const LeftSide = styled.div`
  max-width: 540px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  height: 100%;

  margin-right: 2rem;

  @media (max-width: 1155px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    max-width: none;
    margin-right: 0;
  }
`

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`

export const ItemInformation = styled.div`
  width: 100%;

  ${(props) =>
    props.mobile
      ? `display: none;
  
        @media (max-width: 1024px) {
          display: block;
        }`
      : `display: block; 
        
        @media (max-width: 1024px) {
          display: none;
        }
      `};
`

export const ProductSubtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: #5d3f92;
  margin-bottom: 5px;
`

export const ProductTitle = styled.h1`
  font-size: 2.7rem;
  font-weight: 400;
`

export const ViewsAndLikes = styled.div`
  display: inline-block;

  @media (max-width: 1155px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: row;
    gap: 5%;
  }
`

export const GenInformationTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: #7c7c7c;
  margin-top: 0.4rem;
`

export const ViewsContainer = styled.span`
  font-size: 1rem;
  color: #7c7c7c;
  word-spacing: 5px;
  margin-left: 4rem;

  &:before {
    content: url('${View}');
    position: relative;
    top: 2px;
    padding-right: 5px;
  }

  @media (max-width: 1155px) {
    margin-left: 0;
    padding: 2% 0;
  }
`

export const LikesContainer = styled.span`
  font-size: 1rem;
  color: #7c7c7c;
  word-spacing: 5px;
  margin-left: 1.2rem;

  &:before {
    content: url('${LikeGrey}');
    position: relative;
    top: 2px;
    padding-right: 5px;
  }

  @media (max-width: 1155px) {
    margin-left: 0;
  }
`

export const PriceHistoryClosed = styled.div`
  background: #ffffff;
  border: 1px solid #5d3f92;
  word-spacing: 4px;
  padding: 1rem 2rem 1rem 1.8rem;
  border-radius: 10px;
  margin-top: 2rem;
  cursor pointer;

  display: flex;

  svg {
    position: relative;
    top: 4px;
    margin-left: auto;
  }

  &:before {
    content: url('${Graph}');
    position: relative;
    top: 2px;
    padding-right: 1rem;
  }
`

export const CardImageContainer = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    margin-bottom: 6%;
  }
`

export const CardImage = styled.img`
  width: 100%;
`

export const BookmarkButton = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: 0.8rem;
  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 10px;
  width: 55px;
  height: 35px;

  &:before {
    cursor: pointer;
    content: url('${Like}');
    position: relative;
    top: 1px;
    right: 4px;
  }

  @media (max-width: 1024px) {
    top: 9.5rem;
  }

  @media (max-width: 470px) {
    top: 9.25rem;
  }
`
