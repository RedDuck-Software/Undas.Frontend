import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addLevel,
  removeLevel,
} from "../../../../store/reducers/createNFT/createNFTActions";
import { useLevels } from "../../../../store/reducers/createNFT/helpers";
import { Complete, Level } from "../../types";

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
} from "./CreateModal.styles";

import "./styles.css";

interface InputGroupProps {
  onChangeName: any;
  onChangeComplete: any;
  nameValue: string;
  completeValue: Complete;
  handleClearInput: () => void;
}

const InputGroup: React.FC<InputGroupProps> = ({
  onChangeName,
  onChangeComplete,
  nameValue,
  completeValue,
  handleClearInput,
}) => {
  return (
    <ModalInputGroup>
      <ModalLabel htmlFor="name">Name</ModalLabel>
      <ModalInput
        type="text"
        id="name"
        placeholder="strength"
        onChange={onChangeName}
        value={nameValue}
      />
      <ModalLabelStraight htmlFor="value" className="margin-for-small">
        Value
      </ModalLabelStraight>
      <ModalInput
        min={0}
        max={5}
        type="number"
        id="value"
        placeholder="3"
        className="margin-for-small"
        value={completeValue}
        onChange={onChangeComplete}
      />
      <ModalLabelStraight htmlFor="of" className="margin-for-of">
        Of
      </ModalLabelStraight>
      <ModalInput
        type="number"
        id="of"
        value="5"
        className="margin-for-small"
        readOnly
      />
      <InputButton onClick={handleClearInput} />
    </ModalInputGroup>
  );
};

interface ModalItemProps {
  nameValue: string;
  completeValue: Complete;
  handleDelete: () => void;
}

const ModalItem: React.FC<ModalItemProps> = ({
  nameValue,
  completeValue,
  handleDelete,
}) => {
  return (
    <ModalInputGroup>
      <ModalLabel htmlFor="name">Name</ModalLabel>
      <ModalInput
        type="text"
        id="name"
        placeholder="strength"
        value={nameValue}
        readOnly
      />
      <ModalLabelStraight htmlFor="value" className="margin-for-small">
        Value
      </ModalLabelStraight>
      <ModalInput
        type="number"
        id="value"
        placeholder="0"
        className="margin-for-small"
        value={completeValue}
        readOnly
      />
      <ModalLabelStraight htmlFor="of" className="margin-for-of">
        Of
      </ModalLabelStraight>
      <ModalInput
        type="number"
        id="of"
        placeholder="5"
        className="margin-for-small"
        readOnly
      />
      <InputButton onClick={handleDelete} />
    </ModalInputGroup>
  );
};

interface LevelsModalProps {
  setLevelList: Dispatch<SetStateAction<Level[]>>;
}

const LevelsModal: React.FC<LevelsModalProps> = ({ setLevelList }) => {
  const dispatch = useDispatch();
  const levels = useSelector(useLevels);
  const [modalLevels, setModalLevels] = useState<Level[]>(levels);

  const [show, setShow] = useState(false);
  const [name, setName] = useState<string>("");
  const [complete, setComplete] = useState<string | number>("");

  useEffect(() => {
    setModalLevels(levels);
  }, [levels]);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleSave = () => {
    setShow(false);
    setLevelList(levels);
  };

  const handleName = (event: any) => {
    setName(event.target.value);
  };

  const handleComplete = (event: any) => {
    setComplete(event.target.value);
  };

  const handleClearInput = () => {
    setName("");
    setComplete(0);
  };

  const handleAddMore = () => {
    dispatch(addLevel(name, complete));
    handleClearInput();
  };

  const handleRemoveLevel = (itemId: any) => {
    dispatch(removeLevel(itemId));
    setModalLevels(levels);
  };

  return (
    <CreateModalWrap>
      <ModalButton onClick={handleShow}>+</ModalButton>
      <Modal className="modal-wrap" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <TitleModal>Add Levels</TitleModal>
        </Modal.Header>
        <Modal.Body>
          <Descriprtion>
            Levels show up underneath your item, are clickable, and can be
            filtered in your collection&#39;s sidebar
          </Descriprtion>
          {modalLevels.map((item: any) => {
            return (
              <ModalItem
                key={`${item.name}-${item.complete}-level`}
                nameValue={item.name}
                completeValue={item.complete}
                handleDelete={() => handleRemoveLevel(item.id)}
              />
            );
          })}
          <InputGroup
            onChangeName={handleName}
            onChangeComplete={handleComplete}
            nameValue={name}
            completeValue={complete}
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

export default LevelsModal;
