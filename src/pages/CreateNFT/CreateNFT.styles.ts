import styled from "styled-components";

import { bsc } from "./imports";

import { Container, PageTitle, FormButton } from "../../globalStyles";
import { PolygonIcon } from "../AllNFTs/imports";

export const CreateSec = styled.div`
  padding: 60px 0 120px;
  @media (max-width: 992px) {
    padding: 60px 0 80px;
  }
  @media (max-width: 768px) {
    padding: 40px 0 60px;
  }
  @media (max-width: 576px) {
    padding: 20px 0 40px;
  }
`;

export const CreateContainer = styled(Container)``;
export const CreateTitle = styled(PageTitle)``;

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
  &.collection-descript {
    margin-left: 20px;
  }
  &.blockchain-descript {
    margin-bottom: 10px;
  }
  @media (min-width: 1700px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    &.collection-descript {
      margin-left: unset;
      margin-top: 10px;
      width: 100%;
    }
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

export const Filter = styled.ul`
  position: relative;
  cursor: pointer;
  background-color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  transition: all 0.1s ease-in;
  flex-direction: row;
  border: none;
  outline: none;
  box-shadow: inset 0px 0px 5px rgb(124 124 124 / 50%);
  border-radius: 10px 10px 10px 10px;
  width: 100%;
  margin-top: 10px;
  max-width: 350px;
  &.sort-active {
    border-radius: 10px 10px 0 0;
  }
  &:hover {
    box-shadow: inset 0px 0px 5px rgb(135 61 193);
  }
  @media (max-width: 576px) {
    width: 100%;
    max-width: unset;
  }
`;

export const FilterItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ease-in-out 0.3s;
  padding: 7px 20px;
  border-radius: 10px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const FilterTitle = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
  margin-top: 4px;
}
`;

export const FilterTitlePolygon = styled.span`
  font-size: 18px;
  line-height: 22px;
  color: rgb(124, 124, 124);
  margin-top: 4px;

  &:before {
    content: url("${PolygonIcon}");
    position: relative;
    vertical-align: middle;
    margin-right: 10px;
    width:24px;
    height: 24px;
  }
}
`;

export const FilterTitleBSC = styled.span`
  font-size: 18px;
  line-height: 22px;
  color: rgb(124, 124, 124);
  margin-top: 4px;

  &:before {
    content: url("${bsc}");
    position: relative;
    vertical-align: middle;
    margin-right: 10px;
    width:24px;
    height: 24px;
  }
}
`;

export const Arrow = styled.span`
  margin-top: -4px;
  border-top: 1px solid #5d3f92;
  border-left: 1px solid #5d3f92;
  transform: rotate(225deg);
  width: 10px;
  height: 10px;
  transition: all ease-in-out 0.15s;
  &.sort-active {
    margin-top: 4px;
    transform: rotate(45deg);
  }
`;

export const FilterMenu = styled.ul`
  position: absolute;
  z-index: 2;
  width: 100%;
  left: 0;
  background: #ffffff;
  box-shadow: inset 0 0 1px rgba(135, 61, 193, 0.5);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out 0.15s;
  &.sort-active {
    visibility: visible;
    opacity: 1;
  }
`;

interface IMenuItem {
  hover?: boolean;
}

export const MenuItem = styled(FilterItem)<IMenuItem>`
  &:hover {
    ${(props) =>
      props.hover ? "box-shadow: inset 0px 0px 5px rgb(135 61 193);" : ""}
  }
`;

export const BlockchainIMG = styled.img`
    width:24px;
    height: 24px;
    margin-right: 10px;
    margin-top: -6px;
}
`;
