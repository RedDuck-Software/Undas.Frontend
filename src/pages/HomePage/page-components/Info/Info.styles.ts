// import { Link } from "react-router-dom";
import styled from "styled-components";

export const InfoBlock = styled.div`
  width: 100%;
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 1px 5px rgba(124, 124, 124, 0.25);
`;

export const InfoWrap = styled.ul`
  width: 100%;
  height: 100%;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0 3rem;
  gap: 30px;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media (max-width: 469px) {
    padding: 0 1rem;
  }
`;

/*for future, when it will be link, change div to (Link).attrs({ target: "_blank" })*/
export const InfoList = styled.div`
  max-width: 230px;
  display: flex;
  gap: 10px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    max-width: 100%;
    align-items: center;
    justify-content: center;
    flex: 0 0 45%;
  }
  @media (max-width: 576px) {
    flex: 0 0 100%;
    justify-content: flex-start;
  }
`;

export const InfoText = styled.span`
  font-family: "Jost";
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #232428;
`;
