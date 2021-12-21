import styled from 'styled-components'
import violetLine from '../../../../icons/violet-line.svg'
import violetArrowDown from '../../../../icons/violet-arrow-down.svg'

export const BuyersSec = styled.div`
  padding: 4rem 0;

  @media (max-width: 801px) {
    padding: 0;
  }
`

export const BuyersTitle = styled.h2`
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
`

export const BuyersTitleViolet = styled.h2`
  display: inline;
  font-size: 2.8rem;
  padding-left: 1rem;
  font-weight: 400;
  color: #5d3f92;

  &:after {
    content: url('${violetArrowDown}');
    position: relative;
    left: 8px;
    top: 3px;
  }

  @media (max-width: 1009px) {
    font-size: 2.4rem;
  }

  @media (max-width: 801px) {
    font-size: 1.4rem;
    padding-left: 0.5rem;

    &:before {
      right: 8px;
      top: 0.6rem;
    }
  }
`

export const BuyersWrapper = styled.div`
  padding: 3.75rem 0;

  @media (max-width: 801px) {
    padding: 2rem 0;
  }
`

export const BuyersItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  width: 93%;
  height: 93%;
  border-radius: 10px;
  position: relative;
  background: #ffffff;
  border: 1px solid #edd2ff;
  box-shadow: 0px 4px 10px rgba(93, 63, 146, 0.5);
  margin-bottom: 1rem;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const ProfileImage = styled.img`
  position: absolute;
  border-radius: 50%;
  bottom: 26%;
  width: 50px;
  height: 50px;

  @media (max-width: 990px) {
    bottom: 34%;
    width: 40px;
    height: 40px;
  }

  @media (max-width: 680px) {
    bottom: 28%;
    width: 35px;
    height: 35px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10% 20%;

  text-align: center;

  @media (max-width: 801px) {
    font-size: 0.85rem;
    padding: 10% 10% 15%;
  }

  @media (max-width: 680px) {
    padding: 15% 10% 5%;
  }
`

export const UserName = styled.span`
  margin-bottom: 1rem;

  @media (max-width: 1109px) {
    margin-bottom: 0.5rem;
  }
`

export const UserInformation = styled.span``

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`
