import styled from "styled-components";

import { ReactComponent as SearchIco } from "../../icons/search.svg";

export const ElementText = styled.span`
  margin-left: 10px;
  color: #7c7c7c;
  transition: all ease-in-out 0.15s;
`;

export const HolderElement = styled.li<{ isActive?: boolean }>`
  position: relative;
  z-index: 1;
  width: 255px;
  padding: 10px 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all ease-in-out 0.15s;
  border-radius: ${({ isActive }) =>
    isActive ? "0 10px 0 0" : "0 10px 10px 0"};
  svg {
    path {
      transition: all ease-in-out 0.15s;
    }
  }

  &:hover {
    ${ElementText} {
      color: #232428;
    }
    svg path {
      fill: #5d3f92;
    }
  }
  svg path {
    fill: ${({ isActive }) => isActive && "#5d3f92"};
  }

  ${ElementText} {
    color: ${({ isActive }) => isActive && "#232428"};
  }

  &.active {
    box-shadow: 0px 0px 2px rgba(135, 61, 193, 0.25);
  }
`;

export const ASideWrap = styled.div`
  min-width: 30px;
  max-width: 30px;
  //max-width: 255px;
  //max-width: 255px;
  //box-sizing: content-box;
  //width: 255px;
  height: auto;
  background: rgb(251, 245, 255);
  box-shadow: inset 0 0 3px rgba(124, 124, 124, 0.5);
  margin-right: 15px;
  overflow: hidden;
  position: relative;
  transition: all ease-in-out 0.1s;
  &.active {
    min-width: 255px;
    ${HolderElement} {
      box-shadow: 0px 0px 2px rgba(135, 61, 193, 0.25);
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

interface IHolder {
  marginTop?: string;
}
export const Holder = styled.ul<IHolder>`
  width: 100%;
  margin-top: ${(props) => props.marginTop || "60px"};
  list-style: none;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(135, 61, 193, 0.25);
  //border-radius: 0px 10px 10px 0px;
  overflow: hidden;
`;

export const Arrow = styled.span`
  margin-top: 4px;
  margin-left: auto;
  border-top: 1px solid #5d3f92;
  border-left: 1px solid #5d3f92;
  transform: rotate(-45deg);
  width: 10px;
  height: 10px;
  transition: all ease-in-out 0.15s;
`;

export const AccordionArrow = styled(Arrow)`
  margin-top: -4px;
  border-top: 1px solid #7c7c7c;
  border-left: 1px solid #7c7c7c;
  transform: rotate(-135deg);
  &.active-status {
    margin-top: 4px;
    transform: rotate(45deg);
  }
  &.active-price {
    margin-top: 4px;
    transform: rotate(45deg);
  }
  &.price-menu-active {
    margin-top: 4px;
    transform: rotate(45deg);
  }
  &.active-category {
    margin-top: 4px;
    transform: rotate(45deg);
  }
  &.active-collection {
    margin-top: 4px;
    transform: rotate(45deg);
  }
  &.active-chains {
    margin-top: 4px;
    transform: rotate(45deg);
  }
  ${Arrow}
`;

interface IAccordionMenu {
  mh?: string;
  backgroundColor?: string;
}

export const AccordionMenu = styled.ul<IAccordionMenu>`
  list-style: none;
  width: 100%;
  transition: all ease-in-out 0.25s;
  overflow: hidden;
  max-height: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  &.active-status {
    max-height: ${(props) => props.mh || "146px"};
  }
  &.active-price {
    max-height: ${(props) => props.mh || "146px"};
  }
  &.active-category {
    max-height: ${({ mh }) => mh || "146px"};
  }
  &.active-collection {
    max-height: ${({ mh }) => mh || "146px"};
  }
  &.active-chains {
    max-height: ${({ mh }) => mh || "146px"};
  }
`;

interface IAccElement {
  padd?: string;
  direction?: string;
}

export const AccordionElement = styled.li<IAccElement>`
  position: relative;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || ""};
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.padd || "10px 20px 10px 36px"};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  background-color: #fcf8ff;
  border-top: 1px solid #dcd9de;
  margin-top: -1px;
