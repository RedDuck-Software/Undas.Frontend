import styled from "styled-components";
import {Container} from "../../globalStyles";

export const AllNFTContainer = styled(Container) `
  margin-bottom: 200px;//rm after deploy
  ${Container}
`

export const MenuWrap = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
`


export const ResultsTotal = styled.span `
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #7C7C7C;
`

export const SettingsBlock = styled.ul `
  list-style: none;
  display: flex;
  gap: 15px;
`

export const ViewOption = styled.div `
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  height: 36px;
  overflow: hidden;
  display: flex;
  align-items: center;
`


export const ViewButton = styled.button `
  cursor: pointer;
  background: #FFFFFF;
  width: 36px;
  height: 36px;
  border: none;
  box-sizing: border-box;
  &.grid-active {
    background-color: #EDD2FF;
  }
`

export const Filter = styled.ul `
  width: 160px;
  position: relative;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(135, 61, 193, 0.25);
  //overflow: hidden;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7C7C7C;
`

interface IFilterItem {
  hover?: boolean
}

export const FilterItem = styled.li<IFilterItem> `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  transition: all ease-in-out 0.15s;
  &:hover {
    ${props => props.hover ? 
        'box-shadow: inset 0px 0px 1px rgba(135, 61, 193, 0.5), inset 0px -3px 4px rgba(124, 124, 124, 0.25);'
        : ''}
  }
`

export const Arrow = styled.span `
  margin-top: 4px;
  border-top: 1px solid #5D3F92;
  border-left: 1px solid #5D3F92;
  transform: rotate(45deg);
  width: 10px;
  height: 10px;
`

export const FilterMenu = styled.ul `
  position: absolute;
  width: 160px;
  background: #FFFFFF;
  box-shadow: inset 0 0 1px rgba(135, 61, 193, 0.5);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
`

export const FilterTitle = styled.span `
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #5D3F92;
`

export const SettingsElement = styled.li `
  
`






/*
import { Container } from "../../globalStyles";

import { ReactComponent as Search } from "../../icons/search.svg";
import CheckMark from "../../icons/check-mark.svg";

interface SideBarProps {
  closed?: boolean;
  opened?: boolean;
  checkbox?: boolean;
}

export const AllNFTsContainer = styled(Container)`
  display: flex;
  padding-top: 3.125rem;

  ${Container};
`;
export const AllNFTsPagginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 4rem;
`;

export const SideBarContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 1059px) {
    min-width: 25vw;
  }

  @media (max-width: 849px) {
    position: absolute;
    z-index: 2;
    width: 30vw;
  }

  @media (max-width: 649px) {
    width: 40.5vw;
  }
`;

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

  @media (max-width: 389px) {
    padding: 0 10px;
    font-size: 0.85rem;
  }
`;

export const SideBarStatusTop = styled(SideBarFilter)<SideBarProps>`
  border-top: none;
  ${({ closed }) => (closed ? `` : `border-bottom: none;`)}
  border-radius: 0;

  ${SideBarFilter};
`;

export const SideBarStatusContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  background: rgba(251, 245, 255, 0.7);
  border: 1px solid #5d3f92;
  padding: 1.4rem;

  @media (max-width: 891px) {
    padding: 1rem;
  }

  @media (max-width: 849px) {
    background: rgb(251, 245, 255);
  }

  @media (max-width: 524px) {
    flex-direction: column;

    button {
      margin-top: 5%;
    }
  }

  @media (max-width: 459px) {
    font-size: 0.85rem;
  }

  @media (max-width: 499px) {
    padding: 6%;
  }
`;

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

  @media (max-width: 524px) {
    &:nth-child(1) {
      margin: 0;
    }

    &:nth-child(2) {
      margin-bottom: 0;
    }

    &:nth-child(3) {
      margin-right: 0;
    }
  }
`;

export const SideBarPriceTop = styled(SideBarFilter)<SideBarProps>`
  ${({ opened }) => (opened ? `border-bottom: none;` : ``)}
  border-radius: 0;

  ${SideBarFilter};
`;

export const SideBarPriceContent = styled(SideBarStatusContent)`
  flex-direction: column;

  ${SideBarStatusContent}
`;

