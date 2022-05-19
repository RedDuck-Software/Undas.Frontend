import React from 'react';
import { useSelector } from 'react-redux';

import BuyNFT from './BuyNFT/BuyNFT';
import MakeAnOffer from './MakeAnOffer/MakeAnOffer';
import { ModalWrap } from './Modal.styles';
import Rent from './Rent/Rent';

import { useModal } from '../../store';

const Modal: React.FC = () => {
  const modal = useSelector(useModal);
  return (
    <ModalWrap className={(modal.open && 'active') || ''}>
      {modal.currentComponent === 'buy' && <BuyNFT />}
      {modal.currentComponent === 'rent' && <Rent />}
      {modal.currentComponent === 'offer' && <MakeAnOffer />}
    </ModalWrap>
  );
};

export default Modal;
