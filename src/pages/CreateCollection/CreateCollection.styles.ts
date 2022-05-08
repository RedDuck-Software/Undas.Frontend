import styled from 'styled-components';

import { BlockDescript, CreateInput } from '../CreateNFT/CreateNFT.styles';

export const AddImgBlock = styled.div`
display: flex;
align-items: center;
`;
export const AddImgButton = styled.button`
    width: 80px;
    height: 80px;
    border: 1px dashed #7C7C7C;
    box-shadow: 0px 4px 4px rgba(124, 124, 124, 0.25);
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    margin-right: 10px;
    &:hover{
      background: linear-gradient(0deg, rgba(124, 124, 124, 0.25), rgba(124, 124, 124, 0.25)), #FFFFFF;
        cursor: pointer;
    }
`;

export const AddFeaturedButton = styled(AddImgButton)`
    width: 350px;
    height: 100px;
`;

export const AddBannerButton = styled(AddFeaturedButton)`
  width: 100%;
`;

export const AddBannerBlock = styled.div``;

export const InputList = styled.ul``;

export const InputItem = styled.input`
    display: block;
    border: 1px solid rgba(124, 124, 124, 0.5);
    outline: none;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px 20px;
    color: #232428;
    position: relative;
    width: 100%;
    font-size: 14px;
    &::placeholder{
        color: #7C7C7C;
    }
    &:focus{
        box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
    }
`;
export const CategoryGroup = styled.div`
  & .category-label{
    display: block;
  }
`;

export const CategoryDescript = styled(BlockDescript)`
  display: inline-block;
  margin-left: 20px;
`;

export const EarningsInput = styled(CreateInput)`
  max-width: 255px;
`;

export const nput = styled.input``;
