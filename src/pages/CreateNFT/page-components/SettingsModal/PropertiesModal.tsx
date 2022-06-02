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
} from "./CreateModal.styles";

import "./styles.css";

const PropertiesModal: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <CreateModalWrap>
      <ModalButton onClick={handleShow}>+</ModalButton>

      <Modal className="modal-wrap" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <TitleModal>Add Properties</TitleModal>
        </Modal.Header>
        <Modal.Body>
          <Descriprtion>
            Properties show up underneath your item, are clickable, and can be
            filtered in your collection&#39;s sidebar
          </Descriprtion>
          <ModalInputGroup>
            <ModalLabel htmlFor="type">Type</ModalLabel>
            <ModalInput type="text" id="type" placeholder="Character" />
            <ModalLabelStraight htmlFor="name">Name</ModalLabelStraight>
            <ModalInput type="text" id="name" placeholder="Male" />
            <InputButton></InputButton>
          </ModalInputGroup>
          <ModalInputGroupSmall>
            <TextType>Type</TextType>
            <ModalInputSmall
              type="text"
              id="type"
              placeholder="Character"
              className="firt-row"
            />
            <TextType>Name</TextType>
            <ModalInputSmall type="text" id="name" placeholder="Male" />
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

export default PropertiesModal;
