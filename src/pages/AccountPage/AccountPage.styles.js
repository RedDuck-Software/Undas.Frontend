import styled from 'styled-components'

import { ReactComponent as Search } from '../../icons/search.svg'

export const AccoutBackground = styled.img`
  max-height: 150px;
  width: 100%;

  @media (max-width: 749px) {
    object-fit: cover;
    height: 120px;
  }
`

export const AccountSec = styled.div``

export const AccountInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  margin-top: -3rem;
  padding-bottom: 3.125rem;

  @media (max-width: 749px) {
    padding-bottom: 2.5rem;
  }
`

export const AccountImage = styled.img``

export const AccountAddress = styled.span`
  font-size: 1rem;
  color: #7c7c7c;

  cursor: pointer;

  @media (max-width: 521px) {
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const AccountName = styled.span`
  font-size: 2.15rem;
  color: #000000;
`

export const AccountJoined = styled.span`
  font-size: 1rem;
  color: #7c7c7c;
`

export const AccountMenu = styled.ul`
  display: flex;
  align-items: center;

  height: 50px;
  background: #ffffff;
  border: 1px solid #5d3f92;
`

export const AccountMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AccountMenuItem = styled.li`
  display: inline-block;

  font-size: 1.15rem;
  list-style-type: none;
  color: #000000;
  cursor: pointer;

  svg {
    position: relative;
    top: 4px;

    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &:nth-child(1) {
    position: relative;

    &::after {
      transition: background-color 0.4s ease 0s;
      background-color: #5d3f92;
      content: '';
      display: block;
      height: 4px;
      bottom: -48%;
      right: 14%;
      position: absolute;
      width: 70%;
    }
  }

  @media (max-width: 979px) {
    font-size: 1rem;

    svg {
      width: 18px;
      height: 18px;
      margin-right: 4px;
    }

    &:nth-child(1) {
      &::after {
        bottom: -66%;
      }
    }
  }

  @media (max-width: 774px) {
    span {
      font-size: 0;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 399px) {
    font-size: 0.75rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`

export const AccountPageContent = styled.div`
  padding: 2rem 0;
`

export const AccountPageContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 745px) {
    flex-wrap: wrap;
  }
`

export const AccountSearchWrapper = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  max-width: 540px;
  max-height: 50px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #5d3f92;

  @media (max-width: 939px) {
    max-height: 45px;
  }

  @media (max-width: 745px) {
    min-height: 45px;
    flex-basis: 100%;
    max-width: none;
  }

  @media (max-width: 533px) {
    font-size: 0.75rem;
  }
`

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
  position: relative;
  left: 1rem;
`

export const SearchInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 2rem;
  width: 100%;
  font-size: 1.05rem;
  background: none;
  border: none;
  border-radius: 10px;
  outline: none;

  &:focus::placeholder {
    color: transparent;
  }

  @media (max-width: 939px) {
    font-size: 0.9rem;
  }

  @media (max-width: 533px) {
    font-size: 0.75rem;
    max-height: 35px;
  }
`

export const AccountDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 10px;
  font-size: 1.05rem;
  cursor: pointer;

  min-width: 240px;
  max-height: 50px;

  @media (max-width: 1294px) {
    flex: 1;
    min-width: 0px;
  }

  @media (max-width: 939px) {
    padding: 0 1%;
    font-size: 0.8rem;
    max-height: 45px;
  }

  @media (max-width: 533px) {
    font-size: 0.75rem;
    max-height: 35px;
  }

  @media (max-width: 533px) {
    padding: 0% 2%;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonView2x2 = styled.button`
  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 10px 0px 0px 10px;
  cursor: pointer;

  height: 50px;
  width: 50px;

  svg {
    height: 26px;
    width: 26px;
  }

  &:focus {
    background: #edd2ff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media (max-width: 939px) {
    height: 45px;
    width: 45px;
  }

  @media (max-width: 533px) {
    height: 35px;
    width: 35px;

    svg {
      height: 22px;
      width: 22px;
    }
  }
`

export const ButtonView3x3 = styled(ButtonView2x2)`
  border-left: none;
  border-radius: 0px 10px 10px 0px;

  svg {
    height: 32px;
    width: 32px;
  }

  @media (max-width: 533px) {
    svg {
      height: 26px;
      width: 26px;
    }
  }

  ${ButtonView2x2};
`

export const AccountCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3%;

  margin: 4rem 0;

  @media (max-width: 1209px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin-bottom: 15%;
  }

  @media (max-width: 774px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    margin-bottom: 30%;
  }

  @media (max-width: 533px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;

    div {
      margin: 0 auto;
      max-width: 270px;
    }
  }
`
