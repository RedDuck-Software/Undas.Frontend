import React, { FC, ReactChildren } from "react";

//Styles
import { ModalWrap } from "./Modal.styles";

//Windows
import BuyNFT from "./BuyNFT/BuyNFT";
import {useSelector} from "react-redux";
import {useModal} from "../../store";
import Rent from "./Rent/Rent";
import MakeAnOffer from "./MakeAnOffer/MakeAnOffer";

const Modal: FC = () => {
    const modal = useSelector(useModal)
    return (
        <ModalWrap className={modal.open && 'active' || ''}>
            {modal.currentComponent === 'buy' && <BuyNFT />}
            {modal.currentComponent === 'rent' && <Rent />}
            {modal.currentComponent === 'offer' && <MakeAnOffer />}
        </ModalWrap>
    );
};

export default Modal;
