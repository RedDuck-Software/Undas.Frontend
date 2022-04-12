import React, { FC, ReactChildren } from "react";

//Styles
import { ModalWrap } from "./Modal.styles";

//Windows
import BuyNFT from "./BuyNFT/BuyNFT";

const Modal: FC = () => {
    return (
        <ModalWrap>
            <BuyNFT />
        </ModalWrap>
    );
};

export default Modal;
