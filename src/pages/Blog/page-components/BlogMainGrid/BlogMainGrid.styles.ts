import styled from "styled-components";

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 340px;
  gap: 30px;
  @media (max-width: 768px) {
    grid-auto-rows: 300px;
    gap: 15px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    gap: 10px;
    display: none;
  }
  @media (min-width: 1600px) {
    grid-auto-rows: 420px;
  }
`;
