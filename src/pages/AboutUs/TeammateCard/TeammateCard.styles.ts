import { Card, Col } from "react-bootstrap";
import styled from "styled-components";

export const CardWrap = styled.div`
  width: 100%;
  overflow: hidden;
  background: #ebdfff;
  padding: 30px 65px;
  border-radius: 20px;
  & .g-5 {
    --bs-gutter-x: 6rem;
  }

  @media (max-width: 992px) {
    padding: 5px 30px;
    max-height: 500px;
    overflow-y: scroll;
    padding: 10px 0;
  }
  @media (max-width: 576px) {
    max-height: 210px;
    padding: 15px 0;
  }
`;

export const TeamCard = styled(Card)`
  background: transparent;
  border: none;
  text-align: center;
`;

export const TeamCardTitle = styled(Card.Title)`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 0.25rem;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const TeamCardLink = styled.a`
  display: inline-flex;
  margin: 0.5rem;
  color: inherit;
  border-radius: 5px;
  transition: all 0.3s;
  height: 24px;
  &:hover {
    box-shadow: 0 0 8px;
    color: inherit;
  }
  @media (max-width: 992px) {
    height: 36px;
    margin: 0 0.5rem;
  }
`;

export const ColTeamCard = styled(Col)`
  width: 20%;
  @media (max-width: 992px) {
    width: 33%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const TeamCardTitleSurname = styled(Card.Title)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #000000;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const CardImg = styled(Card.Img)`
  @media (max-width: 992px) {
    height: 140px;
    width: 140px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 576px) {
    height: 90px;
    width: 90px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardBody = styled(Card.Body)`
  @media (max-width: 992px) {
    padding: 5px 0;
  }
`;
