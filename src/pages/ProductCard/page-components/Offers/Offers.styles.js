import styled from 'styled-components'

import Rhombus from '../../../../icons/rhombus-purple.svg'

export const OffersContainer = styled.div``

export const OffersTop = styled.div`
  background: #ffffff;
  border: 1px solid #5d3f92;
  ${(props) => (props.closed ? `` : 'border-bottom: none')};
  word-spacing: 4px;
  padding: 1rem 2rem 1rem 4.5rem;
  border-radius: ${(props) => (props.closed ? `10px` : '10px 10px 0px 0px')};
  margin-top: 1.4rem;
  cursor pointer;

  display: flex;

  svg {
    position: relative;
    top: 4px;
    margin-left: auto;
  }
`

export const OffersContent = styled.div`
  border: 1px solid #5d3f92;
  border-radius: 0px 0px 10px 10px;
  border-top: none;
`

export const OffersTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const OffersTableHead = styled.thead`
  background: #ffffff;

  tr {
    text-align: left;
    color: #7c7c7c;
  }
`

export const TableRow = styled.tr`
  border-top: 1px solid #5d3f92;
`

export const TableHeadTitle = styled.th`
  padding: 0.8rem 1.5rem;
  font-weight: 400;
`

export const OffersTableBody = styled.tbody``

export const TableColumn = styled.td`
  font-size: 0.85rem;
  color: #7c7c7c;
  padding: 1rem 1.5rem;
  background: rgba(251, 245, 255, 0.7) !important;

  &:nth-child(1) {
    border-radius: 10px;
  }

  &:nth-child(5) {
    width: 22.8%;
    color: #5d3f92;
    border-radius: 10px;
  }
`

export const PriceNumber = styled.span`
  font-size: 1.15rem;
  color: #000000;

  &:before {
    content: url('${Rhombus}');
    position: relative;
    top: 3px;
    padding-right: 0.4rem;
  }
`
