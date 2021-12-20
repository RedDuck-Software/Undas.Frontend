import styled from 'styled-components'

import Clock from '../../../../icons/clock.svg'
import Rhombus from '../../../../icons/rhombus.svg'

export const ProductPriceContainer = styled.div`
  min-width: 540px;
  min-height: 120px;
  margin-top: 2.25rem;
`

export const SaleEnds = styled.div`
  background: #ffffff;
  border: 1px solid #5d3f92;
  word-spacing: 4px;
  padding: 1rem 14rem 1rem 1.8rem;
  border-radius: 10px 10px 0px 0px;

  &:before {
    content: url('${Clock}');
    position: relative;
    top: 2px;
    padding-right: 1rem;
  }
`

export const CurrentPrice = styled.div`
  padding: 1rem 2rem;
  background: rgba(251, 245, 255, 0.7);
  border: 1px solid #5d3f92;
  border-top: none;
  border-radius: 0px 0px 10px 10px;
  font-size: 1.15rem;
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
`

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
`
