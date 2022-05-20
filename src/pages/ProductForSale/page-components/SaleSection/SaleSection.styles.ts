import styled from "styled-components";

export const SaleSectionContainer = styled.div`
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 100%;

  div {
    flex: 1;

    &:nth-child(1) {
      margin-right: 4%;
    }
  }

  @media (max-width: 679px) {
    button {
      height: 40px;
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
      &:nth-child(1) {
        margin-right: 0;
      }

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