`;

//Toggle switch

export const SliderRound = styled.span`
  position: absolute;
  cursor: pointer;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &:before {
    margin: 3px 0 0 3px;
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  // background-color: #ccc;
`;

export const Switch = styled.label`
  position: relative;
  width: 22px;
  height: 12px;
  background-color: #7c7c7c;
  border-radius: 10px;
`;

export const InputSwitch = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SliderRound}::before {
    -webkit-transform: translateX(4px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
    background: #873dc1;
  }
`;

export const PriceSelect = styled.ul`
  width: 218px;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  margin-top: 35px;
  transition: all ease-in-out 0.15s;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  &.price-menu-active {
    opacity: 1;
    visibility: visible;
  }
`;

export const PriceElement = styled.li`
  width: 218px;
  padding: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #232428;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  transition: all ease-in-out 0.15s;
  &.price-menu-active {
    border-radius: 10px 10px 0 0;
  }
`;
export const PriceVariations = styled(PriceElement)`
  transition: all ease-in-out 0.15s;
  border-radius: 0;
  justify-content: flex-start;
  padding: 10px 31px 10px 10px;
  &:hover {
    box-shadow: inset 0px 0px 1px rgba(135, 61, 193, 0.5),
      inset 0px -3px 4px rgba(124, 124, 124, 0.25);
  }
`;

export const ApplyBtn = styled.button`
  margin-top: 70px;
  padding: 10px 40px;
  border: 1px solid #873dc1;
  border-radius: 10px;
  background: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #873dc1;
  cursor: pointer;
`;

export const SearchInputWrapper = styled.div<{ maxWidth?: string }>`
  padding-left: 20px;
  display: flex;
  align-items: center;
  max-width: ${({ maxWidth }) => maxWidth || "410px"};
  width: 100%;
  height: 36px;
  background-color: #fff;
  box-shadow: inset 0px 0px 3px rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  border: none;
  @media (max-width: 1200px) {
    order: 1;
    flex: 0 0 100%;
    margin-bottom: 20px;
    max-width: 100%;
  }
`;

export const SearchInput = styled.input`
  font-size: 18px;
  line-height: 22px;
  color: #7c7c7c;
  border: transparent;
  background: transparent;
  padding-right: 0.5rem;
  outline: none;
  width: 100%;
`;

export const SearchInputIco = styled(SearchIco)`
  margin-right: 10px;
`;

export const CheckboxInputWrapper = styled.div<{ mb?: string }>`
  margin-bottom: ${({ mb }) => (mb ? mb : "12px")};
`;

export const CheckboxInputWrapperCentered = styled.div<{ mr?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ mr }) => (mr ? mr : 0)};
`;

export const CheckboxInput = styled.input<{ mr?: string }>`
  &.custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  &.custom-checkbox + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    position: relative;
  }
  &.custom-checkbox + label::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #5d3f92;
    border-radius: 0.25em;
    margin-right: ${({ mr }) => (mr ? mr : "0.5rem")};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    background-color: #ffffff;
  }
  &.custom-checkbox:checked + label::before {
    background-color: #ffffff;
  }
  &.custom-checkbox:checked + label::after {
    content: "";
    width: 6px;
    height: 8px;
    border-bottom: 1px solid #5d3f92;
    border-right: 1px solid #5d3f92;
    transform: skew(-10deg) rotate(45deg);
    position: absolute;
    top: 3px;
    left: 5px;
  }

  &.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
`;

export const CheckboxLabel = styled.label`
  display: -webkit-inline-flex;
  &:hover {
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
  }
`;

export const FilterCategoryItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin: 15px;
`;

export const FilterCategoryItemTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: start;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const CategoryItemTitleIcon = styled.img`
  margin-right: 10px;
`;

export const FilterCollectionItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 15px;
  max-width: 255px;
`;

export const FilterCollectionItemTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: start;
  margin-right: 25px;
`;

export const CollectionItemTitleIcon = styled.img`
  margin-right: 5px;
`;

export const CollectionItemTitleName = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CollectiomItemTitleVol = styled.span`
  color: #7c7c7c;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin-top: 5px;
`;

export const CollectionItemVerifyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
`;

export const CollectionItemVerify = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CollectionItemVerifyIcon = styled.img`
  margin-right: 5px;
`;

export const CollectionItemVerifyText = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  color: #873dc1;
`;

export const CollectionItemVerifyFloor = styled(CollectiomItemTitleVol)`
  margin-top: 10px;
`;

export const FilterChainItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin: 20px 15px;
`;

export const ChainItemTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
`;

export const ChainItemIcon = styled.img`
  margin-right: 10px;
`;
