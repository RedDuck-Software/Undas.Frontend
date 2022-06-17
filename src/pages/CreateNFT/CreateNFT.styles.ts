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
  margin-bottom: 0;
  @media (min-width: 1700px) {
    font-size: 18px;
    line-height: 24px;
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
  display: flex;
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
  @media (min-width: 1700px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const AddImgButton = styled.label`
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

export const AddFileBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const NFTItemLabel = styled.label`
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

export const NFTItemInput = styled.input.attrs({
  type: "file",
  accept: "image/*",
})`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: none;
`;

export const NFTItemPreview = styled.img`
  width: inherit;
  height: inherit;
  border: inherit;
  border-radius: inherit;
`;

export const CreateInput = styled.input`
  border: none;
  outline: none;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px 20px;
  color: #232428;
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  box-shadow: inset 0px 0px 5px rgba(124, 124, 124, 0.5);
  &::placeholder {
    color: #7c7c7c;
  }
  &:focus {
    box-shadow: inset 0px 0px 5px rgb(135, 61, 193);
  }
`;

export const CreateTextArea = styled.textarea`
  background: #ffffff;
  border: none;
  outline: none;
  border-radius: 10px;
  width: 100%;
  min-height: 80px;
  margin-top: 10px;
  padding: 10px;
  font-size: 14px;
  box-shadow: inset 0px 0px 5px rgba(124, 124, 124, 0.5);
  &::placeholder {
    color: #7c7c7c;
  }
  &:focus {
    box-shadow: inset 0px 0px 5px rgb(135, 61, 193);
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

export const ModalTitle = styled(CreateLabel)`
  align-items: center;
  & svg {
    margin-right: 10px;
  }
`;

export const ModalBlock = styled.div`
  max-width: 470px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const ModalBlockDescript = styled(BlockDescript)`
  margin: 0;
`;
export const SwitcherBlock = styled(ModalBlock)`
  max-width: 475px;
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
