import styled from "styled-components";

interface MoreFromCollection {
  closed?: boolean;
}

export const MoreFromCollectionContainer = styled.div`
  margin: 0 auto;
  width: 80%;

  @media (max-width: 1024px) {
    width: 484px;
  }

  @media (max-width: 631px) {
    width: 100%;
  }
`;

export const MoreFromCollectionTop = styled.div<MoreFromCollection>`
  background: #ffffff;
  border: 1px solid #5d3f92;
  word-spacing: 4px;
  padding: 1rem 2rem 1rem 4.5rem;
  border-radius: ${({ closed }) => (closed ? `10px` : "10px 10px 0px 0px")};
  margin-top: 1.4rem;
  cursor: pointer;

  display: flex;

  svg {
    position: relative;
    top: 4px;
    margin-left: auto;
  }

  @media (max-width: 1024px) {
    padding: 3%;
  }

  @media (max-width: 531px) {
    font-size: 0.75rem;
  }
`;

export const MoreFromCollectionContent = styled.div`
  background: rgba(251, 245, 255, 0.7);
  border: 1px solid #5d3f92;
  border-radius: 0px 0px 10px 10px;
  border-top: none;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 3%;
  margin: 0 1.5rem;
  padding-top: 1.5rem;

  @media (max-width: 1024px) {
    div {
      &:nth-child(1) {
        margin: 0 auto;
        width: 284px;
        display: grid;
        grid-template-columns: 1fr;

        div {
          display: flex;
        }
      }

      display: none;
    }
  }

  @media (max-width: 631px) {
    div {
      &:nth-child(1) {
        width: 100%;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0 2rem;

  @media (max-width: 1024px) {
    padding: 10% 0 18%;
  }
`;
