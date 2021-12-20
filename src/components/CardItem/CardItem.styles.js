import styled from 'styled-components'

import CheckMark from '../../icons/check-mark.svg'
import RhombusWhite from '../../icons/rhombus-white.svg'

export const CardItemContainer = styled.div`
  position: relative;
  width: 269px;
  height: 354px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 6px 9px, rgba(0, 0, 0, 0.23) 0px 6px 9px;
  }
`

export const CardItemImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`

export const TransparentLayer = styled.div`
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    background: #edd2ff;
    opacity: 0.2;
    width: 100%;
    height: 20%;
    position: absolute;
    z-index: 1;
    border-radius: 0px 0px 10px 10px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 1rem;
  position: relative;
  bottom: 20%;
`

export const CardTitle = styled.span`
  color: #c4c4c4;
  font-size: 0.75rem;

  &:after {
    content: url('${CheckMark}');
    position: relative;
    left: 7px;
    bottom: 3px;
  }
`

export const CardNumber = styled.span`
  color: #ffffff;
  font-size: 0.75rem;
`

export const CardETH = styled.span`
  position: absolute;
  bottom: 26%;
  right: 4%;
  word-spacing: 1rem;

  color: #ffffff;
  font-size: 0.75rem;

  &:after {
    content: url('${RhombusWhite}');
    position: relative;
    right: 22px;
    top: 4px;
  }
`
