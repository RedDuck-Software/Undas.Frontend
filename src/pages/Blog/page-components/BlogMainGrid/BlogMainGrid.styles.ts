import styled from "styled-components";

export const Wrap = styled.div`
  display: grid;
  grid-auto-rows: 310px;
  gap: 30px;
  @media (max-width: 992px) {
    grid-auto-rows: 290px;
  }
  @media (max-width: 768px) {
    grid-auto-rows: 210px;
    gap: 15px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    display: flex;
  }
`;
