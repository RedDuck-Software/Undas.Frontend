import styled from "styled-components";
import { PageTitle } from "../../../../globalStyles";
import Form from 'react-bootstrap/Form';

export const NotificationWrap = styled.div `
    min-height: 855px;
`;
export const NotificationPageTitle = styled(PageTitle)`
  margin: 60px 0 10px;
`;
export const DescriptionText = styled.p `
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #7C7C7C;
    margin-bottom: 0;
    &.form-descript{
        padding-left: 3.5rem;
        margin-top: 5px;
    }
`;
export const ItemsForm = styled(Form) `
    margin-top: 60px;
`;
export const FormItemWrapper = styled.div `
    padding: 20px 30px;
    background: #FBF5FF;
    box-shadow: inset 0px 0px 1px #7C7C7C;
    & .form-check-input:checked {
        background-color: #873DC1;
        border-color: #873DC1;
    }
    & .form-check-input:focus {
        border-color: #873DC1;
        box-shadow: 0 0 0 0.25rem rgb(135 61 193 / 25%);
    }
    & .form-switch .form-check-input:focus {
        background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e");
    }
    & .form-switch .form-check-input:checked {
        background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e");
    }
    & label{
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #232428;
        margin-left: 15px;
    }
`;
export const Button = styled.button `
    background: #FFFFFF;
    border: 1px solid #873DC1;
    border-radius: 10px;
    color: #873DC1;
    padding: 7px 37px;
    margin-top: 40px;
    transition: all .3s;
    &:hover{
        color: #FFFFFF;
        background: #873DC1;
        border: 1px solid transparent;
    }
`;