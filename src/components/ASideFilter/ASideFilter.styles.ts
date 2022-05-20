import styled from 'styled-components';

export const ElementText = styled.span`
  margin-left: 10px;
  color: #7c7c7c;
  transition: all ease-in-out 0.15s;
`;

export const HolderElement = styled.li`
  position: relative;
  z-index: 1;
  width: 255px;
  padding: 10px 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all ease-in-out 0.15s;
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
  background: rgba(251, 245, 255, 0.7);
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
`;

interface IHolder {
  marginTop?: string;
}
export const Holder = styled.ul<IHolder>`
  width: 100%;
  margin-top: ${(props) => props.marginTop || '60px'};
  list-style: none;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(135, 61, 193, 0.25);
  border-radius: 0px 10px 10px 0px;
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
  ${Arrow}
`;

interface IAccordionMenu {
  mh?: string;
}

export const AccordionMenu = styled.ul<IAccordionMenu>`
  list-style: none;
  width: 100%;
  transition: all ease-in-out 0.25s;
  overflow: hidden;
  max-height: 0;
  &.active-status {
    max-height: ${(props) => props.mh || '146px'};
  }
  &.active-price {
    max-height: ${(props) => props.mh || '146px'};
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
  flex-direction: ${(props) => props.direction || ''};
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.padd || '10px 20px 10px 36px'};
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
    content: '';
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
