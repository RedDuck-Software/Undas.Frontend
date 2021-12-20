import styled from 'styled-components'

export const PagginationList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const ListItem = styled.li`
  font-size: 1rem;
  color: #5d3f92;
  cursor: pointer;
  margin: 0 1rem;

  &::after {
    content: ',';
  }

  &:nth-child(2) {
    margin: auto 1rem;
  }

  &.active {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #ffffff;
    border: 1px solid #edd2ff;
    border-radius: 5px;
    width: 2.5rem;
    height: 2.5rem;

    position: relative;
    bottom: 0.5rem;

    &::after {
      content: '';
    }
  }
`
