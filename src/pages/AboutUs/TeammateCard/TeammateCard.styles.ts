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
    padding: 15px 30px;
    max-height: 500px;
    overflow: scroll;
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
  }
`;

export const ColTeamCard = styled(Col)`
  width: 20%;
  @media (max-width: 992px) {
    width: 33%;
  }
`;

export const TeamCardTitleSurname = styled(Card.Title)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #000000;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const CardImg = styled(Card.Img)`
  
  @media (max-width: 992px) {
    height: 140px;
    width: 140px;
    margin-left: auto;
    margin-right: auto;
  }
`;
