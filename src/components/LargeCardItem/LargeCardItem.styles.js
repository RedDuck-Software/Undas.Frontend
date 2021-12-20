import styled from 'styled-components'

import CheckMark from '../../icons/check-mark.svg'

export const CardImage = styled.img`
  width: 100%;
  max-height: 24rem;
  object-fit: cover;
  border-radius: 10px;
`

export const CardContainer = styled.div`
  width: 32%;
  margin-bottom: -14%;

  max-width: 23.2rem;
  cursor: pointer;

  &:hover ${CardImage} {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 6px 9px, rgba(0, 0, 0, 0.23) 0px 6px 9px;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
  }
`

export const CardContent = styled.div`
  background: rgba(0, 0, 0, 0.9);
  position: relative;
  padding: 2rem 1rem;
  border-radius: 0px 0px 10px 10px;

  position: relative;
  bottom: 34%;
`

export const CardImageIcon = styled.img`
  position: absolute;
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  left: 43%;
  top: -12%;
`

export const CardCollectionName = styled.h4`
  font-weight: 400;
  color: #c4c4c4;
  padding-bottom: 0.25rem;

  &:after {
    content: url('${CheckMark}');
    position: relative;
    left: 10px;
    top: -2px;
  }
`

export const CardCollectionCreator = styled.span`
  color: #ffffff;
  font-size: 0.875rem;
`

export const CardDescription = styled.p`
  font-size: 0.8rem;
  margin-top: 0.75rem;
  color: #edd2ff;
`

export const PurpleText = styled.span`
  color: #edd2ff;
`
