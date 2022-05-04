import styled from 'styled-components';

import { Container, Button } from '../../globalStyles';

export const CreateSec = styled.div`
  padding: 60px 0;

  @media (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const CreateContainer = styled(Container)``;

export const CreateTitle = styled.h1``;

export const CreateForm = styled.form`
      & .require-asterisk{
        color: #CC252F;
        margin-right: 5px;
        margin-left: 5px;
    }
`;
export const BlockDescript = styled.p `
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #7C7C7C;
    margin-bottom: 10px;
`;

export const CreateFormGroup = styled.div``;

export const CreateLabel = styled.label`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
  margin-bottom: 10px;
`;
export const AddImgButton = styled.button `
    width: 350px;
    height: 250px;
    border: 1px dashed #7C7C7C;
    box-shadow: 0px 4px 4px rgba(124, 124, 124, 0.25);
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 30px;
    transition: all .3s;
    &:hover{
        background-color: rgba(124, 124, 124, 0.25);
        cursor: pointer;
    }
`;
export const CreateInput = styled.input`
    border: 1px solid rgba(124, 124, 124, 0.5);
    outline: none;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px 20px;
    color: #232428;
    width: 100%;
    font-size: 14px;
    line-height: 17px;
    &::placeholder{
        color: #7C7C7C;
    }
    &:focus{
        box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
    }
`;
export const CreateTextArea = styled.textarea`
    background: #FFFFFF;
    border: 1px solid rgba(124, 124, 124, 0.5);
    outline: none;
    border-radius: 10px;
    width: 100%;
    min-height: 80px;
    padding: 10px;
    font-size: 14px;
    &::placeholder{
        color: #7C7C7C;
    }
    &:focus{
        box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
    }
`;
export const CreateSelect = styled.select`
      border: 1px solid rgba(124, 124, 124, 0.5);
      outline: none;
      margin-bottom: 10px;
      border-radius: 10px;
      padding: 10px 20px;
      color: #232428;
      width: 100%;
      font-size: 14px;
      line-height: 17px;
      &::placeholder{
          color: #7C7C7C;
      }
      &:focus{
          box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
      }
`;
