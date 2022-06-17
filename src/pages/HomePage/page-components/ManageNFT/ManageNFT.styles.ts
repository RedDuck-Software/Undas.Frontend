import { Link } from "react-router-dom";
import styled from "styled-components";

export const ManageNFTContainer = styled.div`
  margin: 120px 0;
  @media (max-width: 992px) {
    margin: 60px 0;
  }
  @media (max-width: 768px) {
    margin: 40px 0;
  }
  @media (max-width: 576px) {
    margin: 20px 0;
  }
`;

export const ManageCardWrap = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  height: 400px;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    height: auto;
    gap: 30px;
    justify-content: center;
  }
`;

interface ICard {
  alignSelf?: string;
}

export const ManageCard = styled.li<ICard>`
  align-self: ${(props) => props.alignSelf || "self-start"};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(124, 124, 124, 0.25),
    inset 0px 0px 10px rgba(124, 124, 124, 0.25);
  border-radius: 20px;
  width: 255px;
  height: 300px;
  @media (max-width: 1200px) {
    flex: 0 0 35%;
    padding: 30px;
  }
  @media (max-width: 768px) {
    flex: 0 0 45%;
    height: 270px;
    padding: 20px 30px;
  }
  @media (max-width: 576px) {
    flex: 0 0 100%;
  }
  @media (min-width: 1700px) {
    width: 320px;
  }
`;

export const CardTitle = styled.span`
  margin: 30px 0 20px 0;
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  //line-height: 26px;
  color: #5d3f92;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
  @media (max-width: 576px) {
    margin: 20px 0 10px;
  }
`;

export const DescHolder = styled.ul`
  width: 100%;
  text-align: left;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DescList = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  &:before {
    content: "";
    display: inline-block;
    margin-right: 5px;
    transform: translateY(-2px);
    width: 5px;
    height: 5px;
    border: 1px solid #873dc1;
    border-radius: 50%;
  }
`;

export const StyledSpan = styled.span`
  text-align: right;
`;

interface IPurpleText {
  fs?: string;
}

export const PurpleText = styled(Link)<IPurpleText>`
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;
  font-size: ${(props) => props.fs || "12px"};
  text-align: right;
  color: #873dc1;
  margin-top: auto;
  &:hover {
    text-decoration: underline;
    color: #873dc1;
  }
`;
