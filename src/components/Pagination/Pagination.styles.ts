import styled from 'styled-components';

export const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
`;

export const PageItem = styled.li``;

export const PageLink = styled.a`
  font-size: 1rem;
  color: #5d3f92;
  cursor: pointer;
  margin: 0 1rem;
  text-decoration: none;

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

  @media (max-width: 539px) {
    font-size: 0.85rem;
    margin: 0 0.5rem;

    &:nth-child(2) {
      margin: auto 0.5rem;
    }
  }

  @media (max-width: 339px) {
    font-size: 0.8rem;
    margin: 0 0.4rem;

    &:nth-child(2) {
      margin: auto 0.4rem;
    }
  }
`;
