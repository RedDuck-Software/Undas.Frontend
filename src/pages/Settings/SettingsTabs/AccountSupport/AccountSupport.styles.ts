import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';

import {
  CheckboxInput,
  CheckboxLabel,
  FormButton,
} from '../Profile/ProfileSettings.styles';

export const AccountSupportWrap = styled.div``;

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
    background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e');
  }
  & .accordion-text-link {
    color: #873dc1;
    text-decoration: none;
  }
`;
export const MessageBlock = styled.div`
  width: 40%;
  padding: 15px 20px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  margin-top: 20px;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  display: block;
  padding-right: 20px;
`;
export const MessageText = styled.p`
  margin-bottom: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
`;
export const AccountSupportSelect = styled.select`
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.25);
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 20px 0;
  option {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const AccountSupportCheckboxInput = styled(CheckboxInput)`
  &.custom-checkbox + label {
    display: inline;
  }
  &.custom-checkbox:checked + label::after {
    top: 2px;
  }
`;
export const AccountSupportCheckboxLabel = styled(CheckboxLabel)``;
export const AccountSupportButton = styled(FormButton)`
  color: #ff2a36;
  border: 1px solid #ff2a36;
  margin: 20px 0;
  &:hover {
    color: #ff2a36;
    background-color: #fff;
    box-shadow: 0 0 5px;
    text-shadow: 0 0 1px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
