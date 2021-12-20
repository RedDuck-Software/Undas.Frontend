import styled from 'styled-components'

import { ReactComponent as Search } from '../../icons/search.svg'
import CheckMark from '../../icons/check-mark.svg'

export const SideBarContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const SideBarFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1rem;
  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 5px 5px 0px 0px;
  min-height: 40px;
  padding: 0 20px;
  cursor: pointer;
`

export const SideBarStatusTop = styled(SideBarFilter)`
  border-top: none;
  ${(props) => (props.closed ? `` : `border-bottom: none;`)}
  border-radius: 0;

  ${SideBarFilter};
`

export const SideBarStatusContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  background: rgba(251, 245, 255, 0.7);
  border: 1px solid #5d3f92;
  padding: 1.4rem;
`

export const StatusButton = styled.button`
  display: flex;
  flex-basis: calc(50% - 8px);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #ffffff;
  border: 1px solid #893ac2;
  box-shadow: inset 0px 4px 4px rgba(93, 63, 146, 0.31);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f5f5f5;
  }

  &:nth-child(1) {
    margin: 0 1rem 0.5rem 0;
  }

  &:nth-child(2) {
    margin-bottom: 0.5rem;
  }

  &:nth-child(3) {
    margin-right: 1rem;
  }
`

export const SideBarPriceTop = styled(SideBarFilter)`
  border-top: none;
  ${(props) => (props.opened ? `border-bottom: none;` : ``)}
  border-radius: 0;

  ${SideBarFilter};
`

export const SideBarPriceContent = styled(SideBarStatusContent)`
  flex-direction: column;

  ${SideBarStatusContent}
`

export const ButtonsWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  margin-bottom: 0.5rem;

  &:nth-child(2n) {
    span {
      padding: 0 1rem;
    }
  }
`

export const PriceButton = styled.button`
  width: 48%;
  padding: 0.5rem 1rem;

  background: #ffffff;
  border: 1px solid #893ac2;
  box-shadow: inset 0px 4px 4px rgba(93, 63, 146, 0.31);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:nth-child(1n) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-align: start;
    width: 100%;
  }
`

export const PriceInput = styled.input`
  width: 48%;
  padding: 0.5rem 1rem;

  background: #ffffff;
  border: 1px solid #893ac2;
  box-shadow: inset 0px 4px 4px rgba(93, 63, 146, 0.31);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  text-align: center;
  outline: none;

  &::placeholder {
    color: #000000;
  }

  &:focus::placeholder {
    color: transparent;
  }
`

export const ApplyLink = styled.span`
  margin: 0.5rem auto;

  font-size: 1rem;
  color: #7c7c7c;
  cursor: pointer;
`

export const SideBarCollectionsTop = styled(SideBarFilter)`
  border-top: none;
  ${(props) => (props.opened ? `border-bottom: none;` : ``)}
  border-radius: 0;

  ${SideBarFilter};
`

export const SideBarCollectionsContent = styled(SideBarStatusContent)`
  ${SideBarStatusContent};
`

export const CollectionsSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #893ac2;
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(93, 63, 146, 0.31);
  border-radius: 8px;
  width: 100%;
`

export const SearchIcon = styled(Search)`
  margin: 0.625rem 0rem 0.625rem 1rem;
`

export const CollectionsFilter = styled.input`
  border: transparent;
  background: transparent;
  outline: none;
  padding: 0.6rem;

  &::placeholder {
    color: #7c7c7c;
  }

  &:focus::placeholder {
    color: transparent;
  }
`

export const CollectionsList = styled.ul`
  padding: 1rem 0 0;
  list-style-type: none;
`

export const ItemImage = styled.img`
  max-width: 30px;
  max-height: 30px;
`

export const CollectionsListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 0.5rem 0;

  &:hover ${ItemImage} {
    transform: scale(1.05);
  }
`

export const ItemText = styled.span`
  padding-left: 0.6rem;

  ${(props) =>
    props.checkbox
      ? `&:after {
    content: url('${CheckMark}');
    position: relative;
    top: 2px;
    left: 6px;
  }`
      : ``}
`

export const SideBarChainsTop = styled(SideBarFilter)`
  border-top: none;
  ${(props) => (props.opened ? `border-bottom: none;` : ``)}
  border-radius: 0;

  ${SideBarFilter};
`

export const SideBarChainsContent = styled(SideBarStatusContent)`
  padding: 1rem 1.4rem;

  ${SideBarStatusContent};
`

export const ChainsList = styled(CollectionsList)`
  padding: 0;

  ${CollectionsList};
`

export const ChainsListItem = styled(CollectionsListItem)`
  ${CollectionsListItem};
`

export const SideBarCategoriesTop = styled(SideBarFilter)`
  border-top: none;
  ${(props) => (props.opened ? `border-bottom: none;` : ``)}
  border-radius: 0;

  ${SideBarFilter};
`

export const SideBarCategoriesContent = styled(SideBarStatusContent)`
  padding: 1rem 1.4rem;

  ${SideBarStatusContent};
`

export const CategoriesList = styled(CollectionsList)`
  padding: 0;

  ${CollectionsList};
`

export const CategoriesListItem = styled(CollectionsListItem)`
  ${CollectionsListItem};
  }
`
