import React, { FC, ReactChildren } from "react";

//Styles
import { ModalWrap } from "./Modal.styles";

//Windows
import BuyNFT from "./BuyNFT/BuyNFT";
import {useSelector} from "react-redux";
import {useModal} from "../../store";

const Modal: FC = () => {
    const modal = useSelector(useModal)
    return (
        <ModalWrap className={modal.open && 'active' || ''}>
            {modal.currentComponent === 'buy' && <BuyNFT />}
        </ModalWrap>
    );
};

export default Modal;
