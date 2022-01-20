import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardListWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;

  @media (max-width: 849px) {
    padding-left: 0;
  }
`;

export const CardListHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 849px) {
    justify-content: flex-end;
  }
`;

export const CardListResults = styled.span`
  flex-basis: 20%;
  font-size: 1rem;
  color: #7c7c7c;

  @media (max-width: 849px) {
    font-size: 0;
  }
`;

export const CardListFilters = styled.div`
  flex-basis: 55%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1239px) {
    flex-basis: 60%;
  }

  @media (max-width: 1139px) {
    flex-basis: 65%;
  }

  @media (max-width: 1056px) {
    flex-basis: 75%;
  }

  @media (max-width: 849px) {
    flex-basis: 100%;
    gap: 4%;
    justify-content: flex-end;
  }

  @media (max-width: 749px) {
    gap: 2%;
  }

  @media (max-width: 649px) {
    flex-basis: 45%;
    flex-direction: column;
  }

  @media (max-width: 504px) {
    flex-basis: 35%;
  }

  @media (max-width: 469px) {
    flex-basis: 45%;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;

  background: #ffffff;
  border: 1px solid #edd2ff;
  box-sizing: border-box;
  min-width: 166px;
  padding: 0.8rem 0 0.8rem 1rem;
  cursor: pointer;

  color: #7c7c7c;

  &:nth-child(1) {
    border-radius: 5px 5px 0px 0px;
  }

  &:last-child {
    border-radius: 0px 0px 10px 10px;
  }

  &:hover {
    box-shadow: inset rgba(0, 0, 0, 0.19) 0px 1px 2px,
      rgba(0, 0, 0, 0.23) 0px 3px 3px;
  }

  @media (max-width: 1059px) {
    padding: 0.5rem;
    min-width: 16vw;
  }

  @media (max-width: 958px) {
    padding: 0.5rem 0.25rem;
    font-size: 0.85rem;
    min-width: 14vw;
  }

  @media (max-width: 849px) {
    padding: 6% 2%;
    font-size: 1rem;
    min-width: 18vw;
  }

  @media (max-width: 749px) {
    font-size: 0.85rem;
  }

  @media (max-width: 649px) {
    padding: 6% 2%;
    font-size: 1rem;
    min-width: 30vw;
    display: block;
  }

  @media (max-width: 459px) {
    min-width: 40vw;
  }
`;

export const AllItemsMenu = styled.select`
  postion: relative;
`;

export const AllItemsOption = styled.option`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.6rem 1rem;
  min-width: 166px;
  outline: none;

  font-size: 1rem;
  color: #000000;

  @media (max-width: 1059px) {
    min-width: 16vw;
  }

  @media (max-width: 958px) {
    min-width: 14vw;
  }

  @media (max-width: 849px) {
    min-width: 18vw;
  }

  @media (max-width: 649px) {
    min-width: 30vw;
    margin-top: 4%;
  }

  @media (max-width: 469px) {
    margin-top: 10%;
  }

  @media (max-width: 459px) {
    min-width: 40vw;
  }
`;

export const SortByMenu = styled(AllItemsMenu)`
  ${AllItemsMenu}
`;

export const SortByOption = styled(AllItemsOption)`
  ${AllItemsOption}
`;

export const ToggleMarkupContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonView2x2 = styled.button`
  background: #ffffff;
  border: 1px solid #5d3f92;
  border-radius: 10px 0px 0px 10px;
  cursor: pointer;

  height: 40px;
  width: 40px;

  svg {
    height: 24px;
    width: 24px;
  }

  &:focus {
    background: #edd2ff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media (max-width: 649px) {
    margin-top: 4%;
  }

  @media (max-width: 469px) {
    margin-top: 10%;
  }
`;

export const ButtonView3x3 = styled(ButtonView2x2)`
  border-left: none;
  border-radius: 0px 10px 10px 0px;

  svg {
    height: 30px;
    width: 30px;
  }

  ${ButtonView2x2}
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 3%;

  margin: 2rem 0 10%;

  @media (max-width: 1059px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1% 3%;

    margin: 25vh 0 16%;
  }

  @media (max-width: 649px) {
    margin: 15vh 0 16%;
  }

  @media (max-width: 499px) {
    grid-template-columns: 1fr;
    grid-gap: 1% 3%;

    margin: 15vh 0 100%;
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: #7c7c7c;
  }
`;
