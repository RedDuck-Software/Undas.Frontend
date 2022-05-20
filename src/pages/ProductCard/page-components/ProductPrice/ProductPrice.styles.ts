import styled from "styled-components";

import Rhombus from "../../../../icons/rhombus.svg";

export const Price = styled.div`
  padding: 1rem 0;
  font-size: 1.5rem;

  @media (max-width: 531px) {
    font-size: 1rem;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 5px;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-right: 9px;
  }

  span {
    font-size: 1rem;
    color: #7c7c7c;
  }

  &:before {
    content: url("${Rhombus}");
    position: relative;
    top: 2px;
    margin-right: 5px;
  }

  @media (max-width: 531px) {
    h3 {
      font-size: 1rem;
    }

    span {
      font-size: 0.75rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 100%;
  gap: 2rem;

  @media (max-width: 1223px) {
    gap: 5%;

    button {
      padding: 3% 14%;
    }

    div {
      width: 100%;
    }
  }

  @media (max-width: 1133px) {
    button {
      padding: 3% 10%;
    }
  }

  @media (max-width: 389px) {
    flex-direction: column;
    align-items: center;

    button {
      width: 187px;
      height: 40px;
      margin-bottom: 5%;
    }

    div {
      &:nth-child(2) {
        width: auto;
      }
    }
  }

  @media (max-width: 321px) {
    div {
      &:nth-child(3) {
        bottom: 15%;
      }
    }
  }
`;
