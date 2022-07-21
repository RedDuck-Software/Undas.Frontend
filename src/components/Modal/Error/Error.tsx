import React from "react";
import { Modal } from "react-bootstrap";

import {
  Wrap,
  StyledButton,
  StyledModal,
  StyledHeader,
  StyledBody,
  StyledFooter,
} from "./Error.styles";

import { TransactionError } from "../../../types/global";

interface ErrorModalProps {
  show: boolean;
  setShow: any;
  error: TransactionError;
}

const Error: React.FC<ErrorModalProps> = ({ show, setShow, error }) => {
  const handleClose = () => {
    setShow(false);
  };
  //const handleShow = () => setShow(true);

  return (
    <Wrap>
      {/* <StyledButton onClick={handleShow}>Launch modal</StyledButton> */}
      <StyledModal show={show} onHide={handleClose}>
        <StyledHeader closeButton>
          <Modal.Title>
            Something went wrong. Code Error: {error.code}
          </Modal.Title>
        </StyledHeader>
        <StyledBody>{error.message}</StyledBody>
        <StyledFooter>
          <StyledButton onClick={handleClose}>OK</StyledButton>
        </StyledFooter>
      </StyledModal>
    </Wrap>
  );
};

export default Error;
