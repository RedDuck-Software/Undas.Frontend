import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

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

import {
  addProperty,
  removeProperty,
} from "../../../../store/reducers/createNFT/createNFTActions";
import { useProperties } from "../../../../store/reducers/createNFT/helpers";
import { Property } from "../../types";

import "./styles.css";

interface PropertiesModalProps {
  setPropertyList: Dispatch<SetStateAction<Property[]>>;
}

interface InputGroupProps {
  onChangeType: any;
  onChangeName: any;
  typeValue: string;
  nameValue: string;
  handleClearInput: () => void;
}

const InputGroup: React.FC<InputGroupProps> = ({
  onChangeType,
  onChangeName,
  typeValue,
  nameValue,
  handleClearInput,
}) => {
  return (
    <ModalInputGroup>
      <ModalLabel htmlFor="type">Type</ModalLabel>
      <ModalInput
        type="text"
        id="type"
        placeholder="Example: Sex"
        onChange={onChangeType}
        value={typeValue}
      />
      <ModalLabelStraight htmlFor="name" className="margin-for-small">
        Name
      </ModalLabelStraight>
      <ModalInput
        type="text"
        id="name"
        placeholder="Example: Male"
        className="margin-for-small"
        onChange={onChangeName}
        value={nameValue}
      />
      <InputButton onClick={handleClearInput} />
    </ModalInputGroup>
  );
};

interface ModalItemProps {
  typeValue: string;
  nameValue: string;
  handleDelete: () => void;
}

const ModalItem: React.FC<ModalItemProps> = ({
  typeValue,
  nameValue,
  handleDelete,
}) => {
  return (
    <ModalInputGroup>
      <ModalLabel htmlFor="type">Type</ModalLabel>
      <ModalInput type="text" id="type" value={typeValue} readOnly />
      <ModalLabelStraight htmlFor="name" className="margin-for-small">
        Name
      </ModalLabelStraight>
      <ModalInput
        type="text"
        id="name"
        className="margin-for-small"
        value={nameValue}
        readOnly
      />
      <InputButton onClick={handleDelete} />
    </ModalInputGroup>
  );
};

const PropertiesModal: React.FC<PropertiesModalProps> = ({
  setPropertyList,
}) => {
  const dispatch = useDispatch();
  const properties = useSelector(useProperties);
  const [modalProperties, setModalProperties] =
    useState<Property[]>(properties);
  const [show, setShow] = useState(false);
  const [type, setType] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    setModalProperties(properties);
  }, [properties]);

  const handleClose = () => {
    setPropertyList(properties);
    setShow(false);
  };

  const handleSave = () => {
    setShow(false);
    setPropertyList(properties);
  };

  const handleShow = () => setShow(true);

  const handleType = (event: any) => {
    setType(event.target.value);
  };

  const handleName = (event: any) => {
    setName(event.target.value);
  };

  const handleClearInput = () => {
    setType("");
    setName("");
  };

  const handleAddMore = () => {
    dispatch(addProperty(type, name));
    handleClearInput();
  };

  const handleRemoveProperty = (itemId: any) => {
    dispatch(removeProperty(itemId));
    setModalProperties(properties);
  };

  return (
    <CreateModalWrap>
      <ModalButton onClick={handleShow} type="button">
        +
      </ModalButton>

      <Modal className="modal-wrap" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <TitleModal>Add Properties</TitleModal>
        </Modal.Header>
        <Modal.Body>
          <Descriprtion>
            Properties show up underneath your item, are clickable, and can be
            filtered in your collection&#39;s sidebar
          </Descriprtion>
          {modalProperties.map((item: any) => {
            return (
              <ModalItem
                key={`${item.type}-${item.name}`}
                typeValue={item.type}
                nameValue={item.name}
                handleDelete={() => handleRemoveProperty(item.id)}
              />
            );
          })}
          <InputGroup
            onChangeType={handleType}
            onChangeName={handleName}
            typeValue={type}
            nameValue={name}
            handleClearInput={handleClearInput}
          />
        </Modal.Body>
        <Modal.Footer>
          <CreateModalFormButton onClick={handleAddMore}>
            Add More
          </CreateModalFormButton>
          <CreateModalFormButton onClick={handleSave} className="colored-btn">
            Save
          </CreateModalFormButton>
        </Modal.Footer>
      </Modal>
    </CreateModalWrap>
  );
};

export default PropertiesModal;
