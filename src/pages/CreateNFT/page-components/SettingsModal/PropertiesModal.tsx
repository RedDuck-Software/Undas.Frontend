import React, { useState, Dispatch, SetStateAction } from "react";
import { Modal } from "react-bootstrap";
import { Property } from "../../types";

import {
  CreateModalWrap,
  ModalButton,
  TitleModal,
  Descriprtion,
  ModalInputGroup,
  ModalLabel,
  ModalInput,
  ModalLabelStraight,
  CreateModalFormButton,
  InputButton,
} from "./CreateModal.styles";

import "./styles.css";

interface PropertiesModalProps {
  propertyList: Property[];
  setPropertyList: Dispatch<SetStateAction<Property[]>>;
}

const InputGroup: React.FC = () => {
  return (
    <ModalInputGroup>
      <ModalLabel htmlFor="type">Type</ModalLabel>
      <ModalInput type="text" id="type" placeholder="Example: Sex" />
      <ModalLabelStraight htmlFor="name" className="margin-for-small">Name</ModalLabelStraight>
      <ModalInput type="text" id="name" placeholder="Example: Male" className="margin-for-small"/>
      <InputButton />
    </ModalInputGroup>
  );
};

const PropertiesModal: React.FC<PropertiesModalProps> = ({ propertyList }) => {
  const [show, setShow] = useState(false);
  const [properties] = useState(propertyList);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(properties);
  //const addPropertyHandler = () => {}
  /* const [edited, setEdited] = useState<string>("");
  const handlePropertyEdit = (event: any) => {
    setEdited(event.target.value);
  }; */
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
          {properties.map((item: any) => {
            return (
              <ModalInputGroup
                key={`${item.type}-${item.name}`}
                data-name={item.name}
              >
                <ModalLabel htmlFor="type">Type</ModalLabel>
                <ModalInput type="text" id="type" placeholder={item.type} />
                <ModalLabelStraight htmlFor="name" className="margin-for-small">Name</ModalLabelStraight>
                <ModalInput type="text" id="name" placeholder={item.name} className="margin-for-small"/>
                <InputButton />
              </ModalInputGroup>
            );
          })}
          <InputGroup />
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
