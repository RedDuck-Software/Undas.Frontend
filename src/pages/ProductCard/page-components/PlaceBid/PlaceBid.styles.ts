import styled from 'styled-components';

import { Button } from '../../../../globalStyles';
import Rhombus from '../../../../icons/rhombus.svg';

export const PlaceBidWrapper = styled.div`
  position: relative;
`;

export const PlaceBidButton = styled(Button)`
  height: 100%;
  max-width: 247px;

  svg {
    padding-top: 4%;
    margin-left: 20%;

    @media (max-width: 1025px) {
      margin-left: 14%;
    }
  }

  ${Button}
`;

export const PlaceBidDropdown = styled.div`
  background: #ffffff;
  border: 1px solid #5d3f92;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  position: absolute;
  margin-top: 2%;

  display: flex;
  flex-direction: column;

  z-index: 99;
`;

export const DropdownLine = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.5rem;
  gap: 1rem;
`;

export const DropdownPrice = styled.span`
  &:after {
    content: url('${Rhombus}');
    position: relative;
    top: 2px;
  }
`;

export const DropdownInput = styled.input`
  max-width: 60px;

  background: #ffffff;
  border: 1px solid #5d3f92;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;

  text-align: center;
  font-size: 1rem;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: #000000;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const DropdownButton = styled(Button)`
  width: 100%;
  margin-top: 6%;

  padding: 0.4rem 4.6rem;

  ${({ disabled }) =>
    disabled
      ? `background: #D8D8D8;
          border: 1px solid #5D3F92;
          box-sizing: border-box;
          border-radius: 5px;
          cursor: auto; 
          
          &:hover {
            background: #D8D8D8;
          }
          `
      : ''}

  ${Button}
`;
