import styled from "styled-components";

import CheckMark from "../../icons/check-mark.svg";

export const CardImage = styled.img`
  width: 100%;
  max-height: 24rem;
  object-fit: cover;
  border-radius: 10px;
`;

export const CardContainer = styled.div`
  width: 32%;
  cursor: pointer;
  position: relative;
  margin-bottom: 2%;

  &:hover ${CardImage} {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 6px 9px, rgba(0, 0, 0, 0.23) 0px 6px 9px;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
  }

  @media (max-width: 1301px) {
    width: 100%;
    max-width: 48.5%;
    margin-bottom: 3%;
  }

  @media (max-width: 908px) {
    width: 100%;
    max-width: 90vw;
    margin-bottom: 2rem;
  }
`;

export const CardContent = styled.div`
  background: rgba(0, 0, 0, 0.9);
  padding: 2rem 1rem;
  border-radius: 0px 0px 10px 10px;

  position: absolute;
  top: 48%;

  @media (max-width: 1301px) {
    padding: 2.5rem 1rem;
  }

  @media (max-width: 1070px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 920px) {
    padding: 1.5rem 1rem;
    top: 48%;
  }

  @media (max-width: 908px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 742px) {
    padding: 2.5rem 1rem;
  }

  @media (max-width: 605px) {
    width: 100%;
    height: 51%;
    padding: 2rem 1rem;
  }

  @media (max-width: 513px) {
    padding: 2rem 1rem;
  }
`;

export const CardImageIcon = styled.img`
  position: absolute;
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  top: -12%;
  left: 43%;

  @media (max-width: 1301px) {
    left: 46%;
  }

  @media (max-width: 908px) {
    left: 46%;
  }

  @media (max-width: 605px) {
    left: 45%;
  }

  @media (max-width: 469px) {
    left: 44%;
  }
`;

export const CardCollectionName = styled.h4`
  font-weight: 400;
  color: #c4c4c4;
  padding-bottom: 0.25rem;

  &:after {
    content: url("${CheckMark}");
    position: relative;
    left: 10px;
    top: -2px;
  }
`;

export const CardCollectionCreator = styled.span`
  color: #ffffff;
  font-size: 0.875rem;
`;

export const CardDescription = styled.p`
  font-size: 0.8rem;
  margin-top: 0.75rem;
  color: #edd2ff;

  @media (max-width: 1301px) {
    padding: 0 2rem;
  }

  @media (max-width: 908px) {
    padding: 0 10%;
  }

  @media (max-width: 513px) {
    padding: 0 5%;
  }

  @media (max-width: 409px) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;

export const PurpleText = styled.span`
  color: #edd2ff;
`;
