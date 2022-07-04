import styled from "styled-components";

export const NoDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 6rem;
  padding-bottom: 2rem;
  @media (max-width: 576px) {
    padding: 0;
  }
`;

export const NoDataText = styled.p`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
`;
