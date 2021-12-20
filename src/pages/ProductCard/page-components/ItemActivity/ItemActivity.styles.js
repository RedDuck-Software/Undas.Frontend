import styled from 'styled-components'

import Rhombus from '../../../../icons/rhombus.svg'

export const ItemActivityContainer = styled.div`
  width: 100%;
  padding: 1.4rem 6rem 0;
`

export const ItemActivityTop = styled.div`
  background: #ffffff;
  border: 1px solid #5d3f92;
  ${(props) => (props.closed ? `` : '')};
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

export const ItemActivityContent = styled.div`
  background: rgba(251, 245, 255, 0.7);
  border: 1px solid #5d3f92;
  border-radius: 0px 0px 10px 10px;
  border-top: none;
`

export const ItemActivityFilter = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding: 1.5rem 0;
`

export const FilterDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
  min-height: 2.5rem;
  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 5px;
  color: #7c7c7c;

  svg {
    color: #000000;
  }
`

export const FilterPropertiesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 0;
`

export const FilterPropertie = styled.div`
  background: #ffffff;
  border: 1px solid #893ac2;
  box-shadow: inset 0px 4px 4px rgba(93, 63, 146, 0.31);
  border-radius: 5px;
  padding: 0.75rem 1rem;
  cursor: pointer;

  svg {
    position: relative;
    margin-left: 1rem;
    top: 3px;
  }
`

export const ClearAll = styled.span`
  color: #5d3f92;
  cursor: pointer;
`

export const ItemActivityTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const ItemActivityTableHead = styled.thead`
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
  padding: 0.8rem 1rem;
  font-weight: 400;
`

export const ItemActivityTableBody = styled.tbody``

export const TableColumn = styled.td`
  font-size: 1rem;
  padding: 1rem 1rem;
  background: rgba(251, 245, 255, 0.7) !important;
  color: #5d3f92;

  &:nth-child(1) {
    color: #000000;
    border-radius: 10px;
  }

  &:nth-child(5) {
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
