import styled from "styled-components";

import { CreateInput } from "../CreateNFT/CreateNFT.styles";

export const ValidationBlock = styled("span")`
  display: block;
  color: rgb(135, 61, 193);
  font-weight: 700;
  font-size: 16px;
`;

export const ValidationText = styled("span")`
  color: rgb(135, 61, 193);
  font-weight: 700;
`;

export const AddImgBlock = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    &.featured {
      flex-direction: column-reverse;
    }
  }
`;

export const CollectionImageInput = styled.input.attrs({ type: "file", accept: "image/*" })`
  display: none;
`;

export const CollectionLogoLabel = styled.label`
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 1px dashed #7c7c7c;
  box-shadow: 0px 4px 4px rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  margin-right: 10px;
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

export const CollectionImagePreview = styled.img`
  width: inherit;
  height: inherit;
  border: inherit;
  border-radius: inherit;
`

export const CollectionFeaturedLabel = styled(CollectionLogoLabel)`
  width: 350px;
  height: 100px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const CollectionBannerLabel = styled(CollectionFeaturedLabel)`
  width: 100%;
`;

export const AddBannerBlock = styled.div``;

export const InputList = styled.ul``;

export const InputItem = styled.input`
  display: block;
  border: 1px solid rgba(124, 124, 124, 0.5);
  outline: none;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px 20px;
  color: #232428;
  position: relative;
  width: 100%;
  font-size: 14px;
  &::placeholder {
    color: #7c7c7c;
  }
  &:focus {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
`;
export const CategoryGroup = styled.div`
  & .category-label {
    display: block;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CategorySelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const CategoryDescript = styled.span`
  display: inline-block;
  margin-left: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #7c7c7c;
  @media (max-width: 768px) {
    margin-left: 0;
    order: 2;
  }
`;

export const EarningsInput = styled(CreateInput)`
  max-width: 255px;
`;
