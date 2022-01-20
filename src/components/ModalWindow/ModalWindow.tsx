import { IoMdClose } from 'react-icons/io';
import Animista, { AnimistaTypes } from 'react-animista';

import { ModalWindowWrapper, ModalWindowText } from './ModalWindow.styles';

const ModalWindow = () => {
  return (
    <ModalWindowWrapper>
      <IoMdClose size={20} />
      <ModalWindowText>
        Congratulations! Your NFT have been putted on the marketplace
      </ModalWindowText>
    </ModalWindowWrapper>
  );
};

export default ModalWindow;