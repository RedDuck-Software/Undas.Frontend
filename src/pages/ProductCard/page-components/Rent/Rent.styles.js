import styled from 'styled-components'

export const RentContainer = styled.div``

export const RentTop = styled.div`
  ${(props) => (props.grey ? `background: #F4F4F4;` : 'background: #ffffff;')};
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

export const RentContent = styled.div`
  border: 1px solid #5d3f92;
  border-radius: 0px 0px 10px 10px;
  ${(props) =>
    props.grey
      ? `padding: 1rem 6rem; background: #F4F4F4;`
      : 'border-top: none;'}
`

export const RentTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const RentTableHead = styled.thead`
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
  padding: 0.6rem 1.5rem;
  font-weight: 400;
`

export const RentTableBody = styled.tbody`
  width: 100%;
`

export const TableColumn = styled.td`
  color: #7c7c7c;
  padding: 0.8rem 1.5rem;
  background: rgba(251, 245, 255, 0.7) !important;

  &:nth-child(1) {
    border-radius: 10px;
  }

  &:nth-child(2) {
    width: 20%;
  }
`

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0 2rem;
  border-top: 1px solid #5d3f92;
  background: rgba(251, 245, 255, 0.7);
  border-radius: 0 0 10px 10px;
  gap: 2rem;

  button {
    min-width: 228px;
  }
`
