import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import {
  Wrap,
  StyledButton,
  StyledModal,
  StyledHeader,
  StyledBody,
  StyledFooter,
} from "./Error.styles";

const Error: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Wrap>
      <StyledButton onClick={handleShow}>Launch modal</StyledButton>
      <StyledModal show={show} onHide={handleClose}>
        <StyledHeader closeButton>
          <Modal.Title>Oops...Something went wrong</Modal.Title>
        </StyledHeader>
        <StyledBody>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          doloribus rem iste minima, cum reprehenderit dicta.
        </StyledBody>
        <StyledFooter>
          <StyledButton onClick={handleClose}>OK</StyledButton>
        </StyledFooter>
      </StyledModal>
    </Wrap>
  );
};

export default Error;
