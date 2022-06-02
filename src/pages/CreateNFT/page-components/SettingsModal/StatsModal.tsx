import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import {
  CreateModalWrap,
  ModalButton,
  TitleModal,
  Descriprtion,
  ModalInputGroup,
  ModalLabel,
  ModalInput,
  InputButton,
  ModalLabelStraight,
  CreateModalFormButton,
  ModalInputGroupSmall,
  TextType,
  ModalInputSmall,
  NumberInputGroup,
} from "./CreateModal.styles";

import "./styles.css";

const StatsModal: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <CreateModalWrap>
      <ModalButton onClick={handleShow}>+</ModalButton>

      <Modal className="modal-wrap" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <TitleModal>Add Stats</TitleModal>
        </Modal.Header>
        <Modal.Body>
          <Descriprtion>
            Stats show up underneath your item, are clickable, and can be
            filtered in your collection&#39;s sidebar
          </Descriprtion>
          <ModalInputGroup>
            <ModalLabel htmlFor="name">Name</ModalLabel>
            <ModalInput type="text" id="name" placeholder="strength" />
            <ModalLabelStraight htmlFor="value">Value</ModalLabelStraight>
            <ModalInput type="number" id="value" placeholder="3" />
            <ModalLabelStraight htmlFor="of">Of</ModalLabelStraight>
            <ModalInput type="number" id="of" placeholder="5" />
            <InputButton></InputButton>
          </ModalInputGroup>
          <ModalInputGroupSmall className="second-row">
            <TextType>Name</TextType>
            <ModalInputSmall type="text" id="name" placeholder="Male" />
            <NumberInputGroup>
              <TextType>Value</TextType>
              <ModalInput type="number" id="value" placeholder="3" />
              <TextType className="of-text">Of</TextType>
              <ModalInput type="number" id="of" placeholder="5" />
            </NumberInputGroup>
          </ModalInputGroupSmall>
        </Modal.Body>
        <Modal.Footer>
          <CreateModalFormButton onClick={handleClose}>
            Add More
          </CreateModalFormButton>
          <CreateModalFormButton onClick={handleClose} className="colored-btn">
            Save
          </CreateModalFormButton>
        </Modal.Footer>
      </Modal>
    </CreateModalWrap>
  );
};

export default StatsModal;
