import React from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Modal,
  ModalWrapper,
  ModalInfo,
  Arrow,
  ModalNavigation,
  NavigationItem,
  NavigationText,
} from "./LoadingModa.styles";

interface LoadingModalProps {
  isLoading: boolean;
  setAutoRedirect: any;
  addMore?: any;
}

const LoadingModal: React.FC<LoadingModalProps> = ({
  isLoading,
  addMore,
  setAutoRedirect,
}) => {
  const navigate = useNavigate();

  const handleGoToCollection = () => {
    setAutoRedirect(false);
    navigate("/account");
  };
  
  return (
    <ModalWrapper isOpen={isLoading} onClick={() => addMore()}>
      <Modal>
        <ClipLoader color={"#BD10E0"} loading={isLoading} size={250} />
        <ModalInfo>Your transcation is proccessing</ModalInfo>

        <ModalNavigation>
          <NavigationItem>
            <Arrow rotate={-45} />
            <NavigationText ml="0.5rem" toLeft>
              Create more
            </NavigationText>
          </NavigationItem>

          <NavigationItem onClick={handleGoToCollection}>
            <NavigationText mr="0.5rem">Go to collection</NavigationText>
            <Arrow />
          </NavigationItem>
        </ModalNavigation>
      </Modal>
    </ModalWrapper>
  );
};

export default LoadingModal;
