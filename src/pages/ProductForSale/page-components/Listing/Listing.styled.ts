import styled from 'styled-components';

import Rhombus from '../../../../icons/rhombus.svg';

interface Listing {
  closed?: boolean;
}

export const ListingContainer = styled.div``;

export const ListingsTop = styled.div<Listing>`
  background: #ffffff;
  border: 1px solid #5d3f92;
  ${({ closed }) => (closed ? `` : 'border-bottom: none')};
  word-spacing: 4px;
  padding: 3%;
  border-radius: ${({ closed }) => (closed ? `10px` : '10px 10px 0px 0px')};
  margin-top: 1.4rem;
  cursor: pointer;

  display: flex;

  svg {
    position: relative;
    top: 4px;
    margin-left: auto;
  }
`;

export const ListingContent = styled.div`
  border: 1px solid #5d3f92;
  border-radius: 0px 0px 10px 10px;
  border-top: none;
`;

export const ListingTable = styled.table`
  background-color: #fff;
  border-collapse: collapse;
  width: 100%;
  border-radius: 0px 0px 10px 10px;
`;

export const ListingTableHead = styled.thead`
  background: #ffffff;

  tr {
    text-align: left;
    color: #7c7c7c;
  }
`;

export const TableRow = styled.tr`
  border-top: 1px solid #5d3f92;
`;

export const TableHeadTitle = styled.th`
  padding: 3%;
  font-weight: 400;
`;

export const ListingTableBody = styled.tbody``;

export const TableColumn = styled.td`
  font-size: 0.85rem;
  color: #7c7c7c;
  padding: 3%;
  background: rgba(251, 245, 255, 0.7) !important;

  &:nth-child(1) {
    border-radius: 10px;
  }

  &:nth-child(3) {
    color: #5d3f92;
    width: 23%;
  }

  &:nth-child(4) {
    text-align: right;
    border-radius: 10px;
    width: 23.8%;

    @media (max-width: 559px) {
      width: 20%;
    }
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

export const BuyButton = styled.button`
  padding: 6% 12%;

  margin: -0.5rem 0;
  background: #ffffff;
  font-size: 1rem;
  border: 1px solid #893ac2;
  box-shadow: inset 0px 4px 4px rgba(93, 63, 146, 0.31);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f5f5f5;
  }
`;
