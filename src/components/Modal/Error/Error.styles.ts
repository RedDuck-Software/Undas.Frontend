import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const Wrap = styled.div``;
export const StyledButton = styled.button`
  padding: 10px 25px;
  background: #873dc1;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  transition: all 0.3s linear;
  border: 1px solid #873dc1;
  vertical-align: middle;
  &:hover {
    color: #ffffff;
    box-shadow: 0 0 6px #000;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 25%);
    font-size: 16px;
  }
`;
export const StyledModal = styled(Modal)`
  backdrop-filter: blur(2px);
  & .modal-content {
    border-radius: 20px;
  }
`;
export const StyledHeader = styled(Modal.Header)`
  background: #ebdfff;
  border-radius: 20px 20px 0 0;
  & .btn-close:focus {
    outline: 0;
    box-shadow: none;
  }
  @media (max-width:576px) {
    & .modal-title {
        font-size: 18px;
    }
  }
`;
export const StyledBody = styled(Modal.Body)`
  background: #fbf5ff;
`;
export const StyledFooter = styled(Modal.Footer)`
  background: #fbf5ff;
  border-radius: 0 0 20px 20px;
`;
