import styled from "styled-components";

export const AccountContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const StatisticsText = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #232428;
  margin-left: 30px;
  margin-top: 45px;
  display: block;

  @media (max-width: 992px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    margin-top: 25px;
  }
  @media (max-width: 576px) {
    margin-top: 15px;
    font-size: 18px;
  }
`;
