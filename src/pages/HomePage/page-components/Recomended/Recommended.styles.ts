import { Link } from "react-router-dom";
import styled from "styled-components";

export const RecommendedContainer = styled.div`
  margin-top: 80px;
  @media (max-width: 992px) {
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  @media (max-width: 576px) {
    margin-top: 20px;
    position: relative;
    padding-bottom: 50px;
  }
`;

export const Title = styled.h2`
  position: relative;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: #232428;
  margin-bottom: 0;
  &:before {
    content: "";
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle;
    width: 30px;
    height: 2px;
    background: #873dc1;
    border-radius: 10px;
  }
  @media (max-width: 992px) {
    font-size: 24px;
    line-height: 29px;
    &:before {
      width: 15px;
    }
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 17px;
  }
  @media (min-width: 1700px) {
    font-size: 44px;
    line-height: 50px;
  }
`;
export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const ViewAllBtn = styled(Link)`
  cursor: pointer;
  background: #fff;
  border: 1px solid #873dc1;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  padding: 10px 32px;
  color: #873dc1;
  transition: all ease-in-out 0.3s;
  text-decoration: none;
  text-align: center;
  &:hover {
    background: #873dc1;
    color: #fff;
  }
  @media (max-width: 576px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  @media (min-width: 1700px) {
    padding: 15px 100px;
    font-size: 18px;
  }
`;
export const MobileInner = styled.div`
  @media (max-width: 992px) {
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
  }
`;
export const CategoriesWrap = styled.ul`
  list-style: none;
  width: 100%;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    height: auto;
    padding: 20px 0;
  }
  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

interface ICategory {
  bg?: string;
  gridArea?: string;
}

export const Name = styled.span`
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #fff;
  transition: all ease-in-out 0.15s;
`;

export const Image = styled.img`
  position: absolute;
  object-fit: fill;
  object-position: center;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

export const CategoryWrap = styled(Link)<ICategory>`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  grid-area: ${(props) => props.gridArea};
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(35, 36, 40, 0.5), inset 0px 0px 4px #ffffff;
  transition: all ease-in-out 0.25s;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
    ${Name} {
      color: #873dc1;
      text-shadow: 1px 1px 3px #ffffff;
      font-weight: 500;
    }
  }
  @media (max-width: 992px) {
    height: 330px;
    width: 330px;
    box-shadow: none;
  }
  @media (max-width: 768px) {
    height: 240px;
    width: 240px;
  }
`;
