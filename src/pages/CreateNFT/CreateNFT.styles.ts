import styled from "styled-components";

import { Container, PageTitle, FormButton } from "../../globalStyles";

export const CreateSec = styled.div`
  padding: 30px 0 60px;
  @media (max-width: 992px) {
    padding: 20px 0;
  }
  @media (max-width: 576px) {
    padding: 0;
  }
`;

export const CreateContainer = styled(Container)`
  padding-bottom: 60px;
`;
export const CreateTitle = styled(PageTitle)`
  margin-bottom: 20px;
`;

export const CreateForm = styled.form`
  & .require-asterisk {
    color: #cc252f;
    margin-right: 5px;
    margin-left: 5px;
  }
`;
export const BlockDescript = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #7c7c7c;
  margin-bottom: 10px;
  &.required-fields {
    margin-bottom: -10px;
  }
`;

export const CreateFormGroup = styled.div`
  &.collection {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const CreateLabel = styled.label`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
  margin: 20px 0 10px;
  &.collection-label {
    flex: 0 0 100%;
  }
  @media (max-width: 768px) {
    &.category-label {
      order: 1;
    }
  }
  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 19px;
    margin: 10px 0 5px;
  }
`;
export const AddImgButton = styled.button`
  width: 350px;
  height: 250px;
  border: 1px dashed #7c7c7c;
  box-shadow: 0px 4px 4px rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 30px;
  transition: all 0.3s;
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(124, 124, 124, 0.25),
        rgba(124, 124, 124, 0.25)
      ),
      #ffffff;
    cursor: pointer;
  }
`;
export const CreateInput = styled.input`
  border: 1px solid rgba(124, 124, 124, 0.5);
  outline: none;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px 20px;
  color: #232428;
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  &::placeholder {
    color: #7c7c7c;
  }
  &:focus {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
`;
export const CreateTextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid rgba(124, 124, 124, 0.5);
  outline: none;
  border-radius: 10px;
  width: 100%;
  min-height: 80px;
  padding: 10px;
  font-size: 14px;
  &::placeholder {
    color: #7c7c7c;
  }
  &:focus {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
`;
export const CreateSelect = styled.select`
  border: 1px solid rgba(124, 124, 124, 0.5);
  outline: none;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px 20px;
  color: #7c7c7c;
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  max-width: 350px;
  &:focus {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
  &#collection {
    margin-right: 20px;
  }
`;

export const CreateDropdown = styled.div`
  width: 100%;
  max-width: 255px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CreateDropdownCurrent = styled.div`
  width: inherit;
  max-width: inherit;

  outline: none;
  border: 1px solid rgba(124, 124, 124, 0.5);
  border-radius: 10px;

  padding: 0.5rem 2rem;

  color: #232428;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  transition: all 0.1s ease-in;

  &:hover,
  &:focus-visible {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
  &:focus {
    font-weight: 900;
  }
`;

export const CreateDropdownList = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CreateDropdownItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled(CreateLabel)`
  & svg {
    margin: 0 10px 5px 0;
  }
`;

export const ModalBlock = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const ModalBlockDescript = styled(BlockDescript)`
  margin: 0;
`;
export const SwitcherBlock = styled(ModalBlock)`
  max-width: 350px;
  margin: 20px 0 0;
`;
export const SwitcherTitle = styled(ModalTitle)`
  margin: 0;
`;

export const CreateFormButton = styled(FormButton)`
  margin-left: 0;
  margin-right: 20px;
`;

export const ButtonsBlock = styled.div`
  margin-top: 40px;
`;

/* Add Properties=Levels=Stats */
export const WithPropertiesBlock = styled.div`
  max-width: 475px;
`;
