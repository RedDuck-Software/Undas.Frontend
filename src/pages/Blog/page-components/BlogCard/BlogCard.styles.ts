import { Link } from "react-router-dom";
import styled from "styled-components";

export const Inner = styled.div`
  background-color: #5d3f92;
  border-radius: 10px 0 0 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.3s linear;
  opacity: 0;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  @media (max-width: 992px) {
    object-fit: fill;
  }
`;
export const CardWrap = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #5d3f92;
  height: 340px;
  flex: 0 0 31%;
  background-color: #fff;
  transition: all 0.3s linear;
  text-decoration: none;
  &:hover {
    box-shadow: rgb(135 61 193 / 50%) 0px 5px 10px;
    cursor: pointer;
  }
  &:hover ${Inner} {
    opacity: 0.3;
  }
  @media (max-width: 768px) {
    height: 300px;
    flex: 0 0 50%;
    &:last-child {
      display: none;
    }
  }
  @media (max-width: 576px) {
    height: 370px;
    flex: 0 0 100%;
    &:nth-child(2) {
      display: none;
    }
  }
  @media (max-width: 400px) {
    height: 50%;
  }
  @media (min-width: 1700px) {
    height: 420px;
  }
`;
export const BigCardWrap = styled(CardWrap)`
  flex-direction: row;
  grid-column-start: 1;
  grid-column-end: 4;
  max-height: 340px;
  width: 100%;
  @media (max-width: 992px) {
    max-height: 300px;
  }
  @media (max-width: 768px) {
    grid-column-end: 3;
    max-height: 200px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
export const ImageWrap = styled.div`
  border-radius: 10px 10px 0 0;
  position: relative;
`;
export const BigImageWrap = styled(ImageWrap)`
  width: 50%;
  border-radius: 10px 0 0 10px;
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 992px) {
    width: 80%;
  }
`;

export const BigImage = styled(Image)`
  border-radius: 10px 0 0 10px;
`;

export const CardBody = styled.div`
  padding: 20px;
  flex-grow: 1;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;
export const BigCardBody = styled(CardBody)`
  width: 50%;
  padding: 30px;
  gap: 20px;
`;

export const CardTitle = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #5d3f92;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
export const BigCardTitle = styled(CardTitle)`
  font-size: 24px;
  line-height: 29px;
  @media (max-width: 992px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
export const BigCardTextWrap = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const BigCardText = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 27px;
  color: #232428;
  @media (max-width: 992px) {
    font-size: 16px;
    line-height: 22px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const CardLink = styled.a`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #873dc1;
  margin-top: 2rem;
  text-align: right;
  text-decoration: none;
  &:hover {
    color: #873dc1;
    text-align: right;
    text-decoration: none;
    &:hover {
      color: #873dc1;
      text-decoration: underline;
    }
    @media (max-width: 576px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
`;
export const Date = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  text-transform: uppercase;
  @media (max-width: 1200px) {
  }
`;
