import styled from 'styled-components';

export const SwitcherWrap = styled.div`
  & .form-check-input:checked {
    background-color: #873dc1;
    border-color: #873dc1;
  }
  & .form-check-input:focus {
    border-color: #873dc1;
    box-shadow: 0 0 0 0.25rem rgb(135 61 193 / 25%);
  }
  & .form-switch .form-check-input:focus {
    background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e');
  }
  & .form-switch .form-check-input:checked {
    background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e');
  }
`;
