import styled from 'styled-components';

import Rhombus from '../../../../icons/rhombus-purple.svg';

export const TableRow = styled.tr`
  border-top: 1px solid #5d3f92;
`;

export const TableHeadTitle = styled.th`
  padding: 3%;
  font-weight: 400;

  @media (max-width: 439px) {
    &:nth-child(1) {
      width: 20%;
    }
  }
`;

export const TableColumn = styled.td`
  font-size: 0.85rem;
  color: #7c7c7c;
  padding: 3%;
  background: rgba(251, 245, 255, 0.7) !important;

  &:nth-child(1) {
    border-radius: 10px;
  }

  &:nth-child(4) {
    color: #5d3f92;
    border-radius: 10px;
  }

  @media (max-width: 539px) {
    font-size: 0.75rem;
  }
`;

export const PriceNumber = styled.span`
  font-size: 1.15rem;
  color: #000000;

  &:before {
    content: url('${Rhombus}');
    position: relative;
    top: 3px;
    padding-right: 0.4rem;
  }

  @media (max-width: 539px) {
    font-size: 1rem;

    &:before {
      padding-right: 2%;
    }
  }
`;
