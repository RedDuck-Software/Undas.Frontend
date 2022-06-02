import Form from "react-bootstrap/Form";
import styled from "styled-components";

export const NotificationWrap = styled.div`
  padding-top: 30px;
`;

export const ItemsForm = styled(Form)`
  margin-top: 40px;
`;
export const FormItemWrapper = styled.div`
  padding: 20px 30px;
  background: #fbf5ff;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  & .form-check-input:checked {
    background-color: #873dc1;
    border-color: #873dc1;
  }
  & .form-check-input:focus {
    border-color: #873dc1;
    box-shadow: 0 0 0 0.25rem rgb(135 61 193 / 25%);
  }
  & .form-switch .form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e");
  }
  & .form-switch .form-check-input:checked {
    background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e");
  }
  & label {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #232428;
    margin-left: 15px;
  }
`;

