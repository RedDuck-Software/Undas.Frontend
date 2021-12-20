import styled from 'styled-components'

import { ReactComponent as Search } from '../../icons/search.svg'

export const AccoutBackground = styled.img`
  max-height: 150px;
  width: 100%;
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
`

export const AccountImage = styled.img``

export const AccountAddress = styled.span`
  font-size: 1rem;
  color: #7c7c7c;

  cursor: pointer;
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

export const AccountMenuItem = styled.li`
  display: inline-block;
  padding: 0 2.5rem;

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
    background-color: #5D3F92;
    content: "";
    display: block;
    height: 4px;
    bottom: -48%;
    right: 14%;
    position: absolute;
    width: 70%;
  }
`

export const AccountPageContent = styled.div`
  padding: 2rem 0;
`

export const AccountPageContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
`

export const ButtonView3x3 = styled(ButtonView2x2)`
  border-left: none;
  border-radius: 0px 10px 10px 0px;

  svg {
    height: 32px;
    width: 32px;
  }

  ${ButtonView2x2}
`

export const AccountCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 2.2rem;
  margin: 4rem 0;
`
