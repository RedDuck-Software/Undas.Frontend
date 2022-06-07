import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addStat,
  removeStat,
} from "../../../../store/reducers/createNFT/createNFTActions";
import { useStats } from "../../../../store/reducers/createNFT/helpers";
import { Complete, Stat } from "../../types";

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
        onChange={onChangeComplete}
        value={completeValue}
      />
      <ModalLabelStraight htmlFor="of" className="margin-for-of">
        Of
      </ModalLabelStraight>
      <ModalInput
        type="number"
        id="of"
        placeholder="5"
        className="margin-for-small"
        value="5"
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
        placeholder="3"
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
        className="margin-for-small"
        value={5}
        readOnly
      />
      <InputButton onClick={handleDelete} />
    </ModalInputGroup>
  );
};

interface StatsModalProps {
  setStatList: Dispatch<SetStateAction<Stat[]>>;
}

const StatsModal: React.FC<StatsModalProps> = ({ setStatList }) => {
  const dispatch = useDispatch();
  const stats = useSelector(useStats);
  const [modalStats, setModalStats] = useState<Stat[]>(stats);

  const [show, setShow] = useState(false);
  const [name, setName] = useState<string>("");
  const [complete, setComplete] = useState<string | number>("");

  useEffect(() => {
    setModalStats(stats);
  }, [stats]);

  const handleClose = () => {
    setStatList(stats);
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleSave = () => {
    setShow(false);
    setStatList(stats);
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
    dispatch(addStat(name, complete));
    handleClearInput();
  };

  const handleRemoveStat = (itemId: any) => {
    dispatch(removeStat(itemId));
    setModalStats(stats);
  };

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
          {modalStats.map((item: any) => {
            return (
              <ModalItem
                key={`${item.name}-${item.complete}-stat`}
                nameValue={item.name}
                completeValue={item.complete}
                handleDelete={() => handleRemoveStat(item.id)}
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

export default StatsModal;
