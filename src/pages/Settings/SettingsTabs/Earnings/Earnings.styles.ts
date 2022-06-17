import styled from "styled-components";

export const EarningsWrap = styled.div`
  padding-top: 30px;
`;

export const EarningsContentWrap = styled.div`
  padding: 20px 30px 40px;
  background: #fbf5ff;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  border-radius: 5px;
  margin: 40px auto 0;
  @media (max-width: 576px) {
    margin: 10px auto;
    padding: 20px 30px;
  }
`;

export const EarningsContentText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  & a {
    color: #873dc1;
    text-decoration: none;
  }
  @media (min-width: 1600px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const EarningsContentMessage = styled.p`
  text-align: center;
  padding: 15px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  background: #ffffff;
  border: 1px solid rgba(135, 61, 193, 0.25);
  box-sizing: border-box;
  border-radius: 10px;
  @media (min-width: 1600px) {
    font-size: 20px;
    line-height: 26px;
  }
`;
