import React, { FC, useState, useContext } from "react";
import { Modal, Button, } from "react-bootstrap";

import {
    SettingsModalWrap,
    ModalButton,
    TitleModal,
    Descriprtion,
    ModalInputGroup,
    ModalLabel,
    ModalInput,
    InputButton,
    ModalLabelStraight,
} from "./SettingsModal.styles";

import {FormButton} from "../../CreateNFT.styles";
import "./styles.css";


const StatsModal = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <SettingsModalWrap>
            <ModalButton onClick={handleShow}>
            +
            </ModalButton>
    
            <Modal className="modal-wrap" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <TitleModal>Add Stats</TitleModal>
            </Modal.Header>
            <Modal.Body>
                <Descriprtion>Properties show up underneath your item, are clickable, and can be filtered in your collection's sidebar</Descriprtion>
                <ModalInputGroup>
                    <ModalLabel htmlFor="type">Type</ModalLabel>
                    <ModalInput type="text"
                    id="type"
                    placeholder="Character"/>
                    <ModalLabelStraight htmlFor="name">Name</ModalLabelStraight>
                    <ModalInput type="text"
                    id="name"
                    placeholder="Male"/>
                    <InputButton></InputButton>
                </ModalInputGroup>
            </Modal.Body>
            <Modal.Footer>
                <FormButton onClick={handleClose}>
                Add  More
                </FormButton>
                <FormButton onClick={handleClose}>
                Save 
                </FormButton>
            </Modal.Footer>
            </Modal>
        </SettingsModalWrap>
    )
}

export default StatsModal
