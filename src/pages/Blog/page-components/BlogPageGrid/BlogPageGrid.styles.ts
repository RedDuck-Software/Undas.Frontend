import styled from "styled-components";

export const PageGridWrap = styled.div`
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding-bottom: 10px;
  margin-top: 60px;
  @media (max-width: 992px) {
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
