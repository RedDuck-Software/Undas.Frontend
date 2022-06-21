import styled from "styled-components";

export const AccountContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const StatisticsText = styled.span`
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #232428;
  margin-top: 60px;
  display: block;

  @media (max-width: 992px) {
    font-size: 32px;
    line-height: 36px;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
    font-size: 24px;
    line-height: 28px;
  }
  @media (max-width: 576px) {
    margin-top: 20px;
    font-size: 20px;
    line-height: 24px;
  }
`;
