import styled from "styled-components";

import { CreateFormButton } from "../../CreateNFT.styles";

export const CreateModalWrap = styled.div``;

export const ModalButton = styled.button`
  width: 36px;
  height: 36px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  border-radius: 10px;
  border: none;
  outline: none;
  color: #5d3f92;
  font-size: 40px;
  line-height: 36px;
  transition: all 0.3s;
  &:hover {
    background: #fbf5ff;
    box-shadow: 0px 0px 10px rgba(135, 61, 193, 0.5);
  }
`;

export const TitleModal = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
`;

export const Descriprtion = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #7c7c7c;
`;

export const ModalInputGroup = styled.div`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 992px) {
    display: flex;
  }
  @media (max-width: 576px) {
    background: #ffffff;
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
    border-radius: 10px;
    padding: 15px 10px;
    flex-wrap: wrap;
    &.second-row {
      margin-top: 15px;
    }
  }
`;

export const ModalLabel = styled.label`
  border: 1px solid rgba(124, 124, 124, 0.5);
  border-right: none;
  border-radius: 10px 0 0 10px;
  padding: 10px 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  text-align: center;

  @media (max-width: 992px) {
    width: 10%;
  }
  @media (max-width: 768px) {
    padding: 10px 5px;
  }
  @media (max-width: 576px) {
    padding: 10px 0;
    text-align: left;
    border: none;
    width: 15%;
  }
`;

export const ModalInput = styled.input`
  border: 1px solid rgba(124, 124, 124, 0.5);
  outline: none;
  padding: 10px 20px;
  color: #232428;
  font-size: 14px;
  line-height: 17px;
  background-color: #fbf5ff;
  &::placeholder {
    color: #7c7c7c;
  }
  &:focus {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
  &[type="number"] {
    width: 12%;
  }

  @media (max-width: 992px) {
    width: 36%;
    &[type="number"] {
      width: 17%;
    }
  }
  @media (max-width: 576px) {
    border-radius: 5px;
    width: 85%;
    &[type="number"] {
      width: 35%;
    }
    &.margin-for-small {
      margin-top: 15px;
    }
  }
`;
export const InputButton = styled.button`
  padding: 23px 20px 14px 40px;
  border: 1px solid rgba(124, 124, 124, 0.5);
  display: inline;
  background-color: #ffffff;
  border-left: none;
  outline: none;
  border-radius: 0 10px 10px 0;
  position: relative;
  &::before,
  &::after {
    content: "";
    width: 16px;
    height: 2px;
    background: #7c7c7c;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }

  @media (max-width: 992px) {
    width: 8%;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
export const ModalLabelStraight = styled(ModalLabel)`
  border-radius: 0;
  border-left: 0;
  text-align: center;

  @media (max-width: 992px) {
    width: 10%;
  }
  @media (max-width: 768px) {
    padding: 10px 5px;
  }
  @media (max-width: 576px) {
    text-align: left;
    padding: 10px 0;
    width: 15%;
    &.margin-for-small {
      margin-top: 15px;
    }
    &.margin-for-of {
      margin-top: 15px;
      text-align: center;
    }
  }
`;
export const CreateModalFormButton = styled(CreateFormButton)`
  &.colored-btn {
    margin-right: 0;
    color: #ffffff;
    background: #873dc1;
    }
  }
  @media (max-width: 992px) {
    flex: 0 0 48%;
    margin-right: 4%;
    &.colored-btn {
      margin-right: unset;
    }
  }
  @media (max-width: 576px) {
    margin: 0;
    flex: 0 0 100%;
    &.colored-btn {
      margin-top: 15px;
      margin-bottom: 30px;
    }
  }
`;
