import styled from 'styled-components'

export const CardListWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`

export const CardListHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardListResults = styled.span`
  font-size: 1rem;
  color: #7c7c7c;
`

export const CardListFilters = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;

  background: #ffffff;
  border: 1px solid #edd2ff;
  box-sizing: border-box;
  min-width: 166px;
  padding: 0.8rem 0 0.8rem 1rem;
  cursor: pointer;

  color: #7c7c7c;

  &:nth-child(1) {
    border-radius: 5px 5px 0px 0px;
  }

  &:last-child {
    border-radius: 0px 0px 10px 10px;
  }

  &:hover {
    box-shadow: inset rgba(0, 0, 0, 0.19) 0px 1px 2px,
      rgba(0, 0, 0, 0.23) 0px 3px 3px;
  }
`

export const AllItemsDropdown = styled.div`
  postion: relative;
`

export const AllItemsButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.6rem 1rem;
  min-width: 166px;
  outline: none;

  font-size: 1rem;
  color: #000000;
`

export const AllItemsMenu = styled.div`
  position: absolute;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  z-index: 99;

  &.active {
    opacity: 1;
  }
`

export const SortByDropdown = styled(AllItemsDropdown)`
  ${AllItemsDropdown}
`

export const SortByButton = styled(AllItemsButton)`
  ${AllItemsButton}
`

export const SortByMenu = styled(AllItemsMenu)`
  ${AllItemsMenu}
`

export const ToggleMarkupContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonView2x2 = styled.button`
  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 10px 0px 0px 10px;
  cursor: pointer;

  height: 40px;
  width: 40px;

  svg {
    height: 24px;
    width: 24px;
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
    height: 30px;
    width: 30px;
  }

  ${ButtonView2x2}
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 1.6rem;
  margin: 2rem 0 0;
`
