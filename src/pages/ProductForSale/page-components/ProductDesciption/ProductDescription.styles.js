import styled from 'styled-components'

import Burger from '../../../../icons/burger.svg'

export const DescriptionTitle = styled.div`
  width: 100%;
  margin: 20px 0 10px;
  padding: 20px 28px 20px;
  font-size: 1.2rem;
  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 10px;

  &:before {
    content: url('${Burger}');
    position: relative;
    right: 8px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

export const DescriptionContainer = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #5d3f92;
  border-radius: 10px;
  width: 100%;
  min-height: 170px;
  padding: 20px;
`

export const DescriptionContainerTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: #7c7c7c;

  @media (max-width: 539px) {
    font-size: 1rem;
  }
`

export const DescriptionContainerText = styled.p`
  font-size: 1rem;
  padding-top: 5px;
  padding-right: 10%;

  @media (max-width: 539px) {
    font-size: 0.85rem;
  }
`

export const TextAndButtonContainer = styled.div`
  display: flex;
  padding-top: 24px;
`