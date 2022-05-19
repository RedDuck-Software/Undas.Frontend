import React, { FC, useState, useContext } from "react";
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
    CreateModalFormButton
} from "./CreateModal.styles";

import {CreateFormButton} from "../../CreateNFT.styles";
import "./styles.css";


const LevelsModal = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <CreateModalWrap>
            <ModalButton onClick={handleShow}>
            +
            </ModalButton>
    
            <Modal className="modal-wrap" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <TitleModal>Add Levels</TitleModal>
            </Modal.Header>
            <Modal.Body>
                <Descriprtion>Levels show up underneath your item, are clickable, and can be filtered in your collection's sidebar</Descriprtion>
                <ModalInputGroup>
                    <ModalLabel htmlFor="name">Name</ModalLabel>
                    <ModalInput type="text"
                    id="name"
                    placeholder="strength"/>
                    <ModalLabelStraight htmlFor="value">Value</ModalLabelStraight>
                    <ModalInput type="number"
                    id="value"
                    placeholder="3"/>
                    <ModalLabelStraight htmlFor="of">Of</ModalLabelStraight>
                    <ModalInput type="number"
                    id="of"
                    placeholder="5"/>
                    <InputButton></InputButton>
                </ModalInputGroup>
                <ModalInputGroup>
                    <ModalLabel htmlFor="name">Name</ModalLabel>
                    <ModalInput type="text"
                    id="name"
                    placeholder="strength"/>
                    <ModalLabelStraight htmlFor="value">Value</ModalLabelStraight>
                    <ModalInput type="number"
                    id="value"
                    placeholder="3"/>
                    <ModalLabelStraight htmlFor="of">Of</ModalLabelStraight>
                    <ModalInput type="number"
                    id="of"
                    placeholder="5"/>
                    <InputButton></InputButton>
                </ModalInputGroup>
            </Modal.Body>
            <Modal.Footer>
                <CreateModalFormButton onClick={handleClose}>
                Add  More
                </CreateModalFormButton>
                <CreateModalFormButton onClick={handleClose} className="colored-btn">
                Save 
                </CreateModalFormButton>
            </Modal.Footer>
            </Modal>
        </CreateModalWrap>
    )
}

export default LevelsModal
