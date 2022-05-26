import { Nav } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";

export const FaqTabsWrapper = styled.div`
  min-height: 550px;
`;
export const TabButton = styled(Nav.Link)`
  background: #ffffff !important;
  box-shadow: 3px 3px 5px rgba(124, 124, 124, 0.25),
    inset 0px 0px 5px rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  color: #5d3f92;
  margin-bottom: 20px;
  padding: 20px;
  transition: all 0.3s linear;
  &:hover {
    color: #232428 !important;
    box-shadow: 3px 5px 5px rgba(124, 124, 124, 0.75);
    text-shadow: 0 0 1px rgba(135, 61, 193, 0.5);
  }
  &.active {
    color: #5d3f92 !important;
    background: #fbf5ff !important;
    box-shadow: 3px 5px 5px rgba(135, 61, 193, 0.5);
    text-shadow: 0 0 1px rgba(135, 61, 193, 0.5);
  }
`;
export const TabText = styled.div``;
export const ContentTitle = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
  margin-bottom: 30px;
  max-width: 300px;
`;
export const ContentText = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  & .content-text-link {
    color: #5d3f92;
    text-decoration: none;
  }
  & span {
    color: #7c7c7c;
  }
`;

export const UndasLink = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #873dc1;
  text-decoration-line: none;
`;

export const AddToWatchlistLink = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #873dc1;
`;








export const AccordionWrap = styled.div`
  margin: 40px auto;
  @media (max-width: 768px) {
    & .accordion-header .accordion-button {
      font-size: 16px;
    }
    .accordion-body {
      padding: 0 1.25rem 1rem;
    }
  }
`;

export const AccordionItem = styled(Accordion.Item)`
  background-color: #fbf5ff;
  & .accordion-button {
    color: #232428;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    background-color: #fbf5ff;
  }
  & .accordion-button:not(.collapsed) {
    box-shadow: none;
  }
  & .accordion-button:focus {
    border: none;
    box-shadow: none;
  }
  & .accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e");
  }
  & .accordion-text-link {
    color: #873dc1;
    text-decoration: none;
  }
`;

export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  margin-bottom: 0;
  &.form-descript {
    padding-left: 3.5rem;
    margin-top: 5px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 14px;
  }
`;