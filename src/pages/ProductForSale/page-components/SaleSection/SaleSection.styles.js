import styled from 'styled-components'

export const SaleSectionContainer = styled.div`
  width: 100%;
`

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 100%;
  gap: 5%;

  div {
    flex: 1;
  }

  @media (max-width: 679px) {
    button {
      display: flex;
      align-items: center;
      justify-content: center;

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
  }

  @media (max-width: 321px) {
    div {
      &:nth-child(3) {
        bottom: 15%;
      }
    }
  }
`