export const ButtonsWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  margin-bottom: 0.5rem;

  &:nth-child(2n) {
    span {
      padding: 0 1rem;

      @media (max-width: 499px) {
        font-size: 0.8rem;
        padding: 0 8%;
      }
    }
  }
`;

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

  @media (max-width: 499px) {
    font-size: 0.75rem;
    padding: 4% 8%;
  }
`;

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

  @media (max-width: 499px) {
    font-size: 0.75rem;
    width: 40%;
    padding: 4% 2%;
  }

  @media (max-width: 375px) {
    font-size: 0.7rem;
    width: 50%;
    padding: 4% 2%;
  }
`;

export const ApplyLink = styled.span`
  margin: 0.5rem auto;

  font-size: 1rem;
  color: #7c7c7c;
  cursor: pointer;

  @media (max-width: 499px) {
    font-size: 0.8rem;
  }
`;

export const SideBarCollectionsTop = styled(SideBarFilter)<SideBarProps>`
  border-top: none;
  ${({ opened }) => (opened ? `border-bottom: none;` : ``)}
  border-radius: 0;

  ${SideBarFilter};
`;

export const SideBarCollectionsContent = styled(SideBarStatusContent)`
  ${SideBarStatusContent};
`;

export const CollectionsSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #893ac2;
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(93, 63, 146, 0.31);
  border-radius: 8px;
  width: 100%;
`;

export const SearchIcon = styled(Search)`
  margin: 0.625rem 0rem 0.625rem 1rem;
`;

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
`;

export const CollectionsList = styled.ul`
  padding: 1rem 0 0;
  list-style-type: none;
`;

export const ItemImage = styled.img`
  max-width: 30px;
  max-height: 30px;

  @media (max-width: 459px) {
    max-width: 25px;
    max-height: 25px;
  }

  @media (max-width: 389px) {
    max-width: 22px;
    max-height: 22px;
  }
`;

export const CollectionsListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 0.5rem 0;

  &:hover ${ItemImage} {
    transform: scale(1.05);
  }

  @media (max-width: 389px) {
    span {
      font-size: 0.85rem;
      padding-left: 0.25rem;
    }
  }
`;

export const ItemText = styled.span<SideBarProps>`
  padding-left: 0.6rem;

  ${({ checkbox }) =>
    checkbox
      ? `&:after {
          content: '';
          display: inline-block;
          height: 16px;
          width: 14px;
          background-size: 16px 14px;
          background-image: url(${CheckMark});
          background-repeat: no-repeat;
          position: relative;
          top: 4px;
          left: 6px;
  }`
      : ``}

  @media (max-width: 499px) {
    &:after {
      height: 12px;
      width: 12px;
      background-size: 12px 12px;
      top: 1px;
    }
  }

  @media (max-width: 336px) {
    &:after {
      height: 10px;
      width: 10px;
      background-size: 10px 10px;
      left: 3px;
      top: 0px;
    }
  }
`;

export const SideBarChainsTop = styled(SideBarFilter)<SideBarProps>`
  border-top: none;
  ${({ opened }) => (opened ? `border-bottom: none;` : ``)}
  border-radius: 0;

  ${SideBarFilter};
`;

export const SideBarChainsContent = styled(SideBarStatusContent)`
  padding: 1rem 1.4rem;

  @media (max-width: 389px) {
    padding: 8% 6%;
  }

  ${SideBarStatusContent};
`;

export const ChainsList = styled(CollectionsList)`
  padding: 0;

  ${CollectionsList};
`;

export const ChainsListItem = styled(CollectionsListItem)`
  ${CollectionsListItem};
`;

export const SideBarCategoriesTop = styled(SideBarFilter)<SideBarProps>`
  border-top: none;
  ${({ opened }) => (opened ? `border-bottom: none;` : ``)}
  border-radius: 0;

  ${SideBarFilter};
`;

export const SideBarCategoriesContent = styled(SideBarStatusContent)`
  padding: 1rem 1.4rem;

  @media (max-width: 389px) {
    padding: 8% 6%;
  }

  ${SideBarStatusContent};
`;

export const CategoriesList = styled(CollectionsList)`
  padding: 0;

  ${CollectionsList};
`;

export const CategoriesListItem = styled(CollectionsListItem)`
  ${CollectionsListItem};
  }
`;
*/
