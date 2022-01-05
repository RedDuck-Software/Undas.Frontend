import styled from 'styled-components'

import Clock from '../../../../icons/clock.svg'
import Rhombus from '../../../../icons/rhombus.svg'

export const ProductPriceContainer = styled.div`
  min-width: 540px;
  min-height: 120px;
  margin-top: 2.25rem;

  @media (max-width: 1223px) {
    min-width: 0;
    width: 100%;
  }
`

export const SaleEnds = styled.div`
  background: #ffffff;
  border: 1px solid #5d3f92;
  word-spacing: 4px;
  padding: 3% 26% 3% 6%;
  border-radius: 10px 10px 0px 0px;

  &:before {
    content: url('${Clock}');
    position: relative;
    top: 2px;
    padding-right: 1rem;
  }

  @media (max-width: 1163px) {
    padding: 3% 6%;
  }
`

export const CurrentPrice = styled.div`
  padding: 1rem 2rem;
  background: rgba(251, 245, 255, 0.7);
  border: 1px solid #5d3f92;
  border-top: none;
  border-radius: 0px 0px 10px 10px;
  font-size: 1.15rem;

  @media (max-width: 1223px) {
    padding: 4% 8%;
  }

  @media (max-width: 531px) {
    font-size: 1rem;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 5px;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-right: 9px;
  }

  span {
    font-size: 1rem;
    color: #7c7c7c;
  }

  &:before {
    content: url('${Rhombus}');
    position: relative;
    top: 2px;
    margin-right: 5px;
  }

  @media (max-width: 531px) {
    h3 {
      font-size: 1rem;
    }

    span {
      font-size: 0.75rem;
    }
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 100%;
  gap: 2rem;

  @media (max-width: 1223px) {
    gap: 5%;

    button {
      padding: 3% 14%;
    }

    div {
      width: 100%;
    }
  }

  @media (max-width: 1133px) {
    button {
      padding: 3% 10%;
    }
  }

  @media (max-width: 389px) {
    flex-direction: column;
    align-items: center;

    button {
      width: 187px;
      height: 40px;
    }

    div {
      &:nth-child(2) {
        width: auto;
      }
    }
  }

  @media (max-width: 321px) {
    div {
      &:nth-child(3) {
        bottom: 15%;
      }
    }
  }
`
