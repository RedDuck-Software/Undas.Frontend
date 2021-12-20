import styled from 'styled-components'

export const StakingContainer = styled.div``

export const StakingTop = styled.div`
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

export const StakingContent = styled.div`
  border: 1px solid #5d3f92;
  border-radius: 0px 0px 10px 10px;
  border-top: none;
`

export const StakingTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const StakingTableHead = styled.thead`
  background: #ffffff;

  tr {
    text-align: left;
    color: #7c7c7c;
  }
`

export const TableRow = styled.tr`
  border-top: 1px solid #5d3f92;

  &:nth-child(3) {
    display: flex;
    justify-content: center;
    padding: 1rem 0 2rem;
    background: rgba(251, 245, 255, 0.7);
    border-radius: 0 0 10px 10px;
  }
`

export const TableHeadTitle = styled.th`
  padding: 0.6rem 1.5rem;
  font-weight: 400;

  &:nth-child(2) {
    text-align: right;
  }
`

export const TableInput = styled.input`
  width: 67px;
  height: 28px;
  background: #893ac2;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  outline: none;
  border: none;
  text-align: center;

  color: #fff;

  &::placeholder {
    color: #fff;
  }

  &:focus::placeholder {
    color: transparent;
  }
`

export const StakingTableBody = styled.tbody``

export const TableColumn = styled.td`
  color: #7c7c7c;
  padding: 0.5rem 1.5rem;
  background: rgba(251, 245, 255, 0.7) !important;

  &:nth-child(1) {
    border-radius: 10px;
  }

  &:nth-child(2) {
    text-align: right;
  }
`

export const TableSelectMenu = styled.select`
  outline: none;
  background: #893ac2;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 134px;
  height: 28px;

  color: #fff;
  padding: 0 0.5rem;
`

export const TableMenuOption = styled.option`
  &:hover {
    background-color: yellow;
  }
`

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0 2rem;
  border-top: 1px solid #5d3f92;
  background: rgba(251, 245, 255, 0.7);
  border-radius: 0 0 10px 10px;
`

export const CongratulationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem 0 2rem;
  border-top: 1px solid #5d3f92;
  background: rgba(251, 245, 255, 0.7);
  border-radius: 0 0 10px 10px;

  span {
    color: #000000;
    font-size: 1.125rem;
    padding-bottom: 1rem;
  }
`
