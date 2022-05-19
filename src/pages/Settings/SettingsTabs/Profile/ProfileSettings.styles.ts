import styled from "styled-components";

import { TwitterIco, SiteIco, DiscordIco, InstagramIco } from "./imports";

export const ProfileWrap = styled.form `
    padding: 30px 0 120px;
    @media (max-width: 1200px) {
        display: flex;
        flex-flow: column nowrap;
    }
    @media (max-width: 992px) {
        padding-bottom: 60px;
    }
`;
export const BannerWrap = styled.div `
    @media (max-width: 992px) {
        order: 2;
    }
`;
export const BannerTitleWrap = styled.div `
    display: flex;
    align-items: center;
`;

export const BlockDescript = styled.span `
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #7C7C7C;
    margin-left: 10px;
    margin-bottom: 10px;
`;

export const BlockTitle = styled.h2 `
    display: inline-flex;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #232428;
    margin-bottom: 10px;
`;
export const AddBannerImgButton = styled.div `
    width: 100%;
    height: 80px;
    border: 1px dashed #7C7C7C;
    box-shadow: 0px 4px 4px rgba(124, 124, 124, 0.25);
    border-radius: 10px;
    background-color: rgba(124, 124, 124, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 30px;
    transition: all .3s;
    &:hover{
        background-color: rgba(124, 124, 124, 0.5);
        cursor: pointer;
    }
`;
export const MiddleBlockWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 1200px) {
        flex-wrap: wrap;
    }
    @media (max-width: 992px) {
        order: 3;
    }
    
`;
export const ProfileImageWrap = styled.div`
    flex: 0 0 32%;
    margin-right: 30px;
    @media (max-width: 992px) {
        flex: 0 0 100%;
        margin-bottom: 20px;
    }
`;
export const ProfileImageInner = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const AddProfileImgButton = styled.div`
    width: 80px;
    height: 80px;
    box-shadow: 0px 4px 4px rgba(124, 124, 124, 0.25);
    background-color: rgba(124, 124, 124, 0.25);
    border-radius: 10px;
    border: 1px dashed #7C7C7C;
    transition: all .3s;
    &:hover{
        background-color: rgba(124, 124, 124, 0.5);
        cursor: pointer;
    }
`;
export const DescriptInner = styled.div`
    & span{
        display: block;
    }
`;
export const LinksWrap = styled.div`
    flex: 0 0 32%;
    margin-right: 30px;
    @media (max-width: 992px) {
        flex: 0 0 100%;
    }
`;
export const InputList = styled.ul`
`;
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
export const InformationWrap = styled.div`
    flex: 0 0 32%;
    margin-right: 30px;
    @media (max-width: 1200px) {
        margin-left: auto;
    }
    @media (max-width: 992px) {
        flex: 0 0 100%;
        margin: 10px 0;
    }
`;
export const InformationTextArea = styled.textarea`
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

export const RequiredFieldsWrap = styled.div`
    max-width: 350px;
    margin-top: -90px;
    &>span{
        margin-left: 0;
    }
    & .require-asterisk{
        color: #CC252F;
    }
    @media (max-width: 1200px) {
        margin-top: -220px;
    }
    @media (max-width: 992px) {
        margin-top: 0;
        max-width: 100%;
        order: 1;
    }
`;
export const RequiredField = styled.div`
    margin-bottom: 20px;
`;
export const CheckboxBlock = styled.form`
    max-width: 500px;
    @media (max-width: 992px) {
        order: 4;
    }
`;
export const CheckboxInput = styled.input`
    margin-right: 5px;
    
    &.custom-checkbox{
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    &.custom-checkbox+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    position: relative;
    }
    &.custom-checkbox+label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #5D3F92;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    background-color: #ffffff;
    }
    &.custom-checkbox:checked+label::before{
        background-color: #ffffff;
    }
    &.custom-checkbox:checked+label::after {
        content: '';
        width: 6px;
        height: 8px;
        border-bottom: 1px solid #5D3F92;
        border-right: 1px solid #5D3F92;
        transform: skew(-10deg) rotate(45deg);
        position: absolute;
        top: 6px;
        left: 5px; 
    }
    
    &.custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
        box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
    }
`;
export const CheckboxLabel = styled.label`
    width: 100%;
    &:hover{
        text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
        cursor: pointer;
    }
`;
export const BottomBlock = styled.div`
    margin-top: 20px;
    @media (max-width: 992px) {
        order: 5;
    }
`;
export const InputGroup = styled.form`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 992px) {
        flex-wrap: wrap;
    }
`;
export const AdressInput = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    border-radius: 10px;
    margin-right: 20px;
    &:focus-within{
        box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
    }
    & .adress-input{
        border-right: none;
        border-radius: 10px 0 0 10px;
        margin-bottom: 0;
        width: 380px;
        padding-right: 0;
        text-overflow: ellipsis;
        &:focus{
            box-shadow: none;
        }
    }
    @media (max-width: 992px) {
        flex: 0 0 100%;
        margin-bottom: 40px;
        & .adress-input{
            width: 100%;
        }
    }
`;
export const CopyButton = styled.button`
  width: 70px;
  border-left: none;
  border-top: 1px solid rgba(124, 124, 124, 0.5);
  border-bottom: 1px solid rgba(124, 124, 124, 0.5);
  border-right: 1px solid rgba(124, 124, 124, 0.5);
  border-radius: 0 10px 10px 0;
  background-color: #fff;
  outline: none;
`;

