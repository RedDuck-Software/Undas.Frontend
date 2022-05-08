import styled from "styled-components";

import { Card } from 'react-bootstrap';


export const CardWrap = styled.div `
  width: 100%;
  overflow: hidden;
  background: #EBDFFF;
  padding: 30px 65px;
  border-radius: 20px;
  & .g-5{
    --bs-gutter-x: 6rem;
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
    transition: all .3s;
    &:hover{
        box-shadow: 0 0 8px;
        color: inherit;
    }
`;