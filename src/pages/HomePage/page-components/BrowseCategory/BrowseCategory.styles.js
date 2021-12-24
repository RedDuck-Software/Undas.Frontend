import styled from 'styled-components'
import violetLine from '../../../../icons/violet-line.svg'

export const BrowseSec = styled.div`
  padding: 4rem 0;

  @media (max-width: 801px) {
    padding: 0;
  }
`

export const BrowseTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 400;
  color: #000000;
  margin-left: 0.5rem;

  &:before {
    content: url('${violetLine}');
    position: relative;
    right: 8px;
    top: 3px;
  }

  @media (max-width: 1009px) {
    font-size: 2.4rem;
  }

  @media (max-width: 801px) {
    font-size: 1.4rem;

    &:before {
      right: 8px;
      top: 0.6rem;
    }
  }

  @media (max-width: 574px) {
    display: flex;
    justify-content: center;
    margin-left: 0;

    &:before {
      content: none;
    }
  }
`

export const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2vw;
  margin: 0 1.5rem;

  @media (max-width: 1239px) {
    margin: 0 1rem;
  }

  @media (max-width: 801px) {
    margin: 0;
  }

  @media (max-width: 574px) {
    margin: 0 auto;
    grid-template-columns: 1fr;
    max-width: 265px;
  }
`

export const CategoryImage = styled.img`
  transition: all 0.2s ease-in-out;
  width: 100%;
`

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  position: relative;
  padding: 3.75rem 0 0;
  text-align: center;
  color: white;
  cursor: pointer;

  &:hover ${CategoryImage} {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 6px 9px, rgba(0, 0, 0, 0.23) 0px 6px 9px;
    border-radius: 10px;
  }

  @media (max-width: 801px) {
    padding: 2rem 0 0;
  }
`

export const BlackLayer = styled.div`
  &::after {
    position: absolute;
    bottom: 0.05rem;
    left: 0;
    content: '';
    background: black;
    opacity: 0.5;
    width: 100%;
    height: 20%;
    position: absolute;
    z-index: 1;
    border-radius: 0px 0px 10px 10px;

    @media (max-width: 801px) {
      height: 25%;
    }
  }
`

export const CategoryText = styled.span`
  font-size: 2.5rem;
  position: absolute;
  z-index: 2;
  margin-bottom: 4%;

  @media (max-width: 1009px) {
    font-size: 1.8rem;
    margin-bottom: 6%;
  }

  @media (max-width: 801px) {
    font-size: 1.4rem;
    margin-bottom: 8%;
  }

  @media (max-width: 574px) {
    font-size: 1.8rem;
  }
`
